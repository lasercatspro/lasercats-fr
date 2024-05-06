/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF, useProgress } from "@react-three/drei";
import { Mesh, MeshStandardMaterial } from "three";
import { ShaderMaterial } from "three";
import {
	EffectComposer,
	DepthOfField,
	Bloom,
	Noise,
} from "@react-three/postprocessing";
import { extend } from "react-three-fiber";
import useIsMobile from "@/hooks/useIsMobile";
import throttle from "lodash.throttle";

extend({ ShaderMaterial });

const Lasercat = ({ isPlaying, isMobile }: { isPlaying: boolean, isMobile: boolean }) => {
	const { scene } = useGLTF("/assets/textures/lasercats-without-eyes.gltf");

	useEffect(() => {
		if (!isMobile) {
			scene.scale.set(0.6, 0.6, 0.6);
			scene.position.set(0, 4.5, 0);
		} else {

			scene.scale.set(0.3, 0.3, 0.3);
			scene.position.set(0, 7, 0);
		}
	}, [scene, isMobile]);

	useMemo(() => {

		scene.traverse((child) => {
			let material;
			const mesh = child as Mesh;
			if (mesh.isMesh) {
				material = new MeshStandardMaterial({
					metalness: 1,
					roughness: 0,
					transparent: true,
					opacity: 0.95,
				});
				mesh.material = material;
			}
		});
		return scene;
	}, [scene, isPlaying]);

	const ref = useRef();

	useFrame(({ clock }) => {
		if (scene && isPlaying) {

			scene.rotation.y = 0.43 * clock.elapsedTime;
		}
	});

	// eslint-disable-next-line react/no-unknown-property
	return scene ? <primitive object={scene} ref={ref} /> : null;
};

const ThreeLasercats = () => {
	const { progress } = useProgress();
	const [loading, setIsLoading] = useState<boolean>(true);
	const ref = useRef<HTMLCanvasElement | null>(null);
	const [isPlaying, setIsPlaying] = useState<boolean>(true);
	const isMobile = useIsMobile({ forIpad: true });

	useEffect(() => {
		setIsLoading(progress < 100);
	}, [progress]);

	useEffect(() => {
		const handleScroll = throttle(() => {
			// we stop rendering at half screen (cat is passed in any case)
			setIsPlaying(window.scrollY < window.innerHeight / 2);
		}, 200);

		handleScroll();

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<Canvas
			style={{ opacity: `${loading ? 0 : 1}`, zIndex: 20 }}
			camera={{ position: isMobile ? [-6, 10, 18] : [-6, 5, 18], filmOffset: isMobile ? 0 : -9, fov: 50 }}
			ref={ref}
		>
			<>
				<Lasercat isPlaying={isPlaying} isMobile={Boolean(isMobile)} />
				<Environment files="/assets/textures/mini-test2.hdr" background />
				<EffectComposer enabled={isPlaying}>
					<Bloom intensity={1.0} luminanceThreshold={0} luminanceSmoothing={0} height={300} mipmapBlur={true} />
					<Noise opacity={0.01} />
				</EffectComposer>
			</>
		</Canvas>
	);
};

export default ThreeLasercats;

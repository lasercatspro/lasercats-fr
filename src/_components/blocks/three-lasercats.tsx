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

const Lasercat = ({ isPlaying }: { isPlaying: boolean }) => {
	const { scene } = useGLTF("/assets/textures/lasercats-without-eyes.gltf");
	const isMobile = useIsMobile({ forIpad: true });

	useEffect(() => {
		if (!isMobile) {
			scene.position.set(5, 0, -3);
		} else {
			scene.position.set(0, 0, 0);
		}
	}, [scene, isMobile]);

	useMemo(() => {
		if (!scene || !isPlaying) return null;

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
	return scene && isPlaying ? <primitive object={scene} ref={ref} /> : null;
};

const ThreeLasercats = () => {
	const { progress } = useProgress();
	const [loading, setIsLoading] = useState<boolean>(true);
	const ref = useRef<HTMLCanvasElement | null>(null);
	const [isPlaying, setIsPlaying] = useState<boolean>(true);

	useEffect(() => {
		setIsLoading(progress < 100);
	}, [progress]);

	useEffect(() => {
		const handleScroll = throttle(() => {
			if (ref?.current) {
				const rect = ref.current?.getBoundingClientRect();
				setIsPlaying(rect?.bottom > 0);
			}
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
			camera={{ position: [0, -1, 15], fov: 60 }}
			ref={ref}
		>
			{isPlaying && (
				<>
					<Lasercat isPlaying={isPlaying} />
					<Environment files="/assets/textures/mini-test.hdr" background />
					<EffectComposer>
						<Bloom luminanceThreshold={0} luminanceSmoothing={0} height={300} />
						<Noise opacity={0.01} />
					</EffectComposer>
				</>
			)}
		</Canvas>
	);
};

export default ThreeLasercats;

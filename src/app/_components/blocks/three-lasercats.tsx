/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
	Environment,
	useGLTF,
	useProgress,
} from "@react-three/drei";
import {
	Mesh,
	MeshStandardMaterial,
	MeshPhongMaterial,
} from "three";
import { ShaderMaterial } from "three";
import { EffectComposer, DepthOfField, Bloom, Noise } from "@react-three/postprocessing";
import { extend } from "react-three-fiber";

extend({ ShaderMaterial });

const Lasercat = () => {
	const { scene } = useGLTF("/assets/textures/lasercats-without-eyes.gltf");
	useMemo(() => {
		if (!scene) return null;

		scene.traverse((child) => {
			let material;
			const mesh = child as Mesh;
			if (mesh.isMesh) {
				/* 
					This is code for eyes
				 */
				// if (mesh?.name === "mesh_2" || mesh?.name === "mesh_0") {
				// 	material = new MeshPhongMaterial({
				// 		color: "#fff", // green laser : #00c65e
				// 		emissive: "#fff",
				// 		emissiveIntensity: 2,
				// 	});
				// } else {
				// Body and tail
				material = new MeshStandardMaterial({
					metalness: 1,
					roughness: 0,
					transparent: true,
					opacity: 0.95,
				});
				// }
				mesh.material = material;
			}
		});

		scene.position.set(5, 0, -3);
		return scene;
	}, [scene]);
	
	// Utilisation de useRef pour obtenir une référence à la scène
	const ref = useRef();

	useFrame(({ clock }) => {
		if (scene) {
			scene.rotation.y = 0.43 * clock.elapsedTime;
		}
	});

	// eslint-disable-next-line react/no-unknown-property
	return scene ? <primitive object={scene} ref={ref} /> : null;
};

const ThreeLasercats = () => {
	const { progress } = useProgress();
	const [loading, setIsLoading] = useState<boolean>(true);
	useEffect(() => {
		setIsLoading(progress < 100);
	}, [progress]);
	return (
		<Canvas
			style={{ opacity: `${loading ? 0 : 1}`, zIndex: 20 }}
			camera={{ position: [15, -2, 0], fov: 70 }}
		>
			<Lasercat />
			{/* <Environment files="/assets/textures/star.hdr" background /> */}
			<Environment files="/assets/textures/bg.hdr" background />

			<EffectComposer>
				<Bloom luminanceThreshold={0} luminanceSmoothing={0} height={300} />
				<Noise opacity={0.01} />
			</EffectComposer>
		</Canvas>
	);
};

export default ThreeLasercats;

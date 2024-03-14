"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import {MeshPhysicalMaterial, Object3D, Object3DEventMap, Mesh} from "three";

const Lasercat = () => {
	const gltf = useLoader(GLTFLoader, "/assets/textures/model.gltf");
	const ref = useRef<Object3D | null>(null);
	
	if (gltf.scene) {
		gltf.scene.traverse((child: Object3D<Object3DEventMap>) => {
			const mesh = child as Mesh;
			if (mesh.isMesh) {
				const material = new MeshPhysicalMaterial({
					metalness: 1,
					roughness: 0,
					transparent: true,
					opacity: 0.9,
				});
				mesh.material = material;
			}
		});
	}
	
	useFrame(({ clock }) => {
		if (gltf.scene) {
			gltf.scene.rotation.y = 0.5 * clock.elapsedTime;
		}
	});

	// eslint-disable-next-line react/no-unknown-property
	return <primitive object={gltf?.scene} ref={ref} /> ;
};

interface Props {
	progress: number;
	loading: boolean;
}

const ThreeLasercats = ({ progress, loading }: Props) => {
	
	return (
		<>
			<Suspense fallback={null}>
				<Canvas
					style={{ opacity: `${loading ? 0 : 1}`, zIndex: 20 }}
					camera={{ position: [15, 0, 0], fov: 50 }}
				>
					<ambientLight />
					<Lasercat />
					<OrbitControls />
					<Environment files="/assets/textures/star-3.hdr" background />
				</Canvas>
			</Suspense>
			<LaserLoader progress={progress} loading={loading} />
		</>
	);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LaserLoader = ({ progress, loading }: Props) => {
	return <div style={{ position: "absolute", top: 10, left: 0, width: "100%", height: "100%", backgroundColor: "black", display: "flex", justifyContent: "center", alignItems: "center", opacity: `${loading ? 1 : 0}`, zIndex: 0}}>
		{/* <h2 style={{ color: "white" }}>{`Chargement de l'expérience... ${Math.round(progress)}%`}</h2> */}
	</div>;
};

export default ThreeLasercats;

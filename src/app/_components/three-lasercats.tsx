"use client";

import React, { Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import * as THREE from "three";

const Lasercat = () => {
	const gltf = useLoader(GLTFLoader, "/assets/textures/model.gltf");
	
	if (gltf.scene) {
		gltf.scene.traverse((child: THREE.Object3D<THREE.Object3DEventMap>) => {
			const mesh = child as THREE.Mesh;
			if (mesh.isMesh) {
				const material = new THREE.MeshPhysicalMaterial({
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
	return gltf.scene ? <primitive object={gltf.scene} /> : null;
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
					style={{ opacity: `${loading ? 0 : 1}`}}
					camera={{ position: [2.5, 0, -11], fov: 75 }}
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					onCreated={({ gl, scene, camera }) => {
						const loader = new RGBELoader();
						loader.load(
							"/assets/textures/star-2.hdr",
							(environmentMap: THREE.Texture) => {
								environmentMap.mapping = THREE.EquirectangularReflectionMapping;
								scene.background = environmentMap;
								scene.environment = environmentMap;
							}
						);
					}}>
					<ambientLight />
					<Lasercat />
					<OrbitControls />
				</Canvas>
			</Suspense>
			<LaserLoader progress={progress} loading={loading}/>
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

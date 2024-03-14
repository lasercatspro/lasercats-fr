"use client";

import React, { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { MeshPhysicalMaterial, Object3D, Object3DEventMap, Mesh } from "three";

const Lasercat = () => {
	const gltf = useLoader(GLTFLoader, "/assets/textures/model.gltf");

	// Utilisation de useMemo pour éviter de charger le modèle à chaque rendu
	const scene = useMemo(() => {
		if (!gltf.scene) return null;

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

		return gltf.scene;
	}, [gltf.scene]);

	// Utilisation de useRef pour obtenir une référence à la scène
	const ref = useRef();

	useFrame(({ clock }) => {
		if (scene) {
			scene.rotation.y = 0.5 * clock.elapsedTime;
		}
	});

	// eslint-disable-next-line react/no-unknown-property
	return scene ? <primitive object={scene} ref={ref} /> : null;
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
					<Suspense fallback={null}>
						<Environment files="/assets/textures/star-3.hdr" background />
					</Suspense>
				</Canvas>
			</Suspense>
			<LaserLoader progress={progress} loading={loading} />
		</>
	);
};

const LaserLoader = ({ loading }: Props) => {
	return (
		<div
			style={{
				position: "absolute",
				top: 10,
				left: 0,
				width: "100%",
				height: "100%",
				backgroundColor: "black",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				opacity: `${loading ? 1 : 0}`,
				zIndex: 0,
			}}
		/>
	);
};

export default ThreeLasercats;

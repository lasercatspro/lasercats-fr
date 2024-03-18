"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Environment, OrbitControls, useGLTF, useProgress } from "@react-three/drei";
import { Object3D, Object3DEventMap, Mesh, MeshStandardMaterial } from "three";

const Lasercat = () => {
	const { scene } = useGLTF("/assets/textures/model.gltf");

	// Utilisation de useMemo pour éviter de charger le modèle à chaque rendu
	useMemo(() => {
		if (!scene) return null;

		scene.traverse((child: Object3D<Object3DEventMap>) => {
			const mesh = child as Mesh;
			if (mesh.isMesh) {
				const material = new MeshStandardMaterial({
					metalness: 1,
					roughness: 0,
					transparent: true,
					opacity: 0.9,
				});
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
			scene.rotation.y = 0.5 * clock.elapsedTime;
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
			camera={{ position: [15, 0, 0], fov: 70 }}
		>
			<Lasercat />
			<Environment files="/assets/textures/star-3.hdr" background />
		</Canvas>
	);
};

export default ThreeLasercats;

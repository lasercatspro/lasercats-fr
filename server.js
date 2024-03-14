/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const express = require("express");
const compression = require("compression");
const next = require("next");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	// Utiliser le middleware de compression
	server.use(compression());

	// Gérer toutes les requêtes à l'aide du gestionnaire Next.js
	server.get("*", (req, res) => {
		return handle(req, res);
	});

	server.listen(port, (err) => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});

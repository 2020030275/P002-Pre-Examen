const express = require('express')
const router = express.Router()
const ejs = require('ejs');
const bodyparser = require('body-parser')

const port = 500



router.get("/", (req, res) => {
	const valores = {
		
		tipoDeViaje: req.query.tipoDeViaje,
		precio: req.query.precio,
	};
	res.render("index.ejs", valores);
});



router.post("/", (req, res) => {
	const valores = {
		
		tipoDeViaje: req.body.tipoDeViaje,
		precio: req.body.precio,
	};
	res.render("index", valores);
});


module.exports = router

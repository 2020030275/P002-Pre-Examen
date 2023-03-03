const express = require('express')
const router = express.Router()
const ejs = require('ejs');
const bodyparser = require('body-parser')


router.get('/index', (req, res) => {
	const valores = {
		
		numBoleto: req.query.numBoleto,
		destino: req.query.destino,
		nombreDelCliente: req.query.nombreDelCliente,
		anosCumplidos: req.query.anosCumplidos,
		tipoDeViaje: req.query.tipoDeViaje,
		precio: req.query.precio,
		subtotal: req.query.subtotal,
        impuesto: req.query.impuesto,
        descuento: req.query.descuento,
        totalAPagar: req.query.totalAPagar
	};
	res.render('index.html', valores);
});



router.post('/index', (req, res) => {
	const valores = {
		subtotal: req.body.subtotal,
		numBoleto: req.body.numBoleto,
		destino: req.body.destino,
		nombreDelCliente: req.body.nombreDelCliente,
		anosCumplidos: req.body.anosCumplidos,
		tipoDeViaje: req.body.tipoDeViaje,
		precio: req.body.precio,
		subtotal: req.body.subtotal,
        impuesto: req.body.impuesto,
        descuento: req.body.descuento,
        totalAPagar: req.body.totalAPagar
	};
	res.render('index.html', valores);
});


module.exports = router

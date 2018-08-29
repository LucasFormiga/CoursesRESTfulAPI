/*
*	Este arquivo tem como foco receber todas
*	as configurações do Express, e retornar
*	a var APP para uso em outras necessidades.
*
*/
var app         = require('express')();
var bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
   .use(bodyParser.json())
   .use((req, res, next) => {
		res.header('Access-Control-Allow-Origin', "*");
		res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
		res.header('Access-Control-Allow-Headers', 'Content-Type');
		next();
	});

module.exports = () => {
	return app;
}
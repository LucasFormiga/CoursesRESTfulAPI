function routes(app)
{
	app.get('/', (req, res) => {
		return res.send('Olá, mundo.');
	});
}

module.exports = routes;
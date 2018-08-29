/*
*	Esse middleware tem como função realizar o inter-
*	médio entre a execução das rotas e autenticação
*	do solicitante da requisição.
*	
*	@param Express app
*	@param MySQL database
*/
function middleware(app, database)
{
	app.use((req, res, next) => {
		if (req.path == '/') return next();

		let token  	= req.headers['token'];
		let	cache	= [];
		let query   = "SELECT id FROM tokens WHERE token = '" + token + "'";

		console.log(`Token ${token} is trying to authenticate.`);

		if (cache.includes(token)) return next();

		database.query(query, (err, result) => {
			if (err)
				throw new Error(err);

			if (Object.keys(result).length > 0) {
				cache.push(token);
				next();
			} else {
				return res.json({status: 0, reason: 'Unauthorized.'});
			}
		});
	});
}

module.exports = middleware;
/*
*	Esse rota tem como função retornar uma pesquisa
*	feito no banco para um curso em específico,
*	o usuário deverá informar um título ou tags para
*	que a pesquisa seja feita.
*	Retornará por header, a partir do Result-Set-Length
*	o tamanho do Result Set.
*	
*	@param Express app
*	@param MySQL database
*/
function routes(app, database)
{
	/*
	* Query String
	* 	Auth Token have to be passed inside the Header
	*	title, tags, order, pos, limit
	*	title or tags to search, you have to choose
	*	order only by title, price or createdAt(timestamp)
	* 	pos only can be used if ORDER is in use
	*	limit have to be passed like: 0,10 or 15,20
	*/
	app.get('/courses', (req, res) => {
		let token 	= req.headers['token'];
		let query   = "SELECT * FROM courses WHERE ";
		let title 	= req.query.title;
		let tags 	= req.query.tags;
		let order   = req.query.orderBy;
		let pos     = req.query.position;
		let limit	= req.query.limit;
		let only 	= ['title', 'price', 'createdAt'];

		if (title !== undefined) {
			query += "LOWER(title) LIKE LOWER('%" + title + "%') ";
		} else if (tags !== undefined) {
			query += "LOWER(tags) LIKE LOWER('%" + tags + "%') ";
		} else {
			return res.json({status: 0, reason: 'Missing Parameter.'});
		}

		if (order !== undefined && only.includes(order)) {
			query += "ORDER BY " + order + " ";

			if (pos !== undefined)
				query += pos + " ";
		}

		if (limit !== undefined)
			query += "LIMIT " + limit;

		database.query(query, (err, result) => {
			if (err)
				throw new Error(err);

			res.header('Result-Set-Length', Object.keys(result).length);
			res.send(result);
		});

		console.log(`Token ${token} did a search on courses table.`);
	});
}

module.exports = routes;
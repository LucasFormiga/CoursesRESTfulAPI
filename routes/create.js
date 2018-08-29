/*
*	Esse rota tem como função realizar a criação
*	de um novo curso na tabela courses do banco
*	de dados. Ela recebe os parâmetros por body,
*	sendo assim, necessário incluir no header
*	o Content-Type application/x-www-form-urlencoded
*	
*	@param Express app
*	@param MySQL database
*/
function routes(app, database)
{
	app.post('/courses', (req, res) => {
		let course 		= require('../class/course.js');
		let token 	    = req.headers['token'];
		let required    = [req.body.title, req.body.price, req.body.author];
		let params      = {summary: req.body.summary, tags: req.body.tags, thumbnail: req.body.thumbnail};

		if (required.includes(undefined)) {
			return res.json({status: 0, reason: 'Missing Arguments.'});
		} else if (!(required[1] > 0)) {
			return res.json({status: 0, reason: 'Price does not have a valid value.'});
		}

		course 			= new course(required[0], required[1], params.summary, params.tags, params.thumbnail, required[2]);
		let query		= "INSERT INTO courses (id, title, price, tags, thumbnail, author, createdAt) VALUES (UUID(), '" + course.getTitle() + "', '" + course.getPrice() + "', '" + course.getTags() + "', '" + course.getThumbnail() + "', '" + course.getAuthor() + "', NOW())"; 

		database.query(query, (err, result) => {
			if (err) {
				res.json({status: 0, reason: 'Error while inserting course, maybe this course is already there.'});
				throw new Error(err);
			}
			
			return res.json({status: 1, reason: 'Course added.'});
		});

		console.log(`Token ${token} executed an course insert.`);
	});
}

module.exports = routes;
/* -------------------------------------- */
/* ------------ APPLICATION ------------- */
/* -------------------------------------- */
var app				= require('./config/express.js')();

/* -------------------------------------- */
/* ------------- LIBRARIES -------------- */
/* -------------------------------------- */
var database		= require('./config/mysql.js')();

function repeatCon() {
	database.query('SELECT * FROM tokens', (err, result) => {
		if (err)
			throw new Error(err);
		
		console.log(result);
	});
	console.log("Reconnecting Database...");
    setTimeout(repeatCon, 5000);
}

repeatCon();

/* -------------------------------------- */
/* ------------ MIDDLEWARES ------------- */
/* -------------------------------------- */
var authMiddleware	= require('./middlewares/auth.js')(app, database);

/* -------------------------------------- */
/* -------------- ROUTES ---------------- */
/* -------------------------------------- */
var mainRoute		= require('./routes/main.js')(app);
var searchRoute		= require('./routes/search.js')(app, database);
var createRoute		= require('./routes/create.js')(app, database);

/* -------------------------------------- */
/* ------------ STARTUP PRC ------------- */
/* -------------------------------------- */
app.listen(process.env.PORT || 3000, () => {
	console.log('Ok, app is up.');
});

process.on('uncaughtException', function (error) {
	console.log(error.stack);
 });
/*
*	Este arquivo tem como foco receber todas
*	as configurações do MySQL, e retornar
*	a var DB para uso em outras necessidades.
*
*/
var mysql           = require('mysql');
var connectString   = {host: 'us-cdbr-iron-east-01.cleardb.net', user: 'ba0879772025da', password: '7851ecf0', database: 'heroku_02cbd90d63f0ef5'};
var db              = mysql.createConnection(connectString);

module.exports = () => {
	return db;
}
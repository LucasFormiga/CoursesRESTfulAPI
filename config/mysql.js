/*
*	Este arquivo tem como foco receber todas
*	as configurações do MySQL, e retornar
*	a var DB para uso em outras necessidades.
*
*/
var mysql           = require('mysql');
var connectString   = {host: 'localhost', user: 'root', password: 'Formiga16@', database: 'contextlms_lformiga'};
var db              = mysql.createConnection(connectString);

module.exports = () => {
	return db;
}
/*
*	Este arquivo tem como foco receber todas
*	as configurações do MySQL, e retornar
*	a var DB para uso em outras necessidades.
*
*/
var mysql           = require('mysql');
var connectString   = {host: 'us-cdbr-iron-east-01.cleardb.net', user: 'ba0879772025da', password: '7851ecf0', database: 'heroku_02cbd90d63f0ef5'};
var db              = mysql.createConnection(connectString);

function handleDisconnect(cnx) {
    cnx.on('error', function(err) {
        if (!err.fatal) return;
        if (err.code !== 'PROTOCOL_CONNECTION_LOST') throw err;

        console.log('> Re-connecting lost main MySQL connection: ' + err.stack);

        cnx = mysql.createConnection(cnx.config);
        handleDisconnect(cnx);
        cnx.connect();
    });
};

handleDisconnect(db);

module.exports = () => {
	return db;
}
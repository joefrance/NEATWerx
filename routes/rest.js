var express = require('express');
var router = express.Router();

var sql = require('mssql');

var config = {
    user: 'NEATWerx',
    password: 'NeatWerx',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: 'AdventureWorks',
    port: "1433",
    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
};

/* GET home page. */
router.get('/test', function(request, response) {
  //res.render('index', { title: 'Express' });
    var connection = new sql.Connection(config, function(err) {
        // ... error checks

        if(err) {
            console.dir(err);
        } else {

            // Query
            var sqlString = "SELECT [BusinessEntityID],[LastName],[FirstName],[ModifiedDate] FROM [Person].[Person] order by [LastName],[FirstName]";

            var request = new sql.Request(connection); // or: var request = connection.request();
            request.query(sqlString, function (err, recordset) {

                if (err) {
                    console.dir(err);
                } else {
                    console.dir(recordset);
                }
            });
        }

        // Stored Procedure

//        var request = new sql.Request(connection);
//        request.input('input_parameter', sql.Int, 10);
//        request.output('output_parameter', sql.VarChar(50));
//        request.execute('procedure_name', function(err, recordsets, returnValue) {
//            // ... error checks
//
//            console.dir(recordsets);
//        });

    });
});

module.exports = router;

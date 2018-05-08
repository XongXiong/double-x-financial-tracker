var express = require('express');
var router = express.Router();
var path = require('path');
var pool = require('../modules/pool.js');

router.get('/', function (req, res) {
    pool
        .connect(function (errorConnectingToDb, db, done) {
            if (errorConnectingToDb) {
                // There was an error and no connection was made
                console.log('Error connecting', errorConnectingToDb);
                res.sendStatus(500);
            } else {
                let queryText = 'SELECT * FROM "accounts" ORDER BY "a_id"';
                db.query(queryText, function (errorMakingQuery, result) {
                    done();
                    if (errorMakingQuery) {
                        console.log('Error making query', errorMakingQuery);
                        res.sendStatus(500);
                    } else {
                        res.send(result.rows);
                    }
                }); // END QUERY
            }
        }); // END POOL
})

router.post('/', function (req, res) {
    pool
        .connect(function (errorConnectingToDb, db, done) {
            if (errorConnectingToDb) {
                console.log('Error connection', errorConnectingToDb);
                res.sendStatus(500);
            } else {
                let queryText = 'INSERT INTO accounts ("institution", "account_number", "name", "balance") VALUES ($1, $2, $3, $4);';
                db.query(queryText, function (errorMakingQuery, result) {
                    done();
                    if (errorMakingQuery) {
                        console.log('Error making query', errorMakingQuery);
                        res.sendStatus(500);
                    } else {
                        console.log('Account Added');
                        res.sendStatus(201);
                    }
                })
            }
        })
})

module.exports = router;
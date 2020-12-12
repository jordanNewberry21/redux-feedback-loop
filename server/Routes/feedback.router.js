const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    const feedback = req.body; // incoming feedback
    console.log('Adding new feedback.....', feedback);
    // sql query to add new feedback into database
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
        .then(result => {
            res.sendStatus(201);
        }).catch(error => {
            console.log('Error adding new feedback....', error);
            res.sendStatus(500);
        })// end query
}) // end post

module.exports = router;
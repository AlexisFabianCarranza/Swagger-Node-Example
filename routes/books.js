const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /books:
 *   get:
 *     tags:
 *       - Books
 *     name: Find books
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: username - demo
 *         schema:
 *           type: string
 *         required:
 *           - username
 *     responses:
 *       '200':
 *         description: Collections of books
 *       '401':
 *         description: No auth token / no user found in db with that name - Demo
 *       '403':
 *         description: JWT token and username from client don't match - Demo
 */

let books = [
  {
    book: 'Harry Potter and the Chamber of Secrets',
    cost: 18,
    description: '-'
  },
  {
    book: 'Harry Potter and the Prisoner of Azkaban',
    cost: 19,
    description: '-'
  },
  {
    book: 'Harry Potter and the Deathly Hallows',
    cost: 16,
    description: '-'
  },
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(books);
});

module.exports = router;

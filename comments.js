// Create web server

var express = require('express');
var router = express.Router();

// GET /comments
router.get('/', function(req, res, next) {
  res.send('GET /comments');
});

// POST /comments
router.post('/', function(req, res, next) {
  res.send('POST /comments');
});

// GET /comments/new
router.get('/new', function(req, res, next) {
  res.send('GET /comments/new');
});

// GET /comments/:id
router.get('/:id', function(req, res, next) {
  res.send('GET /comments/:id');
});

// GET /comments/:id/edit
router.get('/:id/edit', function(req, res, next) {
  res.send('GET /comments/:id/edit');
});

// PUT /comments/:id
router.put('/:id', function(req, res, next) {
  res.send('PUT /comments/:id');
});

// DELETE /comments/:id
router.delete('/:id', function(req, res, next) {
  res.send('DELETE /comments/:id');
});

module.exports = router;
// Create web server
// Load express module
var express = require('express');
var app = express();

// Load body-parser module
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Load comments module
var comments = require('./comments');

// Create route for comments
app.get('/comments', function(req, res) {
  res.json(comments.get());
});

// Create route for adding a new comment
app.post('/comments', function(req, res) {
  var comment = req.body;
  comments.add(comment);
  res.json(comment);
});

// Start the web server
app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});

// Path: comments.js
// Create comments module
var comments = [];

// Add function to comments module
exports.add = function(comment) {
  comments.push(comment);
};

// Get function to comments module
exports.get = function() {
  return comments;
};
```

## 2.5.4. Create an HTTP Server
```javascript
// Path: server.js
// Load http module
var http = require('http');

// Create web server
var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});

// Start the web server
server.listen(3000, '
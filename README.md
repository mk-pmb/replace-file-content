
replace-file-content
====================
Safely replace content of a file by writing the new content to a temporary
file and then renaming it to the original file name.


Usage
-----

### Slow mode

Slow and memory-expensive because it has to buffer all the content in memory
until it can start the processing, and can only start writing new content
after the processing finishes.

```javascript
var rfc = require('replace-file-content');

function processWholeFile(err, text, done) {
  if (err) { throw err; }
  text = text.toUpperCase();
  done(text);
}
rfc('README.md', 'utf-8', processWholeFile);
```


### Stream mode

**>> not implemented yet! <<**

```javascript
var rfc = require('replace-file-content'),
  stream = rfc('README.md', 'utf-8');

function processOneChunk(textChunk) {
  stream.write(textChunk.toUpperCase());
}

stream.on('error', function (err) { throw err; });
stream.on('data', processOneChunk);
stream.on('end', function () { stream.close(); });
```


### Slow mode via CLI

<code>
$ replace-file-content-node [test/shout-it.js](test/shout-it.js) README.md
</code>



License
-------
ISC

import express from 'express';

const app = express();
var port = 3000;

app.use('/', express.static('public'));

app.listen(process.env.PORT || port, function(error) {
  if (error) {
    console.error(error);
  } else {

    var listen_port;
    if (process.env.PORT == undefined) {
        listen_port = port;
    } else {
        listen_port = process.env.PORT;
    }
    console.info('==> 🌍  Open up http://localhost:%s/ in your browser.', listen_port);
  }
});

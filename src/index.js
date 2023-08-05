import app from './app.js'
import config from './config.js';

app.listen(config.PORTAPP)
console.log("server on port: ", config.PORTAPP)
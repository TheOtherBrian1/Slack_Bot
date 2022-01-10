if (process.env.NODE_ENV !== "production")
{
  require("dotenv").config()
}
const app = require('express')();
const events = require('./events')
const interactions = require('./interactions')

const port = process.env.PORT


interactions.listenForInteractions(app)
events.listenForEvents(app)
app.listen(port, ()=>console.log('listening on port ' + port));

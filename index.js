require('dotenv').config()
const express = require('express')
var cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const connectDB =  require('./startup/db');
const route = require('./routes/route')
const {myMW1} = require('./middleware/middle')

const { graphqlHTTP } = require("express-graphql")
const {graphSchema}  = require('./schema/schema');
const {resolver} = require('./resolver/resolver');

const app = express()
app.use(cors())
app.use('/static', express.static(path.join(__dirname, 'public')))

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')


app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphSchema,
    rootValue: resolver,
    graphiql: true,
  })
)

app.use(myMW1)
app.use('/', route)

try {
  connectDB();
  app.listen(process.env.APP_PORT, () => console.log(`Server started on port  ${process.env.APP_PORT}`));
} catch (error) {
  console.error(error);
  process.exit(1);
}
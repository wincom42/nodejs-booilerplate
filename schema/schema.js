const { buildSchema } = require("graphql")

var schema = buildSchema(`
type Query {
  quoteOfTheDay: String
  random: Float!
  rollThreeDice: [Int]
  rollDice(numDice: Int!, numSides: Int): [Int]
}
`)

module.exports.graphSchema = schema;
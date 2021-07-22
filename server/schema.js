const { gql } = require('apollo-server')
const typeDefs = gql`
  # Rocket schema
  type Rocket {
    rocket_name: String
  }

# Links schema
  type Links {
    video_link: String
  }
  # Launch schema
  type Launch {
    id: ID!
    launch_year: String
    launch_date_local: String
    mission_name: String
    rocket: Rocket
    links: Links
  }
  # queries
  type Query {
    launches: [Launch]
  }
`

module.exports = typeDefs
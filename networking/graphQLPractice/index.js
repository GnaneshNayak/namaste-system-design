import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = ` #graphql

 type Continent {
    id :ID!
    name:String
    countries: [Country]
  }

  type Country {
    id :ID!
    name:String
    states: [State]
  }

  type State{
    id :ID!
    name:String
    cities: [City]
    villages:[Village]
  }

 type City {
    id :ID!
    name:String
    zipCode:String
    state:State
    
  }
 type Village {
    id :ID!
    name:String
    zipCode:String
  }

 type Query {
    continents: [Continent]
    countries: [Country]
    cities: [City]
    villages:[Village]
  }

  type Mutation {
    addVillage( id:String, name:String, stateId: String, zipCode: String ):Village!
  }




`;

const data = {
  continents: [
    { id: '1', name: 'Asia' },
    { id: '2', name: 'Europe' },
  ],
  countries: [
    { id: '101', name: 'India', continentId: '1' },
    { id: '102', name: 'China', continentId: '2' },
  ],
  states: [
    { id: '201', name: 'Karnataka', countryId: '101' },
    { id: '202', name: 'Maharashtra', countryId: '101' },
  ],
  cities: [
    { id: '301', name: 'Bangalore', stateId: '201', zipCode: '560001' },
    { id: '302', name: 'Mumbai', stateId: '202', zipCode: '400001' },
  ],
  villages: [
    { id: '401', name: 'Ramanagara', stateId: '201', zipCode: '562159' },
  ],
};

const resolvers = {
  Continent: {
    countries: (parent, args) => {
      return data.countries.filter((d) => d.continentId == parent.id);
    },
  },
  Country: {
    states: (parent) => {
      return data.states.filter((d) => d.countryId === parent.id);
    },
  },
  State: {
    cities: (parent) => {
      return data.cities.filter((d) => d.stateId === parent.id);
    },
    villages: (parent) => {
      return data.villages.filter((d) => d.stateId === parent.id);
    },
  },

  Query: {
    continents: (parent, arg, context, info) => {
      return data.continents;
    },
    countries: (parent, arg, context, info) => {
      return data.countries;
    },
    cities: (parent, arg, context, info) => {
      return data.cities;
    },
    villages: (parent, arg, context, info) => {
      return data.villages;
    },
  },

  Mutation: {
    addVillage: (p, a) => {
      const newVillage = { ...a };
      data.villages.push(newVillage);
      return a;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);

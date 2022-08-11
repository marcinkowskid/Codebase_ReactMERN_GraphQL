const express = require('express');
const colors = require('colors');
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');

// Variables
const port = process.env.PORT || 5000;
const schema = require('./schema/schema');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

// CORS
app.use(cors());

// Graphql setup
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development', // true for development
  })
);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const express = require('express');
require('dotenv').config();

// Variables
const port = process.env.PORT || 5000;

const app = express();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();

const apiRoutes = require('./src/modules/routes/routes');

const url = "mongodb+srv://romanphilimon95:<password>@costaccountingtable.dxkza.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(url, {
                        useNewUrlParser: true,
                        useUnifiedTopology: true
                      });

app.use(bodyParser.json());
app.use(cors());
app.use("/", apiRoutes);


app.listen(8000, () => {
  console.log('App listening');
});

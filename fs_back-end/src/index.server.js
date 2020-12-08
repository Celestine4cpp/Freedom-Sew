const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//routes
const userRoutes = require('./routes/user');

//environment variable
env.config();


app.use(bodyParser.json());
app.use('/api',userRoutes);
//mongodb connection
//mongodb+srv://root:<password>@cluster0.ixgw2.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.ixgw2.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
     {
         useNewUrlParser: true, 
         useUnifiedTopology: true,
         useCreateIndex: true
        }
    ).then(() =>{
        console.log('Database connected');
    });

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
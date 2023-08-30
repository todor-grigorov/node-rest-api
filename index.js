const express = require('express');
// const cors = require('./middlewares/cors');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

const port = 5000;
const app = express();

//#region Middlewares
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
//#endregion

//#region Mongoose
// mongoose.set('strictQuery', true);
main().catch(err => console.log(err));

async function main() {
    const options = {
        useNewUrlParser: true,
        autoIndex: false, // Don't build indexes
          maxPoolSize: 10, // Maintain up to 10 socket connections
      };

      const connectWithRetry = () => {
        mongoose.Promise = global.Promise;
        console.log("MongoDB connection with retry");
        mongoose
          .connect('mongodb://localhost:27017/softuni-movies', options)
          .then(() => {
            console.log("MongoDB is connected");
            app.emit("ready");
          })
          .catch((err) => {
            console.log("MongoDB connection unsuccessful, retry after 2 seconds.", err);
            setTimeout(connectWithRetry, 2000);
          });
      };

      connectWithRetry();

//   await mongoose.connect('mongodb://mongo:27017/softuni-movies', options)
//                 .then(() => {
//                   console.log("MongoDB is connected");
//                   app.emit("ready");
//                 })
//                 .catch((err) => {
//                   console.log("MongoDB connection unsuccessful, retry after 2 seconds.", err);
//                   setTimeout(connectWithRetry, 2000);
//                 });

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
//#endregion

app.get('/', (req, res) => {
    res.json({ message: 'It\s working!' });
});

app.use('/api', routes);

app.listen(port, console.log.bind(console, `Server is listening on port ${port}`));
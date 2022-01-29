const mongoose = require("mongoose");

const connectTodb = () => {
  mongoose
    .connect(
      "mongodb+srv://root:admin@todolist.8bmxy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDB Atlas Conectado!"))
    .catch((err) => console.log(err));
};

module.exports = connectTodb;

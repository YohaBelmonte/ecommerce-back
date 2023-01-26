const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
//Nos conectamos a nuestra base de datos ↓
const mongoose = require('mongoose');


//configurar variables de entorno ↓
const dotenv = require("dotenv");
dotenv.config();

const app = express();


//CONNECTION mongoDb
mongoose.set('strictQuery', false)
// mongoose.connect(`mongodb+srv://${process.env.USER_MD}:${process.env.PASSWORD_MD}@yohabelmonte.0rpa4cw.mongodb.net/proyectoFinal?retryWrites=true&w=majority`);
mongoose.connect(`mongodb+srv://${process.env.USER_MD}:${process.env.PASSWORD_MD}@ecommerce-shoe.tnpw5cz.mongodb.net/proyectoFinal?retryWrites=true&w=majority`);



//SETTINGS
app.set('port', process.env.PORT | 4000);


app.use(cors())
app.use(morgan("dev"));

//---- ↓Para devolver en formato JSON en las peticiones
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//ROUTES
const userRoutes = require("./src/routes/users");
const authRoutes = require('./src/routes/auth')
const emailRoutes = require('./src/routes/email')

app.use("/api/user", userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/email', emailRoutes);


//SERVER
const port = app.get('port');
app.listen(port, () => {
  console.log("Server listening on port", port);
});

// console.log('Hola')

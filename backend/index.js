import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import classRoutes from './routes/classRoutes.js';
import productRoutes from './routes/productRoutes.js';


const app = express();
const PORT = 8000;
app.use(bodyParser.json())
const mongoUri = 'mongodb+srv://AliHaji:47803105018@cluster0.ajiguzo.mongodb.net/?retryWrites=true&w=majority'

mongoose
.connect(mongoUri)
.then(() => console.log("MongoDB is successfully Connnected......."))
.catch((err) => console.log(err))



app.use('/', classRoutes);
app.use('/', productRoutes)




app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}...........`)
})
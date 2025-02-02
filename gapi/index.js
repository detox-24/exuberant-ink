import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './route/user-route.js'
import authRoute from './route/auth-route.js'
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=> {console.log("Connection succesfull");

})
.catch((err)=>{
    console.log(err);
})
const app = express();
app.use(express.json())

app.listen(2324,() => {
    console.log('Server is running on port 2324');
}); 
app.use('/api/user',userRoute);
app.use('/api/auth',authRoute);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})

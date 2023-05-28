import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';


const app = express();
mongoose.connect('TOKEN MONGODB URL');

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log('🎉Listening on port 3000');
})

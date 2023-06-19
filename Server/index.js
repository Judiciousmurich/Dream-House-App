import express from 'express';
import bodyParser from 'body-parser';
import config from './db/config.js';
import userRoutes from './routes/routes.js';

const app = express();
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// my-routes
userRoutes(app);

app.get('/', (req, res) => {
    res.send("Efficient,Comprehensive,User-friendly Real-Esate API!");
});

app.listen(config.port, () => {
    console.log(`Server is running on ${config.url}`);
});
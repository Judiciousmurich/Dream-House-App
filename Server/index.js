import express from 'express';
import bodyParser from 'body-parser';
import config from './db/config.js';
import Routes from './routes/routes.js';
import jwt from 'jsonwebtoken'
import cors from 'cors'

const app = express();
app.use(cors());

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Enable COES middleware
// app.use(function(req, res, next){
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
//     res.setHeader("Access-Control-Allow-Headers", 'GET, POST, PUT, DELETE');
//     res.setHeader("Access-Control-Allow-Headers", 'Content-Type');
//     next();
// });

//jwt middleware
app.use((req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jwt.verify(req.headers.authorization.split(' ')[1], config.jwt_secret, (err, decode) => {
            if (err) req.user = undefined;
            req.user = decode;
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
});
// my-routes
    Routes(app);

app.get('/', (req, res) => {
    res.send("Efficient,Comprehensive,User-friendly Real-Esate API!");
});

app.listen(config.port || 5000, () => {
    console.log("Server is running on " );
});
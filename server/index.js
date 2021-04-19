import express from 'express';
import mongoose from 'mongoose';
// Cross origin resource sharing
import cors from 'cors';
import dotenv from 'dotenv';


// Import post routes from the route folder
import postRoutes from './routes/posts.js'

const app = express();
dotenv.config();

// Set up body parser (which is built into express) to properly send requests
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

// Every route inside of postRoutes, starts with posts (e.g. localhost:5000/posts)
app.use('/posts', postRoutes);

// Set up variables to connected to the mongodb
const PORT = process.env.PORT || 5000;

// Use mongoose to connect to the database
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    // What to do if the connection is successful
    // Only `` works with string literals
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    // If the connection is not successful
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false);



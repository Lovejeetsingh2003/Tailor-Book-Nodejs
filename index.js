const express = require('express');
const app = express();
const port = 7001; 
const body_parser = require('body-parser');
const userRoutes = require('./routes/user_routes');
const categoryRoutes = require('./routes/category_routes');
const orderRoutes = require('./routes/orders_routes');

app.use(express.json({ limit: '10mb' }));

app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(body_parser.json());

app.use('/', userRoutes);

app.use('/', categoryRoutes);

app.use('/', orderRoutes);

app.listen(port, () => {
    console.log('Server run successfully at port number ', port)
});
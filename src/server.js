const express = require('express');
const cors = require('cors');

const JobRoutes = require('./routes/jobRoutes');
const UserRoutes = require('./routes/userRoutes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0';

app.use(express.json({ limit: '50mb', extended: true }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(express.static('./views/'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/jobs', JobRoutes.routes);
app.use('/api/users', UserRoutes.routes);

app.listen(port, hostname, () => {
    console.log(`Listening on ${hostname}:${port}`);
});
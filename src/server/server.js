require('./config/config');
const db=require('./modules/database/database');
const express = require('express');
const app = express();
app.use(require('./routes/index'));

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
})
const express = require('express');
const app = express();
require('./src/database/db');
app.use(express.json());
app.use(require('./src/router/orcamentoRouter'))



const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
{
    console.log('Orcamento Server Running on Port', PORT);
})




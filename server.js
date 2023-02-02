import express from 'express';
const Contenedor = require('./ProductManager');
const app = express();
const PORT = 4000;

const server = app.listen(process.env.PORT || PORT, () => {
    console.log(`server listening on PORT ${PORT}`)
});

app.use(express.urlencoded({extended:true}))

server.on ('error', err => console.log (`error: ${err}`));

const products = new Contenedor('products.txt');

app.get('/productos', async (req, res)=> {
    let {limite} = req.query
    if (limite) {
        products.slice(0, limite)
    } else {
        console.log(products.slice())
    }
    res.send("Producto por limite")
});

app.get('/producto/:id', async (req, res) => {
    console.log(products.find(prod => prod.id === parseInt(req.params.id)))
    res.send("Producto por id")
})
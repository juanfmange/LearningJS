const express = require("express");
const Service = require("./src/service");
const {request} = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req,res) => {
    res.json({
        message: 'Lista de usuarios',
        body: Service.getUsers(),
    });
});

app.get("/:id", (req,res) => {
    //let id = req.params;
    let { params : {id}} = req;
    let user = Service.getUser(id);
    console.log(id);
    res.json({
        message: `usuario ${id}`,
        body: user
    });
});

app.put('/:id',(req,res)=>{

})

app.delete('/:id',(req,res)=>{
    let { params : {id}} = req;
    let user = Service.deleateUser(id);
    console.log(id);
    res.json({
        message: `usuario ${id} eliminado`,
    })

})

app.post('/', (req, res) => {
    //let newUser = req.body;
    let { body: newUser } = req;
    let user = Service.createUser(newUser);
    res.status(201).json({
        message: 'Usuario creado',
        body: user,
    });
});

app.listen(PORT, () => {
    console.log(`servidor escuchando en http://localhost:${PORT}`);
});


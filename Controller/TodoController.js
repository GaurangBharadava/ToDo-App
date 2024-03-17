const TodoModel = require('../Models/TodoModel')


module.exports.getTodos = async (req,res)=>{
    const toDos = await TodoModel.find();
    res.send(toDos)
}

module.exports.saveTodo =  (req,res)=>{
    const toDo = req.body;
    TodoModel.create(toDo)
    .then((data)=>{
        console.log('saved data');
        res.status(201).send(data);
    })
    .catch(err =>{
        console.log(err);
        res.send({error:err.message , message:"somthing went wrong"});
    })
}

module.exports.updateTodo = (req,res)=>{
    const {id} = req.params
    const toDo = req.body

    TodoModel.findByIdAndUpdate(id,toDo)
    .then(()=>{
        res.send("update sucsessfully");
    })
    .catch((err)=>{
        console.log(err);
        res.send({error:err , message:"somthing went wrong"});
    })
}

module.exports.deleteTodo = (req,res)=>{
    const {id} = req.params

    TodoModel.findByIdAndDelete(id)
    .then(()=>{
        res.send("deleted successfully")
    })
    .catch((err)=>{
        console.log(err);
        res.send({error:err , message:"somthing went wrong"});
    })
}
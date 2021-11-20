const { Router } = require('express');
var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const ToDo = require('../Model/Todo-Model')

//create todo data in post method
router.post('/create',async (req,res)=>{
    const{todo} = req.body;
    let todoModel = new ToDo({
        todo:todo,
        createdAt: new Date()
    });
    await todoModel.save().then(()=>{
        res.status(200).json({message:'Inserted succesfully',new_todo:todoModel});
        console.log('Todo Added Succesfully');
    }).catch((err)=> console.log(err))
})

//list created data in get method
router.get('/list',async (req,res)=>{
    const listTodo = await ToDo.find();
    res.json(listTodo);
})

//delete unnececssary data using delete method
router.delete('/delete/:_id',async (req,res)=>{
    const _id = req.params
    ToDo.deleteOne({_id}).then(result=>{
        res.status(200).json({message:'Deleted succesfully',deleted_todo:result})
        console.log('Todo Deleted Succesfully');
    }).catch((err)=> console.log(err))
})

//edit data using put method
router.put('/update/:_id',async (req,res)=>{
    const _id = req.params;
    const{todo} = req.body;
    ToDo.findOneAndUpdate({_id},{
        $set:{
            todo:todo,
            createdAt: new Date()
        }
    }).then(result=>{
        res.status(200).json({message:'Updated succesfully',updated_todo:result})
        console.log('Todo Updated Succesfully');
    }).catch((err)=> console.log(err))
})

module.exports = router;
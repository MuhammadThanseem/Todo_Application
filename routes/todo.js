const { Router } = require('express');
var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const ToDo = require('../Model/Todo-Model')

router.post('/create',async (req,res)=>{
    const{todo} = req.body;
    let todoModel = new ToDo({
        todo:todo,
        createdAt: new Date()
    });
    await todoModel.save().then(()=>{
        res.status(200).json({new_todo:todoModel});
        console.log('Todo Added Succesfully');
    }).catch((err)=> console.log(err))
})
router.get('/list',async (req,res)=>{
    const listTodo = await ToDo.find();
    res.json(listTodo);
})
router.delete('/delete/:_id',async (req,res)=>{
    const _id = req.params
    ToDo.deleteOne({_id}).then(result=>{
        res.status(200).json({deleted_todo:result})
        console.log('Todo Deleted Succesfully');
    }).catch((err)=> console.log(err))
})

router.put('/update/:_id',async (req,res)=>{
    const _id = req.params;
    const{todo} = req.body;
    ToDo.findOneAndUpdate({_id},{
        $set:{
            todo:todo,
            createdAt: new Date()
        }
    }).then(result=>{
        res.status(200).json({updated_todo:result})
        console.log('Todo Updated Succesfully');
    }).catch((err)=> console.log(err))
})

module.exports = router;
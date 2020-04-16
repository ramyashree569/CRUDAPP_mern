
const express = require('express');
const router = express.Router()
var ObjectID = require('mongoose').Types.ObjectId
var {postMessages} = require('../models/postMessage')

router.get('/',(req,res)=>{
    postMessages.find((err,docs)=>{
        if(!err) 
        {res.send(docs)}
        else 
        {console.log('error while fetching record')}
    }
    )})

router.post('/',(req,res)=>{
    var newRecord = new postMessages({
        title:req.body.title,
        message:req.body.message});
    newRecord.save((err,docs)=>{
        if(!err)
        {res.send(docs)}
        else
        {console.log('error while creating record')}
    })

    
})

router.put('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send('no record with given id'+req.params.id)
    }
    var updatedRecord = {
        title: req.body.title,
        message:req.body.message
    }
    postMessages.findByIdAndUpdate(req.params.id,{$set:updatedRecord},(err,docs)=>{
        if(!err) 
        {res.send(docs)}
        else 
        {console.log('error while updating record')}
    }
    )})

router.delete('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send('no record with given id'+req.params.id)
    }
    postMessages.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(!err) 
        {res.send(docs)}
        else 
        {console.log('error while deleting record')}
    })
})
module.exports = router
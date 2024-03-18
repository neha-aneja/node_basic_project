const express = require('express');
const router = express.Router();
const DataRanking = require("../models/data");

router.post('/demo', async(req,res) => {
    try{
const addDemo = new DataRanking(req.body);
const insertData = await addDemo.save();
res.status(201).send(insertData)
    }catch(e) {
        res.status(400).send(e)
    }
})

router.get('/demo', async(req,res) => {
    try{
const getDemo = await DataRanking.find({}).sort({"ranking": 1});
res.status(201).send(getDemo)
    }catch(e) {
        res.status(400).send(e)
    }
})

// (_id) can be used at place of ({_id : _id}) because both variables are same
router.get('/demo/:id', async(req,res) => {
    try{
        const _id = req.params.id;
const getDemoById = await DataRanking.findById({_id : _id});
res.status(201).send(getDemoById)
    }catch(e) {
        res.status(400).send(e)
    }
})

router.patch('/demo/:id', async(req,res) => {
    try{
        const _id = req.params.id;
const updateDemoById = await DataRanking.findByIdAndUpdate(_id, req.body, {
    new: true
});
res.status(201).send(updateDemoById)
    }catch(e) {
        res.status(500).send(e)
    }
})

router.delete('/demo/:id', async(req,res) => {
    try{
        const _id = req.params.id;
const deleteDemoById = await DataRanking.findByIdAndDelete(_id);
res.status(201).send(deleteDemoById)
    }catch(e) {
        res.status(500).send(e)
    }
})

module.exports = router;
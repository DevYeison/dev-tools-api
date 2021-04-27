'use strict';

const { ResourceModel } = require('../models');


const getById = async(resourceId)=>{
    return await ResourceModel.findById(resourceId);
}

const getByName = async(resourceName)=>{
    return await ResourceModel.find({title: { $regex: new RegExp(resourceName, 'i')}});
}

const getAll = async(pageSize = 10, pageNum = 1)=>{
    const skip = pageSize * (pageNum - 1);
    return await ResourceModel
        .find()
        .skip(skip)
        .limit(pageSize);
}

const createOne = async(resource)=>{
    return await ResourceModel.create(resource);
}

const updateOne = async(resourceId, newResource)=>{
    return await ResourceModel.findByIdAndUpdate(resourceId, newResource, {new: true});
}

const deleteOne = async(resourceId)=>{
    await ResourceModel.findByIdAndDelete(resourceId);
    return true;
}

module.exports ={
    getById,
    getByName,
    getAll,
    createOne,
    updateOne,
    deleteOne
}

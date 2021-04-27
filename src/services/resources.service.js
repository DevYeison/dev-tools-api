"use strict";

const { ResourceRepository } = require("../repositories");

const getResourceById = async (resourceId) => {
  if (!resourceId) {
    const error = new Error();
    error.status = 400;
    error.message = "Resource ID must be sent";
    throw error;
  }

  const resource = await ResourceRepository.getById(resourceId);

  if (!resource) {
    const error = new Error();
    error.status = 404;
    error.message = "Resource not found";
    throw error;
  }

  return resource;
};

const getResourceByName = async (resourceName) => {
  return await ResourceRepository.getByName(resourceName);
};

const getAllResources = async (pageSize, pageNum) => {
  return await ResourceRepository.getAll(pageSize, pageNum);
};

const createResource = async (newResource) => {
  return await ResourceRepository.createOne(newResource);
};

const updateResource = async (resourceId, newResource) => {
  if (!resourceId) {
    const error = new Error();
    error.status = 400;
    error.message = "Resource ID must be sent";
    throw error;
  }

  return await ResourceRepository.updateOne(resourceId, newResource);
};

const deleteResource = async (resourceId) => {
  if (!resourceId) {
    const error = new Error();
    error.status = 400;
    error.message = "Resource ID must be sent";
    throw error;
  }

  return await ResourceRepository.deleteOne(resourceId);
};

module.exports = {
  getResourceById,
  getResourceByName,
  getAllResources,
  createResource,
  updateResource,
  deleteResource,
};

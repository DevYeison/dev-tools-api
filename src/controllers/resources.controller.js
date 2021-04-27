"use strict";

const { ResourceService } = require("../services");
const { ResourceModel } = require("../models");

const getResourceById = async (req, res) => {
  const { resourceId } = req.params;
  const resource = await ResourceService.getResourceById(resourceId);
  return res.send(resource);
};

const getResourceByName = async (req, res) => {
  const { resourceName } = req.params;
  const resource = await ResourceService.getResourceByName(resourceName);
  return res.send(resource);
};

const getAllResources = async (req, res) => {
  const { pageSize, pageNum } = req.query;
  const resources = await ResourceService.getAllResources(pageSize, pageNum);
  return res.send(resources);
};

const createResource = async (req, res) => {
  const resource = new ResourceModel({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    topics: req.body.topics,
    conclusion: req.body.conclusion,
    links: req.body.links,
  });
  const createdResource = await ResourceService.createResource(resource);
  return res.send(createdResource);
};

const updateResource = async (req, res) => {
  const { resourceId } = req.params;
  const newResource = new ResourceModel({
    topics: req.body.topics,
    links: req.body.links,
  });
  const updatedResource = await ResourceService.updateResource(
    resourceId,
    newResource
  );
  return res.send(updatedResource);
};

const deleteResource = async (req, res) => {
  const { resourceId } = req.params;
  const deletedResource = await ResourceService.deleteResource(resourceId);
  return res.send(deletedResource);
};

module.exports = {
  getResourceById,
  getResourceByName,
  getAllResources,
  createResource,
  updateResource,
  deleteResource,
};

const express = require('express');
const xss = require('xss');
const logger = require('../logger');
const ResourceRouter = express.Router();
const ResourceService = require('./resource-service');
const bodyParser = express.json();
// const { v4: uuid } = require('uuid');

const serializeResource = (resource) => ({
  id: resource.id,
  title: xss(resource.title),
  content: xss(resource.content),
  zipcode: resource.zipcode,
  date_published: resource.date_published,
});

ResourceRouter.route('/api/resources')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db');
    ResourceService.getAllResources(knexInstance)
      .then((foodfuldb) => {
        res.json(foodfuldb.map(serializeResource));
      })
      .catch(next);
  })
  .post(bodyParser, (req, res) => {
    const { id, title, content, zipcode, date_published } = req.body;
    if (!title) {
      logger.error('Title is required');
      return res.status(400).send('Please include a title');
    }
    if (!content) {
      logger.error('A description is required');
      return res.status(400).send('Please include a description');
    }
    if (!zipcode) {
      logger.error('Zipcode is required');
      return res.status(400).send('Please include a zipcode');
    }
  });

module.exports = ResourceRouter;

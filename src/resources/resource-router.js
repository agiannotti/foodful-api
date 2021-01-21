const { Router } = require('express');
const express = require('express');
const xss = require('xss');
const logger = require('../logger')
const ResourceRouter = express.Router();
const ResourceService = require('./resource-service.js');
const bodyParser = express.json();

const serializeResource = (resource) => ({
  id: resource.id,
  title: xss(resource.title),
  content: xss(resource.content),
  zipcode: resource.zipcode,
  date_published: resource.date_published,
});

ResourceRouter.route('/')
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
    if (!name) {
      loff
    }
        });
  });

module.exports = ResourceRouter;

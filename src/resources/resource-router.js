const express = require('express');
// const xss = require('xss');
// const { resource } = require('../app');
// const logger = require('../logger');
const ResourceRouter = express.Router();
const ResourceService = require('./resource-service');
const bodyParser = express.json();
// const { v4: uuid } = require('uuid');

// const serializeResource = (resource) => ({
//   id: resource.id,
//   title: xss(resource.title),
//   content: xss(resource.content),
//   zipcode: resource.zipcode,
//   date_published: resource.date_published,
// });
ResourceRouter.route('/api/resources')
  .post(bodyParser, (req, res, next) => {
    const { title, zipcode, content, date_published } = req.body;
    const newResource = {
      title,
      zipcode,
      content,
      date_published,
    };
    for (const field of ['title', 'zipcode', 'content', 'date_published'])
      if (!req.body[field])
        return res.status(400).json({
          error: `Missing '${field}' in request body`,
        });

    ResourceService.insertResource(req.app.get('db'), newResource).then(
      (resource) => {
        res.status(201).json(resource);
      }
    );
  })
  .get((req, res, next) => {
    ResourceService.getAllResources(req.app.get('db'))
      .then((resources) => {
        res.json(resources);
      })
      .catch(next);
  });

// async function checkResourceExists(req, res, next) {
//   try {
//     const thing = await ResourceService.getById(
//       req.app.get('db'),
//       req.params.id
//     )

//     if (!thing)
//       return res.status(404).json({
//         error: `Resource doesn't exist`
//       })

//     res.thing = thing
//     next()
//   } catch (error) {
//     next(error)
//   }

module.exports = ResourceRouter;

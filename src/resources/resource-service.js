const ResourceService = {
  getAllResources(db) {
    return db.select('*').from('resource_identity');
  },

  getById(knex, id) {
    return knex.from('resource_identity').select('*').where('id', id).first();
  },

  insertResource(knex, newResource) {
    return knex
      .insert(newResource)
      .into('resource_identity')
      .returning('*')
      .then((rows) => {
        return rows[0];
      });
  },

  deleteResource(knex, id) {
    return knex('resource_identity').where({ id }).delete();
  },

  updateResource(knex, id, newResourceFields) {
    return knex('resource_identity').where({ id }).update(newResourceFields);
  },
};

module.exports = ResourceService;

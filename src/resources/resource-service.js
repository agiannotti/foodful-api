const ResourceService = {
  getAllResources(db) {
    return db.select('*').from('foodful-db');
  },
};
//   getById(knex, id) {
//     return knex.from('foodful-db').select('*').where('id', id).first();
//   },
//   insertResource(knex, newResource) {
//     return knex
//       .insert(newResource)
//       .into('foodful-db')
//       .returning('*')
//       .then((rows) => {
//         return rows[0];
//       });
//   },
//   deleteResource(knex, id) {
//     return knex('foodful-db').where({ id }).delete();
//   },
//   updateResource(knex, id, newResourceFields) {
//     return knex('foodful-db').where({ id }).update(newResourceFields);
//   },
// };

module.exports = ResourceService;

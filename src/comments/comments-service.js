const CommentsService = {
  getAllComments(db) {
    return db.select('*').from('comments_table');
  },

  getById(knex, id) {
    return knex.from('comments_table').select('*').where('id', id).first();
  },

  insertComment(knex, newcomments) {
    return knex
      .insert(newcomments)
      .into('comments_table')
      .returning('*')
      .then((rows) => {
        return rows[0];
      });
  },

  deleteComments(knex, id) {
    return knex('comments_table').where({ id }).delete();
  },

  updateComments(knex, id, newcommentsFields) {
    return knex('comments_table').where({ id }).update(newcommentsFields);
  },
};

module.exports = CommentsService;

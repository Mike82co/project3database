
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "riders"; ALTER SEQUENCE riders_id_seq RESTART WITH 3;')
    .then(function () {
      var riderList = [{
        id: 1,
        riderName: 'Mike Lavin',
        bio: '',
        imageURL: '',
        goal:500,
        currentTotal:60,
        team:''

      }, {
        id: 2,
        riderName: 'Bety Davis',
        bio: '',
        imageURL: '',
        goal:700,
        currentTotal:60,
        team:''
      }];
      return knex('riders').insert(riderList);
    });
};
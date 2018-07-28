
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "teams"; ALTER SEQUENCE teams_id_seq RESTART WITH 3;')
    .then(function () {
      var teamList = [{
        id: 1,
        teamName: 'Team Colorado',
        imageURL: '',
        goalAmount: 1000,
        currentTotal: 200,
        members:''
      }, {
        id: 2,
        teamName: 'Team Disney',
        imageURL: '',
        goalAmount: 2000,
        currentTotal: 300,
        members:''
      }];
      return knex('teams').insert(teamList);
    });
};
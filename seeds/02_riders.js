
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "riders"; ALTER SEQUENCE riders_id_seq RESTART WITH 4;')
    .then(function () {
      var riderList = [{
        id: 1,
        riderName: 'Mike Lavin',
        bio: 'I am a first time rider looking for a grate experiance. I want to help people in a fun way',
        imageURL: '',
        goal:500,
        currentTotal:50,
        team:' Team Colorado'

      }, {
        id: 2,
        riderName: 'Bety Davis',
        bio: 'Long time rider. This is a great way to train',
        imageURL: '',
        goal:700,
        currentTotal:70,
        team:'Team Colorado'
      },
      {
        id: 3,
        riderName: 'Johnny Smit',
        bio: 'Just want to help as many people as possiable',
        imageURL: '',
        goal:800,
        currentTotal:90,
        team:'Team Colorado'
      }];
      return knex('riders').insert(riderList);
    });
};
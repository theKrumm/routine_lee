const bcrypt = require('bcryptjs')

exports.seed = function(knex, Promise) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync('!hot:snakes', salt);
  // Deletes ALL existing entries
  return knex('users').del()
    .then(()=> {
      // Inserts seed entries
      const users = [
        {
          phone: '2537702088',
          email: 'suzylovesyou@excite.com',
          password: hash,
          first_name: 'Suzalynne',
          last_name: 'Testdata',
          admin: false
        },{
          phone: '2537702077',
          email: 'suzylovesall@excite.com',
          password: hash,
          first_name: 'Suzalynn',
          last_name: 'Testdata2',
          admin: false
        }
      ]

      return knex('users').insert(users)

    });
};

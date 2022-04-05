const {Sequelize} = require('sequelize');
require('dotenv/config');

const sequelize = new Sequelize(
  `${process.env.DB_DATABASE}`,
  `${process.env.DB_USERNAME}`,
  `${process.env.DB_PASSWORD}`, {
  host: 'localhost',
  dialect: 'mysql'
});

try {
  sequelize.authenticate();
  console.log('\n[sequelize] authenticate successfully!\n');
} catch (err) {
  console.log(`\n[sequelize] authenticate unsuccessful: ${err}\n`);
}

module.exports = sequelize;
const sequelize = require('../config/connection');
const Sun = require('../models/Sun');
const Moon = require('../models/Moon');
const Rising = require('../models/Rising');

const sunSeedData = require('./sunSeeds.json');
const moonSeedData = require('./moonSeeds.json');
const risingSeedData = require('./risingSeeds.json');

const seedDatabase = async () => {
  sequelize.sync({force: true})
  await Sun.bulkCreate(sunSeedData);
  await Moon.bulkCreate(moonSeedData);
  await Rising.bulkCreate(risingSeedData);
  console.log('All seeds planted! 🌱');
  process.exit(0);
};

seedDatabase();
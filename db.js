const { Sequelize } = require('sequelize')
const databaseConnectionString = 'postgres://db_render_d2sj_user:c6m4pOPewHacHAXmf3Zu2PpICIGjjHT9@dpg-clflcg6f27hc739dg2d0-a/db_render_d2sj';
// Database
const sequelize = new Sequelize(
  databaseConnectionString, // TODO: database connection string
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize

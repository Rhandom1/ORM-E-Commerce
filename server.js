const express = require('express');
// import sequelize connection
const sequelize = require('./config/connection');
const routes = require('./routes');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// const tagData = await Tag.findAll({
//   include: [{ model: Product, as: "Product" }, { through: ProductTag }],
// });
// res.status(200).json(tagData);

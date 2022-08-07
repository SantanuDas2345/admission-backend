const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors());

const {sequelize, Users} = require('./models');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[env];

app.use(validateUser);
app.post('/login', async (req, res) => {
        const {username, password} = req.body;
        try {
            const user = await Users.findOne({where: {
                username: username,
                password: password
            }});
            if(user ==  null) {
              res.json({msg: 'No user found', error: true});
            }
            const token = await jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                user: username
            }, config.token);
            res.json({
              token: token,
              user: user
            });
        }catch(e) {
            res.json(e)
        }
})
function validateUser(req, res, next) {
  if(req.originalUrl == "/login") {
    console.log("No auth required");
    next();
  } else {
    try {
      const {token} = req.headers;
      const payload = jwt.verify(token, config.token);
      if(payload) {
        next();
      }
    }catch(e) {
      res.json({
        msg: 'Invalid token'
      })
    }
  }
  
}
app.listen({
    port: 8080
}, async () => {
    console.log("App is running ...")
   //await sequelize.sync({force:true});
    await sequelize.authenticate();
})
    


//main();

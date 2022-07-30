const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json())
const {sequelize, Users} = require('./models');
const { listen } = require('express/lib/application');
const res = require('express/lib/response');

const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[env];

app.use(validateUser);
const post = [
    {
        username:"sam",
        title:"mas"
    },
    {
        username:"jam",
        title:"maj"
    }
]
app.get('/post', (req , res) => {
    res.json(post);
})

app.post('/login', async (req, res) => {
        const {username, password} = req.body;
        try {
            const user = await Users.findOne({where: {
                username: username
            }});
    
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
app.get('/get-user/:id', async(req, res) => {
 
  try {
    
          const user = await Users.findOne({
            where: {
              id: req.params.id
            }
          })
          res.json({
            msg: "User found",
            user: user
          });
    } 
    catch(e) {
    res.json({
      msg: 'Error'
    })
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

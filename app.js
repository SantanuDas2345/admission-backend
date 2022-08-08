const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors());

const {sequelize, Users, student_details} = require('./models');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[env];

//app.use(validateUser);
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
                user: username
            }, config.token, {expiresIn: '12h'});
            res.json({
              token: token,
              user: user
            });
        }catch(e) {
            res.json(e)
        }
})


app.get('/get-students', async (req, res) => {
  try {
      const students = await student_details.findAll();
      if(students ==  null) {
        res.json({msg: 'No students found', students: []});
      }
      res.json({
        msg: students.length + ' student found',
        students: students,
        error: false
      });
  }catch(e) {
      res.json({
        msg: 'Error',
        students: [],
        error: true
      })
  }
})
app.post('/create-student', async (req, res) => {
  try {
      const {name, email, phone, dob, identification_mark, blood_group} = req.body;
      try {
        const student = await student_details.create({name: name, phone: phone, email:email, dob:dob, identification_mark: identification_mark, blood_group: blood_group});
        return res.json(student);
      } catch(e) {
          res.status(300).send(e)
      }
  }catch(e) {
      res.json({
        msg: 'Error',
        students: [],
        error: true
      })
  }
})

function validateUser(req, res, next) {
  if(req.originalUrl == "/login") {
    console.log("No auth required");
    next();
  } else {
    try {
      const {authorization} = req.headers;
      const auth= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTk4OTIwMDMsInVzZXIiOiJBRE1JTiIsImlhdCI6MTY1OTg4ODQwM30.xUjeaHnq5TiPK8xzW811uZr-SI84h9KGTSHrqnssylg";
      const payload = jwt.verify(auth, config.token);
      console.log(payload, "here is payload");
      if(payload) {
        next();
      }
    }catch(e) {
      res.json(e)
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

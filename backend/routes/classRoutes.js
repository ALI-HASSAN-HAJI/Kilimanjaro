import express from 'express';
import practiceModel from '../models/practiceModel.js';
import exerciseModel from '../models/exerciseModel.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send("All will be well in future god willing");
});

router.get('/arsenal', (req, res) => {
  res.send("The league leader of the Premier League this year 2023")
});


router.post('/create', (req, res) => {
  console.log(req.body)

  const newClass = new practiceModel({             
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    gender: req.body.gender,
    admNo: req.body.admNo,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber
  });
  newClass.save()
  .then((doc) => res.send(doc))
  .catch(console.error)
});

router.post('/createTeam', (req, res) => {
  console.log(req.body);

const newClass = new exerciseModel({
  team: req.body.team,
  playerName: req.body.playerName,
  nationality: req.body.nationality,
  goals: req.body.goals,
  assist: req.body.assist
});
newClass.save()
.then((doc) => res.send(doc))
.catch(console.error)

});




export default router;
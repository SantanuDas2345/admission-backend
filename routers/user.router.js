const express = require("express");
const router = express.Router();

import {createUser, updateUser, deleteUser, getUser, getAllUsers} from '../controller/users.controller.js';


router.post('/create-user', createUser);
router.get('/get-all-users', getAllUsers);
router.delete('/delete-user/:id([0-9]{3})', deleteUser);
router.get('/get-user/:id([0-9]{3})', getUser);
router.get('/update-user/:id([0-9]{3})', updateUser);

export default router;

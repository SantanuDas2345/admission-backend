app.post('/create-user', async(req, res) => {
    const {username, password, email, phone} = req.body;
    let pass;
    try {
        await cryptPassword(password, async(err, hash) => {
            if(hash) {
               try {
                    const user = await Users.create({username: username, password: hash, email:email, phone:phone});
                    return res.json(user);
               } catch(e) {
                    res.status(300).send(e)
               }
            }
        }) 
    } catch(e) {
        res.send(e);
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await Users.findAll();
        res.json(users);
    }catch(e) {
        res.send(e);
    }
});
app.get('/user/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const users = await Users.findOne({
            where: {id: id}
        });
        res.json(users);
    }catch(e) {
        res.send(e);
    }
});

app.delete('/user/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const user = await Users.findOne({ where: {id: id} });
        await user.destroy();
        res.json({msg: 'User deleted successfully'});
    }catch(e) {
        res.send(e);
    }
});

app.put('/user/:id', async (req, res) => {
    console.log(req);
    const id = req.params.id;
    const {password, email, phone} = req.body;
    try {
        const user = await Users.findOne({ where: {id: id} });
        user.email = email;
        user.password = password;
        user.phone = phone;
        user.save();
        res.json(user);
    }catch(e) {
        res.send(e);
    }
});

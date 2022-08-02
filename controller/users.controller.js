const createUser =  async(req, res) => {
    const {username, password, email, phone} = req.body;
    let pass;
    try {
        const user = await Users.create({username: username, password: pass, email:email, phone:phone});
        return res.json(user);
    } catch(e) {
        res.status(300).send(e)
    }
    
};

const getAllUsers =  async (req, res) => {
    try {
        const users = await Users.findAll();
        res.json(users);
    }catch(e) {
        res.send(e);
    }
};
const getUser = async (req, res) => {
    const id = req.params.id;
    try {
        const users = await Users.findOne({
            where: {id: id}
        });
        res.json(users);
    }catch(e) {
        res.send(e);
    }
};

const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await Users.findOne({ where: {id: id} });
        await user.destroy();
        res.json({msg: 'User deleted successfully'});
    }catch(e) {
        res.send(e);
    }
};

const updateUser =  async (req, res) => {
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
};

module.exports = {createUser, getAllUsers, getUser, deleteUser, updateUser};
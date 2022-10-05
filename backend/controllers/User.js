import User from '../models/UserModel.js';

export const getAllUser = async (req, res) => {
    try {
        const user = await User.findAll();
        res.json(user);
    } catch (err) {
        res.json({ error: err.message });
    }
}

export const getUserById = async (req, res) => {
    try { 
        const user = await User.findAll({
            where: { 
                id: req.params.id
            }
        });
        res.json(user[0]);
    } catch (err) {
        res.json({ error: err.message });
    }
}

export const createUser = async (req, res) => {
    try {
         await User.create(res.body);
         res.json({
            "massage": "User created sucess"
         });
    } catch (err) {
        res.json({ error: err.message });
    }
}

export const updateUser = async (req, res) => {
  try {
    await User.update(res.body , 
        { where: { id: req.params.id }
    });
    res.json({
      massage: "User update sucess",
    });
  } catch (err) {
    res.json({ error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.id }});
    res.json({
      massage: "User delete sucess",
    });
  } catch (err) {
    res.json({ error: err.message });
  }
};
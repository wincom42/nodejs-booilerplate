const { User } = require("../models/User");

let myController={};

myController.setData=async (req,res)=>{
    var user = new User({ name:'test',age:30 });
    user.save();
    res.render('index', { title: 'insert successfully..'})
};

myController.getData=async (req,res)=>{
   // let data = await User.find({});
    res.render('index', { title: req.ip})
};


module.exports = myController;
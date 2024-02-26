const { validationResult } = require("express-validator");
const {hashSync} = require('bcryptjs')
const db = require('../database/models')
module.exports = {login: (req, res) => {
  return res.render("users/login");
},
logout: (req, res) => {
  req.session.destroy();
  res.cookie("andoMateando_user", null, {
    maxAge: -1,
  });

  return res.redirect("/");
},
  register: (req, res) => {
    return res.render("users/register");
  },
  processRegister: (req, res) => {
    const errors = validationResult(req);
    const { name, surname , email, password } = req.body;   
     if(errors.isEmpty()){
      db.User.create({
      name,
      surname,
      email,
      password : hashSync(password.trim(),10),
      roleId : 2,
     
  })
      .then(user => {
          console.log(user);
          return res.redirect('/usuarios/ingreso')
      })
      .catch(error => console.log(error))
    }else{
      return res.render('users/register',{
          old : req.body,
          errors : errors.mapped()
      })
  }
  },
  
 

  processLogin: (req, res) => {
    const errors = validationResult(req);
    const { email, remember } = req.body;

    if(errors.isEmpty()){
    
      db.User.findOne({
          where : {
              email
          }
      })
          .then(({id, name, roleId}) => {

              req.session.userLogin = {
                  id,
                  name,
                  role : +roleId
              }
              remember &&
              res.cookie("andoMateando_user", req.session.userLogin, {
                maxAge: 1000 * 60 * 2,
              });
      
              return roleId == 1 ? res.redirect('/admin') : res.redirect('/')

          })
          .catch(error => console.log(error))

  }else {
      return res.render('users/login',{
          errors : errors.mapped()
      })
  }
  },
  
 
  profile: (req, res) => {
    return res.render("users/profile");
  },
  profileUpload: (req, res) => {
    const errors = validationResult(req);
    const { name, surname } = req.body;
    const { id } = req.params;

    if (errors.isEmpty()) {
      users.forEach((usuario) => {
        if (usuario.id === req.params.id) {
          usuario.name = name ? name.trim() : usuario.name;
          usuario.surname = surname ? surname.trim() : usuario.surname;
        }
      });
      escribirJSON(users, "users");

      return res.redirect("users/profile" + req.params.id);
    } else {
      const user = users.find((user) => user.id === req.params.id);
      return res.render("users/profile", {
        errors: errors.mapped(),
        ...user,
      });
    }
  },
};

user.find({
  username: username;
  password: password;
}, "username", callback);
return false;


module.exports = {
  getLogin: function(req, res){
    res.sendFile(__dirname + '/public/login.html')
  },

  postLogin: function(req, res){
    if(req.body.username && req.body.password) {
      if (logInUser(
        req.body.username,
        req.body.password,
        function(err, data) {
          if (err) {
            res.redirect("/login");
            return;
          }
          req.session.username = data.username;
          res.redirect('/');
          return;
        }
      )
    }
    res.redirect('/login');
  }
}

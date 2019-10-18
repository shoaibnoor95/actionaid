var bcrypt = require("bcrypt-nodejs");
var mongoose = require("mongoose");

var SALT_FACTOR = 10;

var userSchema = mongoose.Schema({

  firstName: { type: String, required: true },
  password: { type: String, required: true },
  type:String,
  nationality:String,
  createdAt: {type: Date, default: Date.now },
  lastName:  {type: String, required: true },
  email:     {type: String,unique:true},
  emailAuth:{type:Boolean,default:false},
  approved:{type:Boolean,default:true},
  enrollments:[String]

});

var noop = function() {};

userSchema.pre("save", function(done) {
  var user = this;

  if (!user.isModified("password")) {
    return done();
  }

  bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
    if (err) { return done(err); }
    bcrypt.hash(user.password, salt, noop, function(err, hashedPassword) {
      if (err) { return done(err); }
      user.password = hashedPassword;
      done();
    });
  });
});

userSchema.methods.checkPassword = function(guess, done) {
  bcrypt.compare(guess, this.password, function(err, isMatch) {
    done(err, isMatch);
  });
};



var User = mongoose.model("User", userSchema);

module.exports = User;
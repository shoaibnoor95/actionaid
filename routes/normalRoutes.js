const express=require('express');
const router=express.Router();
const passport=require('passport');
const User=require('../models/User');
const Content=require('../models/content');
const Token=require('../models/token')
const Courses=require('../models/courses');
const enrollment=require('../models/enrollment');
const userlogs=require('../models/userlogs');
const path=require('path');
const crypto=require('crypto');
const ejs=require('ejs')
const sgTransport=require('nodemailer-sendgrid-transport');
const nodemailer=require('nodemailer');
const sessions=require('../models/sessions')
router.get('/',function(req,res,next){
  res.sendFile(path.resolve(__dirname, '../views', 'index.html'));
})



function ensureAuth(req,res,next){
  if(req.isAuthenticated()){
    next();
  }
  else{
    res.sendFile(path.resolve(__dirname, '../views', 'ensure.html')); 
  }
}
function ensureAuth2(req,res,next){
  if(req.user){
   if(req.user.type=='admin'){

     next()
    }
  }
  else{
    // res.status(401).send('Un authenticated')
    res.redirect('/')
  }
}
router.get('/adminOverview',ensureAuth2,function(req,res,next){
  User.count({type:{$ne:'admin'}},function(err,userCount){
  if(err){
    console.log(err)
    res.send({error:true})
    return;
  }
    Courses.count({},function(err,coursesCount){
      if(err){
        res.send({error:true})
        return;
      }
      enrollment.count({},function(err,enrollmentCourses){
        if(err){
          res.send({error:true})
          return;
        }
      enrollment.count({completed:true},function(err,completed){
        if(err){
          res.send({error:true})
          return;
        }
        User.find({type:{$ne:'admin'}}).select({email:1,firstName:1,lastName:1,createdAt:1}).limit(3).sort({createdAt:-1}).exec(function(err,users){
        if(err){
          res.send({error:true})
          return;
        }

          var counting={
            userCount,
            coursesCount,
            enrollmentCourses,
            completed
        }
        res.send({counting,users})
        })  
       })
      })
    })
  })
})

router.post("/login",function(req,res,next){
  console.log(req.body)
  
  passport.authenticate('local-login',function (err, user, message){
    console.log('here');
    if (err) {
      console.log('here1');
    return res.send(err.message)
    }
    if (user) {
      req.logIn(user, loginErr => {
        if(loginErr) {
          console.log(loginErr)
          return res.json({ success: false, message: loginErr })
        }
       
        return res.json({ success: true,type:user.type })   
    })
  }
    if(message){
      console.log("message found")
      return res.send({message:message})
    }
  })(req, res, next);
})

router.get('/logout',function(req,res,next){
 console.log('logut')
  
    sessions.remove({email:req.user.email },function(err){
        if(err){
          console.log(err)
          return res.send({error:err.message})
        }
        req.logOut();
        res.send({logout:true}) 
        })
     })
  
router.post("/signup", function (req, res, next) {
  var email = req.body.email;
    User.findOne({ email: email }, function (err, user) {

    if (err) { 
      res.send({error:'Could not proceed the request'});
      return ; 
    }
    if (user) {
      
      return res.send({message:"user already exists with this email "});
    }
  var password = req.body.password;
  var firstName=req.body.firstName;
  var lastName=req.body.lastName;
  var newUser = new User({
      email: email,
      password: password,
      firstName:firstName,
      lastName:lastName,
      type:'User'  
    });
 var promise = newUser.save();
     promise.then(doc=>{

     
  var token = new Token({
      _userId: newUser._id,
      token:req.body.email+crypto.randomBytes(16).toString('hex')
    });
    token.save(function(err){
      if(err){
        console.log(err);
        res.send({error:true})
        return;
      }
    });
    
    var logs=new userlogs({
      userId:newUser._id,
      userIp:req.ip,
      actionType:'Creating Profile',
      sessionId:req.sessionID,
      browsingAgent:req.headers['user-agent'],
    })
    logs.save(function(err){
      if(err){
       console.log(err);
      res.send({error:true})
      return
    }
    
    
    
  ejs.renderFile(__dirname+'/template.ejs',{token:token.token}, (err, data) => {
      
      if (err) {
        console.log(err)
       return res.send({message:err.message})  
      }
      else {
      
        var options = {
          auth: {
            api_user: 'shoaib95',
            api_key: '123456fga'
          }
        }
        
        var client = nodemailer.createTransport(sgTransport(options));
        
        var email = {
          from: '<no-reply@actionaid.com>',
          to: req.body.email,
          subject: 'Actionaid Acount confirmation',
          html: data
        };
        
        client.sendMail(email, function(err){
            if (err){
              console.log(err);
               res.send({message:err.message})
               return
                }
                res.send({mailSend:true}) 
            });
          }
        })
      }) 
     })
    })
  });

router.get('/coursesdetails',function(req,res,next){
  Courses.findOne({_id:req.query.id},function(err,course){
    if(err){
      res.send({error:true});
      return;
    }
    if(!course){
      res.send({message:'Course not found or may be deactivated by the admin'})
      return;
    }
      res.send({course})
  })  
})
  
 
 router.get('/aUsers',function(req,res,next){
  res.sendFile(path.resolve(__dirname, '../views', 'index.html'));
 })

 router.get('/aDashboard',ensureAuth2,function(req,res,next){
  res.sendFile(path.resolve(__dirname, '../views', 'index.html'));
 })
router.get('/dashboard',ensureAuth,function(req,res,next){
  res.sendFile(path.resolve(__dirname, '../views', 'index.html')); 
})
 router.get('/aCourses',ensureAuth2,function(req,res,next){
  res.sendFile(path.resolve(__dirname, '../views', 'index.html'));
 })
router.get('/contact',function(req,res,next){
  res.sendFile(path.resolve(__dirname, '../views', 'index.html'));

})
router.get('/totalCourses',ensureAuth2, function(req,res,next){
  Courses.find({}).select({courseTitle:1,createdAt:1,availablity:1}).exec(function(err,courses){
    if(err){
      console.log(err)
      res.send({err:true})
      return;
    }
    if(!courses){
      res.send({message:'Courses not found'})
      return;
    }
    if(courses){
      enrollment.count({_courseId:courses._id}).exec(function(err,enrollCount){
        if(err){
          res.send({error:true})
          return;
        }
        res.send({courses,enrollCount})
      })
    }
  })
})
 
 router.get('/listUser',ensureAuth2,(req,res,next)=>{
   var limit=req.query.query*10,
   skip=(req.query.query-1)*10;
    User.find({type:{$ne:'Admin'}}).select({firstName:1,lastName:1,email:1,createdAt:1}).limit(limit).skip(skip).exec(function(err,users){
      if(err){
        res.send({error:true})
        return;
      }
      if(!user){
        res.send({message:'No User(s) found'});
        return;
      }
      res.send({users})
      
    })
  })


    router.post('/activateUser',ensureAuth2,(req,res,next)=>{
      User.findOneAndUpdate({_id:req.body.id},{$set:{approved:true}},function(err)  {
        if(err){
          res.send({error:true})
          return;
        }
          res.send({activated:true})
        
      })
    })
    router.get('/childPolicy',ensureAuth,(req,res,next)=>{
      Courses.findOne({courseTitle:'Child Protection Policy'}).select({_id:1}).exec(function(err,courses){
       if(err){
         console.log(err)
         res.send({error:true})
       }
       if(!courses){
         res.send({message:'Course not found'})
         return;
       } 
       if(courses){
         console.log(courses)
         console.log(req.user._id +'ss')
        enrollment.find({$and:[{courseId:courses._id},{_userId:req.user._id}]}).exec(function(err,enrollments){
          if(err){
            console.log(err)
            res.send({error:true})
            return;
          }
          if(enrollments){
            console.log(enrollments)
            res.send({enrollments})
          }
        })
       }
      })
    })
    
    router.get('/childProtect',ensureAuth,(req,res,next)=>{
      res.sendFile(path.resolve(__dirname, '../views', 'index.html'));
    })
    
router.get('/createmeadmin',function(req,res,next){
  var newUser =new User({
    firstName:'Shoaib',
    lastName:'Noor',
    email:'shoaib@msgenesis.com',
    type:'admin',
    nationality:'Pakistani'
  })
  newUser.save(function(err){
    if(err){
      res.send({error:true})
      return;
    }
    res.redirect('/')
  })
})

    router.get('/childprotectionpolicy',ensureAuth2,function(req,res,next){
      var newCourse=new Courses({
        courseTitle:'Child Protection Policy',
        QNo:8,
        description:'This training will let you know about child protection policies',
      })
      newCourse.save(function(err){
        if(err){
          console.log(err)
          res.send(err)
          return;
        }
        res.send({save:true})
      })
    })
    
    router.post('/deactivateUser',ensureAuth2,(req,res,next)=>{
      
      User.findOneAndUpdate({_id:req.body.id},{$set:{approved:false}},function(err){
          if(err){
            console.log(err)
            res.send({error:true})
            return;
          }
            res.send({deactivate:true})
        })
      })
router.get("/childProtect",function(req,res,next){
  res.sendFile(path.resolve(__dirname, '../views', 'index.html'));
})
router.get("/check2",function(req,res,next){
  res.sendFile(path.resolve(__dirname, '../views', 'index.html'));
})  
  router.get('/search',ensureAuth2,(req,res,next)=>{
  User.findOne({email:req.query.email},function(err,user){
    if(err){
      res.send({error:true})
      return;
    }
    if(!user){
      res.send({message:true})
      return;
    }
      res.send({user})
  })
})


  router.get('/learn',ensureAuth,(req,res,next)=>{
   enrollment.find({_userId:req.user_id},function(err,enroll){
       if(err){
         res.send({error:true})
         return;
       }
       if(!enroll){
         res.send({message:'You are not enrolled in any course'})
         return;
       }
       res.send({enroll})
     })
   })
   

  

  
  router.post('/editProfile',ensureAuth,(req,res,next)=>{
    User.findOneAndUpdate({_id:req.user._id},{$set:{firstName:req.body.FirstName,lastName:req.body.LastName,nationality:req.body.nationality}
  
    },function(err){
      if(err){
        res.send({error:true})
        return;
      }
      res.send({save:true})
  
    })
  })
  
router.post('/changePassword',ensureAuth,(req,res,next)=>{
  console.log(req.body)
  User.findOne({_id:req.user._id},function(err,user){
    if(err){
      res.send({error:true})
      return;
    }
    if(user){
      user.checkPassword(req.body.password,function(err,isMatch){
       if(err){
         console.log(err)
        res.send({err:true}).status(500);
          
         return;
       } 
       if(isMatch){
        user.password=req.body.newPassword;
        user.save(function(err){
          if(err){
            console.log(err)
            res.send({err:true}).status(401);
            return;
          }
          res.send({save:true})
        });
       }
      })
     }
    
  })
})

router.post('/sendEmail',(req,res,next)=>{
  var email=req.body.email,name=req.body.name,
  subject=req.body.subject,message=req.body.message;
  
  var options = {
    auth: {
      api_user: 'shoaib95',
      api_key: '123456fga'
    }
  }
  
  var client = nodemailer.createTransport(sgTransport(options));
  var email = {
    from: email,//'<no-reply@actionaid.com>',
    to: 'shoaibnoor95@hotmail.com',
    subject: subject,
    text:'Email: '+email+"<br/>"+"Name: "+name+"<br/>Message: "+message+"<br/>IP ADRESS: "+req.ip,
  };
  
  client.sendMail(email, function(err, info){
      if (err){
        console.log(err)
        return res.send({message:err.message})
      }
      res.send({send:true})
    })
  })

  router.get('/coursesContent',ensureAuth,function(req,res,next){
    Content.findOne({_id:req.query._coursesid},function(err,content){
      if(err){
        res.send({error:true})
        return;
      }
      if(!content){
        res.send({message:'Course does not found'})
        return;
      }
        res.send({content})
    })
  })

router.post('/visibleCourse',ensureAuth2,function(req,res,next){
  Courses.findOneAndUpdate({_id:req.body.id},{$set:{availablity:true}},function(err){
    if(err){
      res.send({error:true});
      return;
    }
      res.send({visible:true})
  })
})


router.post('/invisibleCourse',ensureAuth2,function(req,res,next){
  Courses.findOneAndUpdate({_id:req.body.id},{$set:{availablity:false}},function(err){
    if(err){
      console.log(err)
      res.send({error:true});
      return;
    }
      res.send({notVisible:true})
  })
})

  


 router.get('/invisible',ensureAuth2,function(req,res,next){
   Courses.find({_id:req.body._id},function(err,courses){
     if(err){
       res.send({error:true});
       return;
     }
       res.send({courses})
   });
 })
 
router.post('/enrollCourses',ensureAuth,(req,res,next)=>{
 let enrollmentUser=[];
 enrollmentUser.push(req.user._id)
  var enrollCourse=new enrollment({
   _userId:enrollmentUser,
   status:0,
   courseId:req.body.courseId,
 })
 
 enrollCourse.save(function(err){
   if(err){
     res.send({error:true});
     return;
   }
   req.user.enrollments.push(enrollCourse._id)
   req.user.save(function(err){
    if(err){
      console.log(err)
      res.send({err:true})
      return;
    }
        res.send({enroll:true});
   })
   }) 
  })
router.get('/getUser',ensureAuth,(req,res,next)=>{
  let user=req.user;
  enrollment.find({_userId:req.user._id}).select({courseId:1}).exec(function(err,courseId){
  if(err){
   console.log(err) 
    res.send({err})
    return;
  }
  
  Courses.find({availablity:true}).select({description:1,courseTitle:1,expectedTimeToRead:1,completed:1}).exec(function(err,courses){
    if(err){
      res.send({err:true})
      return;
    }
   
    var coursesArray=courseId.map((el)=>{return el.courseId})
    console.log(coursesArray)
    res.send({user,courses,courseId:coursesArray})  
   })
  })
})

 router.post('/progress',ensureAuth,(req,res,next)=>{
  console.log(req.body)
  enrollment.findOneAndUpdate({_id:req.body.enroll},{$inc:{progress:1}},function(err){
    if(err){
      console.log(err)
      res.send({error:true})
      return;
    }
      res.send({progressUpdate:true})
  })
 })
 router.get('/isAuth',function(req,res,next){
   if(req.user){
     res.send({isAuth:true})
   }
   else{
    res.send({isAuth:false})
     
   }
 })
 router.post('/finish',ensureAuth,(req,res,next)=>{
   enrollment.findByIdAndUpdate({_id:req.body.enroll},{$set:{completed:true}},function(err,enroll){
     if(err){
       console.log(err)
       res.send({error:true})
      return;
      }
      Courses.findOneAndUpdate({_id:req.body.courseId},{$push:{completed:req.user._id}},function(err){
        if(err){
          res.send({error:true})
          return;
        }
        res.send({finish:true})
      })
   })
 })
 router.get('/users',ensureAuth2,(req,res,next)=>{
   User.find({type:{$ne:'admin'}}).select({firstName:1,lastName:1,createdAt:1,email:1,approved:1}).exec(function(err,user){
     if(err){
       res.send({error:true})
       return;
     }
     if(!user){
       res.send({message:true})
     }
     if(user){
       res.send({user})
     }
   })
 })


 

  router.get('/passwordReset',(req,res,next)=>{    
      res.sendFile(path.resolve(__dirname, '../views', 'index.html'));
  });

 

   router.post('/resetPassword',(req,res,next)=>{
     User.findOne({email:req.body.email}).select({"email":1})
   .exec(function(err,user){
     if(err){
       res.send({error:err.message})
       return;
     }
     if(!user){
       res.send({message:'No user exists with this email address'})
       return;
     }
     var token = new Token({
       _userId: user._id,
       token:email+crypto.randomBytes(16).toString('hex')
     });
     token.save(next);
   ejs.renderFile(__dirname + '/templates/template2.ejs',{token:token.token}, (err, data) => {
       
       if (err) {
        return res.send({message:err.message})  
       }
       else {
       
         var options = {
           auth: {
             api_user: 'shoaib95',
             api_key: '123456fga'
           }
         }
         
         var client = nodemailer.createTransport(sgTransport(options));
         var email = {
           from: '<no-reply@tutorns.com>',
           to: 'shoaibnoor95@hotmail.com',
           subject: 'Tutons account confirmation',
           html: data
         };
         
         client.sendMail(email, function(err, info){
             if (err){
               return res.send({message:err.message})
             }
     
           })
         }
       })
                  res.send({mail:true})
     })
   })



router.get('/course',ensureAuth,(req,res,next)=>{
  Courses.find({}).select({heading:1,coverPicture:1,link:1}).exec(function(err,courses){
    if(err){
      res.send({error:true});
      return;
    }
    if(!courses){
      res.send({message:'No courses found'});
      return;
    }
    res.send({courses})
    return;
 
  })
})
router.get('/passwordResetToken',(req,res,next)=>{
    
  Token.findOne({ "token": req.query.id }, function (err, token) {
    if(err){
       res.send({danger:true})
       return;
    }
    if (!token) 
    {
      res.send({danger:true})
      return; 
    }
   
    User.findOne({ _id: token._userId }).select({"emailAuth":1}).exec((err, user)=> {
      if (!user) 
      { 
        res.send({danger:true})
        return;
    }
          if (user.emailAuth)
          { 
            res.send({success:true});
            return;
          }
                  
      user.emailAuth = true;
      user.save(function (err) {
        if (err) { 
              res.send({ danger: true}); 
              return;
      }
              res.send({success:true})
        });
      });
    });
  })
router.get('/password_Reset/274sakldajdaskjaskld23280923089213893kdasjklasjddljkdslskdsladkjasklasdjdssjdkls2398023sknasddasjasdgdas/*',(req,res,next)=>{

  res.sendFile(path.resolve(__dirname, '../views', 'index.html'));

});



  
  router.get('/getSingle',ensureAuth2,(req,res,next)=>{
    User.findOne({_id:req.query.id},function(err,user){
      if(err){
        res.send({err:true});
        return;
      }
      if(!user){
        res.send({message:true})
        return;
      }
      enrollment.find({_userId:req.query.id}).select({courseId:1}).exec(function(err,enrollments){
        if(err){
          res.send({err:true})
          return;
        }
        if(!enrollments){
          res.send({user})
          return;
        }
        if(enrollments){
          Courses.find({_id:enrollments.courseId}).select({courseTitle:1}).exec(function(err,courses){
            if(err){
              res.send({error:true})
              return;
            } 
            if(courses){
              res.send({user,courses})
            }
          })
        }
      })
    })
  })
  router.get('/*',function(req,res,next){
    res.sendFile(path.resolve(__dirname, '../views', 'index.html'));
  })
  
module.exports=router; 
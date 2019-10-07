const express=require('express');
const app=express();
const passport=require('passport');
const path=require('path');
var bodyParser=require('body-parser');
const session=require('express-session');
const helmet=require('helmet');
const normalRoutes=require('./routes/normalRoutes');
var mongoose=require('mongoose');
const setuppassport=require('./passport/setuppassport');
var cookieParser=require('cookie-parser');
const connectMongo=require('connect-mongo');
mongoose.Promise=global.Promise;
const MongoStore=connectMongo(session);
setuppassport();
var addr=process.env.MONGODB_URI||'mongodb://127.0.0.1/test2';
var promise=mongoose.connect(addr);
app.use(helmet({
    hidePoweredBy:true,
    noSniff:true,
    xssFilter:true
}));
app.use(express.static("public"));
app.set('view engine',"ejs");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());
const sess = {
    resave: true,
    saveUninitialized: true,
    secret: '$@##(*$*$#&#$&*#*()',
    proxy: false,
    name: "sessionId",
    cookie: {
        httpOnly: true,
        secure: false
    },
    store: new MongoStore({
        url:addr,
        autoReconnect: true
    })
}
app.use((req,res,next)=>{
    console.log(req.cookies);
    next();
})
let port =process.env.PORT ||3000
app.use(session(sess));

app.use(passport.initialize());
app.use(passport.session());
app.use(normalRoutes);
app.use('*',function(req,res,next){
    res.sendFile(path.resolve(__dirname, '../views', 'index.html'));
  })
  
app.listen(port,()=>{
    console.log('Server is runing on port 3000');
})
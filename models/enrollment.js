const mongoose=require('mongoose');
const enrollSchema=mongoose.Schema({
    courseId:{type:mongoose.Schema.Types.ObjectId,refs:'courses'},
    progress:{type:Number,default:0},
    completed:{type:Boolean,default:false},
    enrollmentDate:{type:Date,default:Date.now()},
    completitionDate:{type:Date},
    _userId:String,
})
const enrollment=mongoose.model('enrollment',enrollSchema);
module.exports=enrollment;
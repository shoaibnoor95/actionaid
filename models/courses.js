const mongoose=require('mongoose');
const courseSchema=mongoose.Schema({
    courseTitle:String,
    createdAt:{type:Date,default:Date.now()},
    QNo:{type:Number},
    link:{type:String},
    expectedTimeToRead:{type:String,default: '2 Days'},
    description:{type:String},
    completed:[String],
    availablity:{type:Boolean,default:true}
})
var course=mongoose.model('courses',courseSchema);
module.exports=course;
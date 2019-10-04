const mongoose=require('mongoose');
const contentSchema=mongoose.Schema({
    ContentHeading:{type:String,required:true},
    firstHeading:{type:String},
    bulletHeadings:[String],
    broadImg:Buffer,

    secondHeading:String,
    sideImg:String,
    questions:[String],
    answers:[String],
    headingImg:[Buffer],
    footerHeading:String,
    footerQuestsion:[String],
    footerAnswers:[String],
    footerImg:[Buffer],
    buttonQuestionTxt:String,
})
const content=mongoose.model('content',contentSchema);
module.exports=content;
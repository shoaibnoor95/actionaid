import React from 'react';
import Axios from 'axios';
import History from './History';
import $ from 'jquery'
import './wp-content/cache/autoptimize/1/css/autoptimize_28334e455278b10593abdc19264b049e.css';
import './wp-includes/css/dashicons.min.css';
import './styles.css';
import './wp-content/cache/autoptimize/1/css/autoptimize_single_8badfcbd466da054e5b200be42433b87.css';
import {ModalBody,ModalHeader,ModalFooter,ModalDialog,Button as ModalButton} from 'react-bootstrap';

export default class Check2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
           question:8,
           atempt:0,
           courseName:'Child Protection Policy',
           hashes:['aa','bb','cc','dd','ee','ff','gg','hh'],
            contents:[
            'Does the organization include CPP a near reporting...',
            'Does the organization provide inclusion and regular anual referer... ',
            'Do the organisation`s CPP and human resource policies include a stipulation that people...',
            'Does the organisation have evidence that the CPP has been regularly reviewed...',
            'Does the organisational risk register include an assessment of risks to children...',
            'Does the organisation require documented criminal record checks for personnel in contact...',
            'Do the organisation`s employment contracts for personnel/consultants contain provisions...',
            'Does the organisation have a CP Code of Conduct (or Policy) that outlines the standards ...'],
           
            points:['1-7','1-3','1-3','1','1','1-2','1','1'],
            _enrollmentId:'',
            completed:false,
            courseId:'',
            headerModal:false
                
        }
    }
    componentDidMount(){

        Axios({
            withCredentials:true,
            method:'get',
            params:{
                courseName:this.state.courseName
            },
            url:'/childPolicy' 
        }).then(data=>{
            console.log(data.data)
            this.setState({
            atempt:data.data.enrollments[0].progress,   
            _enrollmentId:data.data.enrollments[0]._id,   
            courseId:data.data.enrollments[0].courseId
        })
        console.log(this.state.atempt)
        })
       
    }
    logout(){
        Axios({url:'/logout',method:'get',withCredentials:true})
        .then(data=>{
          console.log(data.data)
          if(data.data.logout){
          History.push('/')
          window.location.reload();
        }
        })
        .catch(err=>{
          console.log(err);
        })
        }
        upDateCount(id,e){
            e.preventDefault();
            Axios({
                withCredentials:true,
                method:'post',
                url:'/progress',
                data:{
                    enroll:this.state._enrollmentId
                }
            })

            .then(data=>{
                console.log(data.data)
           if(data.data.progressUpdate)
               { this.setState({
                    atempt:this.state.atempt+1,
                })
               } 
            })
            console.log(this.state.atempt)
        }
        onFinish(e){
            e.preventDefault();
            Axios({
                withCredentials:true,
                method:'post',
                data:{enroll:this.state._enrollmentId,
                    courseId:this.state.courseId},
                url:'/finish'
            })
            .then(data=>{
              if(data.data.finish){
                  History.push('/dashboard');
                  window.location.reload();
              }
            })
        }
    render(){
        const Contents=()=>{
          let cont=  this.state.contents.map((el,i)=>{
                
           if(this.state.atempt==i){

            return(
                <li key={i} className="course-item course-item-lp_lesson course-item-8930 current item-preview has-status course-lesson" style={{border:'3px solid #efefef' ,backgroundColor: '#fff',borderRadius:'20px 20px'}} data-type="lp_lesson">
                    <div className="meta-left"> <span className="course-format-icon"><i className="fa fa-file-o"></i></span><div className="index"><span className="label">Point  </span>1-7</div></div> 
                    <a className="lesson-title course-item-title button-load-item"  href={"#"+this.state.hashes[i]}>{el}  </a> <span className="meta duration">10 min</span><div className="course-item-meta"> 
                    <a title="Previews" className="lesson-preview button-load-item" href="#" data-id="8930"  style={{color:'orange'}} color="green" data-complete-nonce="31f4bff35e"> <i className="fa fa-circle-o" data-preview="Preview"></i> </a></div></li>
                  )
        }
        else{
            if(this.state.atempt>i){
                return(

                 <li li key={i} className="course-item course-item-lp_lesson course-item-8930 current item-preview has-status course-lesson" style={{border:'3px solid #efefef' ,backgroundColor: '#fff',borderRadius:'20px 20px'}} data-type="lp_lesson">
                 <div className="meta-left"> <span className="course-format-icon"><i className="fa fa-file-o"></i></span><div className="index"><span className="label">Point  </span>1-7</div></div> 
                 <a className="lesson-title course-item-title button-load-item" href="#">{el} </a> <span className="meta duration">10 min</span><div className="course-item-meta"> 
                 <a title="Previews" className="lesson-preview button-load-item" href="#" data-id="8930" data-complete-nonce="31f4bff35e"> <i className="fa fa-check" style={{color:'green'}} data-preview="Preview"></i> </a></div></li>
                    )
        }
        else{
            return(
                <li key={i} className="course-item course-item-lp_lesson course-item-8930 current item-preview has-status course-lesson" style={{border:'3px solid #efefef' ,backgroundColor: '#fff',borderRadius:'20px 20px'}} data-type="lp_lesson">
                 <div className="meta-left"> <span className="course-format-icon"><i className="fa fa-file-o"></i></span><div className="index"><span className="label">Point  </span>1-7</div></div> 
                 <a className="lesson-title course-item-title button-load-item" href="#">{el }  </a> <span className="meta duration">10 min</span><div className="course-item-meta"> 
                 <a title="Previews" className="lesson-preview button-load-item" href="#" data-id="8930" data-complete-nonce="31f4bff35e"> <i className="fa fa-question-circle" style={{color:'red'}} data-preview="Preview"></i> </a></div></li>
                
            )
        }
        
        }
    })
    return cont;
            
        }
        return(
            <div>
            <div data-rsssl="1" className={this.state.myClass} id="thim-body">
        {this.state.loading?
                <div id="preload">
                <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                </div></div>
               :
                         <div>
                             {this.state.headerModal?          
                    <ModalDialog open={true} >
                      <ModalHeader closeButton onClick={()=>{this.setState({headerModal:false})}} ></ModalHeader>
                      <ModalButton className="btn btn-lg btnClass" style={{width:'100%'}} onClick={()=>{History.push('/dashboard');window.location.reload(); }}>Dashboard </ModalButton>
                      <br/>
                      <ModalButton className="btn btn-lg btnClass" style={{width:'100%'}} onClick={()=>{History.push('/'); window.location.reload();}}>Home </ModalButton>
                    </ModalDialog>:<span/>}

              {console.log(this.state.courseId+'sss')}
              
              <div id="wrapper-container" className="wrapper-container">
                                    <div className="content-pusher">
                               
                            {/* <Navbar/> */}
                            <header id="masthead" className="site-header affix-top bg-custom-sticky header_overlay header_v1"><div id="toolbar" className="toolbar"><div className="container"><div className="row"><div className="col-sm-12"><div className="toolbar-container"><aside id="text-2" className="widget widget_text">
        
        <div className="textwidget"><div className="thim-have-any-question"> Have any question?<div className="mobile"><i className="fa fa-phone"></i><a href="tel:00123456789" className="value">(00) 123 456 789</a></div><div className="email"><i className="fa fa-envelope"></i><a href="#"><span className="__cf_email__" data-cfemail="39515c555556795c5d4c5458175a5654">[info@actionaid.com]</span></a></div></div></div></aside><aside id="login-popup-3" className="widget widget_login-popup"><div className="thim-widget-login-popup thim-widget-login-popup-base template-base"><div className="thim-link-login thim-login-popup"> <a className="login js-show-popup" onClick={this.logout.bind(this)} href="#" >Logout</a></div></div></aside></div></div></div></div></div><div className="thim-nav-wrapper container"><div className="row"><div className="navigation col-sm-12"><div className="tm-table"><div className="width-logo table-cell sm-logo"> <a href="/" title="Action Aid" rel="home" className="no-sticky-logo"><img src={"/action_aid.png"} alt="Action Aid"/></a>
            <a href="#" rel="home" className="sticky-logo">
                <img src="./wp-content/uploads/2015/11/logo-sticky.png" alt=" "/></a></div><nav className="width-navigation table-cell table-right">
                    <ul className="nav navbar-nav menu-main-menu">
                 
                    
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7682 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-builder"><div className='tc-megamenu-wrapper tc-megamenu-holder mega-sub-menu sub-menu'><div id="pl-tc-megamenu-7682" className="panel-layout"><div id="pg-tc-megamenu-7682-0" className="panel-grid panel-has-style"><div className="thim-megamenu-row panel-row-style panel-row-style-for-tc-megamenu-7682-0"><div id="pgc-tc-megamenu-7682-0-0" className="panel-grid-cell"><div id="panel-tc-megamenu-7682-0-0-0" className="so-panel widget widget_nav_menu panel-first-child panel-last-child" data-index="0"><div className="menu-about-courses-container">
 </div></div></div>
<div id="pgc-tc-megamenu-7682-0-1" className="panel-grid-cell"><div id="panel-tc-megamenu-7682-0-1-0" className="so-panel widget widget_courses panel-first-child panel-last-child" data-index="1"><div className="thim-widget-courses thim-widget-courses-base template-megamenu-v3"><div className="thim-course-megamenu"><div className="lpr_course course-grid-1">
<div className="course-item"><div className="course-thumbnail"><a className="thumb" href="#"><img src={require("./wp-content/uploads/2015/11/course-4-450x450.jpg")} alt="Introduction Action Aid &#8211; LMS plugin" title="course-4" width="450" height="450"/></a></div><div className="thim-course-content"><h2 className="course-title"> <a href="#"> Introduction LearnPress &#8211; LMS plugin</a></h2><div className="course-meta"><div className="course-price" itemProp="offers" itemScope="" itemType="http://schema.org/Offer">
<div className="value  free-course" itemProp="price"> Free</div><meta itemProp="priceCurrency" content="USD" /></div></div> <a className="course-readmore" href="#">Read More</a></div></div></div></div></div></div></div>
<div id="pgc-tc-megamenu-7682-0-2" className="panel-grid-cell"><div id="panel-tc-megamenu-7682-0-2-0" className="so-panel widget widget_single-images panel-first-child panel-last-child" data-index="2"><div className="thim-widget-single-images thim-widget-single-images-base template-base"><div className="single-image text-left">
<a target="_self" href="#"><img src={require("./wp-content/uploads/2016/02/megamenu.jpg")} width="252" height="359" alt="" /></a></div></div></div></div></div></div></div></div>
</li>
<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-99 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="/dashboard" className="tc-menu-inner">DASHBOARD</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1702 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="/" className="tc-menu-inner">Home</a></li><li className="menu-right"><ul><li id="courses-searching-3" className="widget widget_courses-searching"><div className="thim-widget-courses-searching thim-widget-courses-searching-base template-overlay-v2"><div className="thim-course-search-overlay"><div className="courses-searching layout-overlay"><div className="search-popup-bg"></div><ul className="courses-list-search list-unstyled"></ul></div></div></div></li></ul></li></ul></nav><div className="menu-mobile-effect navbar-toggle" 
onClick={()=>{this.setState({headerModal:true})}} data-effect="mobile-effect">


 <span className="icon-bar"></span> <span className="icon-bar"></span>
  <span className="icon-bar"></span></div></div></div></div></div></header>
                            <div id="main-content">

                                <section className="content-area">
                                <div className="top_heading  _out">
                                <div className="top_site_main " style={{color:' #ffffff',minHeight:'135px'}}> 
                                <span className="overlay-top-header" style={{backgroundColor:"rgba(0,0,0,0.5)"}}></span>
                                </div>
                                    </div>
                                   
                          
            

  {/* <div className="container site-content no-padding-top"> */}
      <br/><br/>
  <ul className="curriculum-sections" style={{textAlign:'center',marginLeft:'45px',marginRight:'45px'}}>
                
                    <li className="section" style={{listStyleType:'none'}} id="section-section-1-basic-nodejs-12" data-id="section-1-basic-nodejs-12" data-section-id="12"><h4 className="section-header"> 
                    <span className="collapse"></span> Child Protection Policy <span className="meta"> 
                    <span className="step"></span> </span></h4><ul style={{listStyleType:'none',border:'1px solid #efefef'}} className="section-content">
                    
             <Contents/>
                    
                        
                        </ul></li>
                        
                        
                        
                        </ul>
                            <br/><br/>

                            {this.state.atempt==0?
                                <div id="aa"  style={{fontSize:'120%',marginLeft:'18px',marginRight:'5%',overflow:'auto'}}>
                           <b>(a) </b> Does the organisation have a Child Protection Policy (CPP) in place, covering all key personnel? This should include staff, Board, volunteers, consultants/contractors and downstream partners' personnel. The CPP should be approved by the Board/Management committee.   
                            <br/><br/>
                            <b>(b)</b> Does the organisation's CPP aligns with local laws governing child protection in their country?
                            <br/><br/>
                            <b>(c)</b> Is the organisation's CPP available in the local language?
                            <br/><br/>
                            <b>(d)</b> Are the personnel to which the CPP pertains to, both within the organisation and its partners, made aware of the CPP and what is expected of them?
                            <br/><br/>
                            <b>(e)</b> Are the personnel covered by the CPP, both in your organisation and partner organisations, required to sign a Child Protection Code of Conduct or Policy, confirming that they have read, understood and agreed to abide by the CPP?
                            <br/><br/>
                            <b>(f)</b> Does the organisation have a documented initial risk assessment of itself and the way its activities connect with/impact children, as well as the potential risks to children, and mitigation strategies? Does the organisation employs a similar analysis for downstream partners?
                           <br/><br/>
                            <b>(g)</b> Does the organisation have a documented plan for downstream partners to meet minimum CP standards?
                            <br/><br/>
                            <b>{'Ans:'}</b> The organisation has a Child Protection Policy (CPP) that applies to the organisation’s personnel and contractors as well to downstream partners’ personnel and contractors. All downstream organisations and individuals engaged by those organisations must comply with the child protection standards, and demonstrate this by signing a CP Code of Conduct to demonstrate their commitment to child protection. (Please provide link to completed Child Protection Minimum Standards Check)
                            <br/><br/><br/>
                            <div style={{textAlign:'center'}}>
                            <button className="btn btn-primary btn-lg btnClass" onClick={this.upDateCount.bind(this,1)}>Next <i className="fa fa-check"></i></button>
                            </div>
                            <br/>
                            <div id="course-item-content-footer"></div></div>:<span/>}

                            {this.state.atempt==2?
                                <div id="cc"  style={{fontSize:'120%',marginLeft:'18px',marginRight:'5%',overflow:'auto'}}>
                           <b>(a)</b> Do the organisation's CPP and human resource policies include a stipulation that people that pose an unacceptable risk to children will not be employed by the organisation?.   
                            <br/><br/>
                           
                            <b>{'Ans:'}</b> The organisation’s Child Protection Policy includes a commitment to preventing a person from working with children if they pose an unacceptable risk to children
                            <br/><br/><br/>
                            <div style={{textAlign:'center'}}>
                            <button className="btn btn-primary btn-lg btnClass" onClick={this.upDateCount.bind(this,1)}>Next <i className="fa fa-check"></i></button>
                            </div>
                            <br/>
                            <div id="course-item-content-footer"></div></div>:<span/>}    
                            {this.state.atempt==1?
                                <div id="bb"  style={{fontSize:'120%',marginLeft:'18px',marginRight:'5%',overflow:'auto'}}>
                            <b>(a)</b> Does the organisation's CPP include a clear reporting and complaints handling process and sanctions for breaches of the policy and Code of Conduct? Does this include processes for reporting of alleged breaches to local and safe Child Protection agencies in the organisation's country?  
                            <br/><br/>
                            <b>(b)</b> Does the organisation have documented evidence to demonstrate that personnel can raise concerns about a child's safety or wellbeing, or unacceptable behaviour by personnel? Can the organisation also demonstrate that sanctions are used when there are CPP breaches?
                            <br/><br/>
                            <b>(c)</b> Is the organisation's CPP and complaints reporting process publically communicated and accessible to community members? Additionally, is communication about the CPP complaints process in local and child-friendly language?
                            <br/><br/>
                            <b>{'Ans:'}</b>The organisation’s Child Protection Policy includes a documented reporting procedure for child exploitation and abuse allegations and policy non-compliance, including available sanctions for breaches.
                            <br/><br/><br/>
                            <div style={{textAlign:'center'}}>
                            <button className="btn btn-primary btn-lg btnClass" onClick={this.upDateCount.bind(this,2)}>Next <i className="fa fa-check"></i></button>
                            </div>
                           <br/>
                            <div id="course-item-content-footer"></div></div>:<span/>}
                            
                            
                            {this.state.atempt==3?
                                <div id="dd"  style={{fontSize:'120%',marginLeft:'18px',marginRight:'5%',overflow:'auto'}}>
                           <b>(a) </b> Does the organisation have evidence that the CPP has been regularly reviewed at least every 5 years?   
                            <br/><br/>
                            
                            <b>{'Ans:'}</b> The organisation’s Child Protection Policy is subject to regular review, at least every 5 years or earlier if needed
                            <br/><br/><br/>
                            <div style={{textAlign:'center'}}>
                            <button className="btn btn-primary btn-lg btnClass" onClick={this.upDateCount.bind(this,1)}>Next <i className="fa fa-check"></i></button>
                            </div>
                            <br/>
                            <div id="course-item-content-footer"></div></div>:<span/>}
                            {this.state.atempt==4?
                                <div id="ee"  style={{fontSize:'120%',marginLeft:'18px',marginRight:'5%',overflow:'auto'}}>
                           <b>(a) </b>Does the organisational risk register include an assessment of risks to children from the organisation’s programs and other activities, in addition to strategies to mitigate such risks, and evidence that the register is regularly reviewed/updated?.   
                            <br/><br/>
                            
                            <b>{'Ans:'}</b> The organisation undertakes a risk assessment to reduce the risk of any child being harmed as a result of operations or activities.  The assessment must identify risks, and document steps being taken to reduce or remove those risks
                            <br/><br/><br/>
                            <div style={{textAlign:'center'}}>
                            <button className="btn btn-primary btn-lg btnClass" onClick={this.upDateCount.bind(this,1)}>Next <i className="fa fa-check"></i></button>
                            </div>
                            <br/>
                            <div id="course-item-content-footer"></div></div>:<span/>}
                            {this.state.atempt==5?
                                <div id="ff"  style={{fontSize:'120%',marginLeft:'18px',marginRight:'5%',overflow:'auto'}}>
                          
                          <b>(a)</b> Does the organisation require documented criminal record checks for personnel in contact with children? If it is not possible to obtain a reliable criminal record check in the organisation's country, does the organisation mandate that a statutory declaration or local legal equivalent outlining/disclosing any charges of children abuse or exploitation must be obtained? (Checks must be conducted for every country in which the individual has lived for 12 months or more over the past 5 years, and for the individual’s countries of citizenship)
                          <br/><br/>
                        
                         <b>(b)</b> Do the organisation's interview plans incorporate behavioural-based interview questions that are specific to positions that involve working with children?
                         <br/><br/>
                          
                         <b>(c)</b> Does the organisation have documented verbal referee checks that assess the applicant’s suitability to work with children?
                         <br/><br/>
                          
                         <b>(d)</b> Does the organisation have documented evidence of its request to job applicants asking them to disclose whether they have been charged with child exploitation offences and their response?


                            <br/><br/>
                            <b>{'Ans:'}</b> The organisation has a Child Protection Policy (CPP) that applies to the organisation’s personnel and contractors as well to downstream partners’ personnel and contractors. All downstream organisations and individuals engaged by those organisations must comply with the child protection standards, and demonstrate this by signing a CP Code of Conduct to demonstrate their commitment to child protection. (Please provide link to completed Child Protection Minimum Standards Check)
                            <br/><br/><br/>
                            <div style={{textAlign:'center'}}>
                            <button className="btn btn-primary btn-lg btnClass" onClick={this.upDateCount.bind(this,1)}>Next <i className="fa fa-check"></i></button>
                            </div>
                            <br/>
                            <div id="course-item-content-footer"></div></div>:<span/>}
                            {this.state.atempt==6?
                                <div id="gg"  style={{fontSize:'120%',marginLeft:'18px',marginRight:'5%',overflow:'auto'}}>
                         <b>(a)</b> Does the organisation have a CP Code of Conduct (or Policy) that outlines the standards for acceptable and unacceptable behaviour in relation to the treatment of children?
                         <br/><br/>
                         <b>(b)</b> Does the organisation's CP Code of Conduct (or Policy) include guidance on the acceptable use of images?
                         <br/><br/>
                         <b>(c)</b> Does the organisation require all personnel covered by its CPP to sign the CPP Code of Conduct (or Policy). The organisation maintains a register documenting details of personnel and downstream partner’s personnel who have signed the CP Code of Conduct (or Policy).


                            <br/><br/>
                            <b>{'Ans:'}</b> The organisation has a Child Protection Code of Conduct in place that meets and builds on these minimum standards and outlines expected professional behaviours
                            <br/><br/><br/>
                            <div style={{textAlign:'center'}}>
                            <button className="btn btn-primary btn-lg btnClass" onClick={this.upDateCount.bind(this,1)}>Next <i className="fa fa-check"></i></button>
                            </div>
                            <br/>
                            <div id="course-item-content-footer"></div></div>:<span/>}
                            {this.state.atempt==7?
                             <div id="hh"  style={{fontSize:'120%',marginLeft:'18px',marginRight:'5%',overflow:'auto'}}>
                           <b>(a)</b> Do the organisation's employment contracts for personnel/consultants contain provisions for suspension while under investigation for a breach of the CPP or Code of Conduct and for dismissal if the investigation finds that they are guilty of breaching the CPP or Code of Conduct?
                            <br/><br/>
                            <b>{'Ans:'}</b> The organisation’s employment contracts contain provision for suspension or transfer to other duties of any employee who is under investigation and provisions to dismiss any employee after an investigation
                            <br/><br/><br/>
                            <div style={{textAlign:'center'}}>
                            <button className="btn btn-primary btn-lg btnClass" onClick={this.upDateCount.bind(this,1)}>Next <i className="fa fa-check"></i></button>
                            </div>
                            <br/>
                            <div id="course-item-content-footer"></div></div>:<span/>}
                            {this.state.atempt==8?
                                <div id="aa"  style={{fontSize:'120%',marginLeft:'18px',marginRight:'5%',overflow:'auto'}}>
                                 Congratulations You have just funished it!   
                            <br/><br/>
                            <div style={{textAlign:'center'}}>
                            <button className="btn btn-primary btn-lg btnClass" onClick={this.onFinish.bind(this)}>Finish <i className="fa fa-check"></i></button>
                            </div>
                            <br/>
                            <div id="course-item-content-footer"></div></div>:<span/>}
                            {this.state.completed?
                                <div id="aa"  style={{fontSize:'120%',marginLeft:'18px',marginRight:'5%',overflow:'auto'}}>
                                 You have already took this training!   
                            <br/><br/>
                            <div style={{textAlign:'center'}}>
                            <button className="btn btn-primary btn-lg btnClass" onClick={()=>{History.push('/dashboard');window.location.reload()}}>Goto Dashboard <i className="fa fa-check"></i></button>
                            </div>
                            <br/>
                            <div id="course-item-content-footer"></div></div>:<span/>}

      
      {/* </div> */}


        </section>
        <footer id="colophon" className=" site-footer"><div className="footer"><div className="container"><div className="row"><aside id="siteorigin-panels-builder-9" className="widget widget_siteorigin-panels-builder footer_widget">
            <div id="pl-w57e9cc2c86af4" className="panel-layout"><div id="pg-w57e9cc2c86af4-0" className="panel-grid panel-no-style">
                <div id="pgc-w57e9cc2c86af4-0-4" className="panel-grid-cell"><div id="panel-w57e9cc2c86af4-0-4-0" className="so-panel widget widget_nav_menu panel-first-child panel-last-child" data-index="5"><h3 className="widget-title">Courses</h3>
                <div className="menu-recommend-container">
                    <ul id="menu-recommend" className="menu">
                        <li id="menu-item-6718" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6718 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="#" className="tc-menu-inner">Child Protection Policies and procedure</a></li>
                       
                       
                        {/* <li id="menu-item-6719" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6719 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="#" className="tc-menu-inner">Counter Terrorism Policies </a></li><li id="menu-item-3429" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3429 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="#" className="tc-menu-inner"></a></li> */}
                     
                        {/* <li id="menu-item-5930" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5930 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="#" className="tc-menu-inner">Safeguarding and Prevention of Sexual Exploitation </a></li> */}
                        </ul></div></div></div></div></div></aside></div></div></div>
                        <div className="copyright-area"><div className="container"><div className="copyright-content"><div className="row"><div className="col-sm-6"><p className="text-copyright">Copyright<a className="color_primary" href="#" > ActionAid</a>  @ 2019 All right reserved.</p></div><div className="col-sm-6 text-right"><aside id="nav_menu-14" className="widget widget_nav_menu"><div className="menu-privacy-container"><ul id="menu-privacy" className="menu"><li id="menu-item-1765" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1765 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="#" className="tc-menu-inner">Privacy</a></li><li id="menu-item-1766" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1766 tc-menu-item tc-menu-depth-0 tc-menu-layout-default">
                          <a href="#" className="tc-menu-inner">Terms</a></li></ul></div></aside></div></div></div></div></div></footer></div></div> 
                        <a href="#" id="back-to-top"> <i className="fa fa-chevron-up" aria-hidden="true"></i> </a></div>                   
               
                
                
                    
           
           
           
            




                
      
      
      <div className="tp_chameleon_overlay"><div className="tp_chameleon_progress"><div className="tp_chameleon_heading">Processing!</div></div></div>
   </div>}
    </div>
    </div>
        )
    }
}
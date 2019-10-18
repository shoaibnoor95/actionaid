import React from 'react';
import {ModalBody,ModalHeader,ModalFooter,ModalDialog,Button as ModalButton} from 'react-bootstrap';
import {Form,FormControl,FormGroup,Col,Row,Checkbox,Button,Label} from 'react-bootstrap'
import Axios from 'axios';
import History from './History';
import './onStyle.css'
export default class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loading:true,
            toggleOne:true,
            toggleTwo:false,
            toggleThree:false,
            firstName:'',
            lastName:'',
            displayName:'',
            nationality:'',
            oldPassword:'',
            newPassword:'',
            confirmPassword:'',
            nationality:'',
            message:'',
            message2:'',
            mobileToggle:false,
            myClass:"bp-legacy lp_course-template-default single single-lp_course postid-5299 wp-embed-responsive theme-eduma eduma-child learnpress learnpress-page woocommerce-no-js pmpro-body-has-access group-blog thim-body-preload bg-boxed-image thim-popup-feature no-js",
            headerModal:false,
            course:[],
            myId:'',
            enrollments:[],
            competed:[],

            courseUrl:['childProtect','pseah','ctp']
          }
    }
    componentDidMount(){
       Axios({
         withCredentials:true,
         method:'get',
         url:'/getUser',
        })
       .then(data=>{
        console.log(data.data)
       this.setState({
        displayName:data.data.user.firstName+' '+data.data.user.lastName, 
        firstName:data.data.user.firstName,
        lastName:data.data.user.lastName,
        nationality:data.data.user.nationality,
        enrollments:data.data.courseId,
        myId:data.data.user._id,
        course:data.data.courses,
        
        loading:false
        })
        })
       .catch(err=>{

       })
      }
      onChangePassword(e){
        e.preventDefault();
        if(this.state.oldPassword.trim()!==""&&this.state.newPassword.trim()!==""||this.state.confirmPassword.trim()!=="" )
        {
        if(this.state.newPassword.trim()===this.state.confirmPassword.trim()){  
          Axios({
          withCredentials:true,
          method:'post',
          data:{
            password:this.state.oldPassword.trim(),
            newPassword:this.state.newPassword.trim()
          },
          url:'/changePassword'
        })
        .then(data=>{
          console.log(data.data)
          if(data.data.save){
            this.setState({
            message2:'Changes has been saved',
            message:"",
            oldPassword:'',
            newPassword:'',
            confirmPassword:'',
            })
          }
          else{
            this.setState({
              message2:'',
              message:"Password do not match",
              oldPassword:'',
              newPassword:'',
              confirmPassword:'',
              })
          }

        })
        .catch(err=>{
          this.setState({message:'Could not proceed with the request'})
        })
      }
      else{
        this.setState({message:'Password do not match'})
      }
      
      }
      else{
          this.setState({message:'Please fill all the fields'})
      }
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
      onEditProfile(e){
        e.preventDefault();
        if(this.state.firstName.trim()!==""&&this.state.lastName.trim()!==""||this.state.nationality.trim()!=="" )
        {
          Axios({
          withCredentials:true,
          method:'post',
          data:{
            FirstName:this.state.firstName.trim(),
            LastName:this.state.lastName.trim(),
            nationality:this.state.nationality.trim()
          },
          url:'/editProfile'
        })
        .then(data=>{
          if(data.data.save){
            this.setState({
            message2:'Changes has been saved',
            message:"",
            displayName:this.state.firstName+" "+this.state.lastName
          })
        }
        })
        .catch(err=>{
          this.setState({message:'Could not proceed with the request'})
        })
      }
      else{
          this.setState({message:'Please fill all the fields'})
      }
      }
      enroll(courseId,e){
        console.log(courseId)
        e.preventDefault();
        Axios({
          withCredentials:true,
          method:'post',
          url:'/enrollCourses',
          data:{courseId}
        })
        .then(data=>{
          if(data.data.enroll){
            if(data.data.course='Child Protection Policy')
            History.push('/childProtect')
            window.location.reload()
          }
          if(data.data.course='Prevention of Sexual Abuse, Exploitation and Harm')
          History.push('/pseah')
          window.location.reload()
        }
        })
      }
 
     render(){
    const Courses=()=>{
      let courses="";
      courses=this.state.course.map((el,i)=>{
        console.log(el['_id'] +'   sss'+ this.state.enrollments)
        if(el.completed.indexOf(this.state.myId)!=-1){
          return(
            <tr key={i}>
            <td>{el['courseTitle']} </td>
            <td>{el['description']}</td>
            <td>{el['expectedTimeToRead']}</td>
            
            <td>Completed</td>
            
          </tr>
          )
        }
        else{
        return(
          <tr key={i}>
          <td>{el['courseTitle']} </td>
          <td>{el['description']}</td>
          <td>{el['expectedTimeToRead']}</td>
          {this.state.enrollments.indexOf(el._id)==-1?
          <td><button className="btn btn-primary btn-sm btnClass" onClick={this.enroll.bind(this,el['_id'])}  ><i className="fa fa-book"></i> Enroll</button></td>
        : 
          <td><button className="btn btn-default btn-sm btnClass" onClick={()=>{History.push('/'+this.state.courseUrl[i]);window.location.reload()}}  ><i className="fa fa-book"></i> Continue</button></td>
          }
        </tr>
        )
        }
      })
      return courses
    }
      return(
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

                        				<div className="mobile-menu-wrapper" style={{visibility:'visible',backgroundClip:'content-box',display:'block',MozBackgroundClip:'content-box'}}><div className="mobile-menu-inner"><div className="icon-wrapper"><div  className="menu-mobile-effect navbar-toggle close-icon" onClick={()=>{this.setState(
                                  {headerModal:true})}} data-effect="mobile-effect"> 
                                  <span className="icon-bar"></span> 
						<span className="icon-bar"></span> <span className="icon-bar"></span></div></div>
						<nav className="mobile-menu-container mobile-effect"><ul className="nav navbar-nav">
							
                            
                            
                          
           
								 <li id="menu-item-99" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-99 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="/dashboard" className="tc-menu-inner">Dashboard</a></li><li id="menu-item-1702" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1702 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="/" className="tc-menu-inner">Home</a></li>
								 <li className="menu-right header_v1"><ul><li id="courses-searching-3" className="widget widget_courses-searching"><div className="thim-widget-courses-searching thim-widget-courses-searching-base template-overlay-v2"><div className="thim-course-search-overlay"><div className="courses-searching layout-overlay"><div className="search-popup-bg"></div>
									<ul className="courses-list-search list-unstyled"></ul></div></div></div></li></ul></li></ul></nav></div>
                  
                  </div>
                  {/* :<span/>} */}
                  
                  
                  <div id="wrapper-container" className="wrapper-container">
                                        <div className="content-pusher">
                                   
                                {/* <Navbar/> */}
                                <header id="masthead" className="site-header affix-top bg-custom-sticky header_overlay header_v1"><div id="toolbar" className="toolbar"><div className="container"><div className="row"><div className="col-sm-12"><div className="toolbar-container"><aside id="text-2" className="widget widget_text">
            <div className="textwidget"><div className="thim-have-any-question"> Have any question?<div className="mobile"><i className="fa fa-phone"></i><a href="tel:00123456789" className="value">(00) 123 456 789</a></div><div className="email"><i className="fa fa-envelope"></i><a href="#"><span className="__cf_email__" data-cfemail="39515c555556795c5d4c5458175a5654">[info@actionaid.com]</span></a></div></div></div></aside><aside id="login-popup-3" className="widget widget_login-popup"><div className="thim-widget-login-popup thim-widget-login-popup-base template-base"><div className="thim-link-login thim-login-popup"> <a className="login js-show-popup" href="#" onClick={this.logout.bind(this)}>Logout</a></div></div></aside></div></div></div></div></div><div className="thim-nav-wrapper container"><div className="row"><div className="navigation col-sm-12"><div className="tm-table"><div className="width-logo table-cell sm-logo"> <a href="/" title="Action Aid" rel="home" className="no-sticky-logo"><img src={"/action_aid.png"} alt="Action Aid"/></a>
                <a href="#" rel="home" className="sticky-logo">
                    <img src="./wp-content/uploads/2015/11/logo-sticky.png" alt=" "/></a></div><nav className="width-navigation table-cell table-right"><ul className="nav navbar-nav menu-main-menu">
                     
                        
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7682 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-builder"><div className='tc-megamenu-wrapper tc-megamenu-holder mega-sub-menu sub-menu'><div id="pl-tc-megamenu-7682" className="panel-layout"><div id="pg-tc-megamenu-7682-0" className="panel-grid panel-has-style"><div className="thim-megamenu-row panel-row-style panel-row-style-for-tc-megamenu-7682-0"><div id="pgc-tc-megamenu-7682-0-0" className="panel-grid-cell"><div id="panel-tc-megamenu-7682-0-0-0" className="so-panel widget widget_nav_menu panel-first-child panel-last-child" data-index="0"><div className="menu-about-courses-container">
     </div></div></div>
<div id="pgc-tc-megamenu-7682-0-1" className="panel-grid-cell"><div id="panel-tc-megamenu-7682-0-1-0" className="so-panel widget widget_courses panel-first-child panel-last-child" data-index="1"><div className="thim-widget-courses thim-widget-courses-base template-megamenu-v3"><div className="thim-course-megamenu"><div className="lpr_course course-grid-1">
<div className="course-item"><div className="course-thumbnail"><a className="thumb" href="#"><img src={require("./wp-content/uploads/2015/11/course-4-450x450.jpg")} alt="Introduction Action Aid &#8211; LMS plugin" title="course-4" width="450" height="450"/></a></div><div className="thim-course-content"><h2 className="course-title"> <a href="#"> Introduction LearnPress &#8211; LMS plugin</a></h2><div className="course-meta"><div className="course-price" itemProp="offers" itemScope="" itemType="http://schema.org/Offer">
<div className="value  free-course" itemProp="price"> Free</div><meta itemProp="priceCurrency" content="USD" /></div></div> <a className="course-readmore" href="#">Read More</a></div></div></div></div></div></div></div>
<div id="pgc-tc-megamenu-7682-0-2" className="panel-grid-cell"><div id="panel-tc-megamenu-7682-0-2-0" className="so-panel widget widget_single-images panel-first-child panel-last-child" data-index="2"><div className="thim-widget-single-images thim-widget-single-images-base template-base"><div className="single-image text-left">
<a target="_self" href="#"><img src={require("./wp-content/uploads/2016/02/megamenu.jpg")} width="252" height="359" alt="" /></a></div></div></div></div></div></div></div></div>
</li>
<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-99 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="/dashboard" className="tc-menu-inner">DASHBOARD</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1702 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="/" className="tc-menu-inner">Home</a></li><li className="menu-right"><ul><li id="courses-searching-3" className="widget widget_courses-searching"><div className="thim-widget-courses-searching thim-widget-courses-searching-base template-overlay-v2"><div className="thim-course-search-overlay"><div className="courses-searching layout-overlay"><div className="search-popup-bg"></div><ul className="courses-list-search list-unstyled"></ul></div></div></div></li></ul></li></ul></nav>
<div className="menu-mobile-effect navbar-toggle" onClick={()=>{
  this.setState({headerModal:true})}} data-effect="mobile-effect">
    
    
     <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span></div></div></div></div></div></header>
                                <div id="main-content">

                                    <section className="content-area">
                                    <div className="top_heading  _out">
                                    <div className="top_site_main " style={{color:' #ffffff',minHeight:'135px'}}> 
                                    <span className="overlay-top-header" style={{backgroundColor:"rgba(0,0,0,0.5)"}}></span>
                                    </div>
                                        </div>
                                       
                              
                

      <div className="container site-content no-padding-top"><div className="row"><main id="main" className="site-main col-sm-12 full-width"><article id="post-2780" className="post-2780 page type-page status-publish hentry pmpro-has-access"><div className="entry-content"><div id="pl-2780" className="panel-layout"><div id="pg-2780-0" className="panel-grid panel-no-style"><div id="pgc-2780-0-0" className="panel-grid-cell"><div id="panel-2780-0-0-0" className="so-panel widget widget_heading panel-first-child" data-index="0"><div className="panel-widget-style panel-widget-style-for-2780-0-0-0"><div className="thim-widget-heading thim-widget-heading-base template-base"></div></div></div><div id="panel-2780-0-0-2" className="so-panel widget widget_single-images panel-last-child" data-index="2"><div className="thim-widget-single-images thim-widget-single-images-base template-base"><div className="single-image text-center"><img src="../../3ek5k1tux0822q3g83e30fye-wpengine.netdna-ssl.com/wp-content/uploads/2015/11/become-teacher.jpg" width="1170" height="478" alt="" /></div></div></div></div></div>
			<div id="pg-2780-1" className="panel-grid panel-no-style"><div id="pgc-2780-1-0" className="panel-grid-cell"><div id="panel-2780-1-0-0" className="so-panel widget widget_heading panel-first-child panel-last-child" data-index="3"><div className="thim-widget-heading thim-widget-heading-base template-base">
				
<div className="sc_heading   text-center"><h3 style={{textTransform: "uppercase"}} className="title">Welcome {this.state.displayName}</h3><p className="sub-heading" >Hope you are doing well !</p>
	<span className="line"></span></div>
</div></div></div></div>
<div id="pg-2780-2" style={{width:'100%'}} className="panel-grid panel-no-style"><div id="pgc-2780-2-0" className="panel-grid-cell"><div id="panel-2780-2-0-0" className="so-panel widget widget_text panel-first-child panel-last-child" data-index="4"><div className="textwidget"><div className="learnpress">

    </div></div></div></div><div id="pgc-2780-2-1" style={{width:'100%'}} className="panel-grid-cell">
      
      <div id="panel-2780-2-1-0" style={{width:'100%'}} className="so-panel widget widget_tab panel-first-child panel-last-child" data-index="5">
       
        <div className="thim-widget-tab thim-widget-tab-base template-base" style={{width:'100%'}}>
          
          {this.state.toggleOne?
          <ul className="nav nav-tabs" role="tablist">
            
            <li role="presentation" className='active tab-col-3'><a href="#" role="tab"  data-toggle="tab"><i className="fa fa-user-plus"></i><span>My learning</span></a></li>
            <li role="presentation" className='tab-col-3'><a href="#" role="tab" onClick={()=>{this.setState({toggleOne:false,toggleTwo:true,toggleThree:false,message2:'',message:''})}} data-toggle="tab"><i className="fa fa-list-ol"></i><span>Edit Profile</span></a></li>
            <li role="presentation" className='tab-col-3'><a href="#" role="tab" onClick={()=>{this.setState({toggleThree:true,toggleTwo:false,toggleOne:false,message2:'',message:''})}} data-toggle="tab"><i className="fa fa-book"></i><span>Change Password</span></a></li>
            </ul>
         :<span/>}   
            {this.state.toggleTwo?
          <ul className="nav nav-tabs" role="tablist">
            
            <li role="presentation" className='tab-col-3'><a href="#" onClick={()=>{this.setState({toggleThree:false,toggleTwo:false,toggleOne:true,message2:'',message:'' })}} role="tab" data-toggle="tab"><i className="fa fa-user-plus"></i><span>My learning</span></a></li>
            <li role="presentation" className='active tab-col-3'><a href="#" role="tab" data-toggle="tab"><i className="fa fa-list-ol"></i><span>Edit Profile</span></a></li>
            <li role="presentation" className='tab-col-3'><a href="#" role="tab" onClick={()=>{this.setState({toggleThree:true,toggleTwo:false,toggleOne:false,message2:'',message:''})}} data-toggle="tab"><i className="fa fa-book"></i><span>Change Password</span></a></li>
            </ul>
         :<span/>}
            {this.state.toggleThree?
          <ul className="nav nav-tabs" role="tablist">
            
            <li role="presentation" className='tab-col-3'><a href="#" role="tab" onClick={()=>{this.setState({toggleThree:false,toggleTwo:false,toggleOne:true,message2:'',message:''})}} data-toggle="tab"><i className="fa fa-user-plus"></i><span>My learning</span></a></li>
            <li role="presentation" className='tab-col-3'><a href="#" role="tab" data-toggle="tab" onClick={()=>{this.setState({toggleThree:false,toggleTwo:true,toggleOne:false,message2:'',message:''})}}><i className="fa fa-list-ol"></i><span>Edit Profile</span></a></li>
            <li role="presentation" className='active tab-col-3'><a href="#" role="tab" data-toggle="tab"><i className="fa fa-book"></i><span>Change Password</span></a></li>
            </ul>
         :<span/>}
          

            <div className="tab-content">
{this.state.toggleOne?              
<div role="tabpanel" className="tab-pane active"  id="thim-widget-tab-11567690270-1-69">
    You are not enroll in any training !<br/>
    <h3>Avalialable Trainings</h3>
     <div style={{width:'90%', border:'1px solid #efefef'}}  className="row">
      <table border="0">
        <thead>
          <tr>
            <th>Course Title </th>
            <th>Course Description</th>
            <th>Expected Time </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
         <Courses/>
 
      </tbody>
      </table>
     
      
      
      
       </div>
     
     
     </div>




      :<span/>
      }
      {this.state.toggleThree?              
<div role="tabpanel" className="tab-pane active"  id="thim-widget-tab-11567690270-1-69">
    
<Form>
  <FormGroup controlId="formBasicText"> 
    <Label>Old Password</Label>
    <FormControl type="password" value={this.state.oldPassword} onChange={(e)=>{this.setState({oldPassword:e.target.value})}} placeholder="Enter Old Password" />
  </FormGroup>

  <FormGroup controlId="formBasicText">
    <Label>New Password</Label>
    <FormControl type="password" value={this.state.newPassword} onChange={(e)=>{this.setState({newPassword:e.target.value})}} placeholder="Enter New Password" />
  </FormGroup>
  <FormGroup controlId="formBasicText"> 
    <Label>Confirm Password</Label>
    <FormControl type="password" value={this.state.confirmPassword} onChange={(e)=>{
      
      this.setState({confirmPassword:e.target.value},()=>{

      
      if(this.state.confirmPassword!==this.state.newPassword){
        this.setState({message:'Password do not match',message2:''})
      }
      else{
        this.setState({message2:'Password match',message:''})

      }
    })  
    }} placeholder="Enter Confirm Password" />
  </FormGroup>
  <div style={{color:'red'}}>{this.state.message}</div>
  <div style={{color:'green'}}>{this.state.message2}</div>
  
   <Button variant="primary" onClick={this.onChangePassword.bind(this)} type="submit">
    Save
  </Button>
</Form>
      
     </div>
      :<span/>
      }
      {this.state.toggleTwo?              
<div role="tabpanel" className="tab-pane active"  id="thim-widget-tab-11567690270-1-69">
    <Form>
  <FormGroup controlId="formBasicText"> 
    <Label>Change First Name</Label>
    <FormControl type="text" onChange={(e)=>{this.setState({firstName:e.target.value})}} value={this.state.firstName} placeholder="Enter First Name" />
  </FormGroup>

  <FormGroup controlId="formBasicText">
    <Label>Change Last Name</Label>
    <FormControl type="text" value={this.state.lastName} onChange={(e)=>{this.setState({lastName:e.target.value})}} placeholder="Enter Last Name" />
  </FormGroup>
  <FormGroup controlId="formBasicText"> 
    <Label>Change Nationality</Label>
    <FormControl type="text" value={this.state.nationality} onChange={(e)=>{this.setState({nationality:e.target.value})}} placeholder="Enter Nationality" />
  </FormGroup>
  <div style={{color:'red'}}>{this.state.message}</div>
  <div style={{color:'green'}}>{this.state.message2}</div>
   <Button variant="primary" onClick={this.onEditProfile.bind(this)} type="submit">
    Save
  </Button>
</Form>
      
     </div>
      :<span/>
      }
      </div>
      </div></div></div></div></div></div></article></main></div></div>


            </section>
            <footer id="colophon" className=" site-footer"><div className="footer"><div className="container"><div className="row"><aside id="siteorigin-panels-builder-9" className="widget widget_siteorigin-panels-builder footer_widget">
				<div id="pl-w57e9cc2c86af4" className="panel-layout"><div id="pg-w57e9cc2c86af4-0" className="panel-grid panel-no-style">
                    <div id="pgc-w57e9cc2c86af4-0-4" className="panel-grid-cell"><div id="panel-w57e9cc2c86af4-0-4-0" className="so-panel widget widget_nav_menu panel-first-child panel-last-child" data-index="5"><h3 className="widget-title">Courses</h3>
                    <div className="menu-recommend-container">
                        <ul id="menu-recommend" className="menu">
                            <li id="menu-item-6718" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6718 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="/childProtect" className="tc-menu-inner">Child Protection Policies and procedure</a></li><li id="menu-item-6719" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6719 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="#" className="tc-menu-inner">Counter Terrorism Policies </a></li><li id="menu-item-3429" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3429 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="#" className="tc-menu-inner"></a></li>
                            </ul></div></div></div></div></div></aside></div></div></div>
                            <div className="copyright-area"><div className="container"><div className="copyright-content"><div className="row"><div className="col-sm-6"><p className="text-copyright">Copyright<a className="color_primary" href="#" > ActionAid</a>  @ 2019 All right reserved.</p></div><div className="col-sm-6 text-right"><aside id="nav_menu-14" className="widget widget_nav_menu"><div className="menu-privacy-container"><ul id="menu-privacy" className="menu"><li id="menu-item-1765" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1765 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="#" className="tc-menu-inner">Privacy</a></li><li id="menu-item-1766" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1766 tc-menu-item tc-menu-depth-0 tc-menu-layout-default">
                              <a href="#" className="tc-menu-inner">Terms</a></li></ul></div></aside></div></div></div></div></div></footer></div></div> 
                            <a href="#" id="back-to-top"> <i className="fa fa-chevron-up" aria-hidden="true"></i> </a></div>                   
                   
                    
                    
                    
                    <div className="tp-preview-images"> <img src={require("./wp-content/plugins/tp-chameleon/inc/eduma-01.jpg")} alt="preview image"/></div><div id="tp_chameleon_list_google_fonts"></div><div className="gallery-slider-content"></div> 
               
               
               
               
                
    
    
    
   
                    
          
          
          <div className="tp_chameleon_overlay"><div className="tp_chameleon_progress"><div className="tp_chameleon_heading">Processing!</div></div></div>
       </div>}
        </div>
        )
    }
}
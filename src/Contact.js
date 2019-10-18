import React from 'react';
// import "./cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js";
// import './wp-content/cache/autoptimize/1/js/autoptimize_b9370447572a8b7dfd82d25eaed29a10.js';
import $ from 'jquery';
import {ModalBody,ModalHeader,ModalFooter,ModalDialog,Button as ModalButton} from 'react-bootstrap';
import './wp-content/cache/autoptimize/1/css/autoptimize_28334e455278b10593abdc19264b049e.css';
import './wp-includes/css/dashicons.min.css';
import './styles.css';
import './wp-content/cache/autoptimize/1/css/autoptimize_single_8badfcbd466da054e5b200be42433b87.css';
import History from './History'
import axios from 'axios';

export default class Contact extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            showRegister:false,
            showSignIn:false,
            username:'',
            password:'',
            signUp:{
                firstName:'',
                lastName:'',
                nationality:'',
                email:'',
                password:'',
                consfirmPassword:'',
            },
            message:'',
            message2:'',
            message3:'',
            message4:'',
            lostPassword:false,
            
            contact:{
                name:'',
                email:'',
                subject:'',
                message:'',
            },
            headerModal:false
        }

    }
    

    componentDidMount(){
        const jQuery=$;

jQuery(".btn-mo").prop("disabled",false);

window.onload = function() {    
    var thim_preload = document.getElementById('preload');
    if (thim_preload) {
        setTimeout(function() {
            var body = document.getElementById('thim-body'),
                len = body.childNodes.length,
                class_name = body.className.replace(/(?:^|\s)thim-body-preload(?!\S)/, '').
                    replace(/(?:^|\s)thim-body-load-overlay(?!\S)/, '');

            body.className = class_name;
            if (typeof thim_preload !== 'undefined' && thim_preload !== null) {
                for (var i = 0; i < len; i++) {
                    if (body.childNodes[i].id !== 'undefined' && body.childNodes[i].id == 'preload') {
                        body.removeChild(body.childNodes[i]);
                        break;
                    }
                }
            }
        }, 500);
    }
};

window.addEventListener('load', function() {
               
    setTimeout(function() {
        var $ = jQuery;
        var $carousel = $('.thim-owl-carousel-post').each(function() {
            $(this).find('.image').css('min-height', 0);
            $(window).trigger('resize');
        });
    }, 500);
});

      
    
            
var tp_chameleon_selector_wrapper_box = '.content-pusher';
var tp_chameleon_class_boxed = 'boxed-area';
var tp_chameleon_src_patterns = '#wp-content/plugins/tp-chameleon/images/patterns/';
var tp_chameleon_setting = {
    layout: tp_chameleon_getCookie('tp_chameleon_layout'),
    pattern_type: tp_chameleon_getCookie('tp_chameleon_pattern_type'),
    pattern_src: tp_chameleon_getCookie('tp_chameleon_pattern_src'),
    primary_color: tp_chameleon_getCookie('tp_chameleon_primary_color'),
    primary_color_rgb: tp_chameleon_getCookie('tp_chameleon_primary_color_rgb'),
    body_font: tp_chameleon_getCookie('tp_chameleon_body_font'),
    body_font_code: tp_chameleon_getCookie('tp_chameleon_body_font_code'),
    heading_font: tp_chameleon_getCookie('tp_chameleon_heading_font'),
    heading_font_code: tp_chameleon_getCookie('tp_chameleon_heading_font_code')
};
 


function tp_chameleon_setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function tp_chameleon_deleteCookie(cname) {
    var d = new Date();
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=; " + expires;
}

function tp_chameleon_deleteAllCookie() {
    var all_cookie = [
        'tp_chameleon_layout',
        'tp_chameleon_pattern_type',
        'tp_chameleon_pattern_src',
        'tp_chameleon_primary_color',
        'tp_chameleon_primary_color_rgb',
        'tp_chameleon_body_font',
        'tp_chameleon_body_font_code',
        'tp_chameleon_heading_font',
        'tp_chameleon_heading_font_code'
    ];

    for (var i = 0; i < all_cookie.length; i++) {
        tp_chameleon_deleteCookie(all_cookie[i]);
    }
}

function tp_chameleon_getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }

    return '';
}

function tp_chameleon_set_first_visit() {
    tp_chameleon_setCookie('tp_chameleon_first_visit', 1, 1);
}

function tp_chameleon_check_first_visit() {
    return !(tp_chameleon_getCookie('tp_chameleon_first_visit') == '1' );
}

jQuery(document).ready(function ($) {
    var $preview = $('.tp-preview-images');

    $('.tp_demo').hover(
        function (event) {
            var url_prewview = $(this).attr('data-preview');
            if( url_prewview ) {
                $preview.find('img').attr('src', url_prewview);
                $preview.show();
            }
        },
        function () {
            $preview.hide();
        }
    );

    $('.tp_demo').mousemove(function (event) {
        var y = (event.clientY);
        $preview.css('top', y - 250);
    });

    function tp_chameleon_open() {
        tp_chameleon_set_first_visit();
        $('#tp_style_selector').addClass('show').animate({right: '0px'}, 'medium');
        $('#tp_style_selector .open').hide();
        $('#tp_style_selector .close').show();
    }

    function tp_chameleon_close() {
        $('#tp_style_selector').removeClass('show').animate({right: '-313px'}, 'medium');
        $('#tp_style_selector .close').hide();
        $('#tp_style_selector .open').show();
    }

    function tp_form_newsletter_show() {
        tp_chameleon_set_first_visit();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.tp-email-form .button-email').addClass('bounceInUp animated active');
                var cookie_name = 'hide_form_email1';
                $.cookie(cookie_name, '1', {expires: 3, path: '/'});
            }
        });
    }

    function tp_change_background_pattern(url_pattern) {
        var $body = $('body');
        $body.removeClass('tp_background_image');
        $body.addClass('tp_background_pattern');
        $body.css('background-image', 'url("' + url_pattern + '")')
    }

    function tp_change_background_image(url_image) {
        var $body = $('body');
        $body.removeClass('tp_background_pattern');
        $body.addClass('tp_background_image');
        $body.css('background-image', 'url("' + url_image + '")')
    }

    function tp_chameleon_change_layout_wide() {
        tp_chameleon_setCookie('tp_chameleon_layout', 'wide', 1);

        var $body = $('body');
        $('.tp-change-layout').removeClass('active');
        $('.tp-change-layout.layout-wide').addClass('active');
        $('#tp_style_selector .boxed-mode').slideUp(300);
        $(tp_chameleon_selector_wrapper_box).removeClass(tp_chameleon_class_boxed);
        $body.css('background-image', 'none');
    }

    function tp_chameleon_change_layout_boxed() {
        tp_chameleon_setCookie('tp_chameleon_layout', 'boxed', 1);
        $('.tp-change-layout').removeClass('active');
        $('.tp-change-layout.layout-boxed').addClass('active');
        $('#tp_style_selector .boxed-mode').slideDown(300);
        $(tp_chameleon_selector_wrapper_box).addClass(tp_chameleon_class_boxed);
    }

    function tp_chameleon_change_background_pattern(pattern_src) {
        tp_chameleon_setCookie('tp_chameleon_pattern_src', pattern_src, 1);
        tp_chameleon_setCookie('tp_chameleon_pattern_type', 'pattern', 1);
        var pattern_url = tp_chameleon_src_patterns + pattern_src;
        tp_change_background_pattern(pattern_url);
    }

    function tp_chameleon_change_background_image(pattern_src) {
        tp_chameleon_setCookie('tp_chameleon_pattern_src', pattern_src, 1);
        tp_chameleon_setCookie('tp_chameleon_pattern_type', 'image', 1);
        var pattern_url = tp_chameleon_src_patterns + pattern_src;
        tp_change_background_image(pattern_url);
    }

    var $body_font = '<style id="tp_chameleon_body_font" type="text/css"></style>';
    var $heading_font = '<style id="tp_chameleon_heading_font" type="text/css"></style>';
    var $stylesheet = '<link id="tp_chameleon_stylesheet" type="text/css" rel="stylesheet">';

    var $tp_head = $('head');
    $tp_head.append($stylesheet);

    var $tp_body = $('body');
    $tp_body.append($body_font);
    $tp_body.append($heading_font);

    if (tp_chameleon_setting.layout == 'wide') {
        tp_chameleon_change_layout_wide();
    }
    if (tp_chameleon_setting.layout == 'boxed') {
        tp_chameleon_change_layout_boxed();

        if (tp_chameleon_setting.pattern_type == 'pattern' && tp_chameleon_setting.pattern_src != '') {
            tp_chameleon_change_background_pattern(tp_chameleon_setting.pattern_src);
            $('.tp_pattern[data-src="' + tp_chameleon_setting.pattern_src + '"]').addClass('active');
        }

        if (tp_chameleon_setting.pattern_type == 'image' && tp_chameleon_setting.pattern_src != '') {
            tp_chameleon_change_background_image(tp_chameleon_setting.pattern_src);
            $('.tp_image[data-src="' + tp_chameleon_setting.pattern_src + '"]').addClass('active');
        }
    }
    


    $('.tp-chameleon-clear').click(function (event) {
        event.preventDefault();
        tp_chameleon_deleteAllCookie();
        document.location.reload();
    });

    $('.tp-btn.tp-change-layout').click(function (event) {
        event.preventDefault();

        if ($(this).hasClass('layout-wide')) {
            tp_chameleon_change_layout_wide();

                        } else {
            tp_chameleon_change_layout_boxed();

                        }
    });

    $('.tp_pattern').click(function (event) {
        event.preventDefault();
        $('.tp_pattern').removeClass('active');
        $('.tp_image').removeClass('active');
        $(this).addClass('active');
        var pattern_src = $(this).attr('data-src');
        tp_chameleon_change_background_pattern(pattern_src);
    });

    $('.tp_image').click(function (event) {
        event.preventDefault();
        $('.tp_pattern').removeClass('active');
        $('.tp_image').removeClass('active');
        $(this).addClass('active');
        var pattern_src = $(this).attr('data-src');
        tp_chameleon_change_background_image(pattern_src);
    });

    /**
     * Open/Close box
     */
    $('#tp_style_selector .close').click(function (e) {
        e.preventDefault();
        tp_chameleon_close();
    });

    $('#tp_style_selector .open').click(function (e) {
        e.preventDefault();
        tp_chameleon_open();
    });

    $(window).load(function () {
        var $btn = $('.tp-chameleon-btn-buy');
        $btn.animate({
            bottom: $btn.attr('data-bottom')
        }, 500);

        //Set view-more-slider button
        $('.view-more-slider .text:last-child').hide();
        setInterval(function(){
            $('.view-more-slider .text:first-child').hide();
            $('.view-more-slider .text:last-child').show();
            setTimeout(function(){
                $('.view-more-slider .text:first-child').show();
                $('.view-more-slider .text:last-child').hide();
            }, 2000);
        }, 4500);

    });

    /**
     * Check firt visit
     */
    if (tp_chameleon_check_first_visit()) {
        //set visit is second
        setTimeout(tp_chameleon_open, 5000);
    } else {
        $('#tp_style_selector').click(function (event) {
            tp_chameleon_set_first_visit();
        });
    }
    if (tp_chameleon_check_first_visit()) {
        tp_form_newsletter_show();
    }
    
    
    $('.tp-email-form .button-email').click(function (e) {
        e.preventDefault();
        $('.tp-email-form .email-form-popup').addClass('show');
    });
    $('.tp-email-form .email-form-popup .close-popup').click(function (e) {
        e.preventDefault();
        $('.tp-email-form .email-form-popup').removeClass('show');
        $('.tp-email-form .button-email').addClass('hide');
    });

  

    $('.tp-email-form .email-form-popup .email-form-subscribe form input[type="email"]').focus(function () {
        $(this).removeClass('error');
    });
});

    }
    onContactUs(e){
        e.preventDefault();
        console.log('in Contact us')
       if(this.state.contact.email.trim()===""||this.state.contact.subject.trim()===""||this.state.contact.message.trim()===""||this.state.contact.name.trim()===""){
        this.setState({
            message3:'All the fields are mendatory to fill'
        })
    }
    else{
           
        axios({
            withCredentials:true,
            method:'post',
            data:this.state.contact,
            url:'/sendEmail'
            })
            .then(data=>{
                if(data.data.send){
                   let contact=this.state.contact;
                   contact['name']="",contact['email']="",contact['message']="",contact['name']=""
                    this.setState({
                       contact,
                        message4:'Query submitted successfully'
                    }) 
                }
            })
            .catch(error=>{
                this.setState({
                    message3:'Could not proceed with the request'
                })       
            })
       
        }
    }

    onSignIn(e){
        e.preventDefault()
        let {username,password}=this.state;
    console.log(username + " s " +password)
        axios({
            withCredentials:true,
            url:'/login',
            method:'post',
            data:{
                username,
                password
            }
        })
        .then((data)=>{
            console.log(data.data)
            if(data.data.success){
                if(data.data.type=="admin")
                {
                History.push('/aDashboard')
                window.location.reload();
            }
                else{ 
                    History.push('/dashboards')
                    window.location.reload();
                    }               
            }
            if(data.data.message){
          this.setState({
              message:data.data.message
                })
            }
        })
        .catch(error=>{
            this.setState({
                message:'Could not proceed with the request'
            })
        })
    }
    onsignUpchange(property,e){
        let signUp=this.state.signUp;
        signUp[property]=e.target.value;
        if(property=='consfirmPassword'){
            if(signUp.password!=signUp.consfirmPassword){
                this.setState({
                    message2:'Password Donot match',
                    message:''
                })
            }
            else{
                this.setState({
                    message:'Password match',
                    message2:''
                })
                
            }
        }
                this.setState({
                    signUp
                 })
    }
    
    sigUpHandle(e){
   
         e.preventDefault()
        let signup=this.state.signUp
        if(signup.password.trim()==""||signup.lastName.trim()==""||signup.firstName.trim()==""||signup.email.trim()=="")
        {
            this.setState({
                message2:'Kindly fill all the required fields'
            })
        }
        else{

            axios({
                url:'signup',
                withCredentials:true,
                method:'post',
                data:this.state.signUp
        })
        .then(data=>{
            console.log(data.data)
               if(data.data.mailSend)
              {
                  this.setState({showRegister:false,showSignIn:true,message:'A confirmation email has been sent to your account please confirm'})
              }
            
            if(data.data.message){
                this.setState({
                    message2:data.data.message
                })
                
            }
            
        })
        }
    }
    onContactForm(property,e){
        let contact=this.state.contact;
        contact[property]=e.target.value;
        this.setState({
            contact
        })
    }
    render(){
        return(
            <div data-rsssl="1" className="bp-legacy lp_course-template-default single single-lp_course postid-5299 wp-embed-responsive theme-eduma eduma-child learnpress learnpress-page woocommerce-no-js pmpro-body-has-access group-blog thim-body-preload bg-boxed-image thim-popup-feature no-js" id="thim-body">
				<div id="preload">
					<div className="sk-folding-cube">
						<div className="sk-cube1 sk-cube"></div>
						<div className="sk-cube2 sk-cube"></div>
						<div className="sk-cube4 sk-cube"></div>
						<div className="sk-cube3 sk-cube"></div>
					</div></div>

                    {this.state.headerModal?          
                    <ModalDialog open={true} >
                      <ModalHeader closeButton onClick={()=>{this.setState({headerModal:false})}} ></ModalHeader>
                      <ModalButton className="btn btn-lg btnClass" style={{width:'100%'}} onClick={()=>{History.push('/Contact');window.location.reload(); }}>Contact </ModalButton>
                      <br/>
                      <ModalButton className="btn btn-lg btnClass" style={{width:'100%'}} onClick={()=>{History.push('/'); window.location.reload();}}>Home </ModalButton>
                    </ModalDialog>:<span/>}
					<div className="mobile-menu-wrapper"><div className="mobile-menu-inner"><div className="icon-wrapper"><div className="menu-mobile-effect navbar-toggle close-icon" data-effect="mobile-effect"> <span className="icon-bar"></span> 
						<span className="icon-bar"></span> <span className="icon-bar"></span></div></div>
						<nav className="mobile-menu-container mobile-effect"><ul className="nav navbar-nav">
							
                            
                            
                          
           
								 <li id="menu-item-99" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-99 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="/contact" className="tc-menu-inner">Contact</a></li><li id="menu-item-1702" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1702 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="/" className="tc-menu-inner">Home</a></li>
								 <li className="menu-right header_v1"><ul><li id="courses-searching-3" className="widget widget_courses-searching"><div className="thim-widget-courses-searching thim-widget-courses-searching-base template-overlay-v2"><div className="thim-course-search-overlay"><div className="courses-searching layout-overlay"><div className="search-popup-bg"></div>
									<ul className="courses-list-search list-unstyled"></ul></div></div></div></li></ul></li></ul></nav></div></div><div id="wrapper-container" className="wrapper-container">
                                        <div className="content-pusher">
                                   
                                {/* <Navbar/> */}
                                <header id="masthead" className="site-header affix-top bg-custom-sticky header_overlay header_v1"><div id="toolbar" className="toolbar"><div className="container"><div className="row"><div className="col-sm-12"><div className="toolbar-container"><aside id="text-2" className="widget widget_text">
            <div className="textwidget"><div className="thim-have-any-question"> Have any question?<div className="mobile"><i className="fa fa-phone"></i><a href="tel:00123456789" className="value">(00) 123 456 789</a></div><div className="email"><i className="fa fa-envelope"></i><a href="#"><span className="__cf_email__" data-cfemail="39515c555556795c5d4c5458175a5654">[email&#160;protected]</span></a></div></div></div></aside><aside id="login-popup-3" className="widget widget_login-popup"><div className="thim-widget-login-popup thim-widget-login-popup-base template-base"><div className="thim-link-login thim-login-popup"> <a className="register js-show-popup" href="#"  onClick={()=>{this.setState({showRegister:true})}}>Register</a><a className="login js-show-popup" href="#" onClick={()=>{this.setState({showSignIn:true}); console.log(this.state.showSignIn)}}>Login</a></div></div></aside></div></div></div></div></div><div className="thim-nav-wrapper container"><div className="row"><div className="navigation col-sm-12"><div className="tm-table"><div className="width-logo table-cell sm-logo"> <a href="/" title="Action Aid" rel="home" className="no-sticky-logo"><img src={"/action_aid.png"} alt="Action Aid"/></a>
                <a href="#" rel="home" className="sticky-logo">
                    <img src="./wp-content/uploads/2015/11/logo-sticky.png" alt=" "/></a></div><nav className="width-navigation table-cell table-right"><ul className="nav navbar-nav menu-main-menu">
                     
                        
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7682 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-builder"><div className='tc-megamenu-wrapper tc-megamenu-holder mega-sub-menu sub-menu'><div id="pl-tc-megamenu-7682" className="panel-layout"><div id="pg-tc-megamenu-7682-0" className="panel-grid panel-has-style"><div className="thim-megamenu-row panel-row-style panel-row-style-for-tc-megamenu-7682-0"><div id="pgc-tc-megamenu-7682-0-0" className="panel-grid-cell"><div id="panel-tc-megamenu-7682-0-0-0" className="so-panel widget widget_nav_menu panel-first-child panel-last-child" data-index="0"><div className="menu-about-courses-container"><ul id="menu-about-courses-1" className="menu"><li className="menu-item menu-item-type-post_type menu-item-object-lp_course menu-item-5739 tc-menu-item tc-menu-depth-0 tc-menu-layout-default">
                                    {this.state.showSignIn?
                   
                   <div id="thim-popup-login"className="active sign-in"    ><div className="popup-login-wrapper" >
                           <div onClick={()=>{this.setState({showSignIn:false})}} style={{alignSelf:'flex-end',fontSize:'160%',textAlign:'right',cursor:'pointer'}}>X </div> 
                           <div className="thim-login-container has-shortcode">
                     
                       
                       
                       
                       <div className='mo-openid-app-icons'><p style={{color:'#000000'}}> Login with social networks</p><a rel='nofollow' style={{marginLeft: '4px !important',width:' 240px !important',paddingTop:'11px !important',paddingBottom:'11px !important',marginBottom: '-1px !important',borderRadius: '4px !important'}} className='btn btn-mo btn-block btn-social btn-facebook btn-custom-dec login-button' onClick={()=>{"moOpenIdLogin('facebook','true');"}}> 
                       <i style={{paddingTop:'5px !important'}} className='fa fa-facebook'></i> Facebook</a>
           
                       
                           </div> 
                           <br/>
                           {!this.state.lostPassword? 
                       <div className="thim-popup-inner">
                        <div className="thim-login"><h4 className="title">Login with your site account  </h4> 
                        <form name="loginpopopform" >
                        <p  className="login-username"> 
                        <input type="text" name="log"    value={this.state.username} placeholder="Username or email" className="input required" onChange={(e)=>{this.setState({username:e.target.value})}} value={this.state.username} size="20" /></p>
                        <p className="login-password"> 
                        <input type="password" name="pwd"value={this.state.password} placeholder="Password" className="input required" onChange={(e)=>{this.setState({password:e.target.value})}}          value={this.state.password} size="20" /></p>
                        <a className="lost-pass-link" onClick={()=>{this.setState({lostPassword:true})}} href="#" title="Lost Password">Lost your password?</a><p className="forgetmenot login-remember"> <label for="popupRememberme">
                        <input name="rememberme" type="checkbox" value="forever" id="popupRememberme" /> Remember Me </label></p>
                        <div style={{color:'green'}}>{this.state.message}</div>
                        <div style={{color:'red'}}>{this.state.message2}</div>
                        <p className="submit login-submit"> 
                        <input type="submit" name="wp-submit" onClick={this.onSignIn.bind(this)} className="button button-primary button-large" value="Sign in" /> 
        </p></form>
                
                <p className="link-bottom">Not a member yet? <a className="register" href="#" onClick={()=>{this.setState({showRegister:true,showSignIn:false,message2:'',message:''})}}>Register now</a></p></div>
                
                
          
                </div>:
                 <div className="thim-popup-inner">
                 <div className="thim-login"><h4 className="title">Recover your password  </h4> 
                 <form name="loginpopopform" >
                 <p  className="login-username"> 
                 <input type="text" name="log"    value={this.state.mail} placeholder="Email" className="input required" onChange={(e)=>{this.setState({mail:e.target.value})}}  size="20" /></p>
                  <p className="submit login-submit"> 
                 <input type="submit" name="wp-submit" onClick={this.onSignIn.bind(this)} className="button button-primary button-large" value="Recover" /> 
                </p></form>
         
         <p className="link-bottom">Want to <a className="register" href="#" onClick={()=>{this.setState({lostPassword:false,message2:'',message:''})}}>login? </a></p></div>
         
         
   
         </div>
            
            }    
                    <span className="close-popup"><i className="fa fa-times" aria-hidden="true"></i></span><div className="cssload-container">
                   <div className="cssload-loading"><i></i><i></i><i></i><i></i></div></div></div></div></div>
          
          
                       :<span/>}
                       {this.state.showRegister?
                   
                   <div id="thim-popup-login"className="active sign-in"    ><div className="popup-login-wrapper" >
                      <div onClick={()=>{this.setState({showRegister:false})}} style={{alignSelf:'flex-end',fontSize:'160%',textAlign:'right',cursor:'pointer'}}>X </div> 
                      <div className="thim-login-container has-shortcode">
                
                  
                  
                  
                  <div className='mo-openid-app-icons'><p style={{color:'#000000'}}> Login with social networks</p><a rel='nofollow' style={{marginLeft: '4px !important',width:' 240px !important',paddingTop:'11px !important',paddingBottom:'11px !important',marginBottom: '-1px !important',borderRadius: '4px !important'}} className='btn btn-mo btn-block btn-social btn-facebook btn-custom-dec login-button' onClick={()=>{"moOpenIdLogin('facebook','true');"}}> 
                  <i style={{paddingTop:'5px !important'}} className='fa fa-facebook'></i> Facebook</a>
      
                  
                      </div> 
                      <br/>
                      
                      <div className="thim-popup-inner">
                      
          
    
          <div className="thim-register"><h4 className="title">Register a new account</h4><form className="auto_login" name="registerformpopup"  novalidate="novalidate"> 
          <p> <input placeholder="First Name"        value={this.state.signUp.firstName}   onChange={this.onsignUpchange.bind(this,'firstName')}             type="text"   name="user_login" className="input required" /></p>
          <p> <input placeholder="Last Name"         value={this.state.signUp.lastName}   onChange={this.onsignUpchange.bind(this,'lastName')}              type="text"  name="user_login" className="input required" /></p>
          <p> <input placeholder="Nationality"       value={this.state.signUp.nationality}   onChange={this.onsignUpchange.bind(this, 'nationality')}          type="text" name="user_email" className="input required" /></p>
          <p> <input placeholder="Email"             value={this.state.signUp.email}   onChange={this.onsignUpchange.bind(this, 'email')}                type="email" name="user_email" className="input required" /></p>
          <p> <input placeholder="Password"          value={this.state.signUp.password}   onChange={this.onsignUpchange.bind(this, 'password')}             type="password" name="password" className="input required" /></p>
          <p> <input placeholder="Repeat Password"   value={this.state.signUp.consfirmPassword}   onChange={this.onsignUpchange.bind(this, 'consfirmPassword')}      type="password" name="repeat_password" className="input required" /></p>
              
              <div style={{color:'green'}}>{this.state.message }</div>
                        <div style={{color:'red'}}>{this.state.message2 }</div>
              <p className="submit"> <input type="submit" onChange={this.sigUpHandle.bind(this)} name="wp-submit" className="button button-primary button-large"  value="Sign up" /></p></form>
     
              <p className="link-bottom">Are you a member? <a className="login"onClick={()=>{this.setState({showSignIn:true,showRegister:false,message:'',message2:''})}} href="#">Login now</a></p><div className="popup-message"></div></div></div> <span className="close-popup"><i className="fa fa-times" aria-hidden="true"></i></span><div className="cssload-container"><div className="cssload-loading"><i></i><i></i><i></i><i></i></div></div></div></div>
              
              </div>
           
                  :<span/>}
                                
</li>
</ul></div></div></div>
<div id="pgc-tc-megamenu-7682-0-1" className="panel-grid-cell"></div>
    </div></div></div></div>
</li>
<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-99 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="/contact" className="tc-menu-inner">Contact</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1702 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="/" className="tc-menu-inner">Home</a></li><li className="menu-right"><ul><li id="courses-searching-3" className="widget widget_courses-searching"><div className="thim-widget-courses-searching thim-widget-courses-searching-base template-overlay-v2"><div className="thim-course-search-overlay"><div className="courses-searching layout-overlay"><div className="search-popup-bg"></div><ul className="courses-list-search list-unstyled"></ul></div></div></div></li></ul></li></ul></nav><div className="menu-mobile-effect navbar-toggle" onClick={()=>{this.setState({headerModal:true})}} data-effect="mobile-effect"> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span></div></div></div></div></div></header>
                                <div id="main-content">

                                    <section className="content-area">
                                    <div className="top_heading  _out"><div className="top_site_main " style={{color:' #ffffff',minHeight:'135px'}}> <span className="overlay-top-header" style={{backgroundColor:"rgba(0,0,0,0.5)"}}></span>
                                    </div>
                                    


                                        </div>
                                        
                                       
    <div className="container site-content no-padding-top"><div className="row"><main id="main" className="site-main col-sm-12 full-width"><article id="post-87" className="post-87 page type-page status-publish hentry pmpro-has-access"><div className="entry-content"><div id="pl-87" className="panel-layout"><div id="pg-87-0" className="panel-grid panel-no-style"><div id="pgc-87-0-0" className="panel-grid-cell"><div id="panel-87-0-0-0" className="so-panel widget widget_heading panel-first-child" data-index="0"><div className="panel-widget-style panel-widget-style-for-87-0-0-0">
        <div className="thim-widget-heading thim-widget-heading-base template-base"><div className="sc_heading   text-left"><h3 style={{textTransform: "uppercase"}} className="title">Contact Info</h3><p className="sub-heading" >Welcome to our Website. We are glad to have you around.</p><span className="line"></span></div></div></div></div><div id="panel-87-0-0-1" className="so-panel widget widget_siteorigin-panels-builder" data-index="1"><div className="thim-border-top panel-widget-style panel-widget-style-for-87-0-0-1"><div id="pl-w58292b77794b7" className="panel-layout"><div id="pg-w58292b77794b7-0" className="panel-grid panel-no-style"><div id="pgc-w58292b77794b7-0-0" className="panel-grid-cell"><div id="panel-w58292b77794b7-0-0-0" className="so-panel widget widget_icon-box panel-first-child panel-last-child" data-index="0"><div className="thim-widget-icon-box thim-widget-icon-box-base template-base"><div className="wrapper-box-icon text-left contact_info "><div className="smicon-box iconbox-left"><div className="boxes-icon" style={{width: "30px"}}><span className="inner-icon"><span className="icon"><i className="fa fa-phone" style={{color:"#ffb606", fontSize:"24px" ,lineHeight:"24px", verticalAlign: "middle"}}></i></span></span></div><div className="content-inner" style={{width: "calc( 100% - 30px - 15px)"}}><div className="sc-heading article_heading"><h3 className="heading__primary">Phone</h3></div><div className="desc-icon-box"><div className="desc-content">+7 (800) 123 45 69</div></div></div></div></div></div></div></div><div id="pgc-w58292b77794b7-0-1" className="panel-grid-cell">
            <div id="panel-w58292b77794b7-0-1-0" className="so-panel widget widget_icon-box panel-first-child panel-last-child" data-index="1"><div className="thim-widget-icon-box thim-widget-icon-box-base template-base"><div className="wrapper-box-icon text-left contact_info "><div className="smicon-box iconbox-left"><div className="boxes-icon" style={{width: "30px"}}><span className="inner-icon"></span></div><div className="content-inner" style={{width:"calc( 100% - 30px - 15px)"}}><div className="desc-icon-box"></div></div></div></div></div></div></div></div></div></div></div><div id="panel-87-0-0-2" className="so-panel widget widget_icon-box" data-index="2"><div className="thim-border-top panel-widget-style panel-widget-style-for-87-0-0-2"><div className="thim-widget-icon-box thim-widget-icon-box-base template-base"><div className="wrapper-box-icon text-left contact_info "><div className="smicon-box iconbox-left"><div className="boxes-icon" style={{width: "30px"}}><span className="inner-icon"><span className="icon"><i className="fa fa-map-marker" style={{color:"#ffb606", fontSize:"24px", lineHeight:"24px", verticalAlign: "middle"}}></i></span></span></div><div className="content-inner" style={{width: "calc( 100% - 30px - 15px)"}}><div className="sc-heading article_heading"><h3 className="heading__primary">Address</h3></div><div className="desc-icon-box"><div className="desc-content">PO Box 97845 Baker st. 567, Los Angeles, California, US.</div></div></div></div></div></div></div></div><div id="panel-87-0-0-3" className="so-panel widget widget_social panel-last-child" data-index="3"><div className="thim-border-top panel-widget-style panel-widget-style-for-87-0-0-3"><div className="thim-widget-social thim-widget-social-base template-base"><div className="thim-social"><ul className="social_link"><li><a className="facebook hasTooltip" href="#" target="_self"><i className="fa fa-facebook"></i></a></li><li><a className="twitter hasTooltip" href="#" target="_self"><i className="fa fa-twitter"></i></a></li><li><a className="google-plus hasTooltip" href="#" target="_self"><i className="fa fa-google-plus"></i></a></li><li><a className="pinterest hasTooltip" href="#" target="_self"><i className="fa fa-pinterest"></i></a></li></ul></div></div></div></div></div><div id="pgc-87-0-1" className="panel-grid-cell panel-grid-cell-empty"></div><div id="pgc-87-0-2" className="panel-grid-cell"><div id="panel-87-0-2-0" className="so-panel widget widget_heading panel-first-child" data-index="4"><div className="panel-widget-style panel-widget-style-for-87-0-2-0"><div className="thim-widget-heading thim-widget-heading-base template-base"><div className="sc_heading   text-left"><h3 style={{textTransform: "uppercase"}} className="title">Send A Message</h3><p className="sub-heading" >Your email address will not be published. Required fields are marked.</p><span className="line"></span></div></div></div></div><div id="panel-87-0-2-1" className="so-panel widget widget_text panel-last-child" data-index="5"><div className="textwidget"><div role="form" className="wpcf7" id="wpcf7-f4-p87-o3" lang="en-US" dir="ltr"><div className="screen-reader-response"></div><form  className="wpcf7-form" noValidate="novalidate">
        <p><span className="wpcf7-form-control-wrap your-name"><input type="text" value={this.state.contact.name} name="your-name"  size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Name *" onChange={this.onContactForm.bind(this,'name')} /></span></p><p><span className="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" value={this.state.contact.email} size="40" onChange={this.onContactForm.bind(this,'email')} className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Email *"  /></span></p><p><span className="wpcf7-form-control-wrap your-subject"><input type="text" name="your-subject" value={this.state.contact.subject} onChange={this.onContactForm.bind(this,'subject')} size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Subject *" /></span></p><p><span className="wpcf7-form-control-wrap your-message"><textarea name="your-message" value={this.state.contact.message} onChange={this.onContactForm.bind(this,'message')} cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Message *"></textarea></span></p><div style={{color:'red'}}>{this.state.message3}</div> <div style={{color:'green'}}>{this.state.message4}</div><br/><p><input type="submit" onClick={this.onContactUs.bind(this)} value="Submit" className="wpcf7-form-control wpcf7-submit" /></p><div className="wpcf7-response-output wpcf7-display-none"></div></form></div></div></div></div></div>
    </div></div></article></main></div></div> 

            </section>
            <footer id="colophon" className=" site-footer"><div className="footer"><div className="container"><div className="row"><aside id="siteorigin-panels-builder-9" className="widget widget_siteorigin-panels-builder footer_widget">

				<div id="pl-w57e9cc2c86af4" className="panel-layout"><div id="pg-w57e9cc2c86af4-0" className="panel-grid panel-no-style">
                    <div id="pgc-w57e9cc2c86af4-0-4" className="panel-grid-cell"><div id="panel-w57e9cc2c86af4-0-4-0" className="so-panel widget widget_nav_menu panel-first-child panel-last-child" data-index="5"><h3 className="widget-title">Courses</h3>
                    <div className="menu-recommend-container">
                        <ul id="menu-recommend" className="menu">
                            <li id="menu-item-6718" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6718 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="#" className="tc-menu-inner">Child Protection Policies and procedure</a></li><li id="menu-item-6719" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6719 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="#" className="tc-menu-inner">Counter Terrorism Policies </a></li><li id="menu-item-3429" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3429 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="#" className="tc-menu-inner"></a></li>
                            <li id="menu-item-5930" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5930 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="#" className="tc-menu-inner">Safeguarding and Prevention of Sexual Exploitation </a></li></ul></div></div></div></div></div></aside></div></div></div>
                            <div className="copyright-area"><div className="container"><div className="copyright-content"><div className="row"><div className="col-sm-6"><p className="text-copyright">Copyright<a className="color_primary" href="#" > ActionAid</a>  @ 2019 All right reserved.</p></div><div className="col-sm-6 text-right"><aside id="nav_menu-14" className="widget widget_nav_menu"><div className="menu-privacy-container"><ul id="menu-privacy" className="menu"><li id="menu-item-1765" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1765 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="#" className="tc-menu-inner">Privacy</a></li><li id="menu-item-1766" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1766 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="#" className="tc-menu-inner">Terms</a></li></ul></div></aside></div></div></div></div></div></footer></div></div> 
                            <a href="#" id="back-to-top"> <i className="fa fa-chevron-up" aria-hidden="true"></i> </a></div>                   
                   {this.state.showSignIn?
                   
                    <div id="thim-popup-login"className="active sign-in">
                         <div className="popup-login-wrapper" >
                            <div onClick={()=>{this.setState({showSignIn:false})}} style={{alignSelf:'flex-end',fontSize:'160%',textAlign:'right',cursor:'pointer'}}>X </div> 
                            <div className="thim-login-container has-shortcode">
                      
                        
                            {/* //live.staticflickr.com/65535/48763815761_8f08861e74.jpg */}
                        
                        <div className='mo-openid-app-icons'><p style={{color:'#000000'}}> Login with social networks</p><a rel='nofollow' style={{marginLeft: '4px !important',width:' 240px !important',paddingTop:'11px !important',paddingBottom:'11px !important',marginBottom: '-1px !important',borderRadius: '4px !important'}} className='btn btn-mo btn-block btn-social btn-facebook btn-custom-dec login-button' onClick={()=>{"moOpenIdLogin('facebook','true');"}}> 
                        <i style={{paddingTop:'5px !important'}} className='fa fa-facebook'></i> Facebook</a>
            
                        
                            </div> 
                            <br/>
                            
                            {!this.state.lostPassword? 
                       <div className="thim-popup-inner">
                        <div className="thim-login"><h4 className="title">Login with your site account  </h4> 
                        <form name="loginpopopform" >
                        <p  className="login-username"> 
                        <input type="text" name="log"    value={this.state.username} placeholder="Username or email" className="input required" onChange={(e)=>{this.setState({username:e.target.value})}} value={this.state.username} size="20" /></p>
                        <p className="login-password"> 
                        <input type="password" name="pwd"value={this.state.password} placeholder="Password" className="input required" onChange={(e)=>{this.setState({password:e.target.value})}}          value={this.state.password} size="20" /></p>
                        <a className="lost-pass-link" onClick={()=>{this.setState({lostPassword:true})}} href="#" title="Lost Password">Lost your password?</a><p className="forgetmenot login-remember"> <label for="popupRememberme">
                        <input name="rememberme" type="checkbox" value="forever" id="popupRememberme" /> Remember Me </label></p>
                        <div style={{color:'green'}}>{this.state.message}</div>
                        <div style={{color:'red'}}>{this.state.message2}</div>
                        <p className="submit login-submit"> 
                        <input type="submit" name="wp-submit" onClick={this.onSignIn.bind(this)} className="button button-primary button-large" value="Sign in" /> 
        </p></form>
                
                <p className="link-bottom">Not a member yet? <a className="register" href="#" onClick={()=>{this.setState({showRegister:true,showSignIn:false,message2:'',message:''})}}>Register now</a></p></div>
                
                
          
                </div>:
                 <div className="thim-popup-inner">
                 <div className="thim-login"><h4 className="title">Recover your password  </h4> 
                 <form name="loginpopopform" >
                 <p  className="login-username"> 
                 <input type="text" name="log"    value={this.state.mail} placeholder="Email" className="input required" onChange={(e)=>{this.setState({mail:e.target.value})}}  size="20" /></p>
                  <p className="submit login-submit"> 
                 <input type="submit" name="wp-submit" onClick={this.onSignIn.bind(this)} className="button button-primary button-large" value="Recover" /> 
                </p></form>
         
         <p className="link-bottom">Want to <a className="register" href="#" onClick={()=>{this.setState({lostPassword:false,message2:'',message:''})}}>login? </a></p></div>
         
         
   
         </div>
            
            }<span className="close-popup"><i className="fa fa-times" aria-hidden="true"></i></span><div className="cssload-container">
                    <div className="cssload-loading"><i></i><i></i><i></i><i></i></div></div></div></div></div>
           
           
                        :<span/>}
        
        
                    {this.state.showRegister?
                   
                        <div id="thim-popup-login"className="active sign-in"    ><div className="popup-login-wrapper" >
                           <div onClick={()=>{this.setState({showRegister:false})}} style={{alignSelf:'flex-end',fontSize:'160%',textAlign:'right',cursor:'pointer'}}>X </div> 
                           <div className="thim-login-container has-shortcode">
                     
                       
                       
                       
                       <div className='mo-openid-app-icons'><p style={{color:'#000000'}}> Login with social networks</p><a rel='nofollow' style={{marginLeft: '4px !important',width:' 240px !important',paddingTop:'11px !important',paddingBottom:'11px !important',marginBottom: '-1px !important',borderRadius: '4px !important'}} className='btn btn-mo btn-block btn-social btn-facebook btn-custom-dec login-button' onClick={()=>{"moOpenIdLogin('facebook','true');"}}> 
                       <i style={{paddingTop:'5px !important'}} className='fa fa-facebook'></i> Facebook</a>
           
                       
                           </div> 
                           <br/>
                           
                           <div className="thim-popup-inner">
                           
               
         
               <div className="thim-register"><h4 className="title">Register a new account</h4><form className="auto_login" name="registerformpopup" action="#"  novalidate="novalidate"> 
                   <p> <input placeholder="First Name"      onChange={this.onsignUpchange.bind(this,'firstName')}       value={this.state.signUp.firstName}  type="text" name="user_login" className="input required" /></p>
                   <p> <input placeholder="Last Name"       onChange={this.onsignUpchange.bind(this,'lastName')}        value={this.state.signUp.lastName}  type="text" name="user_login" className="input required" /></p> 
                   <p> <input placeholder="Nationality"     onChange={this.onsignUpchange.bind(this,'nationality')}     value={this.state.signUp.nationality}  type="text" name="user_login" className="input required" /></p> 
                   <p> <input placeholder="Email"           onChange={this.onsignUpchange.bind(this,'email')}           value={this.state.signUp.email}  type="email" name="user_email" className="input required" /></p>
                   <p> <input placeholder="Password"        onChange={this.onsignUpchange.bind(this,'password')}        value={this.state.signUp.password}  type="password" name="password" className="input required" /></p>
                   <p> <input placeholder="Repeat Password" onChange={this.onsignUpchange.bind(this,'consfirmPassword')} value={this.state.signUp.consfirmPassword}  type="password" name="repeat_password" className="input required" /></p>
                        <div style={{color:'green'}}>{this.state.message}</div>
                        <div style={{color:'red'}}>{this.state.message2}</div>
                   <p className="submit"> <input type="submit" onClick={this.sigUpHandle.bind(this)} name="wp-submit" className="button button-primary button-large" value="Sign up" /></p></form>
                   <p className="link-bottom">Are you a member? <a className="login" onClick={()=>{this.setState({showRegister:false,showSignIn:true,message:'',message2:''})}} href="#">Login now</a></p><div className="popup-message"></div></div></div> <span className="close-popup"><i className="fa fa-times" aria-hidden="true"></i></span><div className="cssload-container"><div className="cssload-loading"><i></i><i></i><i></i><i></i></div></div></div></div></div>
          
          
                       :<span/>}
                    
                    
                    
                    <div className="tp-preview-images"> <img src={require("./wp-content/plugins/tp-chameleon/inc/eduma-01.jpg")} alt="preview image"/></div><div id="tp_chameleon_list_google_fonts"></div><div className="gallery-slider-content"></div> 
               
               
               
               
                
    
    
    
   
                    
          
          
          <div className="tp_chameleon_overlay"><div className="tp_chameleon_progress"><div className="tp_chameleon_heading">Processing!</div></div></div>
        </div>
  
        )
    }
}
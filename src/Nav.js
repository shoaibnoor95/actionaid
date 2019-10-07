import React from 'react';
import $ from 'jquery'
export default class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showRegister:false,
            showSignIn:false
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
var tp_chameleon_src_patterns = 'https://educationwp.thimpress.com/wp-content/plugins/tp-chameleon/images/patterns/';
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

    $('.tp-email-form .email-form-popup .email-form-subscribe form ').submit(function (e) {
        e.preventDefault();
        var form = $(this);
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        form.append('<div class="loading"><i class="fa fa-spinner fa-pulse"></i></div>');
        if(form.find('input[type="email"]').val()) {
            $.ajax({
                type: "POST",
                url: 'https://preview.thimpress.com/m/mailster/subscribe',
                data: form.serialize(),
                complete: function (xhr, textStatus) {
                    form.find('.loading').remove();
                    form.append('<div class="message-success">Please check your inbox or spam folder for confirmation email!</div>');
                    setTimeout(function () {
                        form.find('.message-success').remove();
                    }, 2000);
                }
            });
        } else {
            form.find('.loading').remove();
            form.append('<div class="message-error">Please enter email address</div>');
            setTimeout(function(){ form.find('.message-error').remove(); }, 2000);
            form.find('input[type="email"]').addClass('error');
        }


    });

    $('.tp-email-form .email-form-popup .email-form-subscribe form input[type="email"]').focus(function () {
        $(this).removeClass('error');
    });
});

    }

    render(){
        return(
            
            <header id="masthead" className="site-header affix-top bg-custom-sticky header_overlay header_v1"><div id="toolbar" className="toolbar"><div className="container"><div className="row"><div className="col-sm-12"><div className="toolbar-container"><aside id="text-2" className="widget widget_text">
            <div className="textwidget"><div className="thim-have-any-question"> Have any question?<div className="mobile"><i className="fa fa-phone"></i><a href="tel:00123456789" className="value">(00) 123 456 789</a></div><div className="email"><i className="fa fa-envelope"></i><a href="#"><span className="__cf_email__" data-cfemail="39515c555556795c5d4c5458175a5654">[email&#160;protected]</span></a></div></div></div></aside><aside id="login-popup-3" className="widget widget_login-popup"><div className="thim-widget-login-popup thim-widget-login-popup-base template-base"><div className="thim-link-login thim-login-popup"> <a className="register js-show-popup" href="#"  onClick={()=>{this.setState({showRegister:true})}}>Register</a><a className="login js-show-popup" href="#" onClick={()=>{this.setState({showSignIn:true}); console.log(this.state.showSignIn)}}>Login</a></div></div></aside></div></div></div></div></div><div className="thim-nav-wrapper container"><div className="row"><div className="navigation col-sm-12"><div className="tm-table"><div className="width-logo table-cell sm-logo"> <a href="#" title="Education WP - Education WordPress Theme" rel="home" className="no-sticky-logo"><img src={require("./wp-content/uploads/2015/11/logo.png")} alt="Education WP"/></a>
                <a href="https://educationwp.thimpress.com/" rel="home" className="sticky-logo"><img src="./wp-content/uploads/2015/11/logo-sticky.png" alt=" "/></a></div><nav className="width-navigation table-cell table-right"><ul className="nav navbar-nav menu-main-menu"><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3404 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-column tc-menu-column-hide-title"><span className="tc-menu-inner">Demos</span><div className="tc-megamenu-wrapper tc-megamenu-holder mega-sub-menu sub-menu tc-columns-4"><ul className="row"><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6222 tc-menu-item tc-menu-depth-1 tc-menu-align-left col-md-3 col-sm-12"><a href="#" className="tc-menu-inner tc-megamenu-title">Group 1</a>
                    <ul className="sub-menu"><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-3407 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/" className="tc-menu-inner">Demo Main Demo</a></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3405 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-2/" className="tc-menu-inner">Demo Course Era</a></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3406 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-3/" className="tc-menu-inner">Demo Online School</a></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6125 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-languages-school/" className="tc-menu-inner">Demo Languages School</a></li></ul></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6223 tc-menu-item tc-menu-depth-1 tc-menu-align-left col-md-3 col-sm-12"><a href="#" className="tc-menu-inner tc-megamenu-title">Group 2</a><ul className="sub-menu"><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6225 tc-menu-item tc-menu-depth-2 tc-menu-align-left">
                        <a href="http://educationwp.thimpress.com/demo-courses-hub/" className="tc-menu-inner">Demo Courses Hub</a></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4028 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-university/" className="tc-menu-inner">Demo Classic University</a></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4202 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-university-2/" className="tc-menu-inner">Demo Modern University</a></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3435 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-university-3/" className="tc-menu-inner">Demo Ivy League</a></li></ul></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6224 tc-menu-item tc-menu-depth-1 tc-menu-align-left col-md-3 col-sm-12">
                            <a href="#" className="tc-menu-inner tc-megamenu-title">Group 3</a><ul className="sub-menu"><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3898 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-edume/" className="tc-menu-inner">Demo New Edu</a></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7597 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-university-4/" className="tc-menu-inner">Demo Stanford</a></li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6607 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-kindergarten/" className="tc-menu-inner">Demo Kindergarten</a></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3899 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-one-instructor/" className="tc-menu-inner">Demo One Instructor</a></li></ul></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-7938 tc-menu-item tc-menu-depth-1 tc-menu-align-left col-md-3 col-sm-12"><a href="#" className="tc-menu-inner tc-megamenu-title">Group 4</a><ul className="sub-menu"><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3436 tc-menu-item tc-menu-depth-2 tc-menu-align-left">
                                    <a href="http://educationwp.thimpress.com/demo-instructor/" className="tc-menu-inner">Demo New Instructor</a></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7939 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-react/" className="tc-menu-inner">Demo React</a></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7599 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-edtech/" className="tc-menu-inner">Demo Edtech</a></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7598 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-grad-school/" className="tc-menu-inner">Demo Grad School</a></li></ul></li></ul></div></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7682 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-builder"><a href="https://educationwp.thimpress.com/courses/" className="tc-menu-inner">Courses</a><div className='tc-megamenu-wrapper tc-megamenu-holder mega-sub-menu sub-menu'><div id="pl-tc-megamenu-7682" className="panel-layout"><div id="pg-tc-megamenu-7682-0" className="panel-grid panel-has-style"><div className="thim-megamenu-row panel-row-style panel-row-style-for-tc-megamenu-7682-0"><div id="pgc-tc-megamenu-7682-0-0" className="panel-grid-cell"><div id="panel-tc-megamenu-7682-0-0-0" className="so-panel widget widget_nav_menu panel-first-child panel-last-child" data-index="0"><h3 className="widget-title">About Courses</h3><div className="menu-about-courses-container"><ul id="menu-about-courses-1" className="menu"><li className="menu-item menu-item-type-post_type menu-item-object-lp_course menu-item-5739 tc-menu-item tc-menu-depth-0 tc-menu-layout-default">
                                    {this.state.showSignIn?
                   
                   <div id="thim-popup-login"class="active sign-in"    ><div className="popup-login-wrapper" >
                           <div onClick={()=>{this.setState({showSignIn:false})}} style={{alignSelf:'flex-end',fontSize:'160%',textAlign:'right',cursor:'pointer'}}>X </div> 
                           <div className="thim-login-container has-shortcode">
                     
                       
                       
                       
                       <div className='mo-openid-app-icons'><p style={{color:'#000000'}}> Login with social networks</p><a rel='nofollow' style={{marginLeft: '4px !important',width:' 240px !important',paddingTop:'11px !important',paddingBottom:'11px !important',marginBottom: '-1px !important',borderRadius: '4px !important'}} className='btn btn-mo btn-block btn-social btn-facebook btn-custom-dec login-button' onClick={()=>{"moOpenIdLogin('facebook','true');"}}> 
                       <i style={{paddingTop:'5px !important'}} className='fa fa-facebook'></i> Facebook</a>
           
                       
                           </div> 
                           <br/>
                           
                           <div className="thim-popup-inner">
                           <div className="thim-login"><h4 className="title">Login with your site account  </h4> 
                       <form name="loginpopopform" action="https://educationwp.thimpress.com/wp-login.php?wpe-login=true" method="post">
                       <p className="login-username"> 
                       <input type="text" name="log"  placeholder="Username or email" className="input required" value="" size="20" /></p>
                       <p className="login-password"> 
                       <input type="password" name="pwd" placeholder="Password" className="input required" value="" size="20" /></p>
                       <p className="thim-login-captcha"> 
                       <input type="text" data-captcha1="3" data-captcha2="4" placeholder="3 &#043; 4 &#061;" className="captcha-result required" /></p> <a className="lost-pass-link" href="https://educationwp.thimpress.com/account/?action=lostpassword" title="Lost Password">Lost your password?</a><p className="forgetmenot login-remember"> <label for="popupRememberme">
                       <input name="rememberme" type="checkbox" value="forever" id="popupRememberme" /> Remember Me </label></p><p className="submit login-submit"> 
                       <input type="submit" name="wp-submit" className="button button-primary button-large" value="Login" /> 
                       <input type="hidden" name="redirect_to" value="#" /> 
                       <input type="hidden" name="testcookie" value="1" /></p></form>
               
               <p className="link-bottom">Not a member yet? <a className="register" href="#">Register now</a></p></div>
               
               
         
               </div> <span className="close-popup"><i className="fa fa-times" aria-hidden="true"></i></span><div className="cssload-container">
                   <div className="cssload-loading"><i></i><i></i><i></i><i></i></div></div></div></div></div>
          
          
                       :<span/>}
                       {this.state.showRegister?
                   
                   <div id="thim-popup-login"class="active sign-in"    ><div className="popup-login-wrapper" >
                      <div onClick={()=>{this.setState({showRegister:false})}} style={{alignSelf:'flex-end',fontSize:'160%',textAlign:'right',cursor:'pointer'}}>X </div> 
                      <div className="thim-login-container has-shortcode">
                
                  
                  
                  
                  <div className='mo-openid-app-icons'><p style={{color:'#000000'}}> Login with social networks</p><a rel='nofollow' style={{marginLeft: '4px !important',width:' 240px !important',paddingTop:'11px !important',paddingBottom:'11px !important',marginBottom: '-1px !important',borderRadius: '4px !important'}} className='btn btn-mo btn-block btn-social btn-facebook btn-custom-dec login-button' onClick={()=>{"moOpenIdLogin('facebook','true');"}}> 
                  <i style={{paddingTop:'5px !important'}} className='fa fa-facebook'></i> Facebook</a>
      
                  
                      </div> 
                      <br/>
                      
                      <div className="thim-popup-inner">
                      
          
    
          <div className="thim-register"><h4 className="title">Register a new account</h4><form className="auto_login" name="registerformpopup" action="https://educationwp.thimpress.com/wp-login.php?action=register&amp;wpe-login=true" method="post" novalidate="novalidate"> 
          <input type="hidden" id="register_security" name="register_security" value="ebbd37ba55" />
               <input type="hidden" name="_wp_http_referer" value="/courses/node/" />
          <p>  <input placeholder="Username" type="text" name="user_login" className="input required" /></p>
              <p> <input placeholder="Email" type="email" name="user_email" className="input required" /></p>
              <p> <input placeholder="Password" type="password" name="password" className="input required" /></p>
              <p> <input placeholder="Repeat Password" type="password" name="repeat_password" className="input required" /></p>
              <p className="thim-login-captcha"> <input type="text" data-captcha1="9" data-captcha2="4" placeholder="9 &#043; 4 &#061;" className="captcha-result required" /></p>
              <p> <input type="hidden" name="redirect_to" value="https://educationwp.thimpress.com/courses/node?enroll-course=5299" /> 
              <input type="hidden" name="modify_user_notification" value="1"/></p>
              <p className="submit"> <input type="submit" name="wp-submit" className="button button-primary button-large" value="Sign up" /></p></form>
              <p className="link-bottom">Are you a member? <a className="login" href="https://educationwp.thimpress.com/account/">Login now</a></p><div className="popup-message"></div></div></div> <span className="close-popup"><i className="fa fa-times" aria-hidden="true"></i></span><div className="cssload-container"><div className="cssload-loading"><i></i><i></i><i></i><i></i></div></div></div></div></div>
     
     
                  :<span/>}
                                
<a href="https://educationwp.thimpress.com/courses/learnpress-101/" className="tc-menu-inner">Free Access Type</a></li>
<li className="menu-item menu-item-type-post_type menu-item-object-lp_course current-menu-item menu-item-5741 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="index.html" className="tc-menu-inner">Other Free Type</a>
</li><li className="menu-item menu-item-type-post_type menu-item-object-lp_course menu-item-5740 tc-menu-item tc-menu-depth-0 tc-menu-layout-default">
<a href="https://educationwp.thimpress.com/courses/become-a-php-master-and-make-money-fast/" className="tc-menu-inner">Paid Type</a></li><li className="menu-item menu-item-type-post_type menu-item-object-lp_course menu-item-5742 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="https://educationwp.thimpress.com/courses/improve-your-css-workflow-with-sass/" className="tc-menu-inner">Other Paid Type</a></li>
<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7635 tc-menu-item tc-menu-depth-0 tc-menu-layout-default">
<a href="https://educationwp.thimpress.com/courses/" className="tc-menu-inner">Courses Archive</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4389 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="https://educationwp.thimpress.com/demo-accounts/" className="tc-menu-inner">Demo Accounts</a></li>
<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4391 tc-menu-item tc-menu-depth-0 tc-menu-layout-default">
<a href="https://educationwp.thimpress.com/become-a-teacher/" className="tc-menu-inner">Become an Instructor</a></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4392 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="http://educationwp.thimpress.com/profile/keny/" className="tc-menu-inner">Instructor Profile</a></li></ul></div></div></div>
<div id="pgc-tc-megamenu-7682-0-1" className="panel-grid-cell"><div id="panel-tc-megamenu-7682-0-1-0" className="so-panel widget widget_courses panel-first-child panel-last-child" data-index="1"><div className="thim-widget-courses thim-widget-courses-base template-megamenu-v3"><div className="thim-course-megamenu"><div className="lpr_course course-grid-1">
<div className="course-item"><div className="course-thumbnail"><a className="thumb" href="https://educationwp.thimpress.com/courses/learnpress-101/"><img src={require("./wp-content/uploads/2015/11/course-4-450x450.jpg")} alt="Introduction LearnPress &#8211; LMS plugin" title="course-4" width="450" height="450"/></a></div><div className="thim-course-content"><h2 className="course-title"> <a href="https://educationwp.thimpress.com/courses/learnpress-101/"> Introduction LearnPress &#8211; LMS plugin</a></h2><div className="course-meta"><div className="course-price" itemProp="offers" itemScope="" itemType="http://schema.org/Offer">
<div className="value  free-course" itemProp="price"> Free</div><meta itemProp="priceCurrency" content="USD" /></div></div> <a className="course-readmore" href="https://educationwp.thimpress.com/courses/learnpress-101/">Read More</a></div></div></div></div></div></div></div>
<div id="pgc-tc-megamenu-7682-0-2" className="panel-grid-cell"><div id="panel-tc-megamenu-7682-0-2-0" className="so-panel widget widget_single-images panel-first-child panel-last-child" data-index="2"><div className="thim-widget-single-images thim-widget-single-images-base template-base"><div className="single-image text-left">
<a target="_self" href="#"><img src={require("./wp-content/uploads/2016/02/megamenu.jpg")} width="252" height="359" alt="" /></a></div></div></div></div></div></div></div></div>
</li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-95 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><span className="tc-menu-inner">Features</span>
<ul className="sub-menu"><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6550 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="https://educationwp.thimpress.com/membership-account/membership-levels/" className="tc-menu-inner tc-megamenu-title">Membership</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4451 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="https://educationwp.thimpress.com/portfolio-masonry/" className="tc-menu-inner tc-megamenu-title">Portfolio</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2924 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="https://educationwp.thimpress.com/about-us/" className="tc-menu-inner tc-megamenu-title">About Us</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-96 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="https://educationwp.thimpress.com/faqs/" className="tc-menu-inner tc-megamenu-title">FAQs</a></li>
    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6418 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-university-2/shop/" className="tc-menu-inner tc-megamenu-title">Sidebar Shop</a></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3126 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="http://educationwp.thimpress.com/404-page" className="tc-menu-inner tc-megamenu-title">404 Page</a></li></ul></li><li className="menu-item menu-item-type-post_type_archive menu-item-object-tp_event menu-item-7679 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="https://educationwp.thimpress.com/events/" className="tc-menu-inner">Events</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4528 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="https://educationwp.thimpress.com/gallery/" className="tc-menu-inner">Gallery</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page current_page_parent menu-item-127 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="https://educationwp.thimpress.com/blog/" className="tc-menu-inner">Blog</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-99 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="https://educationwp.thimpress.com/contact/" className="tc-menu-inner">Contact</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1702 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="https://educationwp.thimpress.com/shop/" className="tc-menu-inner">Shop</a></li><li className="menu-right"><ul><li id="courses-searching-3" className="widget widget_courses-searching"><div className="thim-widget-courses-searching thim-widget-courses-searching-base template-overlay-v2"><div className="thim-course-search-overlay"><div className="search-toggle"><i className="fa fa-search"></i></div><div className="courses-searching layout-overlay"><div className="search-popup-bg"></div><form method="get" action="https://educationwp.thimpress.com/courses/"> <input type="text" value="" name="s" placeholder="Search courses..." className="thim-s form-control courses-search-input" autoComplete="false" /> <input type="hidden" value="course" name="ref" /> <button type="submit"><i className="fa fa-search"></i></button> <span className="widget-search-close"></span></form><ul className="courses-list-search list-unstyled"></ul></div></div></div></li></ul></li></ul></nav><div className="menu-mobile-effect navbar-toggle" data-effect="mobile-effect"> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span></div></div></div></div></div></header>
        )
    }
}
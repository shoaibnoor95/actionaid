import './styles.css';
class Main extends React.Component{
   componentDidMount(){
    function moOpenIdLogin(app_name, is_custom_app) {
                 var base_url = 'https://educationwp.thimpress.com/';
         var request_uri = 'index.html';
         var http = 'https:///';
         var http_host = 'educationwp.thimpress.com';
         if (is_custom_app == 'false') {
         if (request_uri.indexOf('wp-login.html') != -1) {
         var redirect_url = base_url + '/?option=getmosociallogin&app_name=';
         
         } else {
         var redirect_url = http + http_host + request_uri;
         if (redirect_url.indexOf('?') != -1) {
             redirect_url = redirect_url + '&option=getmosociallogin&app_name=';
         } else {
             redirect_url = redirect_url + '?option=getmosociallogin&app_name=';
         }
         }
         } else {
         var current_url = window.location.href;
         var cname = 'redirect_current_url';
         var d = new Date();
         d.setTime(d.getTime() + (2 * 24 * 60 * 60 * 1000));
         var expires = 'expires=' + d.toUTCString();
         document.cookie = cname + '=' + current_url + ';' + expires + ';path=/';   //path = root path(/)
         if (request_uri.indexOf('wp-login.html') != -1) {
         var redirect_url = base_url + '/?option=oauthredirect&app_name=';
         } else {
         var redirect_url = http + http_host + request_uri;
         if (redirect_url.indexOf('?') != -1)
             redirect_url = redirect_url + '&option=oauthredirect&app_name=';
         else
             redirect_url = redirect_url + '?option=oauthredirect&app_name=';
         }
         }
         var redirect_to = jQuery('#loginform input[name="redirect_to"]').val();
         redirect_url = redirect_url + app_name + '&redirect_to=' + encodeURIComponent(redirect_to);
         window.location.href = redirect_url;
         }
         function moOpenIdLogin(app_name, is_custom_app) {
             var base_url = 'https://educationwp.thimpress.com/';
         var request_uri = 'index.html';
         var http = 'https:///';
         var http_host = 'educationwp.thimpress.com';
         if (is_custom_app == 'false') {
         if (request_uri.indexOf('wp-login.html') != -1) {
         var redirect_url = base_url + '/?option=getmosociallogin&app_name=';
         
         } else {
         var redirect_url = http + http_host + request_uri;
         if (redirect_url.indexOf('?') != -1) {
         redirect_url = redirect_url + '&option=getmosociallogin&app_name=';
         } else {
         redirect_url = redirect_url + '?option=getmosociallogin&app_name=';
         }
         }
         } else {
         var current_url = window.location.href;
         var cname = 'redirect_current_url';
         var d = new Date();
         d.setTime(d.getTime() + (2 * 24 * 60 * 60 * 1000));
         var expires = 'expires=' + d.toUTCString();
         document.cookie = cname + '=' + current_url + ';' + expires + ';path=/';   //path = root path(/)
         if (request_uri.indexOf('wp-login.html') != -1) {
         var redirect_url = base_url + '/?option=oauthredirect&app_name=';
         } else {
         var redirect_url = http + http_host + request_uri;
         if (redirect_url.indexOf('?') != -1)
         redirect_url = redirect_url + '&option=oauthredirect&app_name=';
         else
         redirect_url = redirect_url + '?option=oauthredirect&app_name=';
         }
         }
         var redirect_to = jQuery('#loginform input[name="redirect_to"]').val();
         redirect_url = redirect_url + app_name + '&redirect_to=' + encodeURIComponent(redirect_to);
         window.location.href = redirect_url;
         }
         
         jQuery(".btn-mo").prop("disabled",false);
         function mo_openid_on_consent_change(checkbox,value){

            if (value == 0) {
                jQuery('#mo_openid_consent_checkbox').val(1);
                jQuery(".btn-mo").attr("disabled",true);
                jQuery(".login-button").addClass("dis");
            }
            else {
                jQuery('#mo_openid_consent_checkbox').val(0);
                jQuery(".btn-mo").attr("disabled",false);
                jQuery(".login-button").removeClass("dis");
            }
        }

        function moOpenIdLogin(app_name,is_custom_app) {
            var current_url = window.location.href;
            var cookie_name = "redirect_current_url";
            var d = new Date();
            d.setTime(d.getTime() + (2 * 24 * 60 * 60 * 1000));
            var expires = "expires="+d.toUTCString();
            document.cookie = cookie_name + "=" + current_url + ";" + expires + ";path=/";

            var base_url = 'https://educationwp.thimpress.com/';
            var request_uri = 'index.html';
            var http = 'https:///';
            var http_host = 'educationwp.thimpress.com';
            var default_nonce = 'fff0bacf31';
            var custom_nonce = '395356f10e';

           if(is_custom_app == 'false'){

                if ( request_uri.indexOf('wp-login.html') !=-1){
                    var redirect_url = base_url + '/?option=getmosociallogin&wp_nonce=' + default_nonce + '&app_name=';


                }
                else {
                    var redirect_url = http + http_host + request_uri;
                    if(redirect_url.indexOf('?') != -1){
                        redirect_url = redirect_url +'&option=getmosociallogin&wp_nonce=' + default_nonce + '&app_name=';

                    }
                    else
                    {
                        redirect_url = redirect_url +'?option=getmosociallogin&wp_nonce=' + default_nonce + '&app_name=';

                    }
                }
           }
            
            else {

                if ( request_uri.indexOf('wp-login.html') !=-1){
                    var redirect_url = base_url + '/?option=oauthredirect&wp_nonce=' + custom_nonce + '&app_name=';

                }else {
                    var redirect_url = http + http_host + request_uri;
                    if(redirect_url.indexOf('?') != -1)
                        redirect_url = redirect_url +'&option=oauthredirect&wp_nonce=' + custom_nonce + '&app_name=';
                    else
                        redirect_url = redirect_url +'?option=oauthredirect&wp_nonce=' + custom_nonce + '&app_name=';
                }

            }

            window.location.href = redirect_url + app_name;
            }

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
                <div className="mobile-menu-wrapper"><div className="mobile-menu-inner"><div className="icon-wrapper"><div className="menu-mobile-effect navbar-toggle close-icon" data-effect="mobile-effect"> <span className="icon-bar"></span> 
                    <span className="icon-bar"></span> <span className="icon-bar"></span></div></div>
                    <nav className="mobile-menu-container mobile-effect"><ul className="nav navbar-nav">
                        <li id="menu-item-3404" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3404 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-column tc-menu-column-hide-title">
                            <span className="tc-menu-inner">Demos</span>
                            <div className="tc-megamenu-wrapper tc-megamenu-holder mega-sub-menu sub-menu tc-columns-4">
                                <ul className="row">
                                    <li id="menu-item-6222" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6222 tc-menu-item tc-menu-depth-1 tc-menu-align-left col-md-3 col-sm-12">
                                        <a href="#" className="tc-menu-inner tc-megamenu-title">Group 1</a>
                                        <ul className="sub-menu"><li id="menu-item-3407" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-3407 tc-menu-item tc-menu-depth-2 tc-menu-align-left">
                                            <a href="http://educationwp.thimpress.com/" className="tc-menu-inner">Demo Main Demo</a></li>
                                            <li id="menu-item-3405" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3405 tc-menu-item tc-menu-depth-2 tc-menu-align-left">
                                                <a href="http://educationwp.thimpress.com/demo-2/" className="tc-menu-inner">Demo Course Era</a></li><li id="menu-item-3406" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3406 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-3/" className="tc-menu-inner">Demo Online School</a></li>
                                                <li id="menu-item-6125" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6125 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-languages-school/" className="tc-menu-inner">Demo Languages School </a>

                                                </li></ul></li>
                                                <li id="menu-item-6223" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6223 tc-menu-item tc-menu-depth-1 tc-menu-align-left col-md-3 col-sm-12">
                                                    <a href="#" className="tc-menu-inner tc-megamenu-title">Group 2</a>
                                                    <ul className="sub-menu"><li id="menu-item-6225" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6225 tc-menu-item tc-menu-depth-2 tc-menu-align-left">
                                                        <a href="http://educationwp.thimpress.com/demo-courses-hub/" className="tc-menu-inner">Demo Courses Hub</a></li><li id="menu-item-4028" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4028 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-university/" className="tc-menu-inner">Demo Classic University</a></li>
            
                                                        




<li id="menu-item-4202" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4202 tc-menu-item tc-menu-depth-2 tc-menu-align-left">
    <a href="http://educationwp.thimpress.com/demo-university-2/" className="tc-menu-inner">Demo Modern University</a>
</li><li id="menu-item-3435" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3435 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-university-3/" className="tc-menu-inner">Demo Ivy League</a></li></ul></li>
<li id="menu-item-6224" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6224 tc-menu-item tc-menu-depth-1 tc-menu-align-left col-md-3 col-sm-12">
    <a href="#" className="tc-menu-inner tc-megamenu-title">Group 3</a><ul className="sub-menu"><li id="menu-item-3898" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3898 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-edume/" className="tc-menu-inner">Demo New Edu</a></li>
        <li id="menu-item-7597" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7597 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-university-4/" className="tc-menu-inner">Demo Stanford</a></li><li id="menu-item-6607" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6607 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-kindergarten/" className="tc-menu-inner">Demo Kindergarten</a></li><li id="menu-item-3899" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3899 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-one-instructor/" className="tc-menu-inner">Demo One Instructor</a></li></ul></li>
        <li id="menu-item-7938" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-7938 tc-menu-item tc-menu-depth-1 tc-menu-align-left col-md-3 col-sm-12"><a href="#" className="tc-menu-inner tc-megamenu-title">Group 4</a><ul className="sub-menu"><li id="menu-item-3436" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3436 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-instructor/" className="tc-menu-inner">Demo New Instructor</a></li><li id="menu-item-7939" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7939 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-react/" className="tc-menu-inner">Demo React</a></li><li id="menu-item-7599" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7599 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-edtech/" className="tc-menu-inner">Demo Edtech</a>
        </li><li id="menu-item-7598" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7598 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-grad-school/" className="tc-menu-inner">Demo Grad School</a></li></ul></li></ul></div></li><li id="menu-item-7682" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7682 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-builder">
            <a href="https://educationwp.thimpress.com/courses/" className="tc-menu-inner">Courses</a><div className='tc-megamenu-wrapper tc-megamenu-holder mega-sub-menu sub-menu'><div id="pl-tc-megamenu-7682" className="panel-layout"><div id="pg-tc-megamenu-7682-0" className="panel-grid panel-has-style">
                <div className="thim-megamenu-row panel-row-style panel-row-style-for-tc-megamenu-7682-0"><div id="pgc-tc-megamenu-7682-0-0" className="panel-grid-cell"><div id="panel-tc-megamenu-7682-0-0-0" className="so-panel widget widget_nav_menu panel-first-child panel-last-child" data-index="0"><h3 className="widget-title">About Courses</h3><div className="menu-about-courses-container"><ul id="menu-about-courses" className="menu"><li id="menu-item-5739" className="menu-item menu-item-type-post_type menu-item-object-lp_course menu-item-5739 tc-menu-item tc-menu-depth-0 tc-menu-layout-default">
                    <a href="https://educationwp.thimpress.com/courses/learnpress-101/" className="tc-menu-inner">Free Access Type</a></li><li id="menu-item-5741" className="menu-item menu-item-type-post_type menu-item-object-lp_course current-menu-item menu-item-5741 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="index.html" className="tc-menu-inner">Other Free Type</a></li>
                    <li id="menu-item-5740" className="menu-item menu-item-type-post_type menu-item-object-lp_course menu-item-5740 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="https://educationwp.thimpress.com/courses/become-a-php-master-and-make-money-fast/" className="tc-menu-inner">Paid Type</a></li><li id="menu-item-5742" className="menu-item menu-item-type-post_type menu-item-object-lp_course menu-item-5742 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="https://educationwp.thimpress.com/courses/improve-your-css-workflow-with-sass/" className="tc-menu-inner">Other Paid Type</a></li>
                    <li id="menu-item-7635" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7635 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="https://educationwp.thimpress.com/courses/" className="tc-menu-inner">Courses Archive</a></li><li id="menu-item-4389" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4389 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="https://educationwp.thimpress.com/demo-accounts/" className="tc-menu-inner">Demo Accounts</a></li><li id="menu-item-4391" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4391 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="https://educationwp.thimpress.com/become-a-teacher/" className="tc-menu-inner">Become an Instructor</a></li><li id="menu-item-4392" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4392 tc-menu-item tc-menu-depth-0 tc-menu-layout-default">
                        <a href="http://educationwp.thimpress.com/profile/keny/" className="tc-menu-inner">Instructor Profile</a></li></ul></div></div></div><div id="pgc-tc-megamenu-7682-0-1" className="panel-grid-cell"><div id="panel-tc-megamenu-7682-0-1-0" className="so-panel widget widget_courses panel-first-child panel-last-child" data-index="1"><div className="thim-widget-courses thim-widget-courses-base template-megamenu-v3"><div className="thim-course-megamenu"><div className="lpr_course course-grid-1">
                            <div className="course-item"><div className="course-thumbnail"><a className="thumb" href="https://educationwp.thimpress.com/courses/learnpress-101/"><img src="../../wp-content/uploads/2015/11/course-4-450x450.jpg" alt="Introduction LearnPress &#8211; LMS plugin" title="course-4" width="450" height="450"/></a></div><div className="thim-course-content"><h2 className="course-title"> <a href="https://educationwp.thimpress.com/courses/learnpress-101/"> Introduction LearnPress &#8211; LMS plugin</a></h2><div className="course-meta"><div className="course-price" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer"><div className="value  free-course" itemprop="price"> Free</div><meta itemprop="priceCurrency" content="USD" /></div></div>
                             <a className="course-readmore" href="https://educationwp.thimpress.com/courses/learnpress-101/">Read More</a></div></div></div></div></div></div></div><div id="pgc-tc-megamenu-7682-0-2" className="panel-grid-cell"><div id="panel-tc-megamenu-7682-0-2-0" className="so-panel widget widget_single-images panel-first-child panel-last-child" data-index="2"><div className="thim-widget-single-images thim-widget-single-images-base template-base"><div className="single-image text-left"><a target="_self" href="#"><img src="../../wp-content/uploads/2016/02/megamenu.jpg" width="252" height="359" alt="" /></a></div></div></div></div></div></div></div></div></li><li id="menu-item-95" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-95 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><span className="tc-menu-inner">Features</span><ul className="sub-menu"><li id="menu-item-6550" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6550 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="https://educationwp.thimpress.com/membership-account/membership-levels/" className="tc-menu-inner tc-megamenu-title">Membership</a></li><li id="menu-item-4451" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4451 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="https://educationwp.thimpress.com/portfolio-masonry/" className="tc-menu-inner tc-megamenu-title">Portfolio</a></li><li id="menu-item-2924" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2924 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="https://educationwp.thimpress.com/about-us/" className="tc-menu-inner tc-megamenu-title">About Us</a></li><li id="menu-item-96" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-96 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="https://educationwp.thimpress.com/faqs/" className="tc-menu-inner tc-megamenu-title">FAQs</a></li><li id="menu-item-6418" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6418 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-university-2/shop/" className="tc-menu-inner tc-megamenu-title">Sidebar Shop</a></li><li id="menu-item-3126" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3126 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="http://educationwp.thimpress.com/404-page" className="tc-menu-inner tc-megamenu-title">404 Page</a></li></ul></li>
                             <li id="menu-item-7679" className="menu-item menu-item-type-post_type_archive menu-item-object-tp_event menu-item-7679 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="https://educationwp.thimpress.com/events/" className="tc-menu-inner">Events</a></li><li id="menu-item-4528" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4528 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="https://educationwp.thimpress.com/gallery/" className="tc-menu-inner">Gallery</a></li><li id="menu-item-127" className="menu-item menu-item-type-post_type menu-item-object-page current_page_parent menu-item-127 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="https://educationwp.thimpress.com/blog/" className="tc-menu-inner">Blog</a></li><li id="menu-item-99" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-99 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="https://educationwp.thimpress.com/contact/" className="tc-menu-inner">Contact</a></li><li id="menu-item-1702" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1702 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="https://educationwp.thimpress.com/shop/" className="tc-menu-inner">Shop</a></li>
                             <li className="menu-right header_v1"><ul><li id="courses-searching-3" className="widget widget_courses-searching"><div className="thim-widget-courses-searching thim-widget-courses-searching-base template-overlay-v2"><div className="thim-course-search-overlay"><div className="search-toggle"><i className="fa fa-search"></i></div><div className="courses-searching layout-overlay"><div className="search-popup-bg"></div>
                                <form method="get" action="https://educationwp.thimpress.com/courses/"> <input type="text" value="" name="s" placeholder="Search courses..." className="thim-s form-control courses-search-input" autocomplete="off" /> <input type="hidden" value="course" name="ref" /> <button type="submit"><i className="fa fa-search"></i></button> <span className="widget-search-close"></span></form><ul className="courses-list-search list-unstyled"></ul></div></div></div></li></ul></li></ul></nav></div></div><div id="wrapper-container" className="wrapper-container"><div className="content-pusher"><header id="masthead" className="site-header affix-top bg-custom-sticky header_overlay header_v1"><div id="toolbar" className="toolbar"><div className="container"><div className="row"><div className="col-sm-12"><div className="toolbar-container"><aside id="text-2" className="widget widget_text">
                                    <div className="textwidget"><div className="thim-have-any-question"> Have any question?<div className="mobile"><i className="fa fa-phone"></i><a href="tel:00123456789" className="value">(00) 123 456 789</a></div><div className="email"><i className="fa fa-envelope"></i><a href="https://educationwp.thimpress.com/cdn-cgi/l/email-protection#fb939e979794bb9e9f8e969ad5989496"><span className="__cf_email__" data-cfemail="39515c555556795c5d4c5458175a5654">[email&#160;protected]</span></a></div></div></div></aside><aside id="login-popup-3" className="widget widget_login-popup"><div className="thim-widget-login-popup thim-widget-login-popup-base template-base"><div className="thim-link-login thim-login-popup"> <a className="register js-show-popup" href="https://educationwp.thimpress.com/account/?action=register">Register</a><a className="login js-show-popup" href="https://educationwp.thimpress.com/account/">Login</a></div></div></aside></div></div></div></div></div><div className="thim-nav-wrapper container"><div className="row"><div className="navigation col-sm-12"><div className="tm-table"><div className="width-logo table-cell sm-logo"> <a href="https://educationwp.thimpress.com/" title="Education WP - Education WordPress Theme" rel="home" className="no-sticky-logo"><img src="../../wp-content/uploads/2015/11/logo.png" alt="Education WP"/></a>
                                        <a href="https://educationwp.thimpress.com/" rel="home" className="sticky-logo"><img src="../../wp-content/uploads/2015/11/logo-sticky.png" alt="Education WP"/></a></div><nav className="width-navigation table-cell table-right"><ul className="nav navbar-nav menu-main-menu"><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3404 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-column tc-menu-column-hide-title"><span className="tc-menu-inner">Demos</span><div className="tc-megamenu-wrapper tc-megamenu-holder mega-sub-menu sub-menu tc-columns-4"><ul className="row"><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6222 tc-menu-item tc-menu-depth-1 tc-menu-align-left col-md-3 col-sm-12"><a href="#" className="tc-menu-inner tc-megamenu-title">Group 1</a>
                                            <ul className="sub-menu"><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-3407 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/" className="tc-menu-inner">Demo Main Demo</a></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3405 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-2/" className="tc-menu-inner">Demo Course Era</a></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3406 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-3/" className="tc-menu-inner">Demo Online School</a></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6125 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-languages-school/" className="tc-menu-inner">Demo Languages School</a></li></ul></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6223 tc-menu-item tc-menu-depth-1 tc-menu-align-left col-md-3 col-sm-12"><a href="#" className="tc-menu-inner tc-megamenu-title">Group 2</a><ul className="sub-menu"><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6225 tc-menu-item tc-menu-depth-2 tc-menu-align-left">
                                                <a href="http://educationwp.thimpress.com/demo-courses-hub/" className="tc-menu-inner">Demo Courses Hub</a></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4028 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-university/" className="tc-menu-inner">Demo Classic University</a></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4202 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-university-2/" className="tc-menu-inner">Demo Modern University</a></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3435 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-university-3/" className="tc-menu-inner">Demo Ivy League</a></li></ul></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6224 tc-menu-item tc-menu-depth-1 tc-menu-align-left col-md-3 col-sm-12">
                                                    <a href="#" className="tc-menu-inner tc-megamenu-title">Group 3</a><ul className="sub-menu"><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3898 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-edume/" className="tc-menu-inner">Demo New Edu</a></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7597 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-university-4/" className="tc-menu-inner">Demo Stanford</a></li>
                                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6607 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-kindergarten/" className="tc-menu-inner">Demo Kindergarten</a></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3899 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-one-instructor/" className="tc-menu-inner">Demo One Instructor</a></li></ul></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-7938 tc-menu-item tc-menu-depth-1 tc-menu-align-left col-md-3 col-sm-12"><a href="#" className="tc-menu-inner tc-megamenu-title">Group 4</a><ul className="sub-menu"><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3436 tc-menu-item tc-menu-depth-2 tc-menu-align-left">
                                                            <a href="http://educationwp.thimpress.com/demo-instructor/" className="tc-menu-inner">Demo New Instructor</a></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7939 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-react/" className="tc-menu-inner">Demo React</a></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7599 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-edtech/" className="tc-menu-inner">Demo Edtech</a></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7598 tc-menu-item tc-menu-depth-2 tc-menu-align-left"><a href="http://educationwp.thimpress.com/demo-grad-school/" className="tc-menu-inner">Demo Grad School</a></li></ul></li></ul></div></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7682 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-builder"><a href="https://educationwp.thimpress.com/courses/" className="tc-menu-inner">Courses</a><div className='tc-megamenu-wrapper tc-megamenu-holder mega-sub-menu sub-menu'><div id="pl-tc-megamenu-7682" className="panel-layout"><div id="pg-tc-megamenu-7682-0" className="panel-grid panel-has-style"><div className="thim-megamenu-row panel-row-style panel-row-style-for-tc-megamenu-7682-0"><div id="pgc-tc-megamenu-7682-0-0" className="panel-grid-cell"><div id="panel-tc-megamenu-7682-0-0-0" className="so-panel widget widget_nav_menu panel-first-child panel-last-child" data-index="0"><h3 className="widget-title">About Courses</h3><div className="menu-about-courses-container"><ul id="menu-about-courses-1" className="menu"><li className="menu-item menu-item-type-post_type menu-item-object-lp_course menu-item-5739 tc-menu-item tc-menu-depth-0 tc-menu-layout-default">
                                                        
                                                        
<a href="https://educationwp.thimpress.com/courses/learnpress-101/" className="tc-menu-inner">Free Access Type</a></li>
<li className="menu-item menu-item-type-post_type menu-item-object-lp_course current-menu-item menu-item-5741 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="index.html" className="tc-menu-inner">Other Free Type</a>
</li><li className="menu-item menu-item-type-post_type menu-item-object-lp_course menu-item-5740 tc-menu-item tc-menu-depth-0 tc-menu-layout-default">
    <a href="https://educationwp.thimpress.com/courses/become-a-php-master-and-make-money-fast/" className="tc-menu-inner">Paid Type</a></li><li className="menu-item menu-item-type-post_type menu-item-object-lp_course menu-item-5742 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="https://educationwp.thimpress.com/courses/improve-your-css-workflow-with-sass/" className="tc-menu-inner">Other Paid Type</a></li>
    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7635 tc-menu-item tc-menu-depth-0 tc-menu-layout-default">
        <a href="https://educationwp.thimpress.com/courses/" className="tc-menu-inner">Courses Archive</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4389 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="https://educationwp.thimpress.com/demo-accounts/" className="tc-menu-inner">Demo Accounts</a></li>
        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4391 tc-menu-item tc-menu-depth-0 tc-menu-layout-default">
            <a href="https://educationwp.thimpress.com/become-a-teacher/" className="tc-menu-inner">Become an Instructor</a></li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4392 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="http://educationwp.thimpress.com/profile/keny/" className="tc-menu-inner">Instructor Profile</a></li></ul></div></div></div>
            <div id="pgc-tc-megamenu-7682-0-1" className="panel-grid-cell"><div id="panel-tc-megamenu-7682-0-1-0" className="so-panel widget widget_courses panel-first-child panel-last-child" data-index="1"><div className="thim-widget-courses thim-widget-courses-base template-megamenu-v3"><div className="thim-course-megamenu"><div className="lpr_course course-grid-1">
                <div className="course-item"><div className="course-thumbnail"><a className="thumb" href="https://educationwp.thimpress.com/courses/learnpress-101/"><img src={require("../../wp-content/uploads/2015/11/course-4-450x450.jpg")} alt="Introduction LearnPress &#8211; LMS plugin" title="course-4" style={{ width:"450", height:"450"}}/></a></div><div className="thim-course-content"><h2 className="course-title"> <a href="https://educationwp.thimpress.com/courses/learnpress-101/"> Introduction LearnPress &#8211; LMS plugin</a></h2><div className="course-meta"><div className="course-price" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">
                    <div className="value  free-course" itemprop="price"> Free</div><meta itemprop="priceCurrency" content="USD" /></div></div> <a className="course-readmore" href="https://educationwp.thimpress.com/courses/learnpress-101/">Read More</a></div></div></div></div></div></div></div>
                    <div id="pgc-tc-megamenu-7682-0-2" className="panel-grid-cell"><div id="panel-tc-megamenu-7682-0-2-0" className="so-panel widget widget_single-images panel-first-child panel-last-child" data-index="2"><div className="thim-widget-single-images thim-widget-single-images-base template-base"><div className="single-image text-left">
                        <a target="_self" href="#"><img src={require("../../wp-content/uploads/2016/02/megamenu.jpg")} style={{ width:"252", height:"359"}} alt="" /></a></div></div></div></div></div></div></div></div>
                    </li><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-95 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><span className="tc-menu-inner">Features</span>
                        <ul className="sub-menu"><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6550 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="https://educationwp.thimpress.com/membership-account/membership-levels/" className="tc-menu-inner tc-megamenu-title">Membership</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4451 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="https://educationwp.thimpress.com/portfolio-masonry/" className="tc-menu-inner tc-megamenu-title">Portfolio</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2924 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="https://educationwp.thimpress.com/about-us/" className="tc-menu-inner tc-megamenu-title">About Us</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-96 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="https://educationwp.thimpress.com/faqs/" className="tc-menu-inner tc-megamenu-title">FAQs</a></li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6418 tc-menu-item tc-menu-depth-1 tc-menu-align-left">
                            <a href="http://educationwp.thimpress.com/demo-university-2/shop/" className="tc-menu-inner tc-megamenu-title">Sidebar Shop</a></li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3126 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><a href="http://educationwp.thimpress.com/404-page" className="tc-menu-inner tc-megamenu-title">404 Page</a></li></ul></li>
                            <li className="menu-item menu-item-type-post_type_archive menu-item-object-tp_event menu-item-7679 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default">
                            <a href="https://educationwp.thimpress.com/events/" className="tc-menu-inner">Events</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4528 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default">
                            <a href="https://educationwp.thimpress.com/gallery/" className="tc-menu-inner">Gallery</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page current_page_parent menu-item-127 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="https://educationwp.thimpress.com/blog/" className="tc-menu-inner">Blog</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-99 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="https://educationwp.thimpress.com/contact/" className="tc-menu-inner">Contact</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1702 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="https://educationwp.thimpress.com/shop/" className="tc-menu-inner">Shop</a></li><li className="menu-right"><ul><li id="courses-searching-3" className="widget widget_courses-searching"><div className="thim-widget-courses-searching thim-widget-courses-searching-base template-overlay-v2"><div className="thim-course-search-overlay"><div className="search-toggle"><i className="fa fa-search"></i></div><div className="courses-searching layout-overlay"><div className="search-popup-bg"></div><form method="get" action="https://educationwp.thimpress.com/courses/"> <input type="text" value="" name="s" placeholder="Search courses..." className="thim-s form-control courses-search-input" autocomplete="off" /> <input type="hidden" value="course" name="ref" /> <button type="submit"><i className="fa fa-search"></i></button> <span className="widget-search-close"></span></form><ul className="courses-list-search list-unstyled"></ul></div></div></div></li></ul></li></ul></nav><div className="menu-mobile-effect navbar-toggle" data-effect="mobile-effect"> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span></div></div></div></div></div></header><div id="main-content"><section className="content-area"><div className="top_heading  _out"><div className="top_site_main " style={{color: '#ffffff',backgroundImage:require('../../wp-content/themes/eduma/images/bg-page.jpg')}}> <span className="overlay-top-header" style={{background:rgba(0,0,0,0.5)}}></span><div className="page-title-wrapper"><div className="banner-wrapper container"><h2>Technology</h2></div></div></div><div className="breadcrumbs-wrapper"><div className="container"><ul itemprop="breadcrumb" itemscope itemtype="http://schema.org/BreadcrumbList" id="breadcrumbs" className="breadcrumbs"><li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><a itemprop="item" href="https://educationwp.thimpress.com/" title="Home"><span itemprop="name">Home</span></a></li><li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><a itemprop="item" href="https://educationwp.thimpress.com/courses/" title="All courses"><span itemprop="name">All courses</span></a></li><li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><a itemprop="item" href="https://educationwp.thimpress.com/course-category/technology/" title="Technology"><span itemprop="name">Technology</span></a></li><li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><span itemprop="name" title="From Zero to Hero with Nodejs">From Zero to Hero with Nodejs</span></li></ul></div></div></div><div className="container site-content sidebar-right"><div className="row"><main id="main" className="site-main col-sm-9 alignleft"><article id="post-5299" className="post-5299 lp_course type-lp_course status-publish has-post-thumbnail hentry course_category-technology course_tag-node course_tag-tutorial pmpro-has-access course"><div className="entry-content"><div id="lp-single-course" className="lp-single-course"><div id="learn-press-course" className="course-summary learn-press"><h1 className="entry-title" itemprop="name">From Zero to Hero with Nodejs</h1><div className="course-meta"><div className="course-author"> <img alt="Admin bar avatar" src={require("../../wp-content/uploads/learn-press-profile/7/9c081444f942cc8fe0ddf55631b584e2.jpg")} className="avatar avatar-96 photo" style={{ height:"96", width:"96"}} /><div className="author-contain"> <label itemprop="jobTitle">Teacher</label><div className="value" itemprop="name"> <a href="https://educationwp.thimpress.com/profile/keny/">Keny White</a></div></div></div><div className="course-categories"> <label>Categories</label><div className="value"> <span className="cat-links"><a href="https://educationwp.thimpress.com/course-category/technology/" rel="tag">Technology</a></span></div></div><div className="course-review"> <label>Review</label><div className="value"><div className="review-stars-rated"><ul className="review-stars"><li><span className="fa fa-star-o"></span></li><li><span className="fa fa-star-o"></span></li><li><span className="fa fa-star-o"></span></li><li><span className="fa fa-star-o"></span></li><li><span className="fa fa-star-o"></span></li></ul><ul className="review-stars filled" style={{width: calc('100%' - '2px')}}><li><span className="fa fa-star"></span></li><li><span className="fa fa-star"></span></li><li><span className="fa fa-star"></span></li><li><span className="fa fa-star"></span></li><li><span className="fa fa-star"></span></li></ul></div> <span>(1 review)</span></div></div></div><div className="course-payment"><div className="course-price"><div className="value  free-course"> Free</div></div><div className="lp-course-buttons"><form name="enroll-course" className="enroll-course form-purchase-course" method="post" enctype="multipart/form-data"> <input type="hidden" name="enroll-course" value="5299" /> <input type="hidden" name="enroll-course-nonce" value="5f792a224d" /> <button className="lp-button button button-enroll-course"> Take this course </button> <input type="hidden" name="redirect_to" value="https://educationwp.thimpress.com/account/?redirect_to=https://educationwp.thimpress.com/courses/node/?enroll-course=5299"/></form></div></div><div className="course-summary"><div className="course-thumbnail"> <img style={{width:"870", height:"500"}} src={require("../../wp-content/uploads/2015/06/course-1.jpg")} className="attachment-full size-full wp-post-image" alt="course-1" title="course-1" srcset="https://3ek5k1tux0822q3g83e30fye-wpengine.netdna-ssl.com/wp-content/uploads/2015/06/course-1.jpg 870w, https://3ek5k1tux0822q3g83e30fye-wpengine.netdna-ssl.com/wp-content/uploads/2015/06/course-1-300x172.jpg 300w, https://3ek5k1tux0822q3g83e30fye-wpengine.netdna-ssl.com/wp-content/uploads/2015/06/course-1-768x441.jpg 768w" sizes="(max-width: 870px) 100vw, 870px" /></div><div id="course-landing" className="course-landing-summary"><div id="learn-press-course-tabs" className="course-tabs"><ul className="nav nav-tabs"><li role="presentation" className="course-nav-tab-overview active"> <a href="#tab-overview" data-toggle="tab"> <i className="fa fa-bookmark"></i> <span>Overview</span> </a></li><li role="presentation" className="course-nav-tab-curriculum"> <a href="#tab-curriculum" data-toggle="tab"> <i className="fa fa-cube"></i> <span>Curriculum</span> </a></li><li role="presentation" className="course-nav-tab-instructor"> <a href="#tab-instructor" data-toggle="tab"> <i className="fa fa-user"></i> <span>Instructor</span> </a></li><li role="presentation" className="course-nav-tab-reviews"> <a href="#tab-reviews" data-toggle="tab"> <i className="fa fa-comments"></i> <span>Reviews</span> </a></li></ul><div className="tab-content"><div className="tab-pane course-tab-panel-overview course-tab-panel active" id="tab-overview"><div className="course-description" id="learn-press-course-description"><div className="thim-course-content"><h4>COURSE DESCRIPTION</h4><p>Node.js is an open source server environment.</p><p>Node.js allows you to run JavaScript on the server.</p><p>Node.js is a very powerful JavaScript-based platform built on Google Chrome&#8217;s JavaScript V8 Engine. It is used to develop I/O intensive web applications like video streaming sites, single-page applications, and other web applications. Node.js is open source, completely free, and used by thousands of developers around the world.</p><h4>Audience</h4><p>This tutorial is designed for software programmers who want to learn the basics of Node.js and its architectural concepts. This tutorial will give you enough understanding on all the necessary components of Node.js with suitable examples.</p><h4>Prerequisites</h4><p>Before proceeding with this tutorial, you should have a basic understanding of JavaScript. As we are going to develop web-based applications using Node.js, it will be good if you have some understanding of other web technologies such as HTML, CSS, AJAX, etc.</p><h4>LEARNING OUTCOMES</h4><ul className="thim-list-content"><li>Over 37 lectures and 55.5 hours of content!</li><li>LIVE PROJECT End to End Software Testing Training Included.</li><li>Learn Software Testing and Automation basics from a professional trainer from your own desk.</li><li>Information packed practical training starting from basics to advanced testing techniques.</li><li>Best suitable for beginners to advanced level users and who learn faster when demonstrated.</li><li>Course content designed by considering current software testing technology and the job market.</li><li>Practical assignments at the end of every session.</li><li>Practical learning experience with live project work and examples.</li></ul></div><div className="thim-course-info"><h3 className="title">Course Features</h3><ul><li className="lectures-feature"> <i className="fa fa-files-o"></i> <span className="label">Lectures</span> <span className="value">6</span></li><li className="quizzes-feature"> <i className="fa fa-puzzle-piece"></i> <span className="label">Quizzes</span> <span className="value">0</span></li><li className="duration-feature"> 
                            <i className="fa fa-clock-o"></i> <span className="label">Duration</span> <span className="value">33 hours</span></li><li className="skill-feature"> <i className="fa fa-level-up"></i> <span className="label">Skill level</span> <span className="value">Beginner</span></li><li className="language-feature"> <i className="fa fa-language"></i> <span className="label">Language</span> <span className="value">English</span></li><li className="students-feature"> <i className="fa fa-users"></i> <span className="label">Students</span> <span className="value">82</span></li><li className="assessments-feature"> <i className="fa fa-check-square-o"></i> <span className="label">Assessments</span> <span className="value">Yes</span></li></ul></div></div></div><div className="tab-pane course-tab-panel-curriculum course-tab-panel" id="tab-curriculum"><div className="thim-curriculum-buttons"></div><div className="course-curriculum" id="learn-press-course-curriculum"><div className="curriculum-scrollable"><nav className="thim-font-heading learn-press-breadcrumb" itemprop="breadcrumb"><a href="https://educationwp.thimpress.com/courses/">Courses</a><i className="fa-angle-right fa"></i><a href="https://educationwp.thimpress.com/course-category/technology/">Technology</a><i className="fa-angle-right fa"></i><span className="item-name">From Zero to Hero with Nodejs</span></nav><ul className="curriculum-sections"><li className="section" id="section-section-1-basic-nodejs-12" data-id="section-1-basic-nodejs-12" data-section-id="12"><h4 className="section-header"> <span className="collapse"></span> Section 1: Basic Nodejs <span className="meta"> <span className="step">1</span> </span></h4><ul className="section-content"><li className="course-item course-item-lp_lesson course-item-8930 item-preview has-status course-lesson" data-type="lp_lesson"><div className="meta-left"> <span className="course-format-icon"><i className="fa fa-file-o"></i></span><div className="index"><span className="label">Lecture</span>1.1</div></div> <a className="lesson-title course-item-title button-load-item" href="lessons/node-js-introduction/index.html"> Node.js &#8211; Introduction </a> <span className="meta duration">50 min</span><div className="course-item-meta"> <a title="Previews" className="lesson-preview button-load-item" href="lessons/node-js-introduction/index.html" data-id="8930" data-complete-nonce="31f4bff35e"> <i className="fa fa-eye" data-preview="Preview"></i> </a></div></li><li className="course-item course-item-lp_lesson course-item-8934 item-locked course-lesson" data-type="lp_lesson"><div className="meta-left"> <span className="course-format-icon"><i className="fa fa-file-o"></i></span><div className="index"><span className="label">Lecture</span>1.2</div></div> <a className="lesson-title course-item-title button-load-item" href="lessons/content-drip-add-on-copy/index.html"> Node.js &#8211; Environment Setup </a> <span className="meta duration">25 min</span><div className="course-item-meta"> <i className="fa item-meta course-item-status trans"></i></div></li><li className="course-item course-item-lp_lesson course-item-8931 item-preview has-status course-lesson" data-type="lp_lesson"><div className="meta-left"> <span className="course-format-icon"><i className="fa fa-file-o"></i></span><div className="index"><span className="label">Lecture</span>1.3</div></div> <a className="lesson-title course-item-title button-load-item" href="lessons/how-to-use-learnpress-copy/index.html"> Node.js &#8211; Packaging </a> <span className="meta duration">20 min</span><div className="course-item-meta"> <a title="Previews" className="lesson-preview button-load-item" href="lessons/how-to-use-learnpress-copy/index.html" data-id="8931" data-complete-nonce="011dabc283"> <i className="fa fa-eye" data-preview="Preview"></i> </a></div></li></ul></li><li className="section" id="section-section-2-advanced-nodejs-13" data-id="section-2-advanced-nodejs-13" data-section-id="13"><h4 className="section-header"> <span className="collapse"></span> Section 2: Advanced Nodejs <span className="meta"> <span className="step">0</span> </span></h4><ul className="section-content"><li className="course-item course-item-lp_lesson course-item-8929 item-preview has-status course-lesson" data-type="lp_lesson"><div className="meta-left"> <span className="course-format-icon"><i className="fa fa-file-o"></i></span><div className="index"><span className="label">Lecture</span>2.1</div></div> <a className="lesson-title course-item-title button-load-item" href="lessons/woocommerce-payments-add-on-copy/index.html"> Node.js &#8211; Utility Modules </a> <span className="meta duration">20 min</span><div className="course-item-meta"> <a title="Previews" className="lesson-preview button-load-item" href="lessons/woocommerce-payments-add-on-copy/index.html" data-id="8929" data-complete-nonce="a6fdb1b26b"> <i className="fa fa-eye" data-preview="Preview"></i> </a></div></li><li className="course-item course-item-lp_lesson course-item-8933 item-preview has-status course-lesson" data-type="lp_lesson"><div className="meta-left"> <span className="course-format-icon"><i className="fa fa-file-o"></i></span><div className="index"><span className="label">Lecture</span>2.2</div></div> <a className="lesson-title course-item-title button-load-item" href="lessons/certificate-add-on-copy/index.html"> Node.js &#8211; Web Module </a> <span className="meta duration">30 min</span><div className="course-item-meta"> <a title="Previews" className="lesson-preview button-load-item" href="lessons/certificate-add-on-copy/index.html" data-id="8933" data-complete-nonce="d00224d6ad"> <i className="fa fa-eye" data-preview="Preview"></i> </a></div></li><li className="course-item course-item-lp_lesson course-item-8932 item-preview has-status course-lesson" data-type="lp_lesson"><div className="meta-left"> <span className="course-format-icon"><i className="fa fa-file-o"></i></span><div className="index"><span className="label">Lecture</span>2.3</div></div> <a className="lesson-title course-item-title button-load-item" href="lessons/co-instructors-add-on-copy/index.html"> Node.js &#8211; Express Framework </a> <span className="meta duration">30 min</span><div className="course-item-meta"> <a title="Previews" className="lesson-preview button-load-item" href="lessons/co-instructors-add-on-copy/index.html" data-id="8932" data-complete-nonce="7acf6b8bf4"> <i className="fa fa-eye" data-preview="Preview"></i> </a></div></li></ul></li></ul></div></div></div><div className="tab-pane course-tab-panel-instructor course-tab-panel" id="tab-instructor"><div className="thim-about-author"><div className="author-wrapper"><div className="author-avatar"> <img alt="Admin bar avatar" src={require("../../wp-content/uploads/learn-press-profile/7/9c081444f942cc8fe0ddf55631b584e2.jpg")} className="avatar avatar-110 photo" style={{height:"110", width:"110"}} /></div><div className="author-bio"><div className="author-top"> <a className="name" href="https://educationwp.thimpress.com/profile/keny/"> Keny White </a><p className="job">Professor</p></div><ul className="thim-author-social"><li> <a href="http://example.com/eduma-the-best-lms-wordpress/theme" className="facebook"><i className="fa fa-facebook"></i></a></li><li> <a href="http://example.com/eduma-the-best-lms-wordpress/theme" className="twitter"><i className="fa fa-twitter"></i></a></li><li> <a href="http://example.com/eduma-the-best-lms-wordpress/theme" className="google-plus"><i className="fa fa-google-plus"></i></a></li><li> <a href="http://example.com/eduma-the-best-lms-wordpress/theme" className="linkedin"><i className="fa fa-linkedin"></i></a></li><li> <a href="http://example.com/eduma-the-best-lms-wordpress/theme" className="youtube"><i className="fa fa-youtube"></i></a></li></ul></div><div className="author-description"> Keny White is Professor of the Department of Computer Science at Boston University, where he has been since 2004. He also currently serves as Chief Scientist of Guavus, Inc. During 2003-2004 he was a Visiting Associate Professor at the Laboratoire d'Infomatique de Paris VI (LIP6). He received a B.S. from Cornell University in 1992, and an M.S. from the State University of New York at Buffalo.</div></div></div><div className="thim-about-author thim-co-instructor" itemprop="contributor" itemscope itemtype="http://schema.org/Person"><div className="author-wrapper"><div className="author-avatar"> <img alt='' src='http://www.gravatar.com/avatar/17445360b49029117e3e61d7fc65c959?s=110&amp;r=g' srcset='//www.gravatar.com/avatar/17445360b49029117e3e61d7fc65c959?s=110&#038;r=g 2x' className='avatar avatar-110 photo' style={{ height:'110', width:'110'}} /></div><div className="author-bio"><div className="author-top"> <a itemprop="url" className="name" href="https://educationwp.thimpress.com/profile/johndoe/"> <span itemprop="name">John Doe</span> </a><p className="job" itemprop="jobTitle">Bachelor</p></div><ul className="thim-author-social"><li> <a href="http://example.com/eduma-the-best-lms-wordpress/theme" className="facebook"><i className="fa fa-facebook"></i></a></li><li> <a href="http://example.com/eduma-the-best-lms-wordpress/theme" className="twitter"><i className="fa fa-twitter"></i></a></li><li> <a href="http://example.com/eduma-the-best-lms-wordpress/theme" className="google-plus"><i className="fa fa-google-plus"></i></a></li><li> <a href="http://example.com/eduma-the-best-lms-wordpress/theme" className="linkedin"><i className="fa fa-linkedin"></i></a></li><li> <a href="http://example.com/eduma-the-best-lms-wordpress/theme" className="youtube"><i className="fa fa-youtube"></i></a></li></ul></div><div className="author-description" itemprop="description"> After working as a software developer and contractor for over 8 years for a whole bunch of companies including ABX, Proit, SACC and AT&amp;T in the US, He decided to work full-time as a private software trainer.
Lorem Ipsum is simply dummy text text text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy dummy text dummy ever 
since the 1500s.</div></div></div></div><div className="tab-pane course-tab-panel-reviews course-tab-panel" id="tab-reviews"><div className="course-rating"><h3>Reviews</h3><div className="average-rating" itemprop="aggregateRating" itemscope="" itemtype="http://schema.org/AggregateRating"><p className="rating-title">Average Rating</p><div className="rating-box"><div className="average-value" itemprop="ratingValue">5</div><div className="review-star"><div className="review-stars-rated"><ul className="review-stars"><li><span className="fa fa-star-o"></span></li><li><span className="fa fa-star-o"></span></li><li><span className="fa fa-star-o"></span></li><li><span className="fa fa-star-o"></span></li><li><span className="fa fa-star-o"></span></li></ul><ul className="review-stars filled" style={{width: calc("100%" - "2px")}}><li><span className="fa fa-star"></span></li><li><span className="fa fa-star"></span></li><li><span className="fa fa-star"></span></li><li><span className="fa fa-star"></span></li><li><span className="fa fa-star"></span></li></ul></div></div>
                    <div className="review-amount" itemprop="ratingCount"> 1 rating</div></div></div><div className="detailed-rating"><p className="rating-title">Detailed Rating</p><div className="rating-box"><div className="detailed-rating"><div className="stars"><div className="key"> 5 Stars</div><div className="bar"><div className="full_bar"><div style="width:100% "></div></div></div> <span>100%</span></div><div className="stars"><div className="key"> 4 Stars</div><div className="bar"><div className="full_bar"><div style="width:0% "></div></div></div> <span>0%</span></div><div className="stars"><div className="key"> 3 Stars</div><div className="bar"><div className="full_bar"><div style={{width:"0%"}}></div></div></div> <span>0%</span></div>
                    <div className="stars"><div className="key"> 2 Stars</div><div className="bar"><div className="full_bar"><div style={{width:"0%"}}></div></div></div> <span>0%</span></div><div className="stars"><div className="key"> 1 Star</div><div className="bar"><div className="full_bar"><div style={{width:"0%"}}></div></div></div> <span>0%</span></div></div></div></div><div className="review-stars-rated"><div className="review-stars empty"></div><div className="review-stars filled" style={{width:'100%'}}></div></div><div></div></div><div className="course-review"><div id="course-reviews" className="content-review"><ul className="course-reviews-list"><li><div className="review-container" itemprop="review" itemscope itemtype="http://schema.org/Review"><div className="review-author"> <img alt="Admin bar avatar" src={require("../../wp-content/uploads/learn-press-profile/7/9c081444f942cc8fe0ddf55631b584e2.jpg")} className="avatar avatar-96 photo" style={{ height:"96", width:"96"}} /></div><div classxName="review-text"><h4 className="author-name" itemprop="author"> Keny White</h4><div className="review-star"><div className="review-stars-rated"> 
                        <ul className="review-stars"><li><span className="fa fa-star-o"></span></li><li><span className="fa fa-star-o"></span></li><li><span className="fa fa-star-o"></span></li><li><span className="fa fa-star-o"></span></li><li><span className="fa fa-star-o"></span></li></ul><ul className="review-stars filled" style={{width: calc("100%" - "2px")}}><li><span className="fa fa-star"></span></li><li><span className="fa fa-star"></span></li><li><span className="fa fa-star"></span></li><li><span className="fa fa-star"></span></li><li><span className="fa fa-star"></span></li></ul></div></div><p className="review-title"> Awesome</p><div className="description" itemprop="reviewBody"><p> I really like this course. The most important thing - it is totally free :D.</p></div></div></div></li></ul></div></div></div></div></div>
                        <div className="thim-course-menu-landing"><div className="container"><ul className="thim-course-landing-tab"><li role="presentation" className="course-nav-tab-overview active"> <a href="#tab-overview">Overview</a></li><li role="presentation" className="course-nav-tab-curriculum"> <a href="#tab-curriculum">Curriculum</a></li><li role="presentation" className="course-nav-tab-instructor"> <a href="#tab-instructor">Instructor</a></li><li role="presentation" className="course-nav-tab-reviews"> <a href="#tab-reviews">Reviews</a></li></ul><div className="thim-course-landing-button"><div className="course-price"><div className="value  free-course"> Free</div></div><div className="lp-course-buttons"><form name="enroll-course" className="enroll-course form-purchase-course" method="post" enctype="multipart/form-data"> <input type="hidden" name="enroll-course" value="5299" /> <input type="hidden" name="enroll-course-nonce" value="5f792a224d" /> 
                        <button className="lp-button button button-enroll-course"> Take this course </button> <input type="hidden" name="redirect_to" value="https://educationwp.thimpress.com/account/?redirect_to=https://educationwp.thimpress.com/courses/node/?enroll-course=5299"/></form></div></div></div></div></div><div className="social_share"><ul className="thim-social-share"><li className="heading">Share:</li><li><div className="facebook-social"><a target="_blank" className="facebook" href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Feducationwp.thimpress.com%2Fcourses%2Fnode%2F" title="Facebook"><i className="fa fa-facebook"></i></a></div></li><li><div className="googleplus-social"><a target="_blank" className="googleplus" href="https://plus.google.com/share?url=https%3A%2F%2Feducationwp.thimpress.com%2Fcourses%2Fnode%2F&amp;title=From%20Zero%20to%20Hero%20with%20Nodejs" title="Google Plus" onclick={()=>{window.open(this.href, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");return false;}}><i className="fa fa-google"></i></a></div></li><li><div className="twitter-social"><a target="_blank" className="twitter" href="https://twitter.com/share?url=https%3A%2F%2Feducationwp.thimpress.com%2Fcourses%2Fnode%2F&amp;text=From%20Zero%20to%20Hero%20with%20Nodejs" title="Twitter"><i className="fa fa-twitter"></i></a></div></li><li><div className="pinterest-social"><a target="_blank" className="pinterest" href="../../../pinterest.com/pin/create/button/indexae56.html?url=https%3A%2F%2Feducationwp.thimpress.com%2Fcourses%2Fnode%2F&amp;description=Build%20and%20deploy%20a%20few%20Nodejs%2C%20MongoDB%20%26amp%3B%20Expressjs%20apps%20while%20watching%20to%20lectures%20by%20the%20author%20of%209%20books%20on%20JS%2FNode.&amp;media=https%3A%2F%2Feducationwp.thimpress.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fcourse-1.jpg" onclick={()=>{window.open(this.href); return false;}} title="Pinterest"><i className="fa fa-pinterest-p"></i></a></div></li></ul></div></div>
                        <div className="thim-ralated-course"><h3 className="related-title"> You May Like</h3><div className="thim-course-grid"><div className="thim-carousel-wrapper" data-visible="3" data-itemtablet="2" data-itemmobile="1" data-pagination="1"><article className="lpr_course"><div className="course-item"><div className="course-thumbnail"> <a className="thumb" href="https://educationwp.thimpress.com/courses/python/"> <img src={require("../../wp-content/uploads/2015/12/course-16-450x450.jpg")} alt="Learn Python &#8211; Interactive Python" title="course-16" style={{ width:"450", height:"450"}}/> </a> <a className="course-readmore" href="https://educationwp.thimpress.com/courses/python/">Read More</a></div><div className="thim-course-content"><div className="course-author"> <img alt="Admin bar avatar" src={require("../../wp-content/uploads/learn-press-profile/1/21232f297a57a5a743894a0e4a801fc3.jpg")} className="avatar avatar-40 photo" style={{ height:"40" ,width:"40"}} /><div className="author-contain"><div className="value"> <a href="https://educationwp.thimpress.com/profile/admin/"> Hinata Hyuga </a></div></div></div><h2 className="course-title"> <a rel="bookmark" href="https://educationwp.thimpress.com/courses/python/">Learn Python - Interactive Python</a></h2><div className="course-meta">
                            <div className="course-students"> <label>Students</label><div className="value"><i className="fa fa-group"></i> 50</div></div><div className="course-comments-count"><div className="value"><i className="fa fa-comment"></i>1</div></div><div className="course-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer"><div className="value" itemprop="price"> &#36;69.00</div><meta itemprop="priceCurrency" content="USD" /></div></div></div></div></article><article className="lpr_course"><div className="course-item"><div className="course-thumbnail"> <a className="thumb" href="https://educationwp.thimpress.com/courses/easy-zurb-foundation/"> <img src={require("../../wp-content/uploads/2015/06/course-6-450x450.jpg")} alt="Easy Zurb Foundation" title="course-6" style={{width:"450", height:"450"}}/> </a> 
                            <a className="course-readmore" href="https://educationwp.thimpress.com/courses/easy-zurb-foundation/">Read More</a></div><div className="thim-course-content"><div className="course-author"> <img alt="Admin bar avatar" src={require("../../wp-content/uploads/learn-press-profile/1/21232f297a57a5a743894a0e4a801fc3.jpg")} className="avatar avatar-40 photo" style={{height:"40", width:"40"}} /><div className="author-contain"><div className="value"> <a href="https://educationwp.thimpress.com/profile/admin/"> Hinata Hyuga </a></div></div></div><h2 className="course-title"> 
                            <a rel="bookmark" href="https://educationwp.thimpress.com/courses/easy-zurb-foundation/">Easy Zurb Foundation</a></h2><div className="course-meta"><div className="course-students"> <label>Students</label><div className="value"><i className="fa fa-group"></i> 25</div></div><div className="course-comments-count"><div className="value"><i className="fa fa-comment"></i>0</div></div><div className="course-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer"><div className="value" itemprop="price"> &#36;75.00</div><meta itemprop="priceCurrency" content="USD" /></div></div></div></div></article><article className="lpr_course"><div className="course-item"><div className="course-thumbnail"> <a className="thumb" href="https://educationwp.thimpress.com/courses/getting-started-with-less-beginner-crash/"> <img src="../../wp-content/uploads/2015/06/course-12-450x450.jpg" alt="Getting Started with LESS" title="course-12" style={{ width:"450", height:"450" }}/> </a> <a className="course-readmore" href="https://educationwp.thimpress.com/courses/getting-started-with-less-beginner-crash/">Read More</a></div><div className="thim-course-content"><div className="course-author"> <img alt="Admin bar avatar" src={require("../../wp-content/uploads/learn-press-profile/7/9c081444f942cc8fe0ddf55631b584e2.jpg")} className="avatar avatar-40 photo" style={{ height:"40", width:"40"}} /><div className="author-contain"><div className="value"> <a href="https://educationwp.thimpress.com/profile/keny/"> Keny White </a></div></div></div><h2 className="course-title"> <a rel="bookmark" href="https://educationwp.thimpress.com/courses/getting-started-with-less-beginner-crash/">Getting Started with LESS</a></h2><div className="course-meta"><div className="course-students"> <label>Students</label><div className="value"><i className="fa fa-group"></i> 25</div></div><div className="course-comments-count"><div className="value"><i className="fa fa-comment"></i>0</div></div><div className="course-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer"><div className="value" itemprop="price"> &#36;94.00</div><meta itemprop="priceCurrency" content="USD" /></div></div></div></div></article></div></div></div></div></div> 
                            <script data-cfasync="false" src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script> <script type="text/javascript"></script> </div></article></main><div id="sidebar" className="widget-area col-sm-3 sticky-sidebar" role="complementary"><aside id="course-categories-3" className="widget widget_course-categories"><div className="thim-widget-course-categories thim-widget-course-categories-base template-base-v3"><h4 className="widget-title">All Courses</h4><ul><li> <a href="https://educationwp.thimpress.com/course-category/backend/">Backend</a></li><li> <a href="https://educationwp.thimpress.com/course-category/css/">CSS</a></li><li> <a href="https://educationwp.thimpress.com/course-category/frontend/">Frontend</a></li><li> <a href="https://educationwp.thimpress.com/course-category/general/">General</a></li><li> 
                                <a href="https://educationwp.thimpress.com/course-category/it-software/">IT &amp; Software</a></li><li> <a href="https://educationwp.thimpress.com/course-category/photography/">Photography</a></li><li> <a href="https://educationwp.thimpress.com/course-category/programming-language/">Programming Language</a></li><li> <a href="https://educationwp.thimpress.com/course-category/technology/">Technology</a></li></ul></div></aside><aside id="courses-7" className="widget widget_courses"><div className="thim-widget-courses thim-widget-courses-base template-list-sidebar-v3"><h4 className="widget-title">Latest Courses</h4><div className="thim-course-list-sidebar"><div className="lpr_course has-post-thumbnail"><div className="course-thumbnail"><img src={require("../../wp-content/uploads/2015/11/course-4-150x150.jpg")} alt="Introduction LearnPress &#8211; LMS plugin" /></div><div className="thim-course-content"><h3 className="course-title"> <a href="https://educationwp.thimpress.com/courses/learnpress-101/"> Introduction LearnPress &#8211; LMS plugin</a></h3><div className="course-price" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer"><div className="value  free-course" itemprop="price"> Free</div><meta itemprop="priceCurrency" content="USD" /></div></div></div><div className="lpr_course has-post-thumbnail"><div className="course-thumbnail"><img src={require("../../wp-content/uploads/2015/06/course-2-150x150.jpg")} alt="Become a PHP Master and Make Money" /></div>
                                <div className="thim-course-content"><h3 className="course-title"> <a href="https://educationwp.thimpress.com/courses/become-a-php-master-and-make-money-fast/"> Become a PHP Master and Make Money</a></h3><div className="course-price" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer"><div className="value  has-origin" itemprop="price"> <span className="course-origin-price">&#36;80.00</span> &#36;69.00</div><meta itemprop="priceCurrency" content="USD" /></div></div></div><div className="lpr_course has-post-thumbnail"><div className="course-thumbnail"><img src="../../wp-content/uploads/2015/06/course-5-150x150.jpg" alt="Learning jQuery Mobile for Beginners" /></div><div className="thim-course-content"><h3 className="course-title"> <a href="https://educationwp.thimpress.com/courses/learning-jquery-mobile-for-beginners/"> Learning jQuery Mobile for Beginners</a></h3><div className="course-price" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer"><div className="value " itemprop="price"> &#36;30.00</div><meta itemprop="priceCurrency" content="USD" /></div></div></div></div></div></aside><aside id="single-images-7" className="widget widget_single-images"><div className="thim-widget-single-images thim-widget-single-images-base template-base"><div className="single-image text-left"><a target="_self" href="#"><img src={require("../../wp-content/uploads/2015/12/ad.jpg")} style={{width:'330', height:'359'}} alt="" /></a></div></div></aside></div></div></div></section>

        <footer id="colophon" className=" site-footer"><div className="footer"><div className="container"><div className="row"><aside id="siteorigin-panels-builder-9" className="widget widget_siteorigin-panels-builder footer_widget"><div id="pl-w57e9cc2c86af4" className="panel-layout"><div id="pg-w57e9cc2c86af4-0" className="panel-grid panel-no-style"><div id="pgc-w57e9cc2c86af4-0-0" className="panel-grid-cell"><div id="panel-w57e9cc2c86af4-0-0-0" className="so-panel widget widget_black-studio-tinymce widget_black_studio_tinymce panel-first-child" data-index="0"><div className="textwidget"><div className="thim-footer-location"><p><img className="alignnone size-full wp-image-10" src={require("../../wp-content/uploads/2015/11/logo.png")} alt="logo-eduma-the-best-lms-wordpress-theme" style={{width:"145", height:"40"}} /></p><p className="info"><i className="fa fa-phone"></i><a href="tel:00123456789">(00) 123 456 789</a></p><p className="info"><i className="fa fa-envelope"></i><a href="https://educationwp.thimpress.com/cdn-cgi/l/email-protection#573f323b3b38173233223a367934383a"><span className="__cf_email__" data-cfemail="4d25282121220d282938202c632e2220">[email&#160;protected]</span></a></p></div></div></div><div id="panel-w57e9cc2c86af4-0-0-1" className="so-panel widget widget_social panel-last-child" data-index="1"><div className="thim-widget-social thim-widget-social-base template-base"><div className="thim-social"><ul className="social_link"><li><a className="facebook hasTooltip" href="https://www.facebook.com/ThimPress" target="_self"><i className="fa fa-facebook"></i></a></li><li><a className="twitter hasTooltip" href="https://twitter.com/thimpress" target="_self"><i className="fa fa-twitter"></i></a></li><li><a className="google-plus hasTooltip" href="https://plus.google.com/+Thimpress" target="_self"><i className="fa fa-google-plus"></i></a></li><li><a className="pinterest hasTooltip" href="#" target="_self"><i className="fa fa-pinterest"></i></a></li></ul></div></div></div></div><div id="pgc-w57e9cc2c86af4-0-1" className="panel-grid-cell"><div id="panel-w57e9cc2c86af4-0-1-0" className="so-panel widget widget_nav_menu panel-first-child panel-last-child" data-index="2"><h3 className="widget-title">Company</h3>
        <div className="menu-company-container"><ul id="menu-company" className="menu"><li id="menu-item-3421" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3421 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="https://educationwp.thimpress.com/about-us/" className="tc-menu-inner">About Us</a></li><li id="menu-item-3424" className="menu-item menu-item-type-post_type menu-item-object-page current_page_parent menu-item-3424 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="https://educationwp.thimpress.com/blog/" className="tc-menu-inner">Blog</a></li><li id="menu-item-3422" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3422 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="https://educationwp.thimpress.com/contact/" className="tc-menu-inner">Contact</a></li><li id="menu-item-3423" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3423 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="https://educationwp.thimpress.com/become-a-teacher/" className="tc-menu-inner">Become a Teacher</a></li></ul></div></div></div><div id="pgc-w57e9cc2c86af4-0-2" className="panel-grid-cell"><div id="panel-w57e9cc2c86af4-0-2-0" className="so-panel widget widget_nav_menu panel-first-child panel-last-child" data-index="3"><h3 className="widget-title">Links</h3><div className="menu-links-container"><ul id="menu-links" className="menu"><li id="menu-item-5749" className="menu-item menu-item-type-post_type_archive menu-item-object-lp_course menu-item-5749 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="https://educationwp.thimpress.com/courses/" className="tc-menu-inner">Courses</a></li><li id="menu-item-3426" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3426 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="http://educationwp.thimpress.com/events" className="tc-menu-inner">Events</a></li>
        <li id="menu-item-4591" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4591 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="https://educationwp.thimpress.com/gallery/" className="tc-menu-inner">Gallery</a></li><li id="menu-item-3427" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3427 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="https://educationwp.thimpress.com/faqs/" className="tc-menu-inner">FAQs</a></li></ul></div></div></div><div id="pgc-w57e9cc2c86af4-0-3" className="panel-grid-cell"><div id="panel-w57e9cc2c86af4-0-3-0" className="so-panel widget widget_nav_menu panel-first-child panel-last-child" data-index="4"><h3 className="widget-title">Support</h3><div className="menu-support-container"><ul id="menu-support" className="menu"><li id="menu-item-1757" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1757 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="http://docspress.thimpress.com/eduma/" className="tc-menu-inner">Documentation</a></li><li id="menu-item-1758" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1758 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="https://thimpress.com/forums/" className="tc-menu-inner">Forums</a></li><li id="menu-item-1759" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1759 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="#" className="tc-menu-inner">Language Packs</a></li><li id="menu-item-1760" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1760 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"><a href="#" className="tc-menu-inner">Release Status</a></li></ul></div></div></div>
        <div id="pgc-w57e9cc2c86af4-0-4" className="panel-grid-cell"><div id="panel-w57e9cc2c86af4-0-4-0" className="so-panel widget widget_nav_menu panel-first-child panel-last-child" data-index="5"><h3 className="widget-title">Recommend</h3><div className="menu-recommend-container"><ul id="menu-recommend" className="menu"><li id="menu-item-6718" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6718 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="https://themeforest.net/item/education-wordpress-theme-education-wp/14058034?ref=ThimPress&amp;utm_source=demo&amp;utm_medium=demofooter" className="tc-menu-inner">WordPress</a></li><li id="menu-item-6719" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6719 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="https://wordpress.org/plugins/learnpress/" className="tc-menu-inner">LearnPress</a></li><li id="menu-item-3429" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3429 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="https://educationwp.thimpress.com/shop/" className="tc-menu-inner">WooCommerce</a></li><li id="menu-item-5930" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5930 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="http://educationwp.thimpress.com/forums/" className="tc-menu-inner">bbPress</a></li></ul></div></div></div></div></div></aside></div></div></div><div className="copyright-area"><div className="container"><div className="copyright-content"><div className="row"><div className="col-sm-6"><p className="text-copyright"><a href="https://themeforest.net/item/education-wordpress-theme-education-wp/14058034?ref=ThimPress&amp;utm_source=demo&amp;utm_medium=demofooter">Education WordPress Theme</a> by <a className="color_primary" href="http://www.thimpress.com/" target="_blank">ThimPress.</a> Powered by WordPress.</p></div><div className="col-sm-6 text-right"><aside id="nav_menu-14" className="widget widget_nav_menu"><div className="menu-privacy-container">
            <ul id="menu-privacy" className="menu"><li id="menu-item-1765" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1765 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="#" className="tc-menu-inner">Privacy</a></li><li id="menu-item-1766" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1766 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="#" className="tc-menu-inner">Terms</a></li><li id="menu-item-1767" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1767 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="#" className="tc-menu-inner">Sitemap</a></li><li id="menu-item-6720" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6720 tc-menu-item tc-menu-depth-0 tc-menu-layout-default"><a href="https://themeforest.net/item/education-wordpress-theme-education-wp/14058034?ref=ThimPress&amp;utm_source=demo&amp;utm_medium=demofooter" className="tc-menu-inner">Purchase</a></li></ul></div></aside></div></div></div></div></div></footer></div></div> <a href="#" id="back-to-top"> <i className="fa fa-chevron-up" aria-hidden="true"></i> </a></div><div id="thim-popup-login"><div className="popup-login-wrapper"><div className="thim-login-container has-shortcode"> 
        <script data-cfasync="false" src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
         
         <div className='mo-openid-app-icons'><p style='color:#000000'> Login with social networks</p><a rel='nofollow' style={{marginLeft: '4px !important',width: '240px !important',paddingTop:'11px !important',paddingBottom:'11px !important',marginBottom: '-1px !important',borderRadius: '4px !important'}} className='btn btn-mo btn-block btn-social btn-facebook btn-custom-dec login-button' onClick={this.moOpenIdLogin.bind(this,'facebook',true)}> <i style='padding-top:5px !important' className='fa fa-facebook'></i> Facebook</a><a rel='nofollow' style={{marginLeft: '4px !important',width:' 240px !important',paddingTop:'11px !important',paddingBottom:'11px !important',marginBottom: '-1px !important',borderRadius: '4px !important'}} className='btn btn-mo btn-block btn-social btn-google btn-custom-dec login-button' onClick={this.moOpenIdLogin.bind(this,'google',false)}> <i style={{paddingTop:'5px !important'}} className='fa fa-google'></i> Google</a><a rel='nofollow' style={{marginLeft: '4px !important',width: '240px !important' , paddingTop:'11px !important', paddingBottom:'11px !important', marginBottom: '-1px !important', borderRadius: '4px !important'}} className='btn btn-mo btn-block btn-social btn-twitter btn-custom-dec login-button' onClick={this.moOpenIdLogin.bind(this,'twitter','false')}> 
         <i style={{paddingTop:'5px !important'}} className='fa fa-twitter'></i> Twitter</a><a rel='nofollow' style={{marginLeft: '4px !important',width:' 240px !important',paddingTop:'11px !important',paddingBottom:'11px !important', marginBottom:'-1px !important',borderRadius: '4px !important'}} className='btn btn-mo btn-block btn-social btn-linkedin btn-custom-dec login-button' onClick={this.moOpenIdLogin.bind(this,'linkedin','false')}> <i style={{paddingTop:'5px !important'}} className='fa fa-linkedin'></i> LinkedIn</a></div> <br/><div className="thim-popup-inner"><div className="thim-login"><h4 className="title">Login with your site account</h4><form name="loginpopopform" action="https://educationwp.thimpress.com/wp-login.php?wpe-login=true" method="post"><p className="login-username"> <input type="text" name="log" placeholder="Username or email" className="input required" value="" size="20" /></p>
         <p className="login-password"> <input type="password" name="pwd" placeholder="Password" className="input required" value="" size="20" /></p><p className="thim-login-captcha"> 
         <input type="text" data-captcha1="3" data-captcha2="4" placeholder="3 &#043; 4 &#061;" className="captcha-result required" /></p> 
         
         
         
         <a className="lost-pass-link" href="https://educationwp.thimpress.com/account/?action=lostpassword" title="Lost Password">Lost your password?</a><p className="forgetmenot login-remember"> <label for="popupRememberme">
             <input name="rememberme" type="checkbox" value="forever" id="popupRememberme" /> Remember Me </label></p><p className="submit login-submit"> 
             <input type="submit" name="wp-submit" className="button button-primary button-large" value="Login" /> <input type="hidden" name="redirect_to" value="https://educationwp.thimpress.com/courses/node?enroll-course=5299" /> <input type="hidden" name="testcookie" value="1" /></p></form><p className="link-bottom"/>Not a member yet? <a className="register" href="https://educationwp.thimpress.com/account/?action=register">Register now</a></p></div><div className="thim-register"><h4 className="title">Register a new account</h4><form className="auto_login" name="registerformpopup" action="https://educationwp.thimpress.com/wp-login.php?action=register&amp;wpe-login=true" method="post" novalidate="novalidate"> <input type="hidden" id="register_security" name="register_security" value="ebbd37ba55" /><input type="hidden" name="_wp_http_referer" value="/courses/node/" /><p> <input placeholder="Username" type="text" name="user_login" className="input required" /></p><p> <input placeholder="Email" type="email" name="user_email" className="input required" /></p><p> <input placeholder="Password" type="password" name="password" className="input required" /></p><p> <input placeholder="Repeat Password" type="password" name="repeat_password" className="input required" /></p><p className="thim-login-captcha"/> <input type="text" data-captcha1="9" data-captcha2="4" placeholder="9 &#043; 4 &#061;" className="captcha-result required" /></p><p> <input type="hidden" name="redirect_to" value="https://educationwp.thimpress.com/courses/node?enroll-course=5299" /> <input type="hidden" name="modify_user_notification" value="1"/></p><p className="submit"/> <input type="submit" name="wp-submit" className="button button-primary button-large" value="Sign up" /></p></form><p className="link-bottom">Are you a member? <a className="login" href="https://educationwp.thimpress.com/account/">Login now</a></p><div className="popup-message"></div></div></div> <span className="close-popup"><i className="fa fa-times" aria-hidden="true"></i></span><div className="cssload-container"><div className="cssload-loading"><i></i><i></i><i></i><i></i></div>
        </div>
        <div id="tp_style_selector"><div className="tp_style_selector_container"><div className="tp_chameleon_customize"><div className="tp-buy-theme"> <a className="link-buy" href="https://themeforest.net/item/education-wordpress-theme-education-wp/14058034?ref=ThimPress&amp;utm_campaign=chameleon&amp;utm_medium=buynow&amp;utm_source=eduma" title="Buy Now"><i className="fa fa-shopping-cart"></i>Buy Now</a> <a className="view-more-slider" target="_blank" href="https://thimpress.com/learnpress/learnpress-premium-add-ons-request-form/?utm_source=demo&amp;utm_medium=chameleon" title="Get Bundle"> <span className="text">Click Here To Redeem</span> <span className="text">Included LearnPress Bundle (<i>$433</i>)</span> </a></div></div><div className="tp-chameleon-demos-wrapper"><div className="tp-title">GET AN AWESOME START!</div><p className="tp-description">With easy <strong>ONE CLICK INSTALL</strong> and fully customizable options, our demos the best start you'll ever get!</p><div className="tp_chameleon_demos"><div className="tp_demo" data-preview="../../../updates.thimpress.com/wp-content/uploads/2017/06/eduma-demo-01.jpg"> <a href="https://educationwp.thimpress.com/" title="Demo Main Demo" style="background: url(../../wp-content/themes/eduma/images/chameleon.jpg) 0px 0px;"> </a></div><div className="tp_demo" data-preview="https://updates.thimpress.com/wp-content/uploads/2017/06/eduma-demo-02.jpg"> <a href="https://educationwp.thimpress.com/demo-2/" title="Demo Course Era" style="background: url(../../wp-content/themes/eduma/images/chameleon.jpg) 0px -150px;"> </a></div><div className="tp_demo" data-preview="https://updates.thimpress.com/wp-content/uploads/2017/06/eduma-demo-courses-hub.jpg"> <a href="https://educationwp.thimpress.com/demo-courses-hub/" title="Demo Courses Hub" style="background: url(../../wp-content/themes/eduma/images/chameleon.jpg) -142px -150px;"> </a></div><div className="tp_demo" data-preview="https://updates.thimpress.com/wp-content/uploads/2019/08/eduma-demo-instructor.jpg"> <a href="https://educationwp.thimpress.com/demo-instructor/" title="Demo New Instructor" style="background: url(../../wp-content/themes/eduma/images/chameleon.jpg) 0px -260px;"> </a></div><div className="tp_demo" data-preview="https://updates.thimpress.com/wp-content/uploads/2019/08/eduma-demo-edume.jpg"> <a href="https://educationwp.thimpress.com/demo-edume/" title="Demo New Edu" style="background: url(../../wp-content/themes/eduma/images/chameleon.jpg) -142px -260px;"> </a></div><div className="tp_demo" data-preview="https://updates.thimpress.com/wp-content/uploads/2018/01/eduma-demo-edtech.jpg"> <a href="https://educationwp.thimpress.com/demo-edtech/" title="Demo Edtech" style="background: url(../../wp-content/themes/eduma/images/chameleon.jpg) 0px -370px;"> </a></div><div className="tp_demo" data-preview="https://updates.thimpress.com/wp-content/uploads/2018/07/eduma-demo-grad-school.jpg"> <a href="https://educationwp.thimpress.com/demo-grad-school/" title="Demo Grad School" style="background: url(../../wp-content/themes/eduma/images/chameleon.jpg) -142px -370px;"> </a></div><div className="tp_demo" data-preview="https://updates.thimpress.com/wp-content/uploads/2017/06/eduma-demo-one-instructor.jpg"> <a href="https://educationwp.thimpress.com/demo-one-instructor/" title="Demo One Instructor" style="background: url(../../wp-content/themes/eduma/images/chameleon.jpg) 0px -480px;"> </a></div><div className="tp_demo" data-preview="https://updates.thimpress.com/wp-content/uploads/2017/06/eduma-demo-one-course.jpg"> <a href="https://educationwp.thimpress.com/demo-one-course/" title="Demo One Course" style="background: url(../../wp-content/themes/eduma/images/chameleon.jpg) -142px -480px;"> </a></div><div className="tp_demo" data-preview="https://updates.thimpress.com/wp-content/uploads/2017/06/eduma-demo-university-3.jpg"> <a href="https://educationwp.thimpress.com/demo-university-3/" title="Demo Ivy League" style="background: url(../../wp-content/themes/eduma/images/chameleon.jpg) 0px -590px;"> </a></div><div className="tp_demo" data-preview="https://updates.thimpress.com/wp-content/uploads/2017/06/eduma-demo-kindergarten.jpg"> <a href="https://educationwp.thimpress.com/demo-kindergarten/" title="Demo Kindergarten" style="background: url(../../wp-content/themes/eduma/images/chameleon.jpg) -142px -590px;"> </a></div><div className="tp_demo" data-preview="https://updates.thimpress.com/wp-content/uploads/2017/06/eduma-demo-languages-school.jpg"> <a href="https://educationwp.thimpress.com/demo-languages-school/" title="Demo Languages School" style="background: url(../../wp-content/themes/eduma/images/chameleon.jpg) 0px -700px;"> </a></div><div className="tp_demo" data-preview="https://updates.thimpress.com/wp-content/uploads/2017/06/eduma-demo-03.jpg"> <a href="https://educationwp.thimpress.com/demo-3/" title="Demo Online School" style="background: url(../../wp-content/themes/eduma/images/chameleon.jpg) -142px -700px;"> </a></div><div className="tp_demo" data-preview="https://updates.thimpress.com/wp-content/uploads/2017/06/eduma-demo-university-4.jpg"> <a href="https://educationwp.thimpress.com/demo-university-4/" title="Demo Stanford" style="background: url(../../wp-content/themes/eduma/images/chameleon.jpg) 0px -810px;"> </a></div><div className="tp_demo" data-preview="https://updates.thimpress.com/wp-content/uploads/2017/06/eduma-demo-university-2.jpg"> <a href="https://educationwp.thimpress.com/demo-university-2/" title="Demo Modern University" style="background: url(../../wp-content/themes/eduma/images/chameleon.jpg) -142px -810px;"> </a></div><div className="tp_demo" data-preview="https://updates.thimpress.com/wp-content/uploads/2017/06/eduma-demo-university.jpg"> <a href="https://educationwp.thimpress.com/demo-university/" title="Demo Classic University" style="background: url(../../wp-content/themes/eduma/images/chameleon.jpg) 0px -920px;"> </a></div><div className="tp_demo" data-preview="https://updates.thimpress.com/wp-content/uploads/2018/04/eduma-demo-react.jpg"> <a href="https://educationwp.thimpress.com/demo-react/" title="Demo React" style="background: url(../../wp-content/themes/eduma/images/chameleon.jpg) -142px -920px;"> </a></div><div className="tp_demo"> <span title="Coming Soon" style="display: block; background: url(../../wp-content/themes/eduma/images/chameleon.jpg) 0px -1030px; width: 142px;height: 110px;"> </span></div></div></div></div><div className="style-toggle close"></div><div className="style-toggle open"></div></div><div className="tp-preview-images"> <img src="../../wp-content/plugins/tp-chameleon/inc/eduma-01.jpg" alt="preview image"></div><div id="tp_chameleon_list_google_fonts"></div><div className="gallery-slider-content"></div> <script data-cfasync="false" type="text/javascript">window.onload = function() {
                
                
                
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
            };</script> <script>window.addEventListener('load', function() {
            /**
             * Fix issue there is an empty spacing between image and title of owl-carousel
             */
            setTimeout(function() {
                var $ = jQuery;
                var $carousel = $('.thim-owl-carousel-post').each(function() {
                    $(this).find('.image').css('min-height', 0);
                    $(window).trigger('resize');
                });
            }, 500);
        });</script> <script type="text/javascript">var c = document.body.className;
    c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
    document.body.className = c;</script> <script type="text/javascript">
        var wc_product_block_data = JSON.parse( decodeURIComponent( '%7B%22min_columns%22%3A1%2C%22max_columns%22%3A6%2C%22default_columns%22%3A3%2C%22min_rows%22%3A1%2C%22max_rows%22%3A6%2C%22default_rows%22%3A1%2C%22thumbnail_size%22%3A300%2C%22placeholderImgSrc%22%3A%22https%3A%5C%2F%5C%2Feducationwp.thimpress.com%5C%2Fwp-content%5C%2Fuploads%5C%2Fwoocommerce-placeholder.png%22%2C%22min_height%22%3A500%2C%22default_height%22%3A500%2C%22isLargeCatalog%22%3Afalse%2C%22limitTags%22%3Afalse%2C%22hasTags%22%3Afalse%2C%22productCategories%22%3A%5B%7B%22term_id%22%3A87%2C%22name%22%3A%22Uncategorized%22%2C%22slug%22%3A%22uncategorized%22%2C%22term_group%22%3A0%2C%22term_taxonomy_id%22%3A87%2C%22taxonomy%22%3A%22product_cat%22%2C%22description%22%3A%22%22%2C%22parent%22%3A0%2C%22count%22%3A0%2C%22filter%22%3A%22raw%22%2C%22link%22%3A%22https%3A%5C%2F%5C%2Feducationwp.thimpress.com%5C%2Fproduct-category%5C%2Funcategorized%5C%2F%22%7D%2C%7B%22term_id%22%3A19%2C%22name%22%3A%22Accessories%22%2C%22slug%22%3A%22accessories%22%2C%22term_group%22%3A0%2C%22term_taxonomy_id%22%3A19%2C%22taxonomy%22%3A%22product_cat%22%2C%22description%22%3A%22%22%2C%22parent%22%3A0%2C%22count%22%3A7%2C%22filter%22%3A%22raw%22%2C%22link%22%3A%22https%3A%5C%2F%5C%2Feducationwp.thimpress.com%5C%2Fproduct-category%5C%2Faccessories%5C%2F%22%7D%2C%7B%22term_id%22%3A20%2C%22name%22%3A%22Cookware%22%2C%22slug%22%3A%22cookware%22%2C%22term_group%22%3A0%2C%22term_taxonomy_id%22%3A20%2C%22taxonomy%22%3A%22product_cat%22%2C%22description%22%3A%22%22%2C%22parent%22%3A0%2C%22count%22%3A3%2C%22filter%22%3A%22raw%22%2C%22link%22%3A%22https%3A%5C%2F%5C%2Feducationwp.thimpress.com%5C%2Fproduct-category%5C%2Fcookware%5C%2F%22%7D%2C%7B%22term_id%22%3A18%2C%22name%22%3A%22Culinary%22%2C%22slug%22%3A%22culinary%22%2C%22term_group%22%3A0%2C%22term_taxonomy_id%22%3A18%2C%22taxonomy%22%3A%22product_cat%22%2C%22description%22%3A%22%22%2C%22parent%22%3A0%2C%22count%22%3A5%2C%22filter%22%3A%22raw%22%2C%22link%22%3A%22https%3A%5C%2F%5C%2Feducationwp.thimpress.com%5C%2Fproduct-category%5C%2Fculinary%5C%2F%22%7D%2C%7B%22term_id%22%3A17%2C%22name%22%3A%22Postcard%22%2C%22slug%22%3A%22postcard%22%2C%22term_group%22%3A0%2C%22term_taxonomy_id%22%3A17%2C%22taxonomy%22%3A%22product_cat%22%2C%22description%22%3A%22%22%2C%22parent%22%3A0%2C%22count%22%3A3%2C%22filter%22%3A%22raw%22%2C%22link%22%3A%22https%3A%5C%2F%5C%2Feducationwp.thimpress.com%5C%2Fproduct-category%5C%2Fpostcard%5C%2F%22%7D%5D%2C%22homeUrl%22%3A%22https%3A%5C%2F%5C%2Feducationwp.thimpress.com%5C%2F%22%7D' ) );</script> 
        <script type='text/javascript'>var wpcf7 = {"apiSettings":{"root":"https:\/\/educationwp.thimpress.com\/wp-json\/contact-form-7\/v1","namespace":"contact-form-7\/v1"},"cached":0};</script> <script type='text/javascript'>var wc_add_to_cart_params = {"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/?wc-ajax=%%endpoint%%","i18n_view_cart":"View cart","cart_url":"https:\/\/educationwp.thimpress.com\/cart\/","is_cart":"","cart_redirect_after_add":"no"};</script> <script type='text/javascript'>var woocommerce_params = {"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/?wc-ajax=%%endpoint%%"};</script> <script type='text/javascript'>var wc_cart_fragments_params = {"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/?wc-ajax=%%endpoint%%","cart_hash_key":"wc_cart_hash_8653f1d19ec105315cba116db9d7fe2e","fragment_name":"wc_fragments_8653f1d19ec105315cba116db9d7fe2e","request_timeout":"5000"};</script> <script type='text/javascript'>var _wpUtilSettings = {"ajax":{"url":"\/wp-admin\/admin-ajax.php"}};</script> <script type='text/javascript'>var WPEMS = {"gmt_offset":"0","current_time":"Aug 30, 2019 05:04:00 +0000","l18n":{"labels":["Years","Months","Weeks","Days","Hours","Minutes","Seconds"],"labels1":["Year","Month","Week","Day","Hour","Minute","Second"]},"ajaxurl":"https:\/\/educationwp.thimpress.com\/wp-admin\/admin-ajax.php","something_wrong":"Something went wrong","register_button":"59d86ebdd7"};</script> <script type='text/javascript'>var thim_js_translate = {"login":"Username","password":"Password","close":"Close"};</script> <div className="tp_chameleon_overlay"><div className="tp_chameleon_progress"><div className="tp_chameleon_heading">Processing!</div></div></div> <script type="text/javascript">var tp_chameleon_url_stylesheet = '../../wp-content/themes/eduma/style-1.html';
var tp_chameleon_url_admin_ajax = 'https://educationwp.thimpress.com/wp-admin/admin-ajax.php';
var tp_chameleon_wp_nonce = '10cd06ed31';
var tp_chameleon_primary_color = 'rgb(255, 182, 6)';
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



var tp_chameleon_site_url = 'http://educationwp.thimpress.com/';

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
        form.append('<div className="loading"><i className="fa fa-spinner fa-pulse"></i></div>');
        if(form.find('input[type="email"]').val()) {
            $.ajax({
                type: "POST",
                url: 'https://preview.thimpress.com/m/mailster/subscribe',
                data: form.serialize(),
                complete: function (xhr, textStatus) {
                    form.find('.loading').remove();
                    form.append('<div className="message-success">Please check your inbox or spam folder for confirmation email!</div>');
                    setTimeout(function () {
                        form.find('.message-success').remove();
                    }, 2000);
                }
            });
        } else {
            form.find('.loading').remove();
            form.append('<div className="message-error">Please enter email address</div>');
            setTimeout(function(){ form.find('.message-error').remove(); }, 2000);
            form.find('input[type="email"]').addClass('error');
        }


    });

    $('.tp-email-form .email-form-popup .email-form-subscribe form input[type="email"]').focus(function () {
        $(this).removeClass('error');
    });
});</script><script type="text/javascript" defer src="../../wp-content/cache/autoptimize/1/js/autoptimize_b9370447572a8b7dfd82d25eaed29a10.js"></script></div>
        )
    }
}
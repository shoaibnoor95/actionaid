import React from 'react';
export default class Edit extends React.Component{
    render(){
        return(
            <div>
                
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">DN CMS</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><a href="index.html">Dashboard</a></li>
            <li><a href="pages.html">Pages</a></li>
            <li><a href="posts.html">Posts</a></li>
            <li><a href="users.html">Users</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="active"><a href="index.html">Welcome, Mr. Arora</a></li>
            <li><a href="login.html">Logout</a></li>
          </ul>
        </div>
		{/* <!--/.nav-collapse --> */}
      </div>
    </nav>

    <header id="header">
    <div class="container">
    	<div class="row">
    		<div class="col-md-10">
    			<h1><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Edit Page <small>About</small></h1>

    		</div>
    		<div class="col-md-2">
			    			<div class="dropdown create">
			  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
			    Create Content
			    <span class="caret"></span>
			  </button>
			  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
			    <li><a type="button" data-toggle="modal" data-target="#addPage">Add Page</a></li>
			    <li><a href="#">Add Post</a></li>
			    <li><a href="#">Add User</a></li>
			  </ul>
			</div>
    			
    		</div>

    	</div>


    </div>
     </header>

    <section id="breadcrumb">
    	<div class="container">
    		<ol class="breadcrumb">
    			<li><a href="index.html">Dashboard</a></li>
    			<li><a href="page.html">Pages</a></li>
    			<li class="active">Edit Page</li>

    		</ol>
    	</div>
    </section>

    <section id="main">
    <div class="container">
    	<div class="row">
    		<div class="col-md-3">
			    			<div class="list-group">
			  <a href="index.html" class="list-group-item" >
			    <span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard
			  </a>
			  <a href="pages.html" class="list-group-item"><span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span> Pages <span class="badge">31</span></a>
			  <a href="posts.html" class="list-group-item "><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Posts <span class="badge">41</span></a>
			  <a href="users.html" class="list-group-item"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> Users <span class="badge">59</span></a>
			</div>
			<div class="well ">
			<h4>Disk Space Used</h4>
							<div class="progress">
			  <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
			    60%
			  </div>
			</div>
			<h4>Band Width Used</h4>
							<div class="progress">
			  <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 40%;">
			    60%
			  </div>
			</div>

			</div>
    		</div>
    		<div class="col-md-9">
    					{/* <!-- Website Overview --> */}
			    			<div class="panel panel-default">
			  <div class="panel-heading main-color-bg">
			    <h3 class="panel-title">Edit Page</h3>
			  </div>
			  <div class="panel-body">
			  <form>
			  <div class="form-group">
			<label>Page Title</label>
			<input type="text" class="form-control" placeholder="Page Title" value="About"/>
			<div class="form-group">
			<label>Page Body</label>
			<textarea name="editor1" class="form-control" placeholder="Page Body">Adobe XD or Experience Design allows you to go from wireframe to interactive prototype, from desktop to mobile. I am going to upload a series of prototypes I’ve worked on as well as some tutorials to how to work with Adobe XD.</textarea>
			</div>
			<div class="checkbox">
				<label><input type="checkbox" checked/>Published</label>
			</div>
			<div class="form-group">
			<label>Meta Tags</label>
			<input type="text" class="form-control" placeholder="Add some tags" value="tag1, tag2"/>
			</div>
			<div class="form-group">
			<label>Meta Description</label>
			<input type="text" class="form-control" placeholder="Add Meta description" value="Adobe XD or Experience Design allows you to go from wireframe to interactive prototype, from desktop to mobile."/>
			</div>
			<input type="submit" class="btn btn-default" value="Submit"/>
      	</div>
			  </form>
			    
			  </div>
			</div>

			{/* <!-- Latest Users --> */}

			

    </div>
    	
			</div>
			</div>
    </section>

    <footer id="footer"><p>Copyright Action Aid, &copy; 2019</p></footer>

     {/* <!-- Modals --> */}

     {/* <!-- Add Page --> */}
     <div class="modal fade" id="addPage" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
    <form>
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Add Page</h4>
      </div>
      <div class="modal-body">
      	<div class="form-group">
			<label>Page Title</label>
			<input type="text" class="form-control" placeholder="Page Title"/>
			<div class="form-group">
			<label>Page Body</label>
			<textarea name="editor1" class="form-control" placeholder="Page Body"></textarea>
			</div>
			<div class="checkbox">
				<label><input type="checkbox"/>Published</label>
			</div>
			<div class="form-group">
			<label>Meta Tags</label>
			<input type="text" class="form-control" placeholder="Add some tags"/>
			</div>
			<div class="form-group">
			<label>Meta Description</label>
			<input type="text" class="form-control" placeholder="Add Meta description"/>
			</div>
      	</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Save changes</button>
      </div>
      </form>
    </div>
  </div>
</div>
            </div>
        )
    }
}
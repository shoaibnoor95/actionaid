import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import {ModalBody,ModalHeader,ModalFooter,ModalDialog,Button as ModalButton} from 'react-bootstrap'
export default class User extends React.Component{
   constructor(props){
	   super(props);
	   this.state={
		   users:[],
		   counter:1,
		   deactivateUser:false,
			message:'',
			searchInput:'',
			modalOpen:false,
			singleUser:{
				firstName:'',
				lastName:'',
				nationality:'',
				createdAt:'',
				email:'',
				courses:[],
			},
			single:{},
			deactivateId:'',

		}
   }
   componentDidMount(){
	this.fetchUsers()
   }
   showUser(id,e){
	   e.preventDefault();
		axios({
			withCredentials:true,
			params:{id:id},
			method:'get',
			url:'getSingle'
		})
		.then(data=>{
			if(data.data.user){
		
				let singleUser =this.state.singleUser
				singleUser.firstName=data.data.user.firstName;
				singleUser.lastName=data.data.user.lastName;
				singleUser.email=data.data.user.email,
				singleUser.createdAt=data.data.user.createdAt,
				singleUser.nationality=data.data.user.nationality;
				let course=this.state.singleUser.courses;
				course.push(data.data.courses)
				this.setState({singleUser,modalOpen:true,courses:course})
			
			}
		})
   }
   findOne(e){
	e.preventDefault();   
	axios({
		method:'get',   
		withCredentials:true,
		params:{
			email:this.state.searchInput
		},
		url:'/search'
	   })
	   .then(data=>{
		if(data.data.user){
			this.setState({
				single:data.data.user
			})	 
		}
		})
	   .catch(err=>{
		   console.log(err)
	   })
   }
   fetchUsers(){
	axios({
		withCredentials:true,
		method:'get',
		url:'/users',
		params:{
			query:this.state.counter
		}
	})
	.then(data=>{
		console.log(data.data)
		this.setState({
			users:data.data.user,
			counter:this.state.counter+1
		})
	})
	.catch(err=>{
		this.setState({
			message:'Could not proceed with the request'
		})
	})
   }
   deactivateUser(e){
	   e.preventDefault();
	   axios({
		   withCredentials:true,
		   method:'post',
		   data:{
			   id:this.state.deactivateId
		   },
		   url:'/deactivateUser'
	   })
	   .then(data=>{
		   console.log(data.data);
		 if(data.data.deactivate){
			this.setState({
				deactivateUser:false
			})
			window.location.reload()
		 }  
	   })
   }
   activateUser(id,e){
	   e.preventDefault();
	   axios({
		withCredentials:true,
		method:'post',
		data:{
			id:id
		},
		url:'/activateUser'
	})
	.then(data=>{
		console.log(data.data);
	  if(data.data.activated){
		 window.location.reload()
	  }  
	})
 
	}
	render(){
		const Users=()=>{
			let user="";
			if(this.state.users!==undefined){
				user=this.state.users.map((el,i)=>{
				return(
					<tr key={i}>
				    	<td>{el['firstName']+" "+el['lastName']}</td>
				    	<td>{el['email']}</td>
				    	<td>{new Date(el['createdAt']).toDateString()}</td>
				    	<td><Link onClick={this.showUser.bind(this,el['_id'])}  className="btn btn-default" to="#">View</Link> {
						el['approved']?
						<a className="btn btn-danger" onClick={()=>{this.setState({deactivateId:el['_id'],deactivateUser:true})}} href="#">Deactivate</a>
						:
						<a className="btn btn-danger" onClick={this.activateUser.bind(this,el['_id'])} href="#">Activate</a>}
						</td>
						</tr>				
						)
			})
		}
		else{
			user=(<span/>)
		}
			return user;
		}
		return(
            <div>
				<div style={{width:'100%',height:'5%',backgroundColor:'#f5f5f5',borderColor:'#ddd'}}>
				<img src="/action_aid.png" style={{width:'18%',height:'4%',paddingTop:'0.5%',paddingBottom:'0.5%',paddingLeft:'1%'}} />
				</div>
            {/* <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">DN CMS</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><a href="index.html">Dashboard</a></li>
            <li><a href="pages.html">Pages</a></li>
            <li className="active"><a href="posts.html">Posts</a></li>
            <li><a href="users.html">Users</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="active"><a href="index.html">Welcome, Mr. Arora</a></li>
            <li><a href="login.html">Logout</a></li>
          </ul>
        </div>
        {/* <!--/.nav-collapse --> */}
      {/* </div> */}
    {/* // </nav> */} 
			<br/><br/>
    <header id="header">
    <div className="container">
    	<div className="row">
    		<div className="col-md-10">
    			<h1><span className="glyphicon glyphicon-cog" aria-hidden="true"></span> Users <small>Manage site users</small></h1>

    		</div>
    		

    	</div>


    </div>
    </header>
	{this.state.modalOpen?
	<ModalDialog  size="sm" >
		<ModalHeader>User Information</ModalHeader>
		<ModalBody>
			<div style={{fontSize:'100%',border:'1px solid #efefef'}}><b>Name:</b> {this.state.singleUser.firstName +" "+this.state.singleUser.lastName} </div>
			<div style={{fontSize:'100%',border:'1px solid #efefef'}}><b>Email:</b> {this.state.singleUser.email} </div>
			<div style={{fontSize:'100%',border:'1px solid #efefef'}}><b>Nationality:</b> {this.state.singleUser.nationality} </div>
			<div style={{fontSize:'100%',border:'1px solid #efefef'}}><b>Joined:</b> {new Date(this.state.singleUser.createdAt).toDateString()} </div>
			{/* {this.state.singleUser.courses?
			<div style={{fontSize:'100%',border:'1px solid #efefef'}}><b>Enrolled Courses:</b> {this.state.singleUser.courses.length==2?this.state.singleUser.courses[0]+" , "+this.state.singleUser.courses[1]:this.state.singleUser.courses[0]}</div>
			
		:<span/>} */}
			
			<ModalFooter >
			<ModalButton bsClass="primary" onClick={()=>{
				this.setState({modalOpen:false})
			}}>Close</ModalButton>
			</ModalFooter>
		</ModalBody>
	</ModalDialog>:<span/>}

{this.state.deactivateUser?
	<ModalDialog  size="sm" >
		<ModalHeader>Confirm Deactivation?</ModalHeader>
		<ModalBody>
			<div style={{fontSize:'100%',border:'1px solid #efefef'}}>Are you sure you want to deactivate this user? </div>
			<ModalFooter >
			<ModalButton color="default" onClick={()=>{
				this.setState({deactivateUser:false,deactivateId:''})
			}}>Close</ModalButton>
			{' '}<ModalButton bsClass="primary" onClick={this.deactivateUser.bind(this)}>Deactivate</ModalButton>
			</ModalFooter>
		</ModalBody>
	</ModalDialog>:<span/>}

    <section id="breadcrumb">
    	<div className="container">
    		<ol className="breadcrumb">
    			<li><Link to="/aDashboard">Dashboard</Link></li>
    			<li className="active">Users</li>

    		</ol>
    	</div>
    </section>

    <section id="main">
    <div className="container">
    	<div className="row">
    		<div className="col-md-3">
			    			<div className="list-group">
			  <Link to="/aDashboard" className="list-group-item" >
			    <span className="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard
			  </Link>
			  <Link to="/aCourses" className="list-group-item"><span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span> Trainings </Link>
			  <Link to="/aUsers" className="list-group-item  active main-color-bg"><span className="glyphicon glyphicon-user" aria-hidden="true"></span> Users </Link>
			</div>
			<div className="well ">
			<h4>Disk Space Used</h4>
							<div className="progress">
			  <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>
			    60%
			  </div>
			</div>
			<h4>Band Width Used</h4>
							<div className="progress">
			  <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}>
			    60%
			  </div>
			</div>

			</div>
    		</div>
    		<div className="col-md-9">
    					{/* <!-- Website Overview --> */}
			    			<div className="panel panel-default">
			  <div className="panel-heading main-color-bg">
			    <h3 className="panel-title">Users</h3>
			  </div>
			  <div className="panel-body">
			  <div className="row">
			  	<div className="col-md-12">
			  		<input type="text" onChange={(e)=>{this.setState({searchInput:e.target.value})}} onBlur={this.findOne.bind(this)} className="form-control" placeholder="Search user by email"/>
			  	</div>
			  </div>
			  <br/>
			  <table className="table table-striped table-hover">
				<thead>
						<tr>
				    	<th>Name</th>
				    	<th>Email</th>
				    	<th>Joined</th>
				    	<th></th>
				    	</tr>
						</thead>
				    <tbody>
				    	{/* <tr>
				    	<td>Shoaib Noor</td>
				    	<td>shoaib.1995.noor@gmail.com</td>
				    	<td>Sat Sep 21 2019</td>
				    	<td><Link  className="btn btn-default" to="#">View</Link> <a className="btn btn-danger" href="#">Deactivate</a></td>
				    	</tr> */}
	{this.state.searchInput.trim()=="" || this.state.single.email==undefined?
						<Users/>
:							<tr>
                         <td>{this.state.single.firstName+' '+this.state.single.lastName}</td>
                         <td>{this.state.single.email}</td>
                         <td>{new Date(this.state.single.createdAt).toDateString()}</td>
						 <td><Link  className="btn btn-default" onClick={this.showUser.bind(this,this.state.single._id)} to="#">View</Link> 
						 {this.state.single.approved?
				<a className="btn btn-danger" onClick={()=>{this.setState({deactivateId:this.state.single._id,deactivateUser:true})}} href="#">Deactivate</a>
							:
							<a className="btn btn-danger" onClick={this.activateUser.bind(this,this.state.single._id)} href="#">Activate
							</a>}	
							</td>
							</tr>
	}
						</tbody>
					</table>
			    
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
     <div className="modal fade" id="addPage" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">

			</div>
            </div>
        )
    }
}
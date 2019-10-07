import React from 'react';
 import './style.css';
import './bootstrap.min.css'
import Axios from 'axios';
import {Link} from 'react-router-dom';
import History from '../History';
export default class AdminDash extends React.Component{
	constructor(props){
		super(props);
		this.state={
			message:'',
			courseCount:0,
			userCount:0,
			enrollment:0,
			completed:0,
			user:[]
		}
	}
	logout(){
		console.log('sas')
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
	componentDidMount(){
		Axios({
			method:'get',
			withCredentials:true,
			url:'/adminOverview'
		})
		.then(data=>{
			console.log(data.data.counting)
			if(data.data.counting){
				this.setState({
					message:'',
					courseCount:data.data.counting.coursesCount,
					userCount:data.data.counting.userCount,
					enrollment:data.data.counting.enrollmentCourses,
					completed:data.data.counting.completed,
					user:data.data.users
				})
			}
		})
		.catch(err=>{
			this.setState({
				message:'Could not proceed with the request'
			})
		})
	}
	render(){
		const User=()=>{
			let dat=this.state.user.map((el,i)=>{
			console.log(el)
				return(
					<tr key={i}>
							<td>{el['firstName']+' '+el['lastName']}</td>
							<td>{el['email']}</td>
							<td>{new Date(el['createdAt']).toDateString()}</td>
						</tr>	
				)
			
			// 	   return (
			// 	<tr key={i}>
			// 	<td>{el['firstName']+' '+ el['lastName']}</td>
			// 	<td>{el['email']}</td>
			// 	<td>{new Date(el['createdAt'])}</td>
			// 	</tr>
			// 	)
			// })
		})
		return dat
		}
		
        return(
            <div>
				<div style={{width:'100%',height:'5%',backgroundColor:'#f5f5f5',borderColor:'#ddd'}}>
				<img src="/action_aid.png" style={{width:'18%',height:'4%',paddingTop:'0.5%',paddingBottom:'0.5%',paddingLeft:'1%'}} />
				</div>
				<br/><br/>
            
    <header id="header">
    <div className="container">
    	<div className="row">
    		<div className="col-md-10">
    			<h1><span className="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard <small>Manage your site</small></h1>
    		</div>
    		<div className="col-md-2">
			    			<div className="dropdown create">
			  <button onClick={this.logout.bind(this)} className="btn btn-default" type="button" id="dropdownMenu1"  aria-haspopup="true" aria-expanded="true">
			Logout
			<span>
			{'   '}	<i className="fa fa-sign-out"></i>
				</span>
			  </button>
			 
			</div>
    		</div>
    	</div>


    </div>
   



    </header>

    <section id="breadcrumb">
    	<div className="container">
    		<ol className="breadcrumb">
    			<li className="active"></li>

    		</ol>
    	</div>
    </section>

    <section id="main">
    <div className="container">
    	<div className="row">
    		<div className="col-md-3">
			    			<div className="list-group">
			  <Link to="/aDashboard" className="list-group-item active main-color-bg">
			    <span className="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard
			  </Link>
			  <Link to="/aCourses" className="list-group-item"><span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span> Trainings </Link>
			  <Link to="/aUsers" className="list-group-item"><span className="glyphicon glyphicon-user" aria-hidden="true"></span> Users        </Link>
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
			    <h3 className="panel-title">Website Overview</h3>
			  </div>
			  <div className="panel-body">
			    <div className="col-md-3">
			    	<div className="well dash-box">
			    		<h2><span className="glyphicon glyphicon-user" aria-hidden="true"></span> {this.state.userCount}</h2>
			    		<h4>Users</h4>
			    	</div>
			    </div>
			    <div className="col-md-3">
			    	<div className="well dash-box">
			    		<h2><span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span> {this.state.courseCount}</h2>
			    		<h4>Trainings </h4>
			    	</div>
			    </div>
			    <div className="col-md-3">
			    	<div className="well dash-box">
			    		<h2><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span> {this.state.enrollment}</h2>
			    		<h4>Enrollments</h4>
			    	</div>
			    </div>
			    <div className="col-md-3">
			    	<div className="well dash-box">
			    		<h2><span className="glyphicon glyphicon-stats" aria-hidden="true"></span> {this.state.completed}</h2>
			    		<h4>Completed</h4>
			    	</div>
			    </div>
			  </div>
			</div>

			{/* <!-- Latest Users --> */}

			<div className="panel panel-default">
				  <div className="panel-heading">
				    <h3 className="panel-title">Latest Users</h3>
				  </div>
				  <div className="panel-body">
				    <table className="table table-striped table-hover">
				    	<tr>
				    	<th>Name</th>
				    	<th>Email</th>
				    	<th>Joined</th>
						</tr>
					<User/>
						
				    </table>
				  </div>
				</div>
    		</div>
    	</div>

    </div>
    	

    </section>

    <footer id="footer"><p>Copyright Action Aid, &copy; 2019</p></footer>

     {/* <!-- Modals --> */}

     {/* <!-- Add Page --> */}
     <div className="modal fade" id="addPage" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
    <form>
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 className="modal-title" id="myModalLabel">Add Page</h4>
      </div>
      <div className="modal-body">
      	<div className="form-group">
			<label>Page Title</label>
			<input type="text" className="form-control" placeholder="Page Title"/>
			<div className="form-group">
			<label>Page Body</label>
			<textarea name="editor1" className="form-control" placeholder="Page Body"></textarea>
			</div>
			<div className="checkbox">
				<label><input type="checkbox"/>Published</label>
			</div>
			<div className="form-group">
			<label>Meta Tags</label>
			<input type="text" className="form-control" placeholder="Add some tags"/>
			</div>
			<div className="form-group">
			<label>Meta Description</label>
			<input type="text" className="form-control" placeholder="Add Meta description"/>
			</div>
      	</div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Save changes</button>
      </div>
      </form>
    </div>
  </div>
</div>

                </div>
        )
    }
}
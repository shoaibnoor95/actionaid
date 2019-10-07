import React from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
export default class Courses extends React.Component{
	constructor(props){
		super(props);
		this.state={
			count:0,
			courseName:[],
			loading:true
		}
	}
	componentDidMount(){
		Axios({
			withCredentials:true,
			method:'get',
			url:'/totalCourses'
		})
		.then(data=>{
			console.log(data.data.courses[0].createdAt)
		let courseName=this.state.courseName;
		courseName.push(data.data.courses)	
			this.setState({
				courseName,
				count:data.data.enrollCount,
				loading:false
			})
		})
	}
	onAvailable(id,e){

		e.preventDefault();
		Axios({
			withCredentials:true,
			method:'post',
			data:{id:id},
			url:'/visibleCourse'

		})
		.then(data=>{
			console.log(data.data)
			if(data.data.visible){
				window.location.reload();
			}
		})
	}
	onUnavailable(id,e){
		e.preventDefault();
		Axios({
			withCredentials:true,
			method:'post',
			data:{id:id},
			url:'/invisibleCourse'
			

		})
		.then(data=>{
			console.log(data.data)
			if(data.data.notVisible){
				window.location.reload();
			}
		})
	}
	
	render(){
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
    			<h1><span className="glyphicon glyphicon-cog" aria-hidden="true"></span> Trainings <small>Manage site Trainings</small></h1>

    		</div>
    		

    	</div>


    </div>
   



    </header>

    <section id="breadcrumb">
    	<div className="container">
    		<ol className="breadcrumb">
    			<li><Link to="/aDashboard">Dashboard</Link></li>
    			<li className="active">Trainings</li>
    		</ol>
    	</div>
    </section>

    <section id="main">
    <div className="container">
    	<div className="row">
    		<div className="col-md-3">
			    			<div className="list-group">
			  <Link 	to="./aDashboard" className="list-group-item" >
			    <span className="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard
			  </Link>
			  <Link to="/aCourses" className="list-group-item"><span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span> Trainings </Link>
			  <Link to="/aUsers" className="list-group-item"><span className="glyphicon glyphicon-user" aria-hidden="true"></span> Users </Link>
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
			    <h3 className="panel-title">Trainings</h3>
			  </div>
			  <div className="panel-body">
			 
			  <br/>
			  <table className="table table-striped table-hover">
				    <thead>	
						<tr>
				    	<th>Title</th>
				    	<th>Enrollments</th>
				    	<th>Created</th>
				    	<th>Status</th>
						<th></th>
				    	</tr></thead>
				    <tbody>
						{/* <tr>
				    	<td>Child protection policies</td>
				    	<td>0</td>
				    	<td>January, 10th 2017</td>
				    	<td> <a className="btn btn-primary" href="#">Visible</a></td>
				    	</tr>*/}
				{!this.state.loading?    	<tr> 
					{console.log(this.state.courseName[0][0])}
				    	<td>{this.state.courseName[0][0]['courseTitle']}</td>
				    	<td>{this.state.count}</td>
				    	<td>{new Date(this.state.courseName[0][0].createdAt).toLocaleDateString()}</td>
						{this.state.courseName[0][0].availablity==true?
						<td>Available</td>
						:<td>Blocked</td>}
						{this.state.courseName[0][0].availablity==true?
						<td><a className="btn btn-primary" href="#" onClick={this.onUnavailable.bind(this,this.state.courseName[0][0]._id)} >Blocked</a></td>
						:<td><a className="btn btn-primary" href="#" onClick={this.onAvailable.bind(this,this.state.courseName[0][0]._id)} >Available</a></td>
						}
				    	</tr>:<tr/>}
				    	{/* <tr>
				    	<td>Safe Guarding and preventation of Sexual Exploitation</td>
				    	<td>0</td>
				    	<td>August, 3rd 2016</td>
				    	<td><a className="btn btn-danger" href="#">Unvisible</a> </td>
				    	</tr> */}
				    	</tbody>
				    </table>
			    
			  </div>
			</div>

			{/* <!-- Latest Users --> */}

			

    </div>
    	</div></div>

    </section>

    <footer id="footer"><p>Copyright Action Aid, &copy; 2019</p></footer>

     {/* <!-- Modals --> */}

     {/* <!-- Add Page --> */}
     
            </div>
        )
    }
}
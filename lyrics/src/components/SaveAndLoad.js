import React,{Component} from 'react';
// import PropTypes from 'prop-types';
import 'whatwg-fetch';
import request from 'superagent';
import '../index.css';
import URL from '../URL'

class SaveAndLoad extends Component{
	

	handleSubmit(){
		var data = this.props.content;
		console.log("submit",data.content);
		console.log(URL.url)
		// request
		// 	.post(`${URL.url}`)
		// 	.send(data)
		// 	.set('Accept', 'application/json')
		// 	.end(function(res){
		// 		if(res.ok){
		// 			console.log(res.body)
		// 		}
		// 		else{
		// 			console.log(res.text)
		// 		}
		// 	})
		fetch('http://localhost:3800/submit',{
			method:'POST',
			body:JSON.stringify(data),
			headers: { 
				'Accept': 'application/json', 'Content-Type': 'application/json'
			},
			mode:'cors'
		})
		.then(function(response){
			 response.status     //=> number 100–599
 			 response.statusText //=> String
  			 response.headers    //=> Headers
  			 response.url
  			 console.log(response.status, response.url,response.headers);

		},function(error){
			console.log(error.message)
		})
	}
	render(){
		return(
			<div className="upload">
				
				{/*<input type="file" />*/}
				<button onClick ={this.handleSubmit.bind(this)}>submit</button>
			</div>
		)
	}
}

export default SaveAndLoad;
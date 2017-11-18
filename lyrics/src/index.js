import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked'
import './index.css';

import Edit from './components/Edit';
import MarkDown from './components/Markdown';
import SaveAndLoad from './components/SaveAndLoad';

class Index extends Component{
	constructor(){
		super();
		this.state= {
			content:''
		}
	}
	handleChange(value){

		this.setState({
			content:marked(value) 
		})
	}

	render(){
		return (
			<div className="index">
				<Edit  onChange={this.handleChange.bind(this)}/>
				<MarkDown content ={this.state}/>
				<SaveAndLoad content ={this.state}/>
			</div>
			)
	}

}

ReactDOM.render(<Index />, 
	document.getElementById('root')
	);


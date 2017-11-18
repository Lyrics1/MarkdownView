import React,{Component} from 'react';
// import PropTypes from 'prop-types';
import '../index.css'

class Main extends Component{

	// static propTypes ={
	// 	onChange:PropTypes.string
	// }
	constructor(){
		super();
		this.state= {
			content:''
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		this.setState({
			content:event.target.value
		})
		if(this.props.onChange){
			this.props.onChange(event.target.value)
			
		}
		

	}
	render(){
		const {content} = this.props;
		return(
			<div className="Edit">
				<textarea name="Edits" id="Edits"  value={this.state.content} onChange={this.handleChange} />
				
			</div>
		)
	}
}

export default Main;
import React,{Component} from 'react';
// import PropTypes from 'prop-types';
import '../index.css'

class MarkDown extends Component{
	render(){

		const {content} = this.props;
		return(
			<div className="MarkDown">
				<div name="MarkDown" id="MarkDowns"  dangerouslySetInnerHTML={{__html: content.content}}  />
			</div>
		)
	}
}

export default MarkDown;
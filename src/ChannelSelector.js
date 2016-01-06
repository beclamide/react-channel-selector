
import React from 'react';
import ChannelCategory from './ChannelCategory';

class ChannelSelector extends React.Component {
	render () {

		let cat = this.props.catalogue;

		// get categories
		let categories = new Set();
		let catlist = [];
		cat.forEach(function (el) {
			categories.add(el.category);
		});


		categories.forEach(function (obj, i) {

			// filter channels by category
			let channels = cat.filter(function(el) {
				return el.category === obj;
			});

			catlist.push(<ChannelCategory key={i} channels={channels} category={obj}/>);
		});


		return (
			<div>
				<h3>Channel Selector</h3>
				<div className="row">
					{catlist}
				</div>
			</div>
		)
	}
};



export default ChannelSelector;

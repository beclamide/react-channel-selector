import React from 'react';

class ChannelItem extends React.Component {

  handleChange (e) {
    console.log('burp');
  }

	render () {

		let channel = this.props.channel;
    let i = this.props.key;

		return (
			<li key={i}>
        <label>
          <input type="checkbox" value={channel.id} onChange={this.handleChange}/>
          {channel.product}
        </label>
      </li>
		)
	}
};



export default ChannelItem;

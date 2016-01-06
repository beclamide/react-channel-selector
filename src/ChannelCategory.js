import React from 'react';

import ChannelItem from './ChannelItem';

class ChannelCategory extends React.Component {
	render () {
		return (
      <div>
        <h4>{this.props.category}</h4>
			   <ul>
          {this.props.channels.map(function (object, i) {
            return <ChannelItem key={i} channel={object}/>
          })}
         </ul>
      </div>
		)
	}
};



export default ChannelCategory;

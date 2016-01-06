var React = require('react');
var ReactDOM = require('react-dom');
var ChannelSelector = require('react-channel-selector');

var App = React.createClass({
	render () {
		return (
			<div>
				<ChannelSelector catalogue={this.props.catalogue}/>
			</div>
		);
	}
});




let CATALOGUE = [{
  id: 0,
  category: 'sports',
  product: 'Arsenal TV',
  location: ['LONDON']        // This is an array so you can specify multiple regions
},
{
  id: 1,
  category: 'sports',
  product: 'Chelsea TV',
  location: ['LONDON']
},
{
  id: 2,
  category: 'sports',
  product: 'Liverpool TV',
  location: ['LIVERPOOL']
},
{
  id: 3,
  category: 'news',
  product: 'Sky News',
  location: []
},
{
  id: 4,
  category: 'news',
  product: 'Sky Sports News',
  location: []
}];


ReactDOM.render(<App catalogue={CATALOGUE}/>, document.getElementById('app'));

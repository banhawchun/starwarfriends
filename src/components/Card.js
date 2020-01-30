import React, { Component } from 'react';

class Card extends Component {
	constructor(){
		super();
		this.state = {
			species: ['Fetching Species....'],
			homeworld: 'Fetching Homeworld...'
		}
	}

	componentDidMount(){
		// Get Species
		fetch(this.props.species[0])
		.then(resp => resp.json())
		.then(type => this.setState({ species: type.name }));

		// Get Homeworld
		fetch(this.props.homeworld)
		.then(resp => resp.json())
		.then(world => this.setState({homeworld: world.name}))
	}

	

	
	render(){
		const { name } = this.props;
		const { species, homeworld } = this.state;

		return(
			<div className="tc bg-light-green dib pa2 ma4 br3 grow bw2 shadow-5">
				<img alt="Starwar" src={`https://robohash.org/${name}?200x200`}/>
				<div>
					<h2>{ name }</h2>
					<h4>Species: { species }</h4>
					<h4>Homeworld: { homeworld }</h4>
				</div>
			</div>

		);
	}
}



export default Card;
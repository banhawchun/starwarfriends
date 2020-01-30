import React from 'react';

const Card = ({ name, homeworld, species }) => {
	return(
		<div className="tc bg-light-green dib pa2 ma4 br3 grow bw2 shadow-5">
			<img alt="Starwar" src="https://robohash.org/hi?200x200"/>
			<div>
				<h2>Mako</h2>	
				<p>mako@gmail.com</p>
			</div>
		</div>
	);
}

export default Card;
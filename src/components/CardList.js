import React, { Fragment } from 'react'; 
import Card from './Card';

const CardList = ({ starwars }) => {
	return(
		<Fragment>
			{
				starwars.map((starwar, i) =>{
					return(
						<Card 
							key={i}
							name={starwars[i].name}
							homeworld={starwars[i].homeworld}
							species={starwars[i].species}
						/>
					);
				}) 
			}
		</Fragment>
	);
}

export default CardList;
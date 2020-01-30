import React, { Fragment } from 'react'; 
import Card from './Card';

const CardList = ({ data }) => {
	const CardListStarwar = data.map((user, i) => {
		return(
			<Card
				key={user.url}
				name={user.name}
				homeworld={user.homeworld}
				species={user.species}
			/>
		);
	})
	return(
		<Fragment>
			{CardListStarwar}
		</Fragment>
	);
}

export default CardList;
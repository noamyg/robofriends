import React from 'react';
import './card.css';
import Card from './Card';

const CardList = ({robots}) => {
	// if (true) throw new Error('nooooo')
	return (
		<div>
			{robots.map((robot, i) => {
				return <Card key={i} robot={robot}/>
			})
		}
		</div>
	)
}

export default CardList;

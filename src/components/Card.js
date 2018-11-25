import React from 'react';

const Card = ({robot}) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw3 shadow-5'>
			<img alt='robot' src={`https://robohash.org/${robot.id}?200x200`}/>
			<div>
				<h2>{robot.name}</h2>
				<p>{robot.email}</p>
			</div>
		</div>
	);
}

export default Card;
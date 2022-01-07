import React from 'react';

function Card({person}) {
  return(
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <div>
        <h2>{person.personaname}</h2>      
        <p>
          <img src={person.avatar} alt="Italian Trulli">
          </img>
        </p>
      </div>
    </div>
  );
}

export default Card;
import React from 'react';
import Card from '../Card/Card';
import  './CardList.css';

const CardList = ({ robots }) => {
  return (
    <div className="gridlayout">
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;
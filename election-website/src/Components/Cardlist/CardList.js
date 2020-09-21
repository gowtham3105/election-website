import React from 'react';
import Card from '../Card/Card';
import  './CardList.css';


const CardList = ({ robots }) => {
  return (
    <div>
    <div className="gridlayout">
      { 
        robots.map((user, i) => {

          return (
            <Card
              key={i}
              id={robots[i].id}
              imgUrl={robots[i].imgUrl}
              name={robots[i].name}
              email={robots[i].email}
              branch={robots[i].branch}
              manifestoUrl={robots[i].manifestoUrl}
              introUrl={robots[i].introUrl}
            />
          );
        })
      }
    </div>
    </div>
  );
}

export default CardList;
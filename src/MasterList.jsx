import React from 'react';

function MasterList(props) {
  const sets = props.currentList;
  const listItems = sets.map((set) =>
    <li className='item' >{set.set}</li>
  );
  return (
    <div>
      <h1 id='listHeading'>Homonyms</h1>
      <ul className='list'>{listItems}</ul>
    </div>
  );
}

export default MasterList;

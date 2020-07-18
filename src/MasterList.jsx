import React from 'react';

function MasterList(props) {
  const sets = props.currentList;
  const listItems = sets.map((set) =>
    <li>{set.set}</li>
  );
  return (
    <div>
      <h1 id='listHeading'>Homonym List</h1>
      <ul className='list'>{listItems}</ul>
    </div>
  );
}

export default MasterList;

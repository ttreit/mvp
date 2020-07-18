import React from 'react';

function MasterList(props) {
  const sets = props.currentList;
  const listItems = sets.map((set) =>
    <li>{set.set}</li>
  );
  return (
    <ul class='list'>{listItems}</ul>
  );
}

export default MasterList;

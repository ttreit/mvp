import React from 'react';

function SubForm(props) {
  return (
    <div>
      <h1>Hello {} </h1>
      {console.log(props.currentList)}
    </div>
  )

}

export default SubForm;



// const SubForm = function (props) {
//   return (
//     <div>
//       <div>
//       SubForm:
//       </div>
//       <div>
//       { console.log(props) }
//       </div>
//     </div>
//   )
// };

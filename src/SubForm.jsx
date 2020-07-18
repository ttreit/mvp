import React from 'react';

function SubForm(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>
          Homonyms
          <input type='string' value={props.inputText} onChange={props.handleChange} set='set' />
        </label>
        <input type='submit' value='Enter Homonyms!' />
      </form>
    </div>
  )
}

export default SubForm;




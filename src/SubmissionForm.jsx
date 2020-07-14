import React, { Component } from 'react';

function SubmissionForm(props) {
  return (
    <form action='/homonyms' method='post'>
      <ul>
        <li>
          <label for='inputhomonyms'></label>
          <textarea id='inputhomonyms' name='input_homonyms'>Enter one set of homonyms like this: hart, heart</textarea>
        </li>
        <li class='button'>
          <button type='submit'>Add Homonyms!</button>
        </li>
      </ul>
    </form>
  )
}

export default SubmissionForm;
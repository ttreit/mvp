import React, { Component } from 'react';

function SubmissionForm(props) {
  return (
    <form action='/' method='post' enctype='text/plain'>
      <ul>
        <li>
          <label for='inputhomonyms'></label>
          <textarea id='inputhomonyms' name='input_homonyms'>hart, heart</textarea>
        </li>
        <li class='button'>
          <button type='submit'>Add Homonyms!</button>
        </li>
      </ul>
    </form>
  )
}

export default SubmissionForm;
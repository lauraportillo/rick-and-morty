import React from 'react';
import '../stylesheets/ResetButton.scss';

const ResetButton = (props) => {
  const handleReset = (ev) => {
    props.handleReset();
  };

  return (
    <>
      <button className="reset" onClick={handleReset}>
        <i className="far fa-trash-alt "></i>
        Reset
      </button>
    </>
  );
};

export default ResetButton;

import React from 'react';

const mystyle = {
    border: "solid 1px grey",
    borderRadius: "0.3em",
    padding: "1em",
    marginBottom: "1em",
};

const NoteItem = ({ title, content, onItemClicked}) => {
  return (
    <div
      className="item-hover"
      style={mystyle}
      role="button"
      onClick={onItemClicked}>

      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default NoteItem;

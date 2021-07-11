import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import noteActions from '../redux/actions/noteActions';
import inputActions from '../redux/actions/inputActions';

const mystyle = {
    display: "grid",
    alignItem: "center",
    justifyContent: "center"
};

const inputStyle = {
    height: "40px",
    width: "250px",
    border: "1px solid grey",
    borderRadius: "5px"
};

const textareaStyle = {
    height: "70px",
    width: "250px",
    border: "1px solid grey",
    borderRadius: "5px"
};

const buttonStyle = {
    height: "30px",
    width: "100px",
    border: "1px solid grey",
    borderRadius: "5px"
};

const buttonDelete = {
    height: "30px",
    width: "100px",
    border: "1px solid grey",
    borderRadius: "5px",
    backgroundColor:"red",
    color:"white"
};


const InputSection = () => {
  const id = useSelector(state => state.inputs.id);
  const title = useSelector(state => state.inputs.title);
  const content = useSelector(state => state.inputs.content);
  const dispatch = useDispatch();

  const addNote = () => {
    if(title && content) {
      dispatch(noteActions.addNote({
        title,
        content
      }))
      dispatch(inputActions.resetInputs())
    }
  }

  const updateNote = () => {
    if(title && content) {
      dispatch(noteActions.updateNote(id, {
        title, content
      }))
      dispatch(inputActions.resetInputs())
    }    
  }

  const deleteNote = () => {
    dispatch(noteActions.deleteNote(id))
    dispatch(inputActions.resetInputs())
  }

  return (
    <div style={mystyle}>
      <input
        type="text"
        placeholder="Note title"
        value={title}
        style={inputStyle}
        onChange={e => 
          dispatch(inputActions.setInputTitle(e.target.value))
        }
      />
      <br/>
      <textarea
        placeholder="Note content"
        value={content}
        style={textareaStyle}
        onChange={e => 
          dispatch(inputActions.setInputContent(e.target.value))
        }
      />
      <br/>
      <div
        style={mystyle}
      >
        <button
          style={buttonStyle}
          onClick={id === -1 ? addNote : updateNote}
        >
          {id === -1 ? "Add Note" : "Update"}
        </button>   <br/>   
        {id !== -1 &&
          <button
            onClick={deleteNote}
            style={buttonDelete}
          >
            Delete
          </button>
        }
      </div>
    </div>
  );
};

export default InputSection;

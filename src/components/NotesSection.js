import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NoteItem from './NoteItem';
import inputActions from '../redux/actions/inputActions';
import { Link } from 'react-router-dom';

const mystyle = {
    columnGap: "1em",
    padding: '1em',
    display:"flex"
};

const NotesSection = () => {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes.notes)

  const onItemClicked = (item, index) => {
    dispatch(inputActions.setInputId(index));
    dispatch(inputActions.setInputTitle(item.title));
    dispatch(inputActions.setInputContent(item.content));
  }

  if(notes.length === 0) {
    return (
      <div style={mystyle}>
        <p>There is no note yet. Please add one.</p>
      </div>  
    )
  }

  return (
    <div style={mystyle}>
      
        {notes.map((item, index) => {
          if(item) {
            return (
              <div>
              {/*<a href={"/noteDetails/"+item.id}>*/}
              <NoteItem
                title={item.title}
                content={item.content}
                onItemClicked={() => {
                  onItemClicked(item, index);
                }}
              /> 
              {/*</a>*/}
              </div>     
            )
          }
          return null;
        })}
      
    </div>
  );
};

export default NotesSection;

import React from "react";
import Note from "./Note";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./styles/Note.css";

export default function Notes(props) {
  return (
      <TransitionGroup className="d-flex flex-wrap">
        {props.notes.map(note => {
          return (
            <CSSTransition
              key={note.id}
              in={true}
              classNames="note"
              timeout={200}
            >
              <Note
                note={note}
                delNote={props.delNote}
                style={{ display: "inline" }}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
  );
}

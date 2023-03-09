import React, { useContext, useState } from "react";

import TextareaAutosize from "react-textarea-autosize";
import { DeleteOutline } from "@mui/icons-material";
import { Draggable } from "react-beautiful-dnd";

import storeApi from "../../utils/storeApi";

import "./styles.scss";
import CardContainer from "../CardContainer";

export default function Card({ card, index, listId,listtitle}) {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(card.title);
  const { removeCard, updateCardTitle } = useContext(storeApi);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  }
  const handleReset=()=>{
    setClicked(false);
  }

  const handleOnBlur = (cardId) => {
    updateCardTitle(newTitle, index, listId);
    setOpen(!open);
  };

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <div className="card-content">
            {open ? (
              <TextareaAutosize
                type="text"
                className="input-card-title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                onBlur={handleOnBlur}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleOnBlur(card.id);
                  }
                  return;
                }}
                autoFocus
              />
            ) : (
              <div
              onClick={()=>setClicked(!clicked)}
                // onClick={() => setOpen(!open)}
                className="card-title-container"
              >
                <p>{card.title}</p>
                <button
                  onClick={() => {
                    removeCard(index, listId, card.id);
                  }}
                >
                  <DeleteOutline />
                </button>
              
              </div>
            )}
          </div>
          <div className="popup">
          {clicked && <CardContainer title={newTitle} listtitle={listtitle} onData={handleClick} onClose={handleReset}/>}
          </div>
        </div>
      )}
       
    </Draggable>
   
  );
}

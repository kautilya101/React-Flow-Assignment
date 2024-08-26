// llmNode.js
import { useState,useRef,useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import BaseNode from './baseNode';

export const NoteNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '');
  const inputRef = useRef(null);

  useEffect(() => {
    const inputBox = inputRef.current;
    if(inputBox){
      inputBox.style.height = "auto";
      inputBox.style.height = inputBox.scrollHeight - 1 + "px";
    }

  },[currText])


  return (
   <>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-note`}
        style={{top: `${100/2}%`}}
      />
      <div className='node-parent'>
        <label>
          Text:
        </label>
        <textarea
            ref={inputRef}
            className='node-input'
            placeholder='save a note'
            value={currText} 
            onChange={(e) => setCurrText(e.target.value)}
          />
      </div>
   </>
  );
}

export default BaseNode('Note',NoteNode);

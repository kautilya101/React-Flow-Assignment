// textNode.js

import { useState, useRef, useEffect } from 'react';
import { Handle, Position, useUpdateNodeInternals } from 'reactflow';
import BaseNode from './baseNode';
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '');
  const [variables, setVariables] = useState([]);
  const inputRef = useRef(null);
  const updateNodeInternals = useUpdateNodeInternals();


  const notify = () => toast.warn('Max handles achieved',{ theme: 'dark',toastId: 'limit'});

  const isValidJsVariable = (variable) => {
    let pattern = /[a-zA-Z_$][a-zA-Z0-9_$]*/g;
    let result;
    if ((result = pattern.exec(variable) !== null)) return true;
    return false;
  };

  const handleTextChange = (inputValue) => {
      
      const pattern = /\{\{\s*(\w+)\s*\}\}/g;
      let match;
      const newVariables = [];
      
      while((match = pattern.exec(inputValue)) !== null){
        if(isValidJsVariable(match[1]))
          if(variables.length !== 4)
            newVariables.push(match[1]);
          else{
            notify();
          }

      }
        setVariables((prevVariables) => {
          const uniqueVariables = [...new Set([...prevVariables, ...newVariables])];
          return uniqueVariables;
        });    
      
  }; 

  useEffect(() => {
    const inputBox = inputRef.current;
    if(inputBox){
      inputBox.style.height = "auto";
      inputBox.style.height = inputBox.scrollHeight - 1 + "px";
    }

    const delayTimeout = setTimeout(() => {
      updateNodeInternals(id)
      handleTextChange(currText);
    },1000)

    return () => clearTimeout(delayTimeout);
  },[currText,updateNodeInternals,id])

  return (
    <> 
      {variables.map((variable,index) => {
        return variable ? (
          <Handle 
            key={`${id}-${index}`}
            type='target' 
            position={Position.Left}
            id={`${id}-input${index}`}
            style={{ top: `${(index+1)*(100/5)}%`}}
            />
        ) : 
        (<></>) 
      })}
      <div className='node-parent'>
        <label>
          Text:
        </label>
        <textarea
            ref={inputRef}
            className='node-input'
            placeholder='{{context}}'
            value={currText} 
            onChange={(e) => setCurrText(e.target.value)}
          />
      </div>
       <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
      {variables.map((variable,index) => (
        <div className='variable' style={{ top: `${(index+1)*(100/5)}%` }}>
          {variable}
        </div>
      ))}
    </>

  );
}

export default BaseNode("Text",TextNode);

// inputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import BaseNode from './baseNode';

const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <>
      <div className='node-parent'>
        <label>
          Name:
        </label>
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
            className='node-input'
            style={{ marginBottom: '5px'}}
          />
        <label className='gap'>
          Type:
          <select value={inputType} style={{ marginLeft: "5px"}} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
      />
    </>
  );
}

export default BaseNode('Input',InputNode);

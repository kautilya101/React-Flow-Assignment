// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import BaseNode from './baseNode';

const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <>
    <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
      />
      <div className='node-parent'>
        <label>
          Name:
        </label>
          <input
            className='node-input'
            type="text" 
            value={currName} 
            style={{ marginBottom: "5px"}}
            onChange={handleNameChange} 
          />
        <label className='gap'>
          Type:
          <select value={outputType} style={{ marginLeft: "5px"}} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </>   
  );
}

export default BaseNode("Output",OutputNode)

// inputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import BaseNode from './baseNode';

const FileSaveNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));


  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  return (
    <>
      <div className='node-parent'>
        <label>
          File:
        </label>
        <input 
          type="file" 
          id='input-file'
          name='file'
          style={{ marginBottom: '5px'}}
        />
      </div>
      <Handle
        type="source"
        position={Position.Left}
        id={`${id}-file`}
      />
    </>
  );
}

export default BaseNode('File Save',FileSaveNode);

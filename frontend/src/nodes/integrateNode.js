// inputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import BaseNode from './baseNode';

const IntegrationNode = ({ id, data }) => {
  const [appInputType, setAppInputType] = useState(data.appInputType || 'Text');
  const [actionInputType, setActionInputType] = useState(data.actionInputType || 'Text');
  const [integrateInputType, setIntegrateInputType] = useState(data.integrateInputType || 'Text');

  return (
    <>
      <div className='node-parent'>
        <Handle
          type="target"
          position={Position.Left}
          id={`${id}-app`}
          style={{top: `${30}%`}}
        />
        <Handle
          type="target"
          position={Position.Left}
          id={`${id}-action`}
          style={{top: `${50}%`}}
        />
        <Handle
          type="target"
          position={Position.Left}
          id={`${id}-intergration`}
          style={{top: `${70}%`}}
        />


        <label className='gap'>
          App:
        </label>
        <select value={appInputType} onChange={(e) => setAppInputType(e.target.value)}>
          <option value="Gmail">Gmail</option>
          <option value="Outlook">Outlook</option>
          <option value="Yahoo">Yahoo</option>
        </select>

        <label className='gap'>
          Action:
        </label>
        <select value={actionInputType} onChange={(e) => setActionInputType(e.target.value)}>
          <option value="Create Email Draft">Create Email Draft</option>
          <option value="Send Email">Send Email</option>
        </select>

        <label className='gap'>
          Integration:
        </label>
        <select value={integrateInputType} onChange={(e) => setIntegrateInputType(e.target.value)}>
          <option value="Gmail Demo">Gmail Demo</option>
          <option value="Outlook Demo">Outlook Demo</option>
        </select>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-integrate`}
      />
    </>
  );
}

export default BaseNode('Integration',IntegrationNode);

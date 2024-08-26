// llmNode.js

import { Handle, Position } from 'reactflow';
import BaseNode from './baseNode';

export const SampleBaseNode = ({ id, data }) => {

  return (
   <>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-base_target`}
      />    
      <div className='node-parent'>
        <span>This is a Sample Base Node.</span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-base_source`}
      />
   </>
  );
}

export default BaseNode('Base Node',SampleBaseNode);

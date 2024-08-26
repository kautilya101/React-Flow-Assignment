// llmNode.js

import { Handle, Position } from 'reactflow';
import BaseNode from './baseNode';

export const LLMNode = ({ id, data }) => {

  return (
   <>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{top: `${100/3}%`}}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{top: `${200/3}%`}}
      />      
      <div>
        <span>This is a LLM.</span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
      />
   </>
  );
}

export default BaseNode('LLM',LLMNode);

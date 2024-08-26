import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { shallow } from 'zustand/shallow';
import { useStore } from './store';
function App() {

  const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges
  })

  const {nodes,edges} = useStore(selector,shallow)

  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton nodes={nodes} edges={edges} />
    </div>
  );
}

export default App;

// submit.js

import { useState } from "react";

export const SubmitButton = ({nodes,edges}) => {

  const [result,setResult] = useState({});

  const handleSubmit = async () => {
    console.log(edges);

    try{
      const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: "POST",
        body:JSON.stringify({nodes,edges}),
        headers:{
          "Content-type": "application/json; charset=UTF-8"
        }
      });

      const result = await response.json();
      alert(`
        Nodes: ${result.num_nodes}, 
        Edges: ${result.num_edges}, 
        is DAG: ${result.is_dag ? 'Yes' : 'No'}
        `)
    }
    catch(e){
      console.error("Error: ",e);
    }
    
    
  }

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button 
              type="submit" 
              className="button"
              onClick={handleSubmit}
              >
              Submit
            </button>
        </div>
    );
}

from typing import List
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from utils import checkDag
from models import Edge,Node, EdgeModel, NodeModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to your needs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

class PipelineModel(BaseModel):
    nodes: List[NodeModel]
    edges: List[EdgeModel]


@app.post('/pipelines/parse')
def parse_pipeline(pipeline: PipelineModel):
    result = checkDag(pipeline.nodes,pipeline.edges)
    print(result)
    return {
        "num_nodes":len(pipeline.nodes),
        "num_edges": len(pipeline.edges),
        "is_dag": result
        }




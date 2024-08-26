from typing import List, Optional
from pydantic import BaseModel


class DataModel(BaseModel):
    id: str
    nodeType: str

class PositionModel(BaseModel):
    x: float
    y: float


class NodeModel(BaseModel):
    data: DataModel
    dragging: Optional[bool] = False
    height: int
    id: str
    position: PositionModel
    positionAbsolute: Optional[PositionModel] = None
    selected: Optional[bool] = False
    type: str
    width: int

class Node(BaseModel):
    node: List[NodeModel]

class MarkerEndModel(BaseModel):
    type: str
    height: str
    width: str

class EdgeModel(BaseModel):
    source: str
    sourceHandle: str
    target: str
    targetHandle: str
    type: str
    animated: bool
    markerEnd: MarkerEndModel
    id: str

class Edge(BaseModel):
    edges: List[EdgeModel]



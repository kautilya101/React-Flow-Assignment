
from collections import defaultdict
from models import EdgeModel, NodeModel


def getNodes(nodes: NodeModel):
  newNodes = []
  for node in nodes:
    newNodes.append(node.id)
  return newNodes
  
def getEdges(edges: EdgeModel):
  newEdges = []
  for edge in edges:
    newEdges.append((edge.source,edge.target));
  return newEdges

def adjacencyMatrix(nodes,edges):
  # print(nodes,edges)
  node_index = {node: i for i,node in enumerate(nodes)}
  print(node_index)
  adj_matrix = defaultdict(list)
  for edge in edges:

    s,t = edge
    s_idx = node_index[s]
    t_idx = node_index[t]
    print(s,s_idx,t,t_idx)
    adj_matrix[s_idx].append(t_idx)

  print(adj_matrix)
  return adj_matrix

def dfs(node,adj,vis,path):
  vis[node] = True
  path[node] = True
  print(adj[node])
  for el in adj[node]:
    if vis[el] == False:
      if dfs(el,adj,vis,path) == True:
        return True
    elif path[el] == 1:
      return True
  path[node] = False
  return False

def checkDag(nodes,edges):
  nodeList = getNodes(nodes)
  edgeList = getEdges(edges)
  adj = adjacencyMatrix(nodeList,edgeList)
  size = len(nodeList)
  
  vis = [False]*(size+1)
  path = [False]*(size+1) 
  for i in range(size):
    if vis[i] == False:
      if dfs(i,adj,vis,path) == True:
        return False
  return True
export function dijkstraWithSteps(graph, start, end) {
    const n = graph.length;
    const visited = new Array(n).fill(false);
    const dist = Array(n).fill(Infinity);
    const prev = Array(n).fill(null);
    const steps = [];
  
    dist[start] = 0;
    const pq = [{ node: start, dist: 0 }];
  
    while (pq.length > 0) {
      pq.sort((a, b) => a.dist - b.dist);
      const { node: u } = pq.shift();
      if (visited[u]) continue;
      visited[u] = true;
  
      steps.push({ type: 'visit', node: u, dist: dist[u] });
  
      for (const { node: v, weight } of graph[u]) {
        if (dist[u] + weight < dist[v]) {
          dist[v] = dist[u] + weight;
          prev[v] = u;
          pq.push({ node: v, dist: dist[v] });
  
          steps.push({ type: 'relax', from: u, to: v, newDist: dist[v] });
        }
      }
    }
  
    const path = [];
    for (let at = end; at !== null; at = prev[at]) path.push(at);
    path.reverse();
  
    steps.push({ type: 'path', nodes: path });
  
    return steps;
  }
  
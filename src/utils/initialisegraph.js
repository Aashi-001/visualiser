export function generateRandomGraph(n, maxEdgesPerNode = 3, maxWeight = 10) {
    const graph = Array.from({ length: n }, () => []);
    for (let i = 0; i < n; i++) {
      const numEdges = Math.floor(Math.random() * maxEdgesPerNode) + 1;
      for (let j = 0; j < numEdges; j++) {
        const neighbor = Math.floor(Math.random() * n);
        if (neighbor !== i && !graph[i].some(edge => edge.node === neighbor)) {
          const weight = Math.floor(Math.random() * maxWeight) + 1;
          graph[i].push({ node: neighbor, weight });
          graph[neighbor].push({ node: i, weight });
        }
      }
    }
    return graph;
  }
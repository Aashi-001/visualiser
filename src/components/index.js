import { generateRandomGraph } from "../utils/initialisegraph";
import { dijkstraWithSteps } from "../algorithms/dijkstra";
import '../css/graphvisualisation.css';

function Index() {
    // take any n value
    // initialise graph
    // use dijsktra
    // src node = 0, dest node = n-1
    const graph = generateRandomGraph(4);
    const shortestpath = dijkstraWithSteps(graph, 0, 3);
    console.log(shortestpath);

    const radius = 150;
    const centerX = 200;
    const centerY = 200;
    const positions = graph.map((_, i, arr) => {
      const angle = (2 * Math.PI * i) / arr.length;
      return {
          x: centerX + radius * Math.cos(angle),
          y: centerY + radius * Math.sin(angle),
      };

  });
    return (
      <>
        <div style={{ position: 'relative', width: 400, height: 400 }}>
            {positions.map((pos, idx) => (
                <div
                    key={idx}
                    className="node"
                    style={{
                        position: 'absolute',
                        left: pos.x - 30,
                        top: pos.y - 30,
                    }}
                >
                    {idx}
                </div>
            ))}

            {graph.map((edges, from) =>
                edges.map(({ node: to, weight }, idx) => {
                    const x1 = positions[from].x;
                    const y1 = positions[from].y;
                    const x2 = positions[to].x;
                    const y2 = positions[to].y;

                    const dx = x2 - x1;
                    const dy = y2 - y1;
                    const length = Math.sqrt(dx * dx + dy * dy);
                    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

                    const shortenedLength = length - 30;
                    return (
                        <div
                            key={`${from}-${to}-${idx}`}
                            className="line arrow-right"
                            style={{
                                width: shortenedLength,
                                left: x1,
                                top: y1,
                                transform: `rotate(${angle}deg)`,
                            }}
                        >
                            <div
                                className="weight-label"
                                style={{
                                    position: 'absolute',
                                    left: shortenedLength / 2 - 10,
                                    top: -20,
                                }}
                            >
                                {weight}
                            </div>
                        </div>
                    );
                })
            )}
        </div>
        {graph.map((edges, node) => (
                <div key={node}>
                    <strong>Node {node}:</strong>
                    <ul>
                        {edges.map((edge, idx) => (
                            // <li key={idx}>
                            // <div>
                            //     connects to Node {edge.node} with weight {edge.weight}
                            //   </div>
                            // </li>
                            <>
                            <div> node : {edge.node}</div>
                            <div> weight : {edge.weight}</div>
                            </>
                        ))}
                    </ul>
                </div> ))
            }
      </>
    )
}

export default Index;

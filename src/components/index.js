import { generateRandomGraph } from "../utils/initialisegraph";
import { dijkstraWithSteps } from "../algorithms/dijkstra";

function Index() {
    // take any n value
    // initialise graph
    // use dijsktra
    // src node = 0, dest node = n-1
    const graph = generateRandomGraph(4);
    const shortestpath = dijkstraWithSteps(graph, 0, 3);
    console.log(shortestpath);

    return (
        <h1>hello world</h1>
    )
}

export default Index;

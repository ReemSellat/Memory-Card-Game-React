import React, { useEffect, useState } from "react";

function Visited(props) {
    const [visited, setVisited] = useState([]);
    const [total, setTotal] = useState(-1);
    const [bestScore, setBestScore] = useState(0);


    useEffect(() => {
       let temp = 0;
        for (let i = 0; i < visited.length; i++) {
            if (visited[i] == props.title) {
                temp = 1;
            }
        }
        if (temp == 0 ) {
            setTotal(total+1);
            setVisited(visited.concat(props.title));
        }
        else {
            setBestScore(Math.max(bestScore,total));
            setTotal(0);
            setVisited([]);
        }

    },[props]);
    return (

        <div className="score"><h2>Total : {total}<br></br> Best Score : {bestScore}</h2></div>

    )
}
export default Visited;
import React, { useState } from 'react';

const MapUse = (props) => {



    const [data, setData] = useState([0]);
    const Add = () => {
        console.log(data.length);
        // for(let x :data)
        let x = [];
        for (let i = 0; i <= data.length - 1; i++)
            
        x.push(data[i]);
        x.push(data[data.length - 1]+1);
        //console.log(data[i]);
        setData(x);

    }





    return (
        <div>
            <h2>List of Numbers</h2>
            <ul>{data}</ul>
            <input type="text" value={data} />



            <br />
            <button onClick={Add}>Add</button>

        </div>

    );

};
export default MapUse;
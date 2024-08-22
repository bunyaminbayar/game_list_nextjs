import React from 'react';


export default function GameItems(props:any) {
    return (

        <div className="border p-4 rounded shadow">
            <img
                src={props.gameImage}
                className="w-full h-32 object-cover mb-2"
            />
            <h2 className="text-xl font-semibold">{props.gameName}</h2>
        </div>
    )
}

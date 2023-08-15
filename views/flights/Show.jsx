import React from "react";

export default function Show({flight}) {
    console.log(flight)
    let {airport, airline, flightNo, departs, destinations} = flight
    return(
        <div>
            <h1>Flight Details</h1>
            <p>Airport: {airport}</p>
            <p>Airline: {airline}</p>
            <p>Flight #: {flightNo}</p>
            <p>Departs: {departs.toString()}</p>

            <form action="/flights">
                <button>Back</button>
            </form>
        </div>
    )
}
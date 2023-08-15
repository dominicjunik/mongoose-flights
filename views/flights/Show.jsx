import React from "react";

export default function Show({flight}) {
    console.log(flight)
    let {airport, airline, flightNo, departs, destinations, _id} = flight
    return(
        <div>
            <h1>Flight Details</h1>
            <p>Airport: {airport}</p>
            <p>Airline: {airline}</p>
            <p>Flight #: {flightNo}</p>
            <p>Departs: {departs.toString()}</p>

            <form action={`/flights/${_id}?_method=PUT`} method="POST">
            <h2>Add Destination:</h2>
            <label htmlFor="departs">Arrival:</label> <br />
            <input type='datetime-local' id='departs' name='departs' defaultValue={flight.departs.toISOString().slice(0, 16)}></input><br /><br />

            <label htmlFor="airports">Choose an Airport Destination:</label>
            <select name="airports" id="airports">
                <option value="AUS">AUS</option>
                <option value="DAL">DAL</option>
                <option value="LAX">LAX</option>
                <option value="SAN">SAN</option>
                <option value="SEA">SEA</option>
            </select> <br />
            <button>Submit</button>
            </form><br /><br /><br />
        

            <form action="/flights">
                <button>Back</button>
            </form>
            
        </div>
    )
}
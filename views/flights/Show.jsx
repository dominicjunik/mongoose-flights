import React from "react";

export default function Show({flight}) {
    
    
    let {airport, airline, flightNo, departs, destinations, _id} = flight
    console.log(destinations)

    
    return(
        <div>
            <h1>Flight Details</h1>
            <p>Airport: {airport}</p>
            <p>Airline: {airline}</p>
            <p>Flight #: {flightNo}</p>
            <p>Departs: {departs.toString()}</p>
            <h3>Destinations:</h3>
            <table>
            <tr>
                <td>Airport</td>
                <td>Arrival</td>
            </tr>
            {destinations ? destinations.map((destination) => 
                <tr key={destination._id}>
                    <td>{destination.airport}</td>
                    <td>{destination.arrival.toString()}</td>
                </tr>
            ): null}
            </table>
           

            <form action={`/flights/${_id}?_method=PUT`} method="POST">
            <h2>Add Destination:</h2>
            <label htmlFor="departs">Arrival:</label> <br />
            <input type='datetime-local' id='departs' name='arrival' defaultValue={flight.departs.toISOString().slice(0, 16)}></input><br /><br />

            <label htmlFor="airports">Choose an Airport Destination:</label>
            <select name="airport" id="airports">
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
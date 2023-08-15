import React from "react";

export default function Index({flights}){
   
    return (
        <div>
            <h1>Index</h1>
            <table>
                <tr>
                    <th>Airline</th>
                    <th>Flight #</th>
                    <th>Departs</th>
                    <th>Details</th>
                </tr>
                 {flights.map((flight) => 
                    <tr key={flight._id}>
                         {console.log(flight.departs)}
                        <td>{flight.airline}</td>
                        <td>{flight.flightNo}</td>
                        <td>{flight.departs.toString()}</td>
                        <td><a href={`/flights/${flight._id}`}><button>Info</button></a></td>
                    
                    </tr> 
                 )}
            </table>

            <form action="/flights/new">
                <button>New</button>
            </form>
           
        </div>
    )
}
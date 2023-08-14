import React from "react";

export default function New({newFlight}){

    console.log('hello', newFlight)
    return (
        <div>
            <h1>New</h1>

            <form action="/flights" method="POST">

                <label htmlFor="airline">Airline:</label> <br />
                <input type='text' id='airline' name='airline'></input> <br /><br />

                <label htmlFor="flightNo">Flight #:</label> <br />
                <input type='number' id='flightNo' name='flightNo'></input><br /><br />

                <label htmlFor="departs">Departs:</label> <br />
                <input type='datetime-local' id='departs' name='departs' defaultValue={newFlight.departs.toISOString().slice(0, 16)}></input><br /><br />

                <button>Submit</button>
            </form>

            <form action="/flights">
                <button>Back</button>
            </form>
        </div>
    )
}
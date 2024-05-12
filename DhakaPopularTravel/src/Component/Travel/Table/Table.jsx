import React, { useEffect, useState } from "react";
import "../../../Component/Travel/Table/Table.css";
// import Data From js file
import travelData from "../../../../public/travelData";

const Table = () => {
  // load data from js File/
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(travelData.flightOffer);
  }, [travelData]);
  // console.log(data[0].itineraries[0].segments[0].carrierCode);

  return (
    <>
      <div className="container mx-auto mt-16">
        <table class="table-auto">
          <thead>
            <tr>
            <th>FAREBASIC</th>
            <th>FLIGHT NUMBER</th>
              <th>CLASS</th>
              <th>SEAT</th>
              <th>AIRCRAFT</th>
           
              <th>CARRIER Code</th>
              <th>DEPARTURE</th>
              <th>ARRIVAL</th>
              <th>DURATION</th>
              <th>MARKETING CARRIER</th>
              <th>PRICE</th>
            </tr>
          </thead>
          <tbody>
            {/* Show fece data in td of the looping using map method.
             looping start Here
            */}
           
            {data.map((showData, i) => (
              <tr key={i}>
                <td className="flex flex-col">
                  {showData.fareBasis[0].map((d, i) => (
                    <p key={i}>{d}</p>
                  ))}
                </td>
                <td>{showData.itineraries[0].segments[0].flightNumber}</td>
                <td>
                  {showData.class[0].map((e, i) => (
                    <p key={i}>{e}</p>
                  ))}
                </td>

                <td>
                  {showData.seat[0].map((f, i) => (
                    <p key={i}>{f}</p>
                  ))}
                </td>
                <td>{showData.itineraries[0].segments[0].aircraft}</td>
               
                <td>{showData.itineraries[0].segments[0].carrierCode}</td>
                <td><p>{showData.itineraries[0].segments[0].departure.iataCode}</p><p>{showData.itineraries[0].segments[0].departure.at}</p></td>
                <td><p>{showData.itineraries[0].segments[0].arrival.iataCode}</p>
                <p>{showData.itineraries[0].segments[0].arrival.at}</p></td>
                <td>{showData.itineraries[0].duration}</td>
                  <td>{showData.itineraries[0].segments[0].marketingCarrier}</td>
                <td>
                  <span>{showData.price}</span>
                  <button className="bg-blue-900 text-white">SELECT</button>
                </td>
              </tr>
            ))}
            {/* Looping Ending Here */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;

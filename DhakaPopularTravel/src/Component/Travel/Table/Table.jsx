import React, { useEffect, useState } from "react";
import "../../../Component/Travel/Table/Table.css";
import travelData from "../../../../public/travelData";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(travelData.flightOffer);
  }, [travelData]);
  console.log(data);

  return (
    <>
      <div className="container mx-auto mt-16">
        <table class="table-auto">
          <thead>
            <tr>
              <th>FLIGHT NUMBER</th>
              <th>FAREBASIC</th>
              <th>AIRCRAFT</th>
              <th>CLASS</th>
              <th>ROUTE</th>
              <th>DEPARTURE</th>
              <th>ARRIVAL</th>
              <th>DURATION</th>

              <th>PRICE</th>
            </tr>
          </thead>
          <tbody>
            {data.map((showData, i) => (
              <tr key={i}>
                <td>dddd</td>
                <td>{showData.class.join()}</td>
                <td>show</td>
                <td>EF1PXOW</td>
                <td>DAC-IST</td>
                <td>dd</td>
                <td>22-11-24T23:30:00</td>
                <td>duration</td>
               
                <td>
                  <span>{showData.price}</span>
                  <button className="bg-blue-900 text-white">SELECT</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;

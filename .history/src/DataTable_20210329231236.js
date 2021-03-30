import { Component } from "react";

import React from 'react';
function DataTable({data}) {
    const columns = data[0] && Object.keys(data[0]);

    return (
      <table cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            {data[0] &&
              columns.map((heading) => <th className="thead">{heading}</th>)}
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
                          <div key={data[0]}>

            <tr>
              {columns.map((column) => (
                <td>{row[column]}</td>
              ))}
            </tr>
            </div>
          ))}
        </tbody>
      </table>
    );
}

export default DataTable;
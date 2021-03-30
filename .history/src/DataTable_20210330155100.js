import { Component } from "react";

import React from 'react';
function DataTable({data}) {
    const columns = data[0] && Object.keys(data[0]);
function search(rows) {
  const columns = rows[0] && Object.keys(rows[0]);
  console.log(rows);
  return rows.filter((row) =>
    columns.some(
      (column) =>
        row[column].String.toString().toLowerCase().indexOf(q.toLowerCase) > -1
    )
  );
}
 
    return (
      <table cellPadding={0} cellSpacing={0}>
        <thead>
          <tr className="tableheaders">
            {data[0] &&
              columns.map((heading) => <th className="thead">{heading}</th>)}
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr>
              {columns.map((column) => (
                <td>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
}

export default DataTable;
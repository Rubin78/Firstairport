import { Component } from "react";
import "./App.css";

import React from 'react';
function DataTable({data}) {
    const columns = data[0] && Object.keys(data[0]);

    return (
      <table cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>

      {data &&
        columns.map((item) => (
          <div key={item.id}>

        

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
import { Component } from "react";
import "./App.css";

import React from 'react';
import { ListItem } from "material-ui";
function DataTable({data}) {
    const columns = data[0] && Object.keys(data[0]);

    return (
      <table cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            {data[0] &&
              columns.map((heading) => <th className="thead">{ListItem.name}</th>)}
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
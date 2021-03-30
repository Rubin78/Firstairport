import { Component } from "react";

import React from 'react';
function DataTable({data}) {
    const columns = data[0] && Object.keys(data[0]);

    return (
      <table cellPadding={0} cellSpacing={0}>
        <thead> 

            <tr>{data[0] && columns.map(heading => <th>{heading}</th>)}</tr>
        </thead>

        <tbody>


        </tbody>
      </table>
    );
}

export default DataTable;
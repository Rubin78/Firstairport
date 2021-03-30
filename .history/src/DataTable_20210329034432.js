import { Component } from "react";

import React from 'react';
const columns = data[0] && Object.keys(data[0])
function DataTable({data}) {
    return (
      <table cellPadding={0} cellSpacing={0}>
        <thead> 

            <tr>{data[0] && columns.map(heading=><th>{heading}</th>)}</tr>
        </thead>

        <tbody>


        </tbody>
      </table>
    );
}

export default DataTable;
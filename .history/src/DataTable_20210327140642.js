import React, { Component } from 'react'

export default class DataTable extends Component {
    render() {
        return (
          <div>
            <div  style={{ overflowX: "auto" }}>
              <table>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Points</th>
                  <th>Points</th>
                  <th>Points</th>
                  <th>Points</th>
                </tr>
                <tr>
                  <td>Jill</td>
                  <td>Smith</td>
                  <td>50</td>
                  <td>50</td>
                  <td>50</td>
                </tr>

              </table>
            </div>
          </div>
        );
    }
}

import React, { Component } from 'react'

export default class DataTable extends Component {
    render() {
        return (
          <div>
            <div style="overflow-x:auto;"   style={{overflowX:auto}}>
              <table>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Points</th>
                  <th>Points</th>
                  <th>Points</th>
                  <th>Points</th>
                  <th>Points</th>
                  <th>Points</th>
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
                  <td>50</td>
                  <td>50</td>
                  <td>50</td>
                  <td>50</td>
                  <td>50</td>
                  <td>50</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td>Eve</td>
                  <td>Jackson</td>
                  <td>94</td>
                  <td>94</td>
                  <td>94</td>
                  <td>94</td>
                  <td>94</td>
                  <td>94</td>
                  <td>94</td>
                  <td>94</td>
                  <td>94</td>
                  <td>94</td>
                </tr>
                <tr>
                  <td>Adam</td>
                  <td>Johnson</td>
                  <td>67</td>
                  <td>67</td>
                  <td>67</td>
                  <td>67</td>
                  <td>67</td>
                  <td>67</td>
                  <td>67</td>
                  <td>67</td>
                  <td>67</td>
                  <td>67</td>
                </tr>
              </table>
            </div>
          </div>
        );
    }
}

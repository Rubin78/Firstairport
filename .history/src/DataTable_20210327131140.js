import React, { Component } from 'react'

export default class DataTable extends Component {
    render() {
        return (
            <div>
                

                <table cellPadding={0} cellSpacing={0} >

                    <thead>

                        <tr> {data[0] && columns.map(heading)=><th>{heading}</th>}</tr>
                    </thead>

                    </table>
            </div>
        )
    }
}

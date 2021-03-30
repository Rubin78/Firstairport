import React, { Component } from 'react'

export default class DataTable extends Component {

    const columns =data[0] && Object.key(data[])
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

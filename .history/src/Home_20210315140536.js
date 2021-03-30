import React, { Component } from 'react'
import App from "./App"
export default class Home extends Component {
    render() {
        const data1 ="welcome to new world"
        return (
            <div>
                {this.props.data}

<App data={data } />
            </div>
        )
    }
}

import React, { Component } from 'react'
import App from "./App"
export default class Home extends Component {
    render() {
        const data1 ="welcome to new world"
        return (
            <div>
                {this.props.data1}

<App data={data } />
            </div>
        )
    }
}
1
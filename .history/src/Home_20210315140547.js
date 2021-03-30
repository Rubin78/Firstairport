import React, { Component } from 'react'
import App from "./"
export default class Home extends Component {
    render() {
        const data ="welcome to new world"
        return (
            <div>
                {this.props.data}

<App data={data } />
            </div>
        )
    }
}

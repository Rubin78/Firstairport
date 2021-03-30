import React, { Component } from 'react'

export default class Home extends Component {


    constructor(props){

        super(props);


    }
    render() {
        return (
            <div>
                <h1>Home component</h1>
                
                {this.props.data}
            </div>
        )
    }
}

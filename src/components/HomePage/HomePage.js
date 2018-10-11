import React, { Component } from 'react'
import Listing from '../Listing/Listing'

class HomePage extends Component {
    constructor (props) {
        super (props)
        this.state = {

        }
    }

    render () {
        return (
            <div className = "homepage">
                <header className = "header">
                    <p>homepage</p>
                </header>
                <Listing/>

            </div>
        )
    }
}
export default HomePage
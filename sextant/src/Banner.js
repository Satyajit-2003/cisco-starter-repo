import './Banner.css'
import React, { Component } from 'react'

class Banner extends Component{
    render(){
        return(
            <div className="banner">
                <h1>{this.props.bannerText}</h1>
                <h3>Find your way</h3>
            </div>
        )
    }
}

export default Banner;
import React, { Component } from 'react'

export class Register extends Component {
    render() {
        return (
            <div className='Register'>
                <div className='closer' onClick={()=> this.props.onShowRegister()}>x</div>
                
            </div>
        )
    }
}

export default Register
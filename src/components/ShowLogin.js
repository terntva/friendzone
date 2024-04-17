import React, { Component } from 'react'
import Logo from './Logo'
import Input from './Input'

export class ShowLogin extends Component {
    render() {
        return (
            <div className='login'>
                <div>
                    <div className='closer' onClick={() => this.props.onShowLogin(this.props.form)}>x</div>
                    <Logo />
                    <form onSubmit={this.props.onSubmit}>
                        <Input type='text' name='username' placeholder='username' />
                        <Input type='password' name='password' placeholder='password' />
                        <button> Sign In</button>
                    </form>
                    <div className='social-signin'>
                        <button className="fb" onClick={this.props.onClick}><i className="fa fa-facebook" aria-hidden="true"></i></button>
                        <button className="tw" onClick={this.props.onClick}><i className="fa fa-twitter" aria-hidden="true"></i></button>
                    </div>
                    <a href='#'>Lost your password ?</a>
                </div>
            </div>
        )
    }
}

export default ShowLogin
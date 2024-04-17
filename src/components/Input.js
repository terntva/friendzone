import { Component } from 'react'

// Generic input field
class Input extends Component {
    render() {
      return <div className='Input'>
                <input type={ this.props.type } name={ this.props.name } placeholder={ this.props.placeholder } required autoComplete='false'/>
                <label htmlFor={ this.props.name } ></label>
             </div>
    }
  
  }

  export default Input
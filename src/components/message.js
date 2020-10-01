import React, { Component} from 'react'

class Message extends Component{


    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeMessage(){
        this.setState({
            message: ' thanku for subscribing'
        })
        console.log(this.state.message)
    }

   render(){
       return (
           <div>
           <h1>
               {this.state.message}
           </h1>
           <button onClick={() => this.changeMessage()}>Subscribed

           </button>
           </div>
       )}
}

export default Message;
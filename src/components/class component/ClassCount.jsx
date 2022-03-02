import React, { Component } from 'react';
import ClassComponentChild from './ClassComponentChild';
 
 export default class ClassCount extends Component {
     constructor(){
         super();
         this.state={
             counter:0,
         }
     }


     handleIncrement=()=>{
         this.setState((prevState)=>({ counter:prevState.counter + 1}));}
         handleDecrement=()=>{this.setState((currentState)=>({
             counter: currentState.counter-1,

         }));}
        
         handleDecrement=()=>{
              this.setState({counter:this.state.counter-1});

         }
        //  <h1>count:{this.state.counter}</h1>



    //       handleDecrement(){this.state((currentState)=>{counter:prevState.counter - 1;});
         
    //  }

    
   render() {
     return <div>
        <ClassComponentChild   NewValue={this.state.counter}/>
         <button onClick={this.handleIncrement}>Increment</button>
         <button onClick={this.handleDecrement}>Decrement</button>
     </div>;
   }
 
}
 
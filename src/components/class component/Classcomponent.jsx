import React,{Component} from 'react';

class Classcomponent extends Component{
    state ={name:"abc" , age :25};
    render(){
        return(
            <div><h1>class Component {this.state.name} {this.state.age}</h1></div>
        )
    }

}
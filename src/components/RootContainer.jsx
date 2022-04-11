import React from 'react'
import { Login } from './login/login';
import { Register } from './register/register';
import exit from '../assets/circle-x.svg'
import { Forget } from './forgetpass/forgetpass'
export class RootContainer extends React.Component{

  

    constructor(props){
        super(props);
    }

    state = {
        logactive :true 
    }


    displaylogin= ()=>{
document.getElementById('login').classList.toggle('active-state') 
document.getElementById('register').classList.toggle('active-state') 
this.setState({logactive:true})
    }
    displayregister= ()=>{
        document.getElementById('login').classList.toggle('active-state') 
        document.getElementById('register').classList.toggle('active-state') 
        this.setState({logactive:false})
            }
            
    render(){

        return (<div className="root-container">

            <div className="controllers">
            <div className="box-controller  active-state" id="login" onClick={this.displaylogin}>
          Login  
        </div>
        <div className="box-controller" id="register" onClick={this.displayregister}>
            Register
        </div>
        <div className="x">
            <img src={exit}></img>
        </div>
            </div>
        

         {this.state.logactive && <Login/> }
        {!this.state.logactive && <Register/> } 

      

    
        
                </div>
                
                )

    }
}
import './login.css'
import { Forget } from '../forgetpass/forgetpass';
import React from 'react';
import userIcon from '../../assets/user-profile.svg'
import Logo from '../../assets/LOGO.png'
import email from '../../assets/email.svg'
import password from '../../assets/password.svg'
import facebook from '../../assets/facebook.svg'
import google from '../../assets/google.svg'
import github from '../../assets/github.svg'

export class Login extends React.Component{


  
    constructor(props){
        super(props);
        this.state ={
            forget : false
        };
    }
    displayforget = () => {
        document.getElementById("loggroup").classList.add("hide")
        this.setState({forget : true})
    }
    render(){
return  <div className="inner-container">
    <div id="loggroup">
<div className="box">
<div className="header">
    <img src={Logo} />
    <h4>Welcome</h4>
    <p>login into your acount to continue</p> 
{ /*incoorect input */}
    <p className='incorrect'>incorrect creds  <br></br>do you have an account ?</p>
</div>

    <div className="input-group" >
    <div className="formItem">
                 <div className="usericon"><img src={userIcon} /></div>   
                    <input type="text" placeholder='Username' />
                </div>

                <div className="formItem">
                 <div className="passwordicon"><img src={password} alt="" /></div>   
                    <input type="password" placeholder='Password'/>
                </div>
    </div>

<div className="footer">
    <button className='forgetpass' onClick={this.displayforget}>forget your password ?</button>
    <button className='loginbtn'>Log in</button>
    <p className='p'> Or connect with </p>
<div className="icons">
   <button className="items"><img scr={facebook}/> </button> 
   <button className="items"><img scr={github}/></button> 
   <button className="items"><img scr={google}/></button> 
</div>
    </div>    
</div>
</div>
{this.state.forget && <Forget/>}
        </div>
    }
}
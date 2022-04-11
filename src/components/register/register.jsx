import './register.css'
import React from 'react';
import userIcon from '../../assets/user-profile.svg'
import Logo from '../../assets/LOGO.png'
import email from '../../assets/email.svg'
import password from '../../assets/password.svg'
import facebook from '../../assets/facebook.svg'
import google from '../../assets/google.svg'
import github from '../../assets/github.svg'
export class Register extends React.Component{


  
    constructor(props){
        super(props);
        this.state ={};
    }
    render(){
return  <div className="inner-container">
<div className="box">
<div className="head">
    
    <h4>Create new account</h4>
    
</div>

    <div className="input-group">
                 <div className="formItem">
                 <div className="usericon"><img src={userIcon} /></div>   
                    <input type="text" placeholder='Username' />
                </div>
                <div className="formItem">
                 <div className="Email"><img src={email} /></div>   
                    <input type="email" placeholder='Email' />
                </div>

                <div className="formItem">
                 <div className="passwordicon"><img src={password} alt="" /></div>   
                    <input type="password" placeholder='Password'/>
                </div>
    </div>

<div className="footer">
    
    <button className='Registerbtn'>Register</button>
<p className='p'> Or connect with </p>
<div className="icons">
   <button className="items"><img scr={facebook}/> </button> 
   <button className="items"><img scr={github}/></button> 
   <button className="items"><img scr={google}/></button> 
</div>

    </div>    
</div>
        </div>
    }
}
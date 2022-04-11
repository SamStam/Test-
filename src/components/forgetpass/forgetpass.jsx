import './forgetpass.css'
import React from 'react'

export class Forget extends React.Component {
    state = {  } 
    render() { 
        return <div className="forget">
            <div className="oups">
            <h3>Ooops...<br></br>How do i know that  it's you</h3>

            </div>

<div className="p">
<p> I sent you a reset code to <br></br>Email<br></br> Enter a code to reset password </p></div> 


<div className="input">
<div className="confirm">
                 
                    <input type="text" placeholder='Confirmation code ' />
                </div>

        </div>
        <div className="footer">
    <button className='receive'>Didn't receive a code ?</button>
    <button className='submit'>Submit</button>
   </div> 
        </div>
        
    }
}
 

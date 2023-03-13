import "./login.css"

import username from '../../pics/username.png'
import email from '../../pics/email.png'
import password from '../../pics/password.png'
import Backgr from "./backgr"
import {useState} from 'react';








export default function Signup() {
    
    const [inputs, setInputs] = useState({
        username: "",
        lpassword: "",
        lemail:"",
        semail:"",
        spassword: "",
        srepassword: "",
      });

    const handleChange = (e) => {
        setInputs((prev) => { 
          let helper =  {...prev};

          helper[`${e.target.id}`] = e.target.value;

          return helper
        });
    };
    
    const shandleSubmit = (e) => {
        e.preventDefault();

        const signdetails = [inputs.username , inputs.semail , inputs.spassword]
    }

    const lhandleSubmit = (e) => {
        e.preventDefault();

        const logindetails = [ inputs.lemail , inputs.lpassword]
    }

    const [isActive, setIsActive] = useState(false);
    const clickrotate = event => {
        setIsActive(current => !current);
    };
    return (
        
        <div className= "container">
            <Backgr/>
            <div className="subcont">
            <div className={isActive ? 'right1 cont block' : "right1 rotated cont block"}>
              <form  className="ok" >
                <h2>Login</h2>
                <label >
                <img src={email} className="logicons" alt="" />
                    <input required type="email" className = "input" value={inputs.lemail} name="email" id="lemail" placeholder="email"  onChange={handleChange}/>
                </label>
                <label >
                <img src={password} className="logicons" alt="" />
                    <input required type="password" className = "input" value={inputs.lpassword} id="lpassword" placeholder="password" onChange={handleChange}/>
                </label>
                <div className="forgetpass">
                    <span>Forget password?</span>
                </div>
                <button className="button" onClick={lhandleSubmit}>Login</button>
                <div className="movetosignup">
                <span >Don't have an account ?</span>
                <span className="sign" onClick={clickrotate} >SignUp</span>
                </div>
                </form>  
            </div>
            <div className={isActive ? 'right rotated cont block' : "right cont block"}>
              <form className='ok' >

                <h2>SignUp</h2>
                <label >
                    <img src={username} className="logicons" alt="" />
                    <input type="text" className = "input" value={inputs.username} id="username" placeholder ="username"required onChange={handleChange}/>
                </label>
                <label >
                <img src={email} className="logicons" alt="" />
                    <input type="email" className = "input" value={inputs.semail} id="semail" name="email" placeholder="email" required onChange={handleChange}/>
                </label>
                <label >
                <img src={password} className="logicons" alt="" />
                    <input type="password" className = "input" value={inputs.spassword} id="spassword" placeholder="password" required onChange={handleChange}/>
                </label>
                <label >
                <img src={password} className="logicons" alt="" />
                    <input type="password" className="input" value={inputs.srepassword} id="srepassword" placeholder="Re-Password" required onChange={handleChange}/>
               </label>
                <button className="button" onClick={shandleSubmit}>SignUp</button>
                <div className="movetologin">
                <span >Already have an account ?</span>
                <span className="log" onClick={clickrotate}>login</span>
                </div>
                </form>  
            </div>
            </div>
        
        </div>
    )
}
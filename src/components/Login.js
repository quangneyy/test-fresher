import { useState } from 'react';
import { loginApi } from '../services/UserService';
import { toast } from 'react-toastify';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            toast.error("Email/Password is required!");
            return;
        }

        let res = await loginApi(email, password);
        if (res && res.token) {
           localStorage.setItem("token", res.token); 
        }
    }

    return (<>
        <div className="login-container col-12 col-sm-4">
            <div className="title">Log in</div>
            <div className="text">Email or Username</div>
            <input 
                type="text" 
                placeholder="Email or username..." 
                value={email} 
                onChange={(event) => setEmail(event.target.value)}
            />
            <div className="input-2">
                <input 
                    type={isShowPassword === true ? "text" : "password" } 
                    placeholder="Password..." 
                    value={password} 
                    onChange={(event) => setPassword(event.target.value)}
                />
                <i class={isShowPassword === true ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}
                    onClick={() => setIsShowPassword(!isShowPassword)}
                ></i>
            </div>

            <button 
                className={email &&  password ? "active" : ""}
                disabled={email && password ? false : true}
                onClick={() => handleLogin()}
            >Login</button>
            <div className="back">
                <i class="fa-solid fa-angles-left"></i>Go back
            </div>
        </div>
    </>)
}

export default Login;
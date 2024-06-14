import React, {useState} from "react";
import "./entry.style.css";
import { LoginForm } from "../../components/login/login.comp";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";


export const Entry = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [frmLoad, setFrmLoad] = useState("login");


    const handleOnChange = e => {
        const {name, value} = e.target;
        switch(name){
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;

        }
        console.log (name, value)
    }
    const handleOnSubmit = e => {
        e.preventDefault();
        if (!email || !password){
            alert("Please fill all the required fields");
        }
        else{
            alert("Thanks")
        }
    }
    const handleOnResetSubmit = e => {
        e.preventDefault();
        if (!email){
            alert("Please Enter Email");
        }
        else{
            alert("Thanks")
        }
    }

    const formSwitcher = frmtype =>{
        setFrmLoad(frmtype);

    }



    return(
        
        <div className="entry-page bg-info">
        <div className="jumbotron">
            {frmLoad === "login" && (
            <LoginForm 
            handleOnChange = {handleOnChange} 
            handleOnSubmit = {handleOnSubmit} 
            email = {email} 
            password = {password}
            formSwitcher = {formSwitcher}
            />
            )}

            {frmLoad === "reset" && (
                <ResetPassword 
                handleOnChange = {handleOnChange} 
                handleOnResetSubmit = {handleOnResetSubmit} 
                email = {email}
                formSwitcher = {formSwitcher}
                />)}

        </div>
        </div>
    );
};
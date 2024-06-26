import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Admin=()=>
{
    const [signinFormData,setSigninFormData]=useState({
        email_verify:'',
        password_verify:'',
    })
    const navigate=useNavigate();
    const handleChangeSignIn=(e)=>
    {
        const {name,value} = e.target;
        setSigninFormData({...signinFormData,[name]:value});
    }
    const handleSubmitAdminSignIn=async(e)=>
    {
        e.preventDefault();
        try{
                // console.log(signinFormData.email_verify);
                const response = await axios.post("https://car-rental-website-oy1l.onrender.com/admin-signin",signinFormData);
                if(response.data.message == 'Admin not found' || response.data.message == 'wrong credentials')
                {
                    toast.warning(response.data.message);
                }
                else{
                    const name=response.data.message.split(" ")[0];
                    localStorage.setItem('Adminname',JSON.stringify(name));
                    toast.success(response.data.message);
                    setSigninFormData({
                        email_verify:'',
                        password_verify:'',
                    })
                    navigate('/adminhome');
                }
                setSigninFormData({
                    email_verify:'',
                    password_verify:''
                })
        }
        catch(error)
        {
            console.log("error occured on admin login");
        }
    }
    return (
        <>
         <div className="">
            <form className="flex justify-center items-center min-h-[100vh]" onSubmit={handleSubmitAdminSignIn}>
                <fieldset className="border border-black w-fit p-32 rounded-xl">
                    <h2 className="text-2xl text-center font-bold mb-4">Signin</h2>
                    <input required type="text" className="border border-black p-3 rounded-md my-3" placeholder="Email" id="email_verify" name="email_verify" value={signinFormData.email_verify} onChange={handleChangeSignIn} />
                    <br />
                    <input required type="password" className="border border-black p-3 rounded-md my-3" placeholder="Password" id="password_verify" name="password_verify" value={signinFormData.password_verify} onChange={handleChangeSignIn} />
                    <br />
                    <div className="flex justify-center my-3">
                        <button type="submit" className="px-8 py-2 border border-black rounded-xl bg-blue-800 text-white hover:border-b-2 hover:border-r-2">Signin</button>
                    </div>
                </fieldset>
            </form>
        </div>
        </>
    )
}
export default Admin;
import React,{useState} from "react";
import "./Mail.css";


const Mail=(
)=>{
    const [to ,setTo]=useState("");
    const [subject, setSubject]=useState("");
    const [message,setMessage]=useState("");

    const handleSubmit=(e)=>{
        
        const data={
            to:to,
            subject:subject,
            message:message
        };

        fetch("https://testing-wine-nine-18.vercel.app/sendmail",
            {
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(data)
        }).then((msg)=>{
            console.log("backend api connected successfullyy....");
        }).catch((err)=>console.log("error:"+err));

    };

    return(<>
    <form onSubmit={handleSubmit}>
        <h1>Send mail</h1>
        <input type="email" placeholder="to" multiple onChange={(e)=>setTo(e.target.value)}></input>
        <input type="text" placeholder="subject" onChange={(e)=>setSubject(e.target.value)}></input>
        <textarea placeholder="Enter message" onChange={(e) => setMessage(e.target.value)} ></textarea>
        <button type="submit">Send mail</button>
    </form>

    </>);
}

export default Mail;
import './heybud.css';


const HeyBud=()=>{
return(<>
<div className="container" >
    
    
    <div className="message left">
        Rohan:Good.You say?
    </div>

    <div className="message right">
        Aman:hey!! how are you?
    </div>
    <a href="http://127.0.0.1:5500/index.html">Let's Chat</a>
</div>   
<div className="send">
<form action="#" id="send-container">
    <input type="text" name="messageInp" id="messageInp"/>
    <button className="btn" type="submit">Send</button>
</form>
</div>
</>
)

}

export default HeyBud;


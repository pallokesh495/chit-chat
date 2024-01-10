import React,{useState,useEffect} from 'react'
import Avatar from '@mui/material/Avatar';
import SendIcon from '@mui/icons-material/Send';
import profile from '../../assets/profile.png'
import style from './ChatArea.module.css';

import { useLocation } from 'react-router-dom'; 
import socket from "../../service/socket";



const ChatArea = () => {
  console.log("chatarea mounted")

  let u_name=useLocation().state.username;
 
  const [chat,setChat]= useState([]);
  const [msgTime, setMsgTime] = useState(new Date());
  const [msg,setMsg] = useState();
  
 
 

  useEffect(()=>{
    scrolldown(); 
  console.log('data fetched');
  socket.emit('fetch');


socket.on('getData',  (data) => {


  console.log('data recieved',data);
  setChat(data);
  
 
  socket.on('updateChat', (newMessage) => {
    
    setChat((chat) => [...chat, newMessage]);
    scrolldown(); 
    console.log("t1",chat.at(-1).msgtime);
    console.log("t2",newMessage.msgtime);
  //   if (chat.at(-1).msgtime === newMessage.msgtime) {
  //     // do something
  //  } else {
  //      console.log('msg rcived and appended',newMessage);
   
  //    setChat((chat) => [...chat, newMessage]);
  
  //  }
 
  }); 
  
 

});



// // return () => {
// //   socket.off('getData');
// // };
   

 },[chat])

     
 
  

  

 





  const handleMsg = (e)=>{
    setMsg(e.target.value); 
  }

  const scrolldown = ()=>{ 
    const chatArea = document.getElementById('chatarea');
   
    chatArea.scrollTop = chatArea.scrollHeight;

  }

  const inputField = document.getElementById('textarea');



  const sendMsg = ()=>{
   
    if(!inputField.value==''){
      console.log('btn worked');
      scrolldown(); 
    setMsgTime(new Date());
    let newMessage = {name:u_name, lastMessage:msg.trim(),msgtime:msgTime}
    console.log(newMessage);
      socket.emit('message',newMessage);
      inputField.value='';
    }
    
   
  }



  return (
    <div  className={style.wrap}>
      
        <div className='d-flex align-items-center justify-content-between' style={{borderBottom:" 2px solid grey",borderRadius:"0.5rem",boxShadow: "5px 10px 18px grey",backgroundColor:"white"}}>
        <div className='d-flex'><Avatar alt="Remy Sharp" src={profile} style={{    height: "60px",width: "60px"}} />
     
     </div>
     <p  style={{color:"grey",padding:"0 2rem"}}>hello {u_name}</p>
        </div>
       <div id="chatarea" className={style.area}>


     {
     

       chat.map((ele)=>{
        
      
       return (ele.name===u_name) ?
                              
        (
          <div className='d-flex justify-content-end'>
          <div className={style.recieved}>
            <p>{ele.lastMessage}</p>
           </div>
          </div>
        )
        
        :

      (
        <div className='d-flex m-2'>
        <Avatar alt="Remy Sharp" src={profile} style={{    height: "40px",width: "40px"}} />
        <div className={style.sent}>
         <p>{ele.lastMessage}</p>
        </div>
        </div>
      )
        
      })
     }
      

       </div>
       <div className='d-flex justify-content-center align-items-center' >
        <input type='text'  id="textarea" className={style.msg_input} onChange={(e)=>{handleMsg(e)}}  onKeyDown={(e) => { if (e.key === 'Enter') sendMsg() }}   ></input>
        <div className={style.action} onClick={sendMsg} >
       
        <SendIcon color='info' />
        </div>
       </div>
       
      
       
    </div>
  )
}

export default ChatArea
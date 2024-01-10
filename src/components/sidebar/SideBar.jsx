import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

import profile from '../../assets/profile.png'
import data from './data.js'

import style from './SideBar.module.css';



const  SideBar = ()=>{
  return (
 
   <div className={style.wrap}>
      
     <div className='d-flex justify-content-between'>
    <div className='d-flex'>
    <Avatar alt="Remy Sharp" src={profile} style={{    height: "60px",width: "60px"}} />
      <div className={style.title}>
      <p id={style.name}>not_lokesh</p>
       <p>Working</p>
      </div>
    </div>

        <EditOutlinedIcon/>
       
      
     </div>
    
     {
        data.map((ele)=>{

    
     
          return(
            <>
             <div className={style.contacts}>
             <div className='d-flex'>
    <Avatar alt="Remy Sharp" src={profile} style={{    height: "40px",width: "40px"}} />
      <div className={style.title}>
      <p id={style.name}>{ele.name}</p>
       <p>{ele.lastMessage}</p>
      </div>
    </div>
    <p>{ele.msgtime}</p>
    
    </div>
            </>
          )

          
        })
      } 
     </div>
       
   
   
   
  );
}

export default SideBar;
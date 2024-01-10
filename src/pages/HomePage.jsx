import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import ChatArea from '../components/chatArea/ChatArea'
import style from './HomePage.module.css'


const HomePage = () => {



  return (
    <div className='d-flex'>
    <div className={style.sbar}><SideBar/></div>
    <ChatArea/>
    </div>
  
  )
}

export default HomePage
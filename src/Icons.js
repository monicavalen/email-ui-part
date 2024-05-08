import React, { useState } from 'react';
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BiCubeAlt } from "react-icons/bi";
import { CiCalendar } from "react-icons/ci";
import { BiMessageAlt } from "react-icons/bi";
import { CiBellOn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import { BiTimeFive } from "react-icons/bi";
import { CiHome } from "react-icons/ci";
import { BiLogInCircle } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import finkraftLogo from './finkraft_logo-removebg-preview.png';
import { CiMoneyBill } from "react-icons/ci";
import user from './avatar-removebg-preview.png';
// import { SettingOutlined } from '@ant-design/icons';

const Icons = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <div>
      <div className='Icons'>
        <img src={finkraftLogo} alt="Image not found" className='image' />
        <CiHome
          className={hoveredIcon === 'home' ? 'home hovered' : 'home'}
          onMouseEnter={() => handleIconHover('home')}
          onMouseLeave={handleIconLeave}
        /><br />
        <AiOutlineAppstoreAdd
          className={hoveredIcon === 'dashboard' ? 'dashboard hovered' : 'dashboard'}
          onMouseEnter={() => handleIconHover('dashboard')}
          onMouseLeave={handleIconLeave}
        /><br />
        <BiCubeAlt
          className={hoveredIcon === 'cube' ? 'cube hovered' : 'cube'}
          onMouseEnter={() => handleIconHover('cube')}
          onMouseLeave={handleIconLeave}
        /><br />
        <CiMail
          className={hoveredIcon === 'mail' ? 'mail hovered' : 'mail'}
          onMouseEnter={() => handleIconHover('mail')}
          onMouseLeave={handleIconLeave}
        /><br />
        <BiTimeFive
          className={hoveredIcon === 'time' ? 'time hovered' : 'time'}
          onMouseEnter={() => handleIconHover('time')}
          onMouseLeave={handleIconLeave}
        /><br />
        <CiCalendar
          className={hoveredIcon === 'calendar' ? 'calendar hovered' : 'calendar'}
          onMouseEnter={() => handleIconHover('calendar')}
          onMouseLeave={handleIconLeave}
        /><br />
        <CiMoneyBill
          className={hoveredIcon === 'money-bill' ? 'money-bill hovered' : 'money-bill'}
          style={{ marginBottom: "80px", width:"16px", height:"16px" }}
          onMouseEnter={() => handleIconHover('money-bill')}
          onMouseLeave={handleIconLeave}
          
        /><br />
        <BiMessageAlt
          className={hoveredIcon === 'message' ? 'message hovered' : 'message'}
          onMouseEnter={() => handleIconHover('message')}
          onMouseLeave={handleIconLeave}
        /><br />
        <CiBellOn
          className={hoveredIcon === 'bell' ? 'bell hovered' : 'bell'}
          onMouseEnter={() => handleIconHover('bell')}
          onMouseLeave={handleIconLeave}
          style={{width:"16px", height:"19px"}}
        /><br />
        {/* <SettingOutlined
          className={hoveredIcon === 'setting' ? 'setting hovered' : 'setting'}
          onMouseEnter={() => handleIconHover('setting')}
          onMouseLeave={handleIconLeave} style={{color:"rgba(113, 131, 155, 1)"}}
        /><br /> */}
        <IoSettingsOutline
          className={hoveredIcon === 'setting' ? 'setting hovered' : 'setting'}
          onMouseEnter={() => handleIconHover('setting')}
          onMouseLeave={handleIconLeave}
          style={{ color: hoveredIcon === 'setting' ? 'rgba(49, 88, 229, 1)' : ' rgba(113, 131, 155, 1)' }}
        /><br />
        <BiLogInCircle
          className={hoveredIcon === 'sign-out' ? 'sign-out hovered' : 'sign-out'}
          onMouseEnter={() => handleIconHover('sign-out')}
          onMouseLeave={handleIconLeave}
        /><br />
        <img src={user} className={hoveredIcon === 'user' ? 'user hovered' : 'user'} alt='Image not found' style={{ width: "23px", height: "23px" }} />
        {/* <BiUserCircle className={hoveredIcon === 'account' ? 'account hovered' : 'account'} /><br /> */}
      </div>
    </div>
  )
}

export default Icons;

import React from 'react';
import styles from "./Sidenav.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiCube } from "react-icons/bi";
import { AiFillAppstore } from "react-icons/ai";
import { TbSpeakerphone } from "react-icons/tb";
import { SiSimpleanalytics } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";







const SideNav = () => {
  return (
    <div className={styles.navBox}>
      <div className={styles.options}>
        <AiOutlineHome color='#94A3B8' size={"22px"}/>
        <p>Overview</p>
      </div>
      <div className={styles.options}>
        <AiOutlineShoppingCart color='#94A3B8' size={"22px"}/>
        <p> Sales</p>
      </div>
      <div className={styles.options}>
        <BiCube color='#94A3B8' size={"22px"}/>
        <p>Purchase</p>
      </div>
      <div className={styles.options}>
        <AiFillAppstore color='#94A3B8' size={"22px"}/>
        <p>Inventory</p>
      </div>
      <div className={styles.options}>
        <TbSpeakerphone color='#94A3B8' size={"22px"}/>
        <p>Marketing</p>
      </div>
      <div className={styles.options}>
        <SiSimpleanalytics color='#94A3B8' size={"22px"}/>
        <p>Analytics</p>
      </div>
      <div className={styles.options}>
        <IoIosPeople className='optionIcons' color='#94A3B8' size={"22px"}/>
        <p>Staff</p>
      </div>
    </div>
  )
}

export default SideNav
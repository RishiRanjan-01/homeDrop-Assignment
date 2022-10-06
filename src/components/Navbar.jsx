import React from "react";
import styles from "./Navbar.module.css";
import { GoThreeBars } from "react-icons/go";
import { BiSearch } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { HiOutlineBell } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.leftbox}>
        <span>
          <GoThreeBars className={styles.humberburg} />
        </span>
        <div className={styles.TitleImage}>
          <img
            height={"100%"}
            width={"100%"}
            src="https://s3-alpha-sig.figma.com/img/bb98/ef0c/cda114daaa8df34a958543d9e824e6fc?Expires=1665964800&Signature=gFzkTA3JYuR19VeYe2I8oUOvTcgOUxI1mSiX7JXxsuRtEx6BIOxxmNY4y4izz8xIX~ZkIGR56ktGSjXo9NH~QChnH4T7xsflGjCkldFBi8WBztGkhVvvh70Cg-iuB9NdRxeKXusdB5EUnXuwJn4LSJ65OuuJxcFeH3EFau4~7OKUFWcTRlR40Dc9zqAVKmjD7pTbpHSpPZheWcOdSwnfQjynlrjgRJEhmPA0rzwA7xSqHssyZdiPezTOakI2I4yQ6EXEyg2H12jBfIFUmi-pbv-uJJl2raVPUA3FBD5Wpj7Z5J-RXspm~vamIX9c-TlrBZDsBMILGBqWG05Ia495EQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          />
        </div>
        <div className={styles.logoText}>
          <p>Swastik Marketing</p>
        </div>

        {/* Search bar */}
        <div className={styles.searchbar}>
          <span>
            <BiSearch />
          </span>
          <input type="text" placeholder="Search"  />
        </div>
      </div>
      <div className={styles.rightbox}>
        <div className={styles.connected}>
          <GoPrimitiveDot />
          <p>Connected</p>
        </div>
        <div className={styles.question}>
          <AiOutlineQuestionCircle size={"25px"} color="#0F172A" />
        </div>
        <div>
          <HiOutlineBell size={"25px"} color="#0F172A" />
        </div>
        <div className={styles.avtarBox}>
          <div className={styles.Avtar}><p>KG</p></div>
          <div><BsChevronDown /></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

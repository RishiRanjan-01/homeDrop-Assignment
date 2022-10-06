import React from "react";
import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import SideNav from "../components/SideNav";
import styles from "./MainPage.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoReorderThreeOutline } from "react-icons/io5";
import { AiOutlineAppstore } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Card from "../components/Card";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"

const MainPage = () => {
  const [query, setquery] = useState("");
  const [data, setData] = useState([]);
 
  const getData = async() => {

    const res = await axios.get("https://api.homedrop.in/products")
    // console.log(res.data.data);
    setData(res.data.data);
  }


  const handleChange = async (e) => {
    setquery(e.target.value)
    // console.log(e.target.value);
    
    const res = await axios.get(`https://api.homedrop.in/products?search=${e.target.value}`);

    setData(res.data.data)
  }



  useEffect(() => {
    getData();
  },[])


  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <SideNav />
        <div className={styles.ProductsBox}>
          <div className={styles.AddProduct}>
            <p>Products</p>
            <button>Add Product</button>
          </div>
          <div className={styles.containtBox}>
            <div className={styles.topbox}>
              {/* bredcrun */}
              <div className={styles.bredcum}>
                <p>
                  <a href="#">All</a>
                </p>
                <p>
                  <a href="#">Active</a>
                </p>
                <p>
                  <a href="#">Inactive</a>
                </p>
                <p>
                  <a href="#">Draft</a>
                </p>
              </div>

              {/* Sort */}

              <div className={styles.sortBox}>
                <p>Sort:</p>
                <div className={styles.sortIcon}>
                  <p>Date Created</p>
                  <MdKeyboardArrowDown />
                </div>
                <div className={styles.sortIcon}>
                  <IoReorderThreeOutline size={"20px"} />
                  <AiOutlineAppstore size={"20px"} />
                </div>
              </div>
            </div>

            {/* Filter box */}

            <div className={styles.filerBox}>
              <div className={styles.inputBox}>
                <BiSearch size={"14px"} color="#0F172A" />
                <input type="text" placeholder="BrounVille" value={query} onChange={handleChange} />
                <AiOutlineClose size={"14px"} color="#0F172A" />
              </div>
              <div className={styles.SelectFilter}>
                 <p>Type</p>
                 <MdKeyboardArrowDown />
              </div>
              <div className={styles.SelectFilter}>
                 <p>Brands</p>
                 <MdKeyboardArrowDown />
              </div>
              <div className={styles.SelectFilter}>
                 <p>Stock Type</p>
                 <MdKeyboardArrowDown />
              </div>
              <div className={styles.SelectFilter}>
                 <p>Supplier</p>
                 <MdKeyboardArrowDown />
              </div>
              <div className={styles.SelectFilter}>
                 <p>Tags</p>
                 <MdKeyboardArrowDown />
              </div>
              <div className={styles.SelectFilter}>
                 <p>Availability</p>
                 <MdKeyboardArrowDown />
              </div>
            </div>
             
             {/* Grid Box */}
             <div className={styles.gridBox}>
              {
                data?.length > 0 && data.map((item) => {
                  return <Card key={item.id} product={item}/>
                })
              }
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

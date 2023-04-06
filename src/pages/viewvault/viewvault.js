import Navbar from "../../components/navbar";
import "./viewvault.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import {Dialogkey1} from "../../components/secretkey";



export default function Viewvault() {
  
  const [vievaults, Setvievaults] = useState({data:null,description:null,nominee:[{v_id: null,n_email:null,n_name:null,n_ph_no:null}],v_id:null,v_name:null});

  const [dialogkey1, setdialogkey1] = useState({
    isLoading: false,
    vaultname:"",
    vId:""
  });

  const handleDialog = (isLoading,vaultname,vId) => {
    setdialogkey1({
      isLoading,
      vaultname,
      vId
    });
  };

  

  const location = useLocation();

  useEffect(()=>{
    Setvievaults(location.state);
  },[]) 

  const search = useLocation().search;
  const vId = new URLSearchParams(search).get("vid");
  const nom = vievaults.nominee;

  const opendialog1 = (v_name) => {

    handleDialog( true, v_name,vId);

  };

  const areUSure = (choose) => {
    if (choose) {
        // alert("req sent");
      handleDialog(false);
    } else {
      handleDialog( false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="vi_container">
        {/* <Link to={`/updatevault?v_id=${vId}`}> */}
          <button className="vi_button" onClick={()=>opendialog1(vievaults.v_name)}>Edit Vault</button>
        {/* </Link> */}
        <div className="">
          <h1 className="vi_title"> {vievaults.v_name} </h1>
        </div>
        <div className="vi_desc_container">
          <div>
            <h2 className="vi_sub_title">Description </h2>
          </div>
          <div>
            <p className="vi_desc">{vievaults.description}</p>
          </div>
        </div>
        <div className="vi_n_container">
          <div className="">
            <h2 className="vi_n_sub_title">Nominee Details </h2>
          </div>
          {nom.map((nom_detail,index) => (
            
          <div  key={index} className="vi_n_details"> 
            <div className="vi_n_detail">
              <h3 className="vi_n_heading">{index+1}.</h3>
            </div>
            <div className="vi_n_detail">
              <h3 className="vi_n_heading">Name : </h3>
              <span>{nom_detail.n_name}</span>
            </div>
            <div className="vi_n_detail">
              <h3 className="vi_n_heading">Email : </h3>
              <span>{nom_detail.n_email}</span>
            </div>
            <div className="vi_n_detail">
              <h3 className="vi_n_heading">Mobile No. : </h3>
              <span>{nom_detail.n_ph_no}</span>
            </div>
          </div> 
           ))} 
        </div>
        <div className="vi_data_container">
          <div className="">
            <h2 className="vi_sub_title">Data </h2>
          </div>
          <div className="">
            <p>{vievaults.data}</p>
          </div>
        </div>
      </div>
      {dialogkey1.isLoading && <Dialogkey1 
                 onDialog={areUSure}
                 vaultname={dialogkey1.vaultname}
                 vId={dialogkey1.vId} />}
    </div>
  );
}

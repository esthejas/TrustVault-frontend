import { useEffect, useState  } from "react";
import "./secretkey.css";
import axios from "../axios";
import { useNavigate } from "react-router-dom";



const token = localStorage.getItem("token");

 function Dialogkey({ onDialog, vaultname,vId }) {

  const navigate = useNavigate();
  const [vaultSecretKey, setSecrertkey] = useState(null);


  const displayvaults = async (e) => {
    onDialog(true);
 
   try{
    const res = await axios.post(`/vault/displayVault`,{
      vaultSecretKey: vaultSecretKey,
      vId: vId
    });
    
    const datap = res.data;
    navigate(`/viewvault?vid=${vId}`,{state : datap});

    if (token) {
      console.log(token);
    } else {
      alert("Try Again");
    }
  } catch (e) {
    const err =JSON.stringify(e.response.data.error);
    console.log(err);
    alert(err);
  }
  
  };

  return (
    <div className="d_container">

      <div className="d_sub_container">
        <div className="d_details">
          <span className="d_heading">Secret Key of {vaultname} </span>
        </div>
        <div>
          <input
            required
            onChange={(e) => setSecrertkey(e.target.value)}
            className="d_details d_secretkey"
            type="password"
            placeholder="Type your Secret Key"
          />
        </div>
        <div className="d_details">
          <button className="d_ok" onClick={displayvaults}>
            Enter
          </button>
          <button className="d_cancel" onClick={() => onDialog(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

function Dialogkey1({ onDialog, vaultname,vId }) {

  const navigate = useNavigate();
  const [vaultSecretKey, setSecrertkey] = useState(null);


  const displayvaults = async (e) => {
    onDialog(true);
 
   try{
    const res = await axios.post(`/vault/displayVault`,{
      vaultSecretKey: vaultSecretKey,
      vId: vId
    });
    
    const datap = res.data;
    const datap1 = res.data.nominee;
    navigate(`/updatevault?v_id=${vId}`,{state : {datap,datap1}});

    if (token) {
      console.log(token);
    } else {
      alert("Try Again");
    }
  } catch (e) {
    const err =JSON.stringify(e.response.data.error);
    console.log(err);
    alert(err);
  }
  
  };

  return (
    <div className="d_container">

      <div className="d_sub_container">
        <div className="d_details">
          <span className="d_heading">Secret Key of {vaultname} </span>
        </div>
        <div>
          <input
            required
            onChange={(e) => setSecrertkey(e.target.value)}
            className="d_details d_secretkey"
            type="password"
            placeholder="Type your Secret Key"
          />
        </div>
        <div className="d_details">
          <button className="d_ok" onClick={displayvaults}>
            Enter
          </button>
          <button className="d_cancel" onClick={() => onDialog(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
export {Dialogkey,Dialogkey1} ;
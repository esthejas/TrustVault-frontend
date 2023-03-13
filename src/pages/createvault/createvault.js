import Navbar from '../../components/navbar'
import './createvault.css'
import TextareaAutosize from 'react-textarea-autosize';
import { useState } from 'react';
import d_icon from '../../pics/trash.png'

export default function Createvault() {

    const [replicaList, setReplicaList] = useState([
        { id: 0 },
      ]);
    const addReplica = () => {
        setReplicaList([
          ...replicaList,
          {
            id: replicaList.length,
          },
        ]);
      };
      const deleteReplica = (idToDelete) => {
        setReplicaList(replicaList.filter((replica) => replica.id !== idToDelete));
      };

    return (
        <div >
            <Navbar />
            <div className="v_container">
                <div className="vaultcontainer">
                    <form action="">
                        <div>
                            <h1 className='v_heading'>Vault Details</h1>
                        </div>
                        <label >
                            <span className='v_details_titles'>Vault Name : </span>
                            <input type="text" className='v_details' name='v_name' required />
                        </label>
                        <label >
                            <span className='v_details_titles'>Vault Secret Key : </span>
                            <input type="password" className='v_details' name='v_name' required />
                        </label>
                        <label >
                            <div>
                                <span className='v_details_titles'>Nominee Details :</span>
                            </div>


                            <div className="n_details">
                                {/* {[...Array(replicaCount - 1)].map((_, index) => ( */}
                                {replicaList.map((replica,index) => (
                                    <div key={replica.id} className="n_container">
                                        <label >
                                            <input type="text" placeholder={`Nominee - ${index+1}  Name`} className='v_details' name='n_name' required />
                                        </label>
                                        <label >
                                            <input type="email" placeholder={`Nominee - ${index+1}  Email`} className='v_details' name='n_email' required />
                                        </label>
                                        <label >
                                            <input type='tel' placeholder={`Nominee - ${index+1}  Mobile No.`} className='v_details' name='n_phone' required />
                                        </label>
                                        <img  onClick={() => deleteReplica(replica.id)} src={d_icon} className="d_icon" alt="" />
                                    </div>
                                ))}
                                <div className="">
                                    <button onClick={addReplica} className='add_button'>Add Nominee</button>
                                </div>
                            </div>

                        </label>
                        <label >
                            <span className='v_details_titles'>Vault Description : </span>
                            <TextareaAutosize type="text" maxRows={4} maxlength="200" className='v_details v_desc' name='v_desc' required />
                        </label>
                        <label >
                            <span className='v_details_titles'>Data : </span>
                            <TextareaAutosize minRows={5} type="text" className='v_details v_data' name='v_data' required />
                        </label>
                        <div className="">
                            <button className='cv_button'>Create Vault</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
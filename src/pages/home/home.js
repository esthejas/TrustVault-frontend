import './home.css'
import Navbar from "../../components/navbar"
import Vaulticon from '../../pics/vault.png'
import plus from '../../pics/plus.png'
import Delete from "../../pics/trash.png"
import Nominee from "../../pics/nomineeicon.png"
import { Link } from 'react-router-dom'


const vaults = [
    {
        v_id: 1,
        v_name: "Lorem it",
        data: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
        n_names: ["aearrtrdctdu","gxayugyu"],
    },
    {
        v_id: 2,
        v_name: "cing elit",
        data: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
        n_names:["aeactdu"],
    },
    {
        v_id: 3,
        v_name: " dolor s",
        data: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
        n_names:["aeactdu"],
    },
    {
        v_id: 4,
        v_name: "teturadipisic",
        data: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
        n_names:["aeactdu"],
    },
];

export default function Home() {

    
    return (
        <div>
            <Navbar />
            <div className="homecontainer">
                {vaults.map((vault) => (
                    <div className="outvault" key={vault.v_id} >
                        <div className="vault 1">
                            <div className="invault">
                                <div className="vaultdetails">
                                  <Link to ={`/viewvault/${vault.v_id}`}> <img src={Vaulticon} className="homeicon" alt="" /></Link> 
                                    <p className='vaultname' key={vault.v_name}>{vault.v_name}</p>
                                </div>
                                <div className="sidevault">
                                    <div className='nominee' >
                                        <img src={Nominee} className='nomineeicon' alt="" /> 
                                        <div className="nomineelist">
                                            <ul>  
                                                {vault.n_names.map((n_name,index) => (
                                                    <li key={index}>{n_name}</li>
                                                  ))} 
                                            </ul>
                                        </div>
                                   
                                    </div>
                                    <div className='trash'>
                                        <img src={Delete} className="trashicon" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="plusicon">
                    <Link to='/createvault' ><img src={plus} className="addicon" alt="" /> </Link>
                </div>
            </div>
        </div>
    )
}
import Navbar from '../../components/navbar'
import './viewvault.css'
import { useParams } from 'react-router-dom'

export default function Viewvault() {
    const { id } = useParams();
    return(
       <div >
        <Navbar/>
        <div className="">
          <p>Vault - { id } </p>
        </div>
       </div>
    )
}

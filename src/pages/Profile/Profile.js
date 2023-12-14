import React, { useContext } from 'react'
import Moprofile from './Moprofile'
import { Usercontext } from "../../Context/Usercontext";
import { useParams } from 'react-router-dom';


const Profile = ({id}) => {
  const { userid, name } = useContext(Usercontext);
 
  return (
    <div>
      <Moprofile  id={id} />
    </div>
  )
}

export default Profile
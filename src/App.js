
import './App.css';
import { useState,useEffect } from 'react';
import {db} from './firebase-config';
import {collection,getDocs,addDoc} from 'firebase/firestore'


function App() {
  const[users,setUsers] = useState([]);
  const[name,setName]= useState('');
  const[location,setLocation] =useState('');
  const UsersCollectionRef = collection(db, "backenddata");
  

  useEffect(() => {
    const getUsersData = async () => {
      const data = await getDocs(UsersCollectionRef)
      setUsers(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })))
    }

    getUsersData()
}, [])


const CreateUser = async () => {
  await addDoc(UsersCollectionRef, { Name: name, Location: location })
  window.location.reload()
}
  return (
<div className>
    <h1>React with FireBase</h1>
    <p>Fillin the Details to Upload Data to the DataBase</p>
    <div>
        <span>Enter your Name : </span>
        <input  type="text" placeholder='Name' onChange={(event) => { setName(event.target.value)}} />
        <span>Enter your Location : </span>
        <input  type="text" placeholder='location' onChange={(event) => { setLocation(event.target.value) }} />
        <br />
        <button onClick={CreateUser} >Upload</button>
    </div>

    <div className="text-white mt-20 mx-6">
    <h3 className='text-xl'>
       Users:
    </h3>
    <div>
        {users.map(user => {
            return <div>
            <p>Name : {user.Name}</p>
            <p>Loaction : {user.Location}</p>
         
        </div>
        })}
    </div>
</div>
    </div>
  );
}

export default App;

import {useState, useEffect} from "react";
import ".App.css";
import{db} from "./firebase-config"
import { collection, getDocs, addDoc} from "firebase/firestore"

function App() {
  const [newName, setNewName] = userState("")
  const [newAge, setNewAge] = userState (0)

  const [users, setUsers] = useState ([]);
  const usersCollectionRef = collection (db, "users");

  const createUser= async () => {
    await addDoc (usersCollectionRef, {name: newName, age: newAge });

  }


useEffect(() => {

    const getUsers = async () => {
        const data = await getDocs (usersCollectionRef);
        setUsers(data.docs.map((docs) => ({...docs.data(), id: docs.id })))

    };

    getUsers ()
}, [])

  return (
  <div ClassName="App">
    <input 
      placeholder="Name..."  
      onChange={(event) => {
        setNewName(event.target.value);
       }}
      />
    <input
     type="number"
      placeholder="Age..."
      onChage={(event) => {
      setNewAge(event.target.value) 
      }}
      />

    <button onClick={createUser}> Create User</button>
     {users.map((users) => {
        return (
         <div>
            {" "} 
            <h1>Name: {users.name}</h1>
            <h1>Agge: {users.age}</h1>
            

            </div>
        );
            })} 
            </div>
  );  

export default App;
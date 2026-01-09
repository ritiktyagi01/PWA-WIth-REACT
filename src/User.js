import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

const User = () => {
  const [data, setData] = useState([]);
  const [mode, setMode] =useState('online');
   useEffect(() => {
  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setData(result);
      localStorage.setItem("user",JSON.stringify(result))
    } catch (error) {
      let collection =   localStorage.getItem("user");
      setData(JSON.parse(collection));
      console.error("Fetch error:", error);
      setMode('offline');
     // alert('Your are in offline mode')
    }
  };

  fetchUsers();
}, []);


  return (
    <>

  {
    mode==='offline'?(
      <div class="alert alert-warning" role=' alert'>
        You are in Offline Mode.
      </div>
    ):null
  }


      <Table striped bordered hover>
        <thead>
         
          <tr>
            <th>Id</th>
            <th> Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((items) => (
              <tr  key={items.id}>
                <td>{items.id}</td>
                <td>{items.name}</td>
                <td>{items.email}</td>
                <td>{items.address.street}</td>
              </tr>
            )
            )
          }
          

        </tbody>
      </Table>

    </>
  )
}

export default User
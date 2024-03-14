import React, { useState } from "react";

const Home = () => {
 

  const [data,setData] = useState([
   { Host:1234,
    User:"saurav saini",
    Password:"sk@123"},

    { Host:1234,
      User:"saurav saini",
      Password:"sk@123"},

      { Host:1234,
        User:"saurav saini",
        Password:"sk@123"},
  
  
  ]);
  const [showData,setShowData] = useState(false);
  const handleMap = () =>{
    setShowData(!showData)
  }
  return (
    <>
      <div className="container-fluid">
        <div className="main-content">
          <h4>Tent</h4>
          <button onClick={handleMap} className="btn btn-success">Add tent</button>
        </div>
        <div className="">
          
          <table>
            <thead>
              <tr>
                <th>Host</th>
                <th>User</th>
                <th>Password</th>
                <th className="d-flex justify-content-end">Action</th>
              </tr>
            </thead>
            <tbody className="dynamic mt-4">
           {showData &&  data.map((item,index) => {
                return(
                  <>
                  <tr key={index} >
                  <td>{item.Host}</td>
                  <td>{item.User}</td>
                  <td>{item.Password}</td>
                  <td className="icons d-flex justify-content-end gap-3">
                  <i class="ri-edit-2-fill"></i>
                  <i class="ri-delete-bin-6-line"></i>
                </td>

                  </tr>
                  </>
                )
              })}
            </tbody>
            </table>
          
          </div>
        
         
          
      </div>
    </>
  );
};

export default Home;

import { useEffect, useState } from "react";

function App() {
  const [userData,setUserData] = useState([])
  let url = "http://localhost:1337/api/user-details"
    useEffect(()=>{
    fetch(url).then((res)=>{
      if(res.status !== 200){
        alert(`Error occur ${res.status}`)
      }else
      // alert('fetching')
      return res.json()
    }).then((data)=>{
      let newData = data.data.map((cv,index,arr)=>{
         return {

            Id : cv.id,
            firstName : cv.attributes.firstName,
            Role : cv.attributes.Role,
            EmailId : cv.attributes.Emailid
        }
      })
      setUserData(newData)
    }).catch((err)=>{
      console.log(err)
    })
  })
  return (
   <>
        {/* <button className="btn btn-info" onClick={()=>{fetch()}}>Fetch Data</button> */}
          <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">FirstName</th>
          <th scope="col">Role</th>
          <th scope="col">EmailID</th>
        </tr>
      </thead>
        <tbody>
          {
            userData.map((cv,index,arr)=>{
              console.log(cv)
              return <tr key={index}>
                      <td>{cv.Id}</td>
                      <td>{cv.firstName}</td>
                      <td>{cv.Role}</td>
                      <td>{cv.EmailId}</td>
                      <td>
                      <button className="btn btn-primary ">Edit</button>
                      <button className="btn btn-success ">Update</button>
                      <button className="btn btn-danger ">Delete</button>
                      </td>
                    </tr>
            })
          }

          
        </tbody>
      </table>
   </>
  );
}

export default App;

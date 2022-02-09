import React, { useEffect,useState ,Fragment} from 'react';
import axios from 'axios';
import {nanoid} from 'nanoid';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';



const Client = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
  
    const [data, setData] = useState([])
    const[isLoading,setLoading]= useState(true);

    const [addFormData, setAddFormData] = useState(       
      {      
      name:'',
      email:'',
      phone:''
      }
    )


    const [editFormData,setEditformData] = useState(
      {
        name:'',
        email:'',
        phone:''
      }
    )


  const [editContactId,setEditContactId] = useState(null);



  const handleAddFormChange = (event) =>{
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);

};





const handleEditFormChange = (event) =>{
  event.preventDefault();
  const fieldName = event.target.getAttribute('name');
  const fieldValue = event.target.value;
  

  const newFormData = {...editFormData};
  newFormData[fieldName] = fieldValue;

  setEditformData(newFormData);

};




 

const handleAddFormSubmit = (event) => {
  event.preventDefault();
 const newContact= {
     id:nanoid(),
     name:addFormData.name,
     email:addFormData.email,
     phone:addFormData.phone
 }
 const newContacts= [...data,newContact];
 setData(newContacts);
};


const handleEditFormSubmit = (event) => {
  event.preventDefault();
 const editedContact= {
     id:editContactId,
     name:editFormData.name,
     email:editFormData.email,
     phone:editFormData.phone
 }
 const newContacts= [...data];
 const index= data.findIndex((user)=> user.id===editContactId)
 newContacts[index] = editedContact;

 setData(newContacts);
 setEditContactId(null);
};


const handleEditClick = (event,user) =>{
  event.preventDefault();
  setEditContactId(user.id);


  const formValues={
    name:user.name,
    email:user.email,
    phone:user.phone
  }

  setEditformData(formValues);

}

const handleDeleteClick = (contactId) =>{

  const newContacts= [...data];
  const index= data.findIndex((user)=> user.id === contactId);
  newContacts.splice(index,1);
  setData(newContacts);
}

    
    useEffect(() => {
      setTimeout(() =>{
        
      axios.get(url).
      then(json => setData(json.data))
      setLoading(false);   //getting data using axios
      },1000)
    }, [])
  
    const renderTable = () => {
      return data.map(user => {               //collecting required datas
        return (
          <Fragment>

                {editContactId===user.id ? (<EditableRow editFormData={editFormData}
                 handleEditFormChange={handleEditFormChange}/>) : (<ReadOnlyRow  user={user} 
                handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>)}

              
         </Fragment>
        )
      })
    }
  
    return (
        <>
{isLoading && <div><img className='image' src="https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg"></img></div>}


      <div className='container'>
        
        
        <h1 class="tableHeading" id="title">Table of data retrieved</h1>
        <form onSubmit={handleEditFormSubmit}>
        <table  className=" table table-bordered table-hover" id="users"> 
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
              
            </tr>
          </thead>
          <tbody>{renderTable({})}</tbody>
        </table>
        </form>
        
      </div>


      <div className="container addin">         
          <form onSubmit={handleAddFormSubmit}>       
              <input type="text" name="name" required="required" placeholder="enter name" onChange={handleAddFormChange}></input>
              <input type="text" name="email" required="required" placeholder="enter email" onChange={handleAddFormChange}></input>
              <input type="text" name="phone" required="required" placeholder="enter phoneNo" onChange={handleAddFormChange}></input>
              <button type="submit">Add</button>
          </form>
      </div>
      
      </>
    )
  }
export default Client;



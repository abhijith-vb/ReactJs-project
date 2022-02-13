import React from "react";

const EditableRow = ({ editFormData, handleEditFormChange }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Enter Name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="email"
          required="required"
          placeholder="Enter Email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="phone"
          required="required"
          placeholder="Enter Name"
          value={editFormData.phone}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Update</button>
      </td>
    </tr>
  );
};

export default EditableRow;

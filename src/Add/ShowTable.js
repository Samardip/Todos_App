import React from "react";
export const ShowTable = ({ data, deleteRow,updateRow}) => {
  
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Education</th>
            <th scope="col">Gender</th>
            <th scope="col">Description</th>
            <th scope="col">update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">#</th>
            <td>ADD Name</td>
            <td>ADD Education</td>
            <td>ADD Gender</td>
            <td>ADD Description</td>
            <td>
              <button className="btn btn-success">Update</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          {data.map((props) => {
            return (
              <>
                <tr>
                  <th scope="row">{props.sno} </th>
                  <td>{props.name}</td>
                  <td>{props.education}</td>
                  <td>{props.gender}</td>
                  <td>{props.desc}</td>
                  <td>
                    <button className="btn btn-success" onClick={()=>updateRow(props)}>Update</button>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={() =>deleteRow(props)}>Delete</button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

import React, { useState } from "react";
// import { ShowTable } from "./Add/ShowTable";
// import {Tables} from "./Add/Tables";
// import { UpdateTable } from "./Add/UpdateTable";
import { AllFiles } from "./AllFiles";
function App() {
  
// const tables = (name, education, gender, desc) => {
//   // console.log(name,education,gender,desc);

//   let sno = data[data.length - 1].sno + 1;
//   //console.log(sno);
//   const details = {
//     sno: sno,
//     name: name,
//     education: education,
//     gender: gender,
//     desc: desc
//   }
//   setData([...data, details]);
// }

// const [data, setData] = useState([
//   {
//     sno: 1,
//     name: "s",
//     education: "s",
//     gender: "s",
//     desc: "s"
//   },
//   {
//     sno: 2,
//     name: "s1",
//     education: "s1",
//     gender: "s1",
//     desc: "s1"
//   },
// ]);
// const updateRow=(rowdata)=>{
// const [updateR,setUpdateR] = useState(rowData.sno);
// }
// const deleteRow = (list) => {
//   //console.log(list);
//   setData(data.filter((e) => {
//     return (e !== list)
//   }).filter((rows, i) => {
//     return rows.sno = i + 1;
//   }))
// }
return (
  <>
  <AllFiles />
    {/* <Tables tables={tables} />
    <ShowTable data={data} deleteRow={deleteRow} updateRow={updateRow} />
    <UpdateTable data={data} updateRow={updateRow}/> */}
  </>
);
}

export default App;

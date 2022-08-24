// import React, { useState ,useEffect} from "react";
// export const Tables=({ tables})=> {
//   // {(rowData!=undefined)?console.log( rowData):"No"}
//   const [name, setName] = useState("");
//   const [education, setEducation] = useState("");
//   const [gender, setGender] = useState("");
//   const [desc, setDesc] = useState("");
//   // useEffect(()=>{
//     setName(rowTable.name);
//   // },[rowTable.name]);
//   const submit = (e) => {
//     e.preventDefault();
//     tables(name, education, gender, desc);
//     // console.log(name, education, gender, desc);
//   };
//   return (
//     <>
//       <form onSubmit={submit}>
//         <table>
//           <tr>
//             <td>Name</td>
//             <td>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 id="name"
//                 placeholder="Enter Name"
//               />
//             </td>
//           </tr>
//           <tr>
//             <td>Education</td>
//             <td>
//               <input
//                 type="text"
//                 value={education}
//                 onChange={(e) => setEducation(e.target.value)}
//                 id="education"
//                 placeholder="Enter education"
//               />
//             </td>
//           </tr>
//           <tr>
//             <td>Gender</td>
//             <td>
//               <input
//                 type="radio"
//                 value="Male"
//                 onClick={(e) => setGender(e.target.value)}
//                 name="gender"
//                 id="male"
//               />
//               Male
//               <input
//                 type="radio"
//                 value="Female"
//                 onClick={(e) => setGender(e.target.value)}
//                 name="gender"
//                 id="female"
//               />
//               Female
//             </td>
//           </tr>
//           <tr>
//             <td>Description</td>
//             <td>
//               <textarea
//                 id="description"
//                 value={desc}
//                 onChange={(e) => setDesc(e.target.value)}
//                 rows="5"
//                 cols="23"
//               ></textarea>
//             </td>
//           </tr>
//           <td>
//             <input
//               type="submit"
//               className="btn btn-primary mx-2"
//               id="add"
//               value="ADD"
//             />
//           </td>
//         </table>
//       </form>
//     </>
//   );
// };


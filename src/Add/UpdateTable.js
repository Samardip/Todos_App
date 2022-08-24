// import React,{useState} from 'react'

// export const UpdateTable = ({data,rowData}) => {
  
//     const [name, setName] = useState(updateRow.name);
//     const [education, setEducation] = useState(rowData.education);
//     const [gender, setGender] = useState();
//     const [desc, setDesc] = useState(rowData.desc);
//     const submit = (e) => {
//       e.preventDefault();
//       //tables(name, education, gender, desc);
//       // console.log(name, education, gender, desc);
//     };  
//   console.log(data.name);
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
// }







// console.log(selectedRow.name);
//             setName(selectedRow.name);
//             setEducation(selectedRow.education);
//             setGender(selectedRow.gender);
//             setDesc(selectedRow.desc);
//             tables(name,education,gender,desc);
//             console.log(name);
//             // let detail=2;
//             // console.log(detail);
//                 document.getElementById("update_list").addEventListener('click',()=>{
//                    setData(data.map((Elm)=>{
//                         if(Elm.sno===selectedRow.sno){
                            
                            
//                             return Elm;
//                         }
//                         else
//                             return Elm;
//                     })
//                    );
                //    let i=0;
                // data.filter((e)=>{
                //     i++;
                //     if((data.length+1)!==i){
                //     if(e.sno==detail)
                //         return data[data.length+1];
                //     else
                //         return e;
                //     }
                //     else
                //     return null;
                // })
                    
                        
                    

                
                
                    
                    
               // console.log(editItem);
                
            // });
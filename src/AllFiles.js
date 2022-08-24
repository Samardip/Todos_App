import React, { useState } from 'react';

export const AllFiles = () => {
    const [name, setName] = useState("");
        const [education, setEducation] = useState("");
        const [gender, setGender] = useState("");
        const [desc, setDesc] = useState("");
        const[editItem,setEditItem]=useState([]);
    const tables = (name, education, gender, desc) => {
        // console.log(name,education,gender,desc);

        let sno = data[data.length - 1].sno + 1;
        //console.log(sno);
        const details = {
            sno: sno,
            name: name,
            education: education,
            gender: gender,
            desc: desc
        }
        setData([...data, details]);
        setEditItem([details]);
    }

    const [data, setData] = useState([
        {
            sno: 1,
            name: "s",
            education: "s",
            gender: "s",
            desc: "s"
        },
        {
            sno: 2,
            name: "s1",
            education: "s1",
            gender: "s1",
            desc: "s1"
        },
    ]);
    
        
        const submit = (e) => {
            e.preventDefault();
            tables(name, education, gender, desc);
            // console.log(name, education, gender, desc);
        };
        const updateRow=(selectedRow)=>{
            //console.log(selectedRow.name);
            setName(selectedRow.name);
            setEducation(selectedRow.education);
            setGender(selectedRow.gender);
            setDesc(selectedRow.desc);
            const tables1 = (name, education, gender, desc) => {
                // console.log(name,education,gender,desc);
        
                //let sno1 = data[data.length - 1].sno + 1;
                //console.log(sno);
                const detail = {
                    sno: selectedRow.sno,
                    name: name,
                    education: education,
                    gender: gender,
                    desc: desc
                }
                setEditItem(detail);
                console.log(detail);
            }
            
            //console.log(name);
            // let detail=2;
            
                document.getElementById("update_list").addEventListener('click',()=>{
                    tables1(name,education,gender,desc);
                   setData(data.map((Elm)=>{
                        if(Elm.sno===selectedRow.sno){
                            
                            console.log(editItem);
                            return editItem;
                        }
                        else
                            return Elm;
                    }));
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
                
            });
            //console.log(data[data.length-1]);
        }
        const deleteRow = (list) => {
            //console.log(list);
            
            setData(data.filter((e) => {
                return (e !== list)
            }).filter((rows, i) => {
                return rows.sno = i + 1;
            }))
    
        }
        return (
            <>


                <form onSubmit={submit}>
                    <table>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    id="name"
                                    placeholder="Enter Name"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Education</td>
                            <td>
                                <input
                                    type="text"
                                    value={education}
                                    onChange={(e) => setEducation(e.target.value)}
                                    id="education"
                                    placeholder="Enter education"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>
                                <input
                                    type="radio"
                                    value="Male"
                                    onClick={(e) => setGender(e.target.value)}
                                    name="gender"
                                    id="male"
                                />
                                Male
                                <input
                                    type="radio"
                                    value="Female"
                                    onClick={(e) => setGender(e.target.value)}
                                    name="gender"
                                    id="female"
                                />
                                Female
                            </td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>
                                <textarea
                                    id="description"
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                    rows="5"
                                    cols="23"
                                ></textarea>
                            </td>
                        </tr>
                        <td>
                            <input
                                type="submit"
                                className="btn btn-primary mx-2"
                                id="add"
                                value="ADD"
                            />
                            <button className=" btn btn-warning" id="update_list">Update List</button>
                        </td>
                        
                        
                    </table>
                </form>
                




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
                                            <button className="btn btn-success" onClick={() => updateRow(props)}>Update</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => deleteRow(props)}>Delete</button>
                                        </td>
                                    </tr>
                                </>
                            );
                        })}
                    </tbody>
                </table>
            </>
        )
    }

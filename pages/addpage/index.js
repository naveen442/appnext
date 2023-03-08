import { useRouter } from 'next/router';
import React, { useState } from 'react'
import axios from 'axios';
const addpage = () => {
    const [book,setBOOKS]=useState({
        title:"",
        desc:"",
        cover:""
    });
    const router=useRouter();
    const handlechange=(e)=>{
setBOOKS((prev)=>({...prev,[e.target.name]:e.target.value}));
    };
    console.log(book);
    const handleclick=async ()=>{
        console.log(book);
       
        try{
            
            let response = await axios.post("http://localhost:8800/books",book)
            console.log(response);
            router.push("/books")
        }
        catch(err){
            console.log(err);
        }
    }
  return (

    <div className="formadd">

          <h1>Add blogs</h1>    <h1>Add blogs</h1>    <h1>Add blogs</h1>
      <input className='my-3' type="text" placeholder='title'name="title" onChange={handlechange}/>
      <input className='my-3' type="text" placeholder='desc' name="desc" onChange={handlechange}/>
      <input className='my-3' type="text" placeholder='cover' name="cover" onChange={handlechange}/>
      <button className='my-3' onClick={handleclick}>Add</button>
    </div>
  )
}

export default addpage

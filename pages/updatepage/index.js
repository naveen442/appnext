import { useRouter } from 'next/router';
import React, { useState } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Updatepage = () => {
  const [book,setBOOKS]=useState({
    title:"",
    desc:"",
    cover:""
});
const router=useRouter();
// const location=useLocation()
const bookId=location.pathname.split("/")[2]
const handlechange=(e)=>{
setBOOKS((prev)=>({...prev,[e.target.name]:e.target.value}));
};
console.log(book);
const handleclick=async ()=>{
    console.log(book);
   
    try{
        
        let response = await axios.put("http://localhost:8800/books/"+bookId,book)
        console.log(response);
        router.push("/books")
    }
    catch(err){
        console.log(err);
    }
}
  return (
    <div>
     <div className='formupdate'>
          <h1>update blogs</h1>          <h1>update blogs</h1>          <h1>update blogs</h1> 
      <input className='updateinput' type="text" placeholder='title'name="title" onChange={handlechange}/>
      <input className='updateinput' type="text" placeholder='desc' name="desc" onChange={handlechange}/>
      <input className='updateinput' type="text" placeholder='cover' name="cover" onChange={handlechange}/>
      <button className='updateinput' onClick={handleclick}>update</button>
    </div>
    </div>
  )
}

export default Updatepage

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const Books = () => {
  const [books,setBOOKS]=useState([]);

  useEffect(()=>{
    
    fetchallbooks()
  },[])
  const handleclick=async ()=>{
    console.log('book');
   
    try{
        
        let response = await axios.put("http://localhost:8800/books/"+bookId,book)
        console.log(response);
        router.push("/books")
    }
    catch(err){
        console.log(err);
    }
}
  const fetchallbooks=async()=>{
    try{
      const res=await axios.get("http://localhost:8800/getBooks")
      setBOOKS(res.data)
      console.log(res.data);
      console.log(books)
    }
    catch(err){
console.log(err)
    }
  }
  const handleDelete =async (id)=>{
    console.log("delete");
    try{
      const res= await axios.delete("http://localhost:8800/books/" +id)
      // setBOOKS(res.data)
      console.log(res.data);
      console.log(books)
     fetchallbooks();
    }
    catch(err){
console.log(err)
    }
 }
  return (
    
  
    <div className='row my-5'>
    {books.map((book) =>(
         <div className="col-sm-4 col-md-4 col-xl-4 col-xxl-3"  key={book.id}>
        {book.cover && <img className='book_img' src={book.cover} alt=""/>}
        <h2>{book.title}</h2>
        <p>{book.desc}</p>
        <p>{book.cover}</p>
        <button className='update' onClick={handleclick}><Link href={`/updatepage/${book.id}` }></Link>update</button>
        <button className='delete' onClick={()=>handleDelete(book.id)}>delete</button>
        </div>
    ))}
      
        <button><Link href="/addpage">Add new post</Link></button>
        </div>

  )
}

export default Books

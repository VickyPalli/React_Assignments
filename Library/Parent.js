import React from "react";
import "./style.css"
import { useState } from "react";
import Child from "./child";

function Parent () {
    const Books = [{
        Name : "The Harry Potter series",
        Title : "Fiction",
        Author : "J.K. Rowling."
    },
    {
        Name : "The Book Whisperer",
        Title : "Educational",
        Author : "Donalyn Miller" 
    },
    {
        Name : "The Book Whisperer",
        Title : "Educational",
        Author : "Donalyn Miller" 
    },
    {
        Name : "The First Days of School",
        Title : "Educational",
        Author : "Harry K. Wong" 
    },
    {
        Name : "Lord of the Rings Trilogy.",
        Title : "Fiction",
        Author : "J.R.R. Tolkien." 
    },
    {
        Name : "The Book Whisperer",
        Title : "Educational",
        Author : "Donalyn Miller" 
    },
    {
         Name : "Count of Monte Cristo.",
        Title : "Fiction",
        Author : "Alexandre Dumas. " 
    },
    {
        Name : "The Book Whisperer",
        Title : "Educational",
        Author : "Donalyn Miller" 
    },
    {
        Name : "The Book Whisperer",
        Title : "Educational",
        Author : "Donalyn Miller" 
    },
    {
        Name : "The Book Whisperer",
        Title : "Educational",
        Author : "Donalyn Miller" 
    },
    {
        Name : "The Book Whisperer",
        Title : "Educational",
        Author : "Donalyn Miller" 
    },
    {
        Name : "Pedagogy of the Oppressed",
        Title : "Educational",
        Author : "Paulo Freire" 
    },
    {
        Name : "Savage Inequalities",
        Title : "Educational",
        Author : "Jonathan Kozol" 
    },
    {
        Name : "A Game of Thrones.",
       Title : "Fiction",
       Author : "George R.R. Martin. " 
   },
   {
    Name : "The Book Whisperer",
    Title : "Educational",
    Author : "Donalyn Miller" 
},
   {
    Name : "To Kill a Mockingbird.",
   Title : "Fiction",
   Author : "Harper Lee." 
},
{
Name : "The Book Whisperer",
Title : "Educational",
Author : "Donalyn Miller" 
},
{
Name : "The Book Whisperer",
Title : "Educational",
Author : "Donalyn Miller" 
},
{
Name : "The Book Whisperer",
Title : "Educational",
Author : "Donalyn Miller" 
},
{
Name : "The Book Whisperer",
Title : "Educational",
Author : "Donalyn Miller" 
},
{
Name : "The First Six Weeks of School",
Title : "Educational",
Author : "Paula Denton" 
},
{
Name : "Count of Monte Cristo.",
Title : "Fiction",
Author : "Alexandre Dumas. " 
},
{
Name : "Count of Monte Cristo.",
Title : "Fiction",
Author : "Alexandre Dumas. " 
},
{
Name : "Count of Monte Cristo.",
Title : "Fiction",
Author : "Alexandre Dumas. " 
},
{
Name : "Count of Monte Cristo.",
Title : "Fiction",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Fiction",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Fiction",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Fiction",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Fiction",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Novel",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Novel",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Novel",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Novel",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Novel",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Novel",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Novel",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Novel",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Novel",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Novel",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Novel",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Novel",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Novel",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Technology",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Technology",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Technology",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Technology",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Technology",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Technology",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Technology",
Author : "Alexandre Dumas." 
},

{
Name : "Count of Monte Cristo.",
Title : "Technology",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Technology",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Technology",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Technology",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Technology",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Technology",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Technology",
Author : "Alexandre Dumas." 
},
{
Name : "Count of Monte Cristo.",
Title : "Technology",
Author : "Alexandre Dumas." 
}
];
    const [ value , setvalue] = useState(Books);
    
    const FicHandler = () => {
        let fic = [];
        for(let i=0;i<Books.length;i++){
            if(Books[i].Title ==='Fiction'){
                fic.push(Books[i]);
            }
        }
       setvalue(fic);
    }

    const EduHandler = () => {
       let fic = [];
       for(let i=0;i<Books.length;i++){
           if(Books[i].Title ==="Educational"){
               fic.push(Books[i]);
           }
       }
      setvalue(fic);
    }
    const NovHandler = () => {         
       let fic = [];
       for(let i=0;i<Books.length;i++){
           if(Books[i].Title ==="Novel"){
               fic.push(Books[i]);
           }
       }
      setvalue(fic);         
    }   
    const TechHandler = () => {
       let fic = [];
       for(let i=0;i<Books.length;i++){
           if(Books[i].Title ==="Technology"){
               fic.push(Books[i]);
           }
       }
      setvalue(fic);
    }     

    return (
        <div className='block'>
           <div className="Button">
            <button onClick={FicHandler}>Fictional</button>
            <button onClick={EduHandler}>Educational</button>
            <button onClick={NovHandler}>Novel</button>
            <button onClick={TechHandler}>Technology</button>
            </div>
            <div className='container'>
                {value.map((index)=>{
                    return(
                        <Child Itemdata={index}></Child> 
                    )
                })}
                
            </div>
        </div>
    )
}

export default Parent;
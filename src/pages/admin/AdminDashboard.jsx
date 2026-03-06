import { supabase } from "../lib/supabase";
import { useState } from "react";

export default function AdminDashboard(){

const [title,setTitle]=useState("");
const [content,setContent]=useState("");
const [category,setCategory]=useState("");
const [image,setImage]=useState(null);

const addBlog = async () => {

let imageUrl="";

if(image){
const fileName = Date.now()+image.name;

const {data,error} = await supabase.storage
.from("blog-images")
.upload(fileName,image);

imageUrl = supabase.storage
.from("blog-images")
.getPublicUrl(fileName).data.publicUrl;
}

await supabase.from("blogs").insert([
{
title,
content,
category,
image:imageUrl
}
]);

alert("Blog Added");

};

return(
<div>

<h2>Add Blog</h2>

<input placeholder="Title"
onChange={(e)=>setTitle(e.target.value)}
/>

<input placeholder="Category"
onChange={(e)=>setCategory(e.target.value)}
/>

<input type="file"
onChange={(e)=>setImage(e.target.files[0])}
/>

<textarea placeholder="Content"
onChange={(e)=>setContent(e.target.value)}
/>

<button onClick={addBlog}>Publish Blog</button>

</div>
)

}
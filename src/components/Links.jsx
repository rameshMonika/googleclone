import React from "react";
import { NavLink } from "react-router-dom";


const links =[
    {url:'/search',text:'All'},
    {url:'/news',text:'News'},
    {url:'/images',text:'Image'},
    {url:'/videos',text:'Videos'},
]

export const Links = () =>{
    return(
        <div className="flex sm:justify-around justify-between items-center mt-4">
            {links.map(({url,text},index)=>(
                <NavLink key={index}to={url} >

                    {text}


                </NavLink>
            ))}
         

        </div>
    )
}
import React from "react";
import Link from "next/link";

export default function(){
    return (
        <>
            <h1> This is Posts Page</h1>
            <h2> Click {' '} 
                <Link href='/' >
                    <a> Here</a>
                </Link>
                {' '} to go back to Home Page
            </h2>
        </>
    )
}
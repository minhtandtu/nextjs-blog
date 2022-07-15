import React from "react";
import Link from "next/link";
export default function(){
    return(
        <>
            <h1>
                This is our Gallery
            </h1>
            <h2>
                Click {' '}
                    <Link href='/'>
                        <a> HERE</a>
                    </Link>
                {' '}To Go Back to Home Page
            </h2>
        </>
    )
}
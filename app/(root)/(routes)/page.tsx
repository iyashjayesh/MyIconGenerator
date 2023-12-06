import React from 'react'
import { UserButton } from "@clerk/nextjs";

const RootPage = () => {
    return (
        <div>
            <h1> Hello AI Icon Generator</h1>
            <UserButton afterSignOutUrl="/" />
        </div>
    )
}

export default RootPage
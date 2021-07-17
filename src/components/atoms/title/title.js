import React from 'react'

export default function Title({title}) {
    console.log("Title",title)
    return (
        <p className={"title"}>{title? title:''}</p>
    )
}

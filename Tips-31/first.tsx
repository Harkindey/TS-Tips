
import React, { ComponentProps } from "react";

// sample
type Example = ComponentProps<"input">
type Example2 = Omit<ComponentProps<"input">, 'onChange'>
const example: Example = {
    onChange: ()=>{}
}
const example1: Example2 = {
    onChange: ()=>{}
}

// the sample above is the diretion we taking


export const Input = (props: Omit<ComponentProps<"input">, 'onChange'> & {onChange: (value:string) => void}) => {
    return (
        <input 
            {...props} 
            onChange={(e)=>{
                props.onChange(e.target.value)
            }}
        ></input>
    )
}


export const Parent = ()=> {
    return (
        <Input
            onChange={(e)=>{ 
                // Previously  e: string | React.ChangeEvent<HTMLInputElement>
                // now e: string
                console.log(e)
            }}
        ></Input>
    )
}
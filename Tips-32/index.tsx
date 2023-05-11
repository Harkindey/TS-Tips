import React, { ComponentProps, FC } from "react";

//Imagine Navbar is an external library

export const NavBar = (props: {
    title: string;
    links: string[];
    children: React.ReactNode
})=>{
    return <div>Some Content</div>
}

// Our APP

// type NavBarProps = ComponentProps<typeof NavBar>
type PropsFromFC<T> = T extends FC<infer Props> ? Props :never;

type NavBarProps =PropsFromFC<typeof NavBar>
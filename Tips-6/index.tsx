import React from "react";

const MyComponent = (props: {enabled:boolean}) => {
    return null
}

class MyOtherComponent extends React.Component<{
    enabled: boolean
}>{
}

type PropsFrom<TComponent> = TComponent extends React.FC<infer Props> 
    ? Props 
    : TComponent extends React.Component<infer Props> ? Props : never;

const props: PropsFrom<typeof MyComponent> = {
    enabled: true
}
const otherProps: PropsFrom<MyOtherComponent> = {
    enabled: true,
}

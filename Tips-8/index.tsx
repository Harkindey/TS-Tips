import React, { FC } from "react";

interface TableProps<TItem> {
    items: TItem[];
    renderItem: (item:TItem) => React.ReactNode;
}

export const Table = <TItem,>(props: TableProps<TItem>) => {
    return null
}

type Contacts = {
    id: number;
    name: string;
    phone: string;
    address: string;
}

const Component = () => {
    return (
        <Table<Contacts>
            items={[{
                id: 1,
                name: 'bean',
                phone: "",
                address: ""
            }]}
            renderItem={(item)=> <div>{item.id}</div>}
        ></Table>
    )
}
interface Animal {
    name: string;
}

interface Human {
    firstName: string;
    lastName: string;
}

export const getDisplayName = <TItem extends Animal | Human>(
    item: TItem
) :TItem extends Human ? Human: Animal  => {

    if("name" in item) {
        return {
                displayName: item.name,
        }
    }
    return {
        firstName: item.firstName,
        lastName: item.lastName
    }
    
}

const result = getDisplayName({
    name: "Patch",
})

const result2 = getDisplayName({
    firstName: "Matt",
    lastName: "Bean",
})
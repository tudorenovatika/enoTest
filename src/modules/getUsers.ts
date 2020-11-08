import {utilites} from "./utilities"

import {User} from "./User"

interface Props {
    id: number
    name: string
    clicked: number
}

export function getUserList()
{
    
    let userArray: User[] = [];
    for (let index = 0; index < 300; index++) {
        let props:Props = {
            id: index,
            name: "User "+index.toString(),
            clicked: 0
        }
        let newUser  = new User(props.id,props.name,props.clicked)    
        userArray.push(newUser);
    }    
    return userArray;
}

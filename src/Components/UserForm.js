import React from 'react'
import { useHistory } from 'react-router-dom';
import UserIdentification from './UserIdentification'

export default function UserForm() {
    const history = useHistory();
	const handleClick = () => {
		history.push("/covid-form/2");
	}
    return (
        <div>
            <UserIdentification handleClick={handleClick}/>
        </div>
    )
}

import React from 'react'
import { useHistory } from 'react-router-dom'

export default function StarterPage() {
    const history = useHistory();
    const handleClick = () => { history.push("/user-identification/1") }
    return (
			<div className="start-page">
				<div className="startpg-logo-box">
					<div className="logo-img"></div>
				</div>
				<button className="start-btn" onClick={handleClick}>
					<span className="start-btn-text">
						კითხვარის <br /> დაწყება
					</span>
				</button>
			</div>
		)
}


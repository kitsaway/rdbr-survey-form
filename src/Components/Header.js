import React from 'react'
import { useParams } from 'react-router'

export default function Header() {
    const { page } = useParams();
    return (
			<header className="form-header">
				<div className="header-logo"></div>
				<hr className="header-line"></hr>
				<span className="page-num-displayer">
					{page}/4
				</span>
			</header>
		)
}


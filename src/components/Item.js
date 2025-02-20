import React from 'react'
import styled from 'styled-components'
import { Icon } from '@react95/core'

const StyledItem = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	text-align: center;
	width: 25%;
	padding: 10px 0;
`;

const StyledSpan = styled.span`
	margin-top: 5px;
`;

function File({ item, openNotepad }) {
	const { name, icon, externalLink } = item;

	// Handle click: Redirect the current tab if externalLink exists, otherwise open Notepad
	const handleClick = () => {
		if (externalLink) {
			window.location.href = externalLink; // Redirects in the same tab
		} else {
			openNotepad(item);
		}
	};

	return (
		<StyledItem>
			<Icon
				name={icon}
				className="pointer"
				onClick={handleClick} // Use new click handler
			/>
			<StyledSpan>{name}</StyledSpan>
		</StyledItem>
	);
}

export default File;

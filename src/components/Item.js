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

// Allows independent margin adjustments for icons
const StyledIconWrapper = styled.div`
	margin-top: ${({ iconMarginTop }) => iconMarginTop || '0px'};
`;

// Allows independent margin adjustments for text
const StyledSpan = styled.span`
	margin-top: ${({ textMarginTop }) => textMarginTop || '5px'};
`;

function File({ item, openNotepad }) {
	const { name, icon, externalLink, id } = item;

	// Handle click: Redirect if external link exists, otherwise open Notepad
	const handleClick = () => {
		if (externalLink) {
			window.location.href = externalLink; // Redirects in the same tab
		} else {
			openNotepad(item);
		}
	};

	// Define custom images with individual sizes and vertical adjustments
	const customIcons = {
		about: { src: "/globe.gif", width: 68, height: 68, iconMarginTop: '-5px', textMarginTop: '-10px' },
		portfolio: { src: "/portfolio.png", width: 95, height: 75, iconMarginTop: '-9px', textMarginTop: '-13px' },
		projects: { src: "/project.png", width: 95, height: 85, iconMarginTop: '-11px', textMarginTop: '-21px' },
		contact: { src: "/mail.png", width: 95, height: 85, iconMarginTop: '-20px', textMarginTop: '-20px' },
		discord: { src: "/discord.png", width: 41, height: 32, iconMarginTop: '12px', textMarginTop: '8px' }, // Default spacing
	};

	const customIcon = customIcons[id];

	return (
		<StyledItem>
			{/* Use a custom image if it exists, otherwise use React95 icon */}
			<StyledIconWrapper iconMarginTop={customIcon ? customIcon.iconMarginTop : '0px'}>
				{customIcon ? (
					<img
						src={customIcon.src}
						alt={name}
						width={customIcon.width}
						height={customIcon.height}
						className="pointer"
						onClick={handleClick}
					/>
				) : (
					<Icon
						name={icon}
						className="pointer"
						onClick={handleClick} // Use new click handler
					/>
				)}
			</StyledIconWrapper>
			<StyledSpan textMarginTop={customIcon ? customIcon.textMarginTop : '5px'}>{name}</StyledSpan>
		</StyledItem>
	);
}

export default File;

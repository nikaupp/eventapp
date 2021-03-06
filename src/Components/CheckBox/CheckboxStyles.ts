import styled from '../../Theme/theme';
import { lighten } from 'polished';

// ************************************
// Normal Checkbox
// ************************************

export const CheckBoxWrapper = styled.div`
	/* font-family: arial, Segoe UI Symbol; */
	font-family: ${(p) => p.theme.body_font};
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const CheckBoxInput = styled.input`
	position: absolute;
	left: -999rem;

	&:focus + label {
		box-shadow: 0 0 0 2px ${(p) => p.theme.primary_color};
	}

	&:disabled + label {
		color: ${lighten(0.4, 'black')};
		cursor: default;

		&::before {
			border-color: ${lighten(0.8, 'black')};
			background-color: ${lighten(0.8, 'black')};
			border: 0.1rem solid ${lighten(0.8, 'black')};
		}

		&::after {
			color: ${lighten(0.4, 'black')};
		}
	}

	&:not(:checked) + label::after {
		opacity: 0;
	}

	&:checked + label::after {
		opacity: 1;
	}
`;

export const CheckboxLabel = styled.label`
	font-family: ${(p) => p.theme.body_font};
	font-size: ${(p) => p.theme.global_font_size};
	text-align: left;
	font-weight: 400;
	position: relative;
	cursor: pointer;
	height: auto;
	display: flex;
	align-items: center;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	padding: 0.32rem 1rem 0.32rem 2.9rem;
	min-height: 1.6rem;
	transition: background-color 0.15s ease-in-out;
	border-radius: 1rem;
	margin: 0;
	/* width: 100%; */

	&:hover {
		background-color: ${(p) => lighten(0.5, p.theme.primary_color)};
	}

	/* bg */
	&::before {
		content: '';
		width: 1.5rem;
		height: 1.5rem;
		position: absolute;
		left: 0.5rem;
		border-radius: ${(p) => p.theme.global_border_radius};
		background-color: #fff;
		transition: opacity 0.2s;
		border: 0.1rem solid ${(p) => p.theme.border_color};
	}

	/* checkmark */
	&::after {
		content: '✔';
		width: 1.5rem;
		height: 1.5rem;
		position: absolute;
		left: 0.8rem;
		font-size: 1.5rem;
		line-height: 1;
		transition: opacity 0.2s;
		color: ${(p) => p.theme.primary_color};
	}
`;

// ************************************
// Inlined Checkbox
// ************************************

export const CheckBoxInputInlined = styled.input`
	position: absolute;
	left: -999rem;

	&:focus + label {
		box-shadow: 0 0 0 2px ${(p) => p.theme.primary_color};
	}

	&:disabled + label {
		color: ${lighten(0.4, 'black')};
		cursor: default;

		&::before {
			border-color: ${lighten(0.8, 'black')};
			background-color: ${lighten(0.8, 'black')};
			border: 0.1rem solid ${lighten(0.8, 'black')};
		}

		&::after {
			color: lighten($black, 40%);
		}
	}

	&:not(:checked) + label::after {
		opacity: 0;
	}

	&:checked + label::after {
		opacity: 1;
	}
`;

export const CheckboxLabelInlined = styled.label`
	font-family: ${(p) => p.theme.body_font};
	border-radius: ${(p) => p.theme.global_border_radius};
	font-size: ${(p) => p.theme.global_font_size};
	text-align: left;
	font-weight: 400;
	position: relative;
	cursor: pointer;
	display: flex;
	width: 1.5rem;
	height: 1.5rem;
	align-items: center;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	padding: 0;
	margin: 0;
	transition: background-color 0.15s ease-in-out;

	&:hover {
		box-shadow: 0 0 0 2px ${(p) => p.theme.link_color};
	}

	/* bg */
	&::before {
		content: '';
		width: 1.5rem;
		height: 1.5rem;
		position: absolute;
		left: 0rem;
		border-radius: ${(p) => p.theme.global_border_radius};
		background-color: #fff;
		transition: opacity 0.2s;
		border: 0.1rem solid ${(p) => p.theme.border_color};
	}

	/* checkmark */
	&::after {
		content: '✔';
		width: 1.5rem;
		height: 1.5rem;
		position: absolute;
		left: 0.2rem;
		font-size: 1.5rem;
		line-height: 1;
		transition: opacity 0.2s;
		color: ${(p) => p.theme.primary_color};
	}
`;

//******************************************************** */
// Small inlined variant (tables)
//******************************************************** */

export const CheckBoxWrapperInlined = styled.div`
	font-family: ${(p) => p.theme.body_font};
	display: inline-flex;
	margin: 0;

	.checkbox--small--input {
		position: absolute;
		left: -999rem;

		&:focus + label {
			box-shadow: ${(p) => p.theme.shadow.focus};
		}

		&:hover + label {
			border-color: ${(p) => p.theme.primary_color};
		}

		&:disabled + label {
			opacity: 0.5;
			cursor: default;
		}

		&:not(:checked) + label::after {
			opacity: 0;
		}

		&:checked + label::after {
			opacity: 1;
		}
		&:checked + label::before {
			background-color: ${(p) => p.theme.primary_color};
			border-color: ${(p) => p.theme.primary_color};
		}
	}

	.checkbox--small--label {
		text-align: left;
		font-weight: 400;
		font-size: 0.95rem;
		position: relative;
		cursor: pointer;
		display: flex;
		width: 1.2rem;
		height: 1.2rem;
		align-items: center;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		padding: 0;
		transition: background-color 0.15s ease-in-out;
		border-radius: ${(p) => p.theme.global_border_radius};
		margin: 0;

		/* bg */
		&::before {
			content: '';
			width: 1.2rem;
			height: 1.2rem;
			position: absolute;
			left: 0rem;
			/* border-radius: ${(p) => p.theme.global_border_radius}; */
			transition: opacity 0.2s;
			background-color: ${(p) => p.theme.body_background_color};
			border: 1px solid ${(p) => p.theme.border_color};
		}

		/* checkmark */
		&::after {
			content: '✔';
			width: 1.2rem;
			height: 1.2rem;
			position: absolute;
			left: 0.15rem;
			font-size: 1.2rem;
			line-height: 1;
			transition: opacity 0.2s;
			color: #fff;
		}
	}
`;

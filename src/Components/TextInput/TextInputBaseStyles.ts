import styled, { css } from '../../Theme/theme';
import { mix } from 'polished';

export interface IInputStyleProps {
	hasError?: boolean;
}

export const ThemedTextInputBase = styled.input`
	flex: 1 1 auto;
	width: 100%;
	max-width: 100%;
	padding: 4px 8px;
	border-radius: ${(p) => p.theme.global_border_radius};
	transition: border-color 0.2s ease-in-out;
	border: 1px solid #ccc;
	border: ${(p) => p.theme.input_border};
	font-family: ${(p) => p.theme.body_font};
	font-size: ${(p) => p.theme.global_font_size};
	color: ${(p) => p.theme.text_color};
	background: ${(p) => p.theme.input_background};

	&:hover {
		border-color: ${(p) => p.theme.primary_color};
	}

	&:disabled {
		filter: grayscale(90%);
		cursor: not-allowed;
		pointer-events: none;
		opacity: 0.7;
	}

	&:focus {
		box-shadow: 0 0 0 2px ${(p) => p.theme.primary_color};
	}

	&[type='number'] {
		-moz-appearance: textfield;

		&::-webkit-inner-spin-button,
		&::-webkit-outer-spin-button {
			background-color: black !important;
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			margin: 0;
		}
	}

	${(p: IInputStyleProps) => p.hasError && errorCSS}
`;

const errorCSS = css`
	background-color: ${(p) => mix(0.075, p.theme.input_background, p.theme.error_color)};
	border-color: ${(p) => p.theme.error_color} !important;

	&:focus {
		box-shadow: 0 0 0 3px ${(p) => p.theme.error_color};
	}
`;

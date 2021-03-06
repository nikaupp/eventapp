import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

const {
	default: styled,
	css,
	createGlobalStyle,
	keyframes,
	ThemeProvider,
	ThemeContext
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>;

const DefaultTheme = {
	// Main colors
	primary_color: '#9538bf',
	secondary_color: '#aaebff',

	body_background_color: '#f4f3ef',
	menu_background_color: '#1b1f2d',
	card_background_color: '#fff',

	focus_color: '#81e979',
	link_color: '#322877',
	border_color: '#dadada',

	input_border: '1px solid #dadada',
	input_background: '#f9f9f9',
	login_background: 'radial-gradient(circle,rgb(225, 232, 140) 0%,rgb(98, 140, 37) 100%)',

	// Validation/Notification colors
	error_color: '#ac4d4d',
	warning_color: '#ce9224',
	success_color: '#50b04b',
	info_color: '#4a70ac',

	// Neutral colors
	text_color: '#222222',
	text_color_nav: '#dadada',

	// Main fonts
	body_font: "'Montserrat', sans-serif",
	body_font_alternative: 'Arial, Segoe UI, Verdana, Helvetica, sans-serif',
	heading_font: "'Montserrat', sans-serif",

	// Globals
	global_border_radius: '4px',
	global_shadow: '0px 0px 4px rgba(0, 0, 0, 0.15)',
	global_shadow_inset: '0px 0px 4px inset rgba(0, 0, 0, 0.19)',
	global_font_size: '.9rem',

	//misc
	navbar_width: '15rem',

	is_dark_theme: false,

	// fonts: {
	// 	heading: '',
	// 	body: '',
	// 	mono: ''
	// },

	shadow: {
		card: '0 6px 10px -4px rgba(0, 0, 0, 0.22)',
		lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
		xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
		inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
		focus: '0 0 0 3px #9538bf'
	}

	// color: {
	//    primary: '#9538bf',
	//    accent: '#88bf38',
	//    support_1: '#88bf38',
	//    support_2: '#88bf38',
	//    support_3: '#88bf38',
	//    support_4: '#88bf38',
	// },
};

const DarkTheme: typeof DefaultTheme = {
	// Main colors
	primary_color: '#e9799e', // #9538bf
	secondary_color: '#6e0d25',

	body_background_color: '#333',
	menu_background_color: '#201e20',
	card_background_color: '#1a2026',

	focus_color: 'skyblue',
	link_color: '#aaebff',
	border_color: '#4d4d4d',

	input_border: 'none',
	input_background: '#0000002e',
	login_background: 'radial-gradient(circle,rgb(132, 185, 92) 0%,rgb(32, 57, 33) 100%)',

	// Validation/Notification colors
	error_color: '#ac4d4d',
	warning_color: '#ce9224',
	success_color: '#50b04b',
	info_color: '#4a70ac',

	// Neutral colors
	text_color: '#dadada',
	text_color_nav: '#dadada',

	// Main fonts
	body_font: "'Montserrat', sans-serif",
	body_font_alternative: 'Arial, Segoe UI, Verdana, Helvetica, sans-serif',
	heading_font: "'Montserrat', sans-serif",

	// Globals
	global_border_radius: '4px',
	global_shadow: '0px 0px 4px rgba(0, 0, 0, 0.15)',
	global_shadow_inset: '0px 0px 4px inset rgba(0, 0, 0, 0.19)',
	global_font_size: '.9rem',

	// misc
	navbar_width: '15rem',

	is_dark_theme: true,

	shadow: {
		card: '0 6px 10px -4px rgba(0, 0, 0, 0.55)',
		inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
		lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
		xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
		focus: '0 0 0 3px #e9799e'
	}
};

const ThemeAlt = {
	...DefaultTheme,
	primary_color: '#88bf38',
	shadow: { ...DefaultTheme.shadow, focus: '0 0 0 3px #88bf38' }
};
const DarkThemeAlt = {
	...DarkTheme,
	primary_color: '#88bf38',
	shadow: { ...DarkTheme.shadow, focus: '0 0 0 3px #88bf38' }
};

// const themes = {
// 	default: DefaultTheme,
// 	dark: DarkTheme
// };
const themes = {
	default: ThemeAlt,
	dark: DarkThemeAlt
};

export type IThemeInterface = typeof DefaultTheme;

const size = {
	xs: '576px',
	sm: '768px',
	md: '994px',
	lg: '1140px',
	xl: '1600px',
	xxl: '1900px',
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px'
};

const device = {
	below: {
		xs: `(max-width: ${size.xs})`,
		sm: `(max-width: ${size.sm})`,
		md: `(max-width: ${size.md})`,
		lg: `(max-width: ${size.lg})`,
		xl: `(max-width: ${size.xl})`,
		xxl: `(max-width: ${size.xxl})`
	},
	above: {
		xs: `(min-width: ${size.xs})`,
		sm: `(min-width: ${size.sm})`,
		md: `(min-width: ${size.md})`,
		lg: `(min-width: ${size.lg})`,
		xl: `(min-width: ${size.xl})`,
		xxl: `(min-width: ${size.xxl})`
	}
};

export { css, createGlobalStyle, keyframes, ThemeProvider, themes, device, ThemeContext };
export default styled;

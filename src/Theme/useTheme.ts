import { useContext } from 'react';
import { ThemeContext } from './theme';

export const useTheme = () => {
	const theme = useContext(ThemeContext);
	return theme;
};

import { createTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { getChangedTheme } from 'redux/theme/theme-selector';

export const useAppTheme = () => {
  const modeLight = useSelector(getChangedTheme);
  return createTheme({
    modeTheme: useSelector(getChangedTheme),

    palette: {
      mode: modeLight ? 'light' : 'dark',
    },
  });
};

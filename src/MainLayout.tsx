import {  DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { SignIn } from './Pages/SignIn';


const theme = {
    ...DefaultTheme,
    //   roundness: 1,
    // version: 3,
    //  colors: {
    //       ...DefaultTheme.colors,
    //      primary: '#3498db',
    //      secondary: '#f1c40f',
    //      tertiary: '#a1b2c3'
    //  },
};

export function MainLayout() {
    return (
        <PaperProvider theme={theme}>
            <SignIn />
        </PaperProvider>
    );
}


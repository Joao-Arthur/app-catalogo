import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { MainLayout } from './src/MainLayout';

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

export default function App() {
    return ( 
        <PaperProvider theme={theme}>
            <NavigationContainer>
                <MainLayout />
            </NavigationContainer>
        </PaperProvider>
    );
}

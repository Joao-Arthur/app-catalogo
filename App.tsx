import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { MainLayout } from './src/MainLayout';
import { setupDatabase } from './src/core/database/database';
import { createItemTable } from './src/core/database/itemTable';

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

setupDatabase();
createItemTable();

export default function App() {
    return (
        <PaperProvider theme={theme}>
            <NavigationContainer>
                <MainLayout />
            </NavigationContainer>
        </PaperProvider>
    );
}

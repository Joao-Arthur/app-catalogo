import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { SignIn } from './Pages/SignIn';
import { Catalog } from './Pages/Catalog';
import { SignUp } from './Pages/SignUp';
import { ItemRegister } from './Pages/ItemRegister';
import { Cart } from './Pages/Cart';


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

// eslint-disable-next-line @typescript-eslint/naming-convention
const Stack = createNativeStackNavigator();

export function MainLayout() {
    return (
        <PaperProvider theme={theme}>
            <Stack.Navigator initialRouteName="SignIn">
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Catalog" component={Catalog} />
                <Stack.Screen name="ItemRegister" component={ItemRegister} />
                <Stack.Screen name="Cart" component={Cart} />                
            </Stack.Navigator>
        </PaperProvider>
    );
}

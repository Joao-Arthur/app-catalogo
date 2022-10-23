import { SignIn } from './Pages/SignIn';
import { Catalog } from './Pages/Catalog';
import { SignUp } from './Pages/SignUp';
import { ItemRegister } from './Pages/ItemRegister';
import { Cart } from './Pages/Cart';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// eslint-disable-next-line @typescript-eslint/naming-convention
const { Navigator, Screen } = createNativeStackNavigator();

export function MainLayout() {
    return (
        <Navigator initialRouteName="SignIn">
            <Screen options={{ headerShown: false }} name="SignIn" component={SignIn} />
            <Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
            <Screen options={{ title: 'Catálogo' }} name="Catalog" component={Catalog} />
            <Screen options={{ title: 'Adicionar produto' }} name="ItemRegister" component={ItemRegister} />
            <Screen options={{ title: 'Carrinho' }} name="Cart" component={Cart} />
        </Navigator>
    );
}

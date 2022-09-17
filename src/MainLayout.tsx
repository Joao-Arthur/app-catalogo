import { Provider as PaperProvider } from 'react-native-paper';
import { Catalog } from './Pages/Catalog/Catalog';

export function MainLayout() {
    return (
        <PaperProvider>
            <Catalog/>
        </PaperProvider>
    );
}


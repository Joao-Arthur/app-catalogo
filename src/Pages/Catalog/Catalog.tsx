import { StyleSheet, View } from 'react-native';
import { CatalogItems } from './CatalogItems';
import { Footer } from './Footer';
import { Header } from './Header';

export function Catalog() {
    return (
        <>
            <Header/>
            <View style={styles.container}>
                <CatalogItems />
                <Footer />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'scroll'
    }
});
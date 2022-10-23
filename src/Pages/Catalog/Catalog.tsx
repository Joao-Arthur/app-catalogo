import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { getItems } from '../../core/database/itemTable';
import { useCatalogStore } from '../../integrations/catalogStore';
import { CatalogItems } from './CatalogItems';
import { Footer } from './Footer';

export function Catalog() {
    const setItems = useCatalogStore(state => state.setItems);

    useEffect(() => {
        async function loadItems() {
            const items = await getItems();
            if (items.length)
                setItems(items);
        }
        loadItems();
    }, []);

    return (
        <View style={styles.container}>
            <CatalogItems />
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'scroll',
    },
});

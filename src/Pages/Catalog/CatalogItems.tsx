import { ScrollView, StyleSheet } from 'react-native';
import { useCatalogStore } from '../../integrations/catalogStore';
import { CatalogItem } from './CatalogItem';

export function CatalogItems() {
    const items = useCatalogStore(state => state.items);

    return (
        <ScrollView style={styles.container}>
            {items.map(item => (
                <CatalogItem key={item.id} item={item} />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
    },
});

import { ScrollView, StyleSheet, View } from 'react-native';
import { CatalogItem } from './CatalogItem';

const items = [
    {
        id: 'ghuierghui',
        name: 'Ar embalado',
        description: 'Ar embalado da empresa lorem ipsum',
        price: 29.38,
        stock: 20,
    },
    {
        id: 'resurdrtf',
        name: 'Cadeira full hd',
        description: 'Cadeira de escritório muito top',
        price: 999.99,
        stock: 5,
    },
    {
        id: 'durtdtrd',
        name: 'indiano',
        description: 'indiano trabalhador',
        price: 0.01,
        stock: 1450000000,
    },
];

export function CatalogItems() {
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

import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card, Paragraph } from 'react-native-paper';
import { formatCurrency } from '../../core/currency/formatCurrency';
import { useCatalogStore } from '../../integrations/catalogStore';

export function Cart() {
    const items = useCatalogStore(state => state.items);
    const cart = useCatalogStore(state => state.cart);

    function getItemById(id: typeof items[number]['id']) {
        return items.find(item => item.id === id)!;
    }

    function handleFinish() {
        // TODO
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.cartList}>
                {cart.map(cartItem => (
                    <View style={styles.listItem} key={cartItem.id}>
                        <Card>
                            <Card.Title
                                title={getItemById(cartItem.id).name}
                                subtitle={getItemById(cartItem.id).description}
                                titleVariant='bodyLarge'
                            />
                            <Card.Content>
                                <Paragraph>Preço: {formatCurrency(getItemById(cartItem.id).price || 0)}</Paragraph>
                                <Paragraph>Quantidade: {cartItem.amount}</Paragraph>
                                <Paragraph>Total: {formatCurrency(cartItem.amount * (getItemById(cartItem.id).price || 0))}</Paragraph>
                            </Card.Content>
                        </Card>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.footer}>
                <Button
                    icon="shopping"
                    mode="contained"
                    onPress={handleFinish}
                    labelStyle={{ fontSize: 20 }}
                    contentStyle={{ height: 70 }}
                    style={{ marginBottom: 5 }}
                >
                    Finalizar compra
                </Button>
            </View>
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
    cartList: {
        flex: 1,
        width: '90%',
    },
    listItem: {
        marginTop: 20,
        marginBottom: 20,
    },
    footer: {
        flex: 0,
        width: '80%',
        minHeight: 100,
        justifyContent: 'center',
    },
});

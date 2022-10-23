import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Paragraph } from 'react-native-paper';
import { formatCurrency } from '../../core/currency/formatCurrency';
import { itemType } from '../../features/item/item';
import { useCatalogStore } from '../../integrations/catalogStore';

type props = {
    item: itemType;
}

export function CatalogItem({ item: { id, name, description, price, stock } }: props) {
    const cart = useCatalogStore(state => state.cart);
    const addToCart = useCatalogStore(state => state.addToCart);
    const removeFromCart = useCatalogStore(state => state.removeFromCart);
    const [amount, setAmount] = useState(0);

    function increaseAmount() {
        if (amount + 1 > stock)
            return;
        setAmount(amount + 1);
    }

    function decreaseAmount() {
        if (amount - 1 < 0)
            return;
        setAmount(amount - 1);
    }

    function handleAddToCart() {
        addToCart({ id, amount });
    }

    function handleRemoveFromCart() {
        removeFromCart(id);
        setAmount(0);
    }

    return (
        <View style={styles.container}>
            <Card>
                <Card.Title title={name} subtitle={description} titleVariant='bodyLarge' />
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Content>
                    <Paragraph>Preço: {formatCurrency(price)}</Paragraph>
                    <Paragraph>Quantidade: {amount}</Paragraph>
                    <Paragraph>Total: {formatCurrency(amount * price)}</Paragraph>
                </Card.Content>
                <Card.Actions>
                    {
                        cart.findIndex(cartItem => cartItem.id === id) > -1
                            ? (
                                <Button
                                    mode='contained'
                                    onPress={handleRemoveFromCart}
                                >
                                    Remover do carrinho
                                </Button>
                            ) : (
                                <>
                                    <Button
                                        mode='outlined'
                                        style={{ marginRight: 5 }}
                                        disabled={amount === stock}
                                        onPress={increaseAmount}
                                    >
                                        +
                                    </Button>
                                    <Button
                                        mode='outlined'
                                        style={{ marginRight: 5 }}
                                        disabled={amount === 0}
                                        onPress={decreaseAmount}
                                    >
                                        -
                                    </Button>
                                    <Button
                                        mode='contained'
                                        disabled={amount === 0}
                                        onPress={handleAddToCart}
                                    >
                                        Adicionar ao carrinho
                                    </Button>
                                </>
                            )
                    }
                </Card.Actions>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 20,
    },
});

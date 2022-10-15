import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Paragraph } from 'react-native-paper';
import { formatCurrency } from '../../core/currency/formatCurrency';
import { itemType } from '../../features/item/item';

type props = {
    item: itemType;
}

export function CatalogItem({ item: { name, description, price, stock } }: props) {
    const [amount, setNumberOfItems] = useState(0);
    const isOnCart = false;

    function increaseAmount() {
        if (amount + 1 > stock)
            return;
        setNumberOfItems(amount + 1);
    }

    function decreaseAmount() {
        if (amount - 1 < 0)
            return;
        setNumberOfItems(amount - 1);
    }

    function handleAddToCart() {

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
                    <Button
                        mode='outlined'
                        labelStyle={{ fontSize: 25 }}
                        disabled={amount === stock}
                        onPress={increaseAmount}>+</Button>
                    <Button
                        mode='outlined'
                        labelStyle={{ fontSize: 25 }}
                        disabled={amount === 0}
                        onPress={decreaseAmount}>-</Button>
                    <Button
                        mode='contained'
                        disabled={isOnCart || amount === 0}
                        onPress={handleAddToCart}
                    >Adicionar</Button>
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

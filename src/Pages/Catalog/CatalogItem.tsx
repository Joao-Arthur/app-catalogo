import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Paragraph } from 'react-native-paper';
import { formatCurrency } from '../../core/currency/formatCurrency';

type props = {
    item: {
        id: string;
        name: string;
        description: string;
        price: number;
        stock: number;
    };
}

export function CatalogItem({ item: { name, description, price, stock } }:props) {
    const [numberOfItems, setNumberOfItems] = useState(0);

    function handleIncrease() {
        if (numberOfItems + 1 > stock)
            return;
        setNumberOfItems(numberOfItems + 1);
    }

    function handleDecrease() {
        if (numberOfItems - 1 < 0)
            return;
        setNumberOfItems(numberOfItems - 1);
    }

    return (
        <View style={styles.container}>
            <Card>
                <Card.Title title={name} subtitle={description}  />
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Content>
                    <Paragraph>Preço: {formatCurrency(price)}</Paragraph>
                    <Paragraph>Total: {formatCurrency(numberOfItems * price)}</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button
                        mode='outlined'
                        labelStyle={{ fontSize: 25 }}
                        onPress={handleIncrease}>+</Button>
                    <Button
                        mode='outlined'
                        labelStyle={{ fontSize: 25 }}
                        onPress={handleDecrease}>-</Button>
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

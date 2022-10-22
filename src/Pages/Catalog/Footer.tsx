import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
    ItemRegister: undefined;
    Cart: undefined;
};

export function Footer() {
    const navigation = useNavigation<NativeStackScreenProps<RootStackParamList>['navigation']>();

    function handleAddItem() {
        navigation.navigate('ItemRegister');
    }

    function handleGoToCart() {
        navigation.navigate('Cart');
    }

    return (
        <View style={styles.container}>
            <Button
                icon="plus-circle"
                mode="contained"
                onPress={handleAddItem}
                labelStyle={{ fontSize: 20 }}
                contentStyle={{ height: 70 }}
                style={{ marginTop: 5, marginBottom: 5 }}
            >
                Adicionar produto
            </Button>
            <Button
                icon="shopping"
                mode="contained"
                onPress={handleGoToCart}
                labelStyle={{ fontSize: 20 }}
                contentStyle={{ height: 70 }}
                style={{ marginBottom: 5 }}
            >
                Carrinho
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        width: '80%',
        minHeight: 100,
        justifyContent: 'center',
    },
});

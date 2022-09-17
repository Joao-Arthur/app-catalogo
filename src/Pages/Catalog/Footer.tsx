import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

export function Footer() {
    return (
        <View style={styles.container}>
            <Button
                icon="shopping"
                mode="contained"
                onPress={() => console.log('Pressed')}
                labelStyle={{ fontSize: 25, }}
                contentStyle={{ height: 70 }}
            >
                Finalizar compra
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        minHeight: 100,
        justifyContent: 'center'
    }
});
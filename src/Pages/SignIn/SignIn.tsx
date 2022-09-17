import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

export function SignIn() {
    return (
        <View style={styles.container}>
            <Text variant='displayLarge'>Entrar</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    label='e-mail'
                    placeholder='email@email.com'
                    style={styles.inputStyle}
                />
                <TextInput
                    label='senha'
                    placeholder='**********'
                    style={styles.inputStyle}
                />
            </View>
            <Button
                mode='contained'
                labelStyle={{fontSize: 20}}
                contentStyle={{ height: 70 }}
                style={{width: '80%' }}
            >
                Entrar
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: '80%',
        flexDirection: 'column',
        margin: 40
    },
    inputStyle: {
        marginVertical: 10
    }
});
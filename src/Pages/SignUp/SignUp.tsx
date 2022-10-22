import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { signUp } from '../../features/signUp';

type paramsType = {
    email: string;
    password: string;
};

type RootStackParamList = {
    SignIn: undefined;
    Catalog: undefined;
};

export function SignUp() {
    const navigation = useNavigation<NativeStackScreenProps<RootStackParamList>['navigation']>();

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    function onSubmit(data: paramsType) {
        signUp(data).then(() => {
            navigation.replace('Catalog');
        }).catch(error => {
            if (error instanceof Error)
                console.error(error.message);
        });
    }//

    function onSignInClick() {
        navigation.replace('SignIn');
    }

    return (
        <View style={styles.container}>
            <Text variant='displayLarge'>Cadastre-se</Text>
            <View style={styles.inputContainer}>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                        maxLength: 100,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label='e-mail'
                            placeholder='email@email.com'
                            style={styles.inputStyle}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name='email'
                />
                <Controller
                    control={control}
                    rules={{
                        required: true,
                        maxLength: 100,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label='senha'
                            placeholder='**********'
                            style={styles.inputStyle}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name='password'
                />
            </View>
            <Button
                disabled={!!errors.email || !!errors.password}
                mode='contained'
                labelStyle={{ fontSize: 20 }}
                contentStyle={{ height: 70 }}
                style={{ width: '80%' }}
                onPress={handleSubmit(onSubmit)}
            >
                Cadastrar
            </Button>
            <Button
                mode='contained'
                labelStyle={{ fontSize: 20 }}
                contentStyle={{ height: 70 }}
                style={{ width: '80%', marginTop: 20 }}
                onPress={onSignInClick}
            >
                Já tenho conta
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
        margin: 40,
    },
    inputStyle: {
        marginVertical: 10,
    },
});

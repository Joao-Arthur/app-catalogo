import 'react-native-get-random-values';
import { nanoid } from 'nanoid';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useCatalogStore } from '../../integrations/catalogStore';
import { addItem as addItemToDatabase } from '../../core/database/itemTable';

type paramsType = {
    name: string;
    description: string;
    price: string;
    stock: string;
};

type RootStackParamList = {
    Catalog: undefined;
};

export function ItemRegister() {
    const navigation = useNavigation<NativeStackScreenProps<RootStackParamList>['navigation']>();
    const addItemToStore = useCatalogStore(state => state.addItem);
    const { control, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            description: '',
            price: '',
            stock: '',
        },
    });

    function onSubmit(data: paramsType) {
        const item = {
            id: nanoid(),
            name: data.name,
            description: data.description,
            price: Number(data.price),
            stock: Number(data.stock),
        };
        addItemToStore(item);
        addItemToDatabase(item);
        navigation.navigate('Catalog');
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Controller
                    control={control}
                    rules={{ required: true, maxLength: 100 }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label='Nome'
                            placeholder='Lorem ipsum dolor sit amet'
                            style={styles.inputStyle}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name='name'
                />
                <Controller
                    control={control}
                    rules={{ required: true, maxLength: 100 }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label='Descrição'
                            placeholder='Lorem ipsum dolor sit amet'
                            style={styles.inputStyle}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name='description'
                />
                <Controller
                    control={control}
                    rules={{ required: true, maxLength: 100 }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label='Preço'
                            placeholder='R$ 10.00'
                            style={styles.inputStyle}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name='price'
                />
                <Controller
                    control={control}
                    rules={{ required: true, maxLength: 100 }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label='Estoque'
                            placeholder='1.000'
                            style={styles.inputStyle}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name='stock'
                />
            </View>
            <Button
                icon="plus-circle"
                mode="contained"
                onPress={handleSubmit(onSubmit)}
                labelStyle={{ fontSize: 20 }}
                contentStyle={{ height: 60 }}
                style={{ marginTop: 5, marginBottom: 5, width: '80%' }}
            >
                Adicionar produto
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

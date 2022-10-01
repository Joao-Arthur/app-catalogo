import { Appbar } from 'react-native-paper';

export function Header() {
    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={() => console.log('Went back')} />
            <Appbar.Content title='Catálogo' />
            <Appbar.Action icon='magnify' onPress={() => console.log('Searching')} />
            <Appbar.Action icon='dots-vertical' onPress={() => console.log('Shown more')} />
        </Appbar.Header>
    );
}

import { itemType } from '../../features/item/item';
import { execute, query } from './database';

type itemTableType = {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly price: string;
    readonly stock: string;
}

export function createItemTable() {
    return execute(
        `CREATE TABLE IF NOT EXISTS ITEM (
            id TEXT NOT NULL,
            name TEXT NOT NULL,
            description TEXT NOT NULL,
            price TEXT NOT NULL,
            stock TEXT NOT NULL
        );`,
    );
}

export async function getItems(): Promise<itemType[]> {
    const databaseItems = await query<itemTableType[]>('SELECT * FROM ITEM');
    return databaseItems.map(item => ({
        id: item.id,
        name: item.name,
        description: item.description,
        price: Number(item.price),
        stock: Number(item.stock),
    }) as const);
}

export function addItem(item: itemType) {
    return execute(
        `INSERT INTO ITEM (
            id,
            name,
            description,
            price,
            stock
        ) VALUES (?, ?, ?, ?, ?)`,
        [
            item.id,
            item.name,
            item.description,
            String(item.price),
            String(item.stock),
        ],
    );
}

export function deleteItem(id: itemType['id']) {
    return execute('DELETE FROM ITEM WHERE id = ?', [id]);
}

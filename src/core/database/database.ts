import * as SQLite from 'expo-sqlite';
import { itemType } from '../../features/item/item';

const databaseName = 'app_catalogo.db' as const;

let database: SQLite.WebSQLDatabase = undefined!;

function execute(command: string, params?: (string | number)[]): Promise<void> {
    if (!database)
        database = SQLite.openDatabase(databaseName);
    return new Promise((resolve, reject) => {
        database.transaction(tx => {
            tx.executeSql(
                command,
                params,
                () => {
                    resolve();
                },
                () => {
                    reject();
                    return true;
                });
        });
    });
}

function query<T>(command: string, params?: (string | number)[]): Promise<T> {
    if (!database)
        database = SQLite.openDatabase(databaseName);
    return new Promise((resolve, reject) => {
        database.transaction(tx => {
            tx.executeSql(
                command,
                params,
                (_, result) => {
                    resolve(result as T);
                },
                () => {
                    reject();
                    return true;
                });
        });
    });
}

export function createItemTable() {
    return execute(`
      CREATE TABLE IF NOT EXISTS ITEM (
        ID TEXT NOT NULL,
        NAME TEXT NOT NULL,
        DESCRIPTION TEXT NOT NULL,
        PRICE TEXT NOT NULL,
        STOCK TEXT NOT NULL
      );`);
}

type itemTableType = {
    readonly ID: string;
    readonly NAME: string;
    readonly DESCRIPTION: string;
    readonly PRICE: string;
    readonly STOCK: string;
}

export async function getItems(): Promise<itemType[]> {
    const databaseItems = await query<itemTableType[]>('SELECT * FROM ITEM');
    return databaseItems.map(item => ({
        id: item.ID,
        name: item.NAME,
        description: item.DESCRIPTION,
        price: Number(item.PRICE),
        stock: Number(item.STOCK),
    }) as const);
}

export function addItem(item: itemType) {
    return execute(
        `INSERT INTO ITEM (
            ID,
            NAME,
            DESCRIPTION,
            PRICE,
            STOCK
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
    return execute('DELETE FROM ITEM WHERE ID = ?', [id]);
}

import * as SQLite from 'expo-sqlite';

const databaseName = 'app_catalogo.db' as const;

let database: SQLite.WebSQLDatabase = undefined!;

export function setupDatabase() {
    database = SQLite.openDatabase(databaseName);
}

export function execute(command: string, params?: (string | number)[]): Promise<void> {
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

export function query<T>(command: string, params?: (string | number)[]): Promise<T> {
    return new Promise((resolve, reject) => {
        database.transaction(tx => {
            tx.executeSql(
                command,
                params,
                (_, result) => {
                    resolve(result.rows._array as unknown as T);
                },
                () => {
                    reject();
                    return true;
                });
        });
    });
}

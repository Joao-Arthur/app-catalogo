import create from 'zustand';
import { itemType } from '../features/item/item';

type state = {
    readonly items: itemType[];
    readonly addItem: (item: itemType) => void;
    readonly removeItem: (id: itemType['id']) => void;
    readonly cart: itemType['id'][];
    readonly addToCart: (id: itemType['id']) => void;
    readonly removeFromCart: (id: itemType['id']) => void;
};

export const useCatalogStore = create<state>(set => ({
    items: [
        {
            id: '1',
            name: 'Monitor 4k',
            description: 'Monitor de alta resolução',
            price: 29.38,
            stock: 20,
        },
        {
            id: '2',
            name: 'Teclado gamer',
            description: 'Teclado com cores RGB',
            price: 999.99,
            stock: 5,
        },
        {
            id: '3',
            name: 'Impressora 3d',
            description: 'Impressora para imprimir Action Figure',
            price: 17.28,
            stock: 26,
        },
    ],
    addItem: item => set(({ items }) => ({ items: items.concat(item) })),
    removeItem: id => set(({ items }) => ({ items: items.filter(item => item.id !== id) })),
    cart: [],
    addToCart: item => set(({ cart }) => ({ cart: cart.concat(item) })),
    removeFromCart: id => set(({ cart }) => ({ cart: cart.filter(item => item !== id) })),
}));

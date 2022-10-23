import create from 'zustand';
import { cartType } from '../features/cart/cart';
import { itemType } from '../features/item/item';

type state = {
    readonly items: itemType[];
    readonly setItems: (items: itemType[]) => void;
    readonly addItem: (item: itemType) => void;
    readonly removeItem: (id: itemType['id']) => void;
    readonly cart: cartType[];
    readonly addToCart: (cartItem: cartType) => void;
    readonly removeFromCart: (id: itemType['id']) => void;
    readonly clearCart: () => void;
};

export const useCatalogStore = create<state>(set => ({
    items: [],
    setItems: items => set(() => ({ items })),
    addItem: item => set(({ items }) => ({ items: items.concat(item) })),
    removeItem: id => set(({ items }) => ({ items: items.filter(item => item.id !== id) })),
    cart: [],
    addToCart: cartItem => set(({ cart }) => ({ cart: cart.concat(cartItem) })),
    removeFromCart: id => set(({ cart }) => ({ cart: cart.filter(cartItem => cartItem.id !== id) })),
    clearCart: () => set(() => ({ cart: [] })),
}));

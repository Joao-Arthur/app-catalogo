import create from 'zustand';
import { airplaneType, savedAirplaneType } from '../../features/airplane/models';
import { messageType } from '../../features/logger/model';
import { itemType } from '../features/item/item';

type state = {
    readonly items: itemType;
    readonly addItem: (airplane)
    readonly removeItem: (airplane)
    readonly cart: itemType['id'][];
    addToCart,
    removeFromCart
};
        
        rt const useAirplaneStore = create<state>(set => ({


     items: [],
            addItem: (item)
     removeItem: (id)
     cart: [],
            addToCart: (id: ) =>
                removeFromCart: (id: ) =>



}));

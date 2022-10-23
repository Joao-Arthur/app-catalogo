import { itemType } from '../item/item';

export type cartType = {
    readonly id: itemType['id'];
    readonly amount: number;
}

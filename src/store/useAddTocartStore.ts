import { TProduct } from '@/@types';
import { create } from 'zustand';

interface useCartStoreStoreProps {
	items: TProduct[];
	count: number;
	addToCart: (item: TProduct) => void;
	deleteItemById: (itemId: number) => void;
}

export const useCartStoreStore = create<useCartStoreStoreProps>((set) => ({
	items: [],
	count: 0,
	totalPrice: 500,
	addToCart: (item) => set((state) => ({
		items: [...state.items, item],
		count: state.count + 1,
	})),
	deleteItemById: (itemId) => set((state) => ({
		items: state.items.filter((item) => item.id !== itemId),
		count: state.count - 1,
	})),
}));


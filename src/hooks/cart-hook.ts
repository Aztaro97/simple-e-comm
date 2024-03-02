'use client';

import { TProduct } from '@/@types';
import { useQuery } from '@tanstack/react-query';

export const useGetUserCart = () => {
	return useQuery({
		queryKey: ["userCart"],
		queryFn: async (): Promise<TProduct[]> => {
			const response = await fetch(`https://fakestoreapi.com/carts/1`);
			return response.json();
		}
	})
}
'use client';

import { TProduct } from '@/@types';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useGetAllProduct = (category: string) => {
	return useQuery({
		queryKey: ["products", category],
		queryFn: async (): Promise<TProduct[]> => {
			const url = category
				? `https://fakestoreapi.com/products/category/${category}`
				: `https://fakestoreapi.com/products?limit=12`;
			const response = await fetch(url);
			return response.json();

		}
	})
}


export const useGetFeaturesProduct = () => {
	return useQuery({
		queryKey: ["featureProducts"],
		queryFn: async (): Promise<TProduct[]> => {
			const response = await fetch(`https://fakestoreapi.com/products?limit=3`);
			return response.json();

		}
	})
}
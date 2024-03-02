export type TProduct = {
	id: number;
	title: string;
	price: number;
	image: string;
	description: string;
	category: string;
	rating: {
		count: number;
		rate: number;
	};
}
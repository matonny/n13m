import { type ProductItemProps } from "../types";
import { ProductList } from "../ui/organisms/ProductList";
const products: ProductItemProps[] = [
	{
		id: "1",
		category: "clothes",
		price: 1499,
		title: "Czapka",
		image: {
			alt: "Czarna czapka z daszkiem",
			url: "/Users/matonny/Desktop/n13m/src/assets/cap.png",
		},
	},
	{
		id: "2",
		category: "clothes",
		price: 1499,
		title: "Czapka",
		image: {
			alt: "Czarna czapka z daszkiem",
			url: "/Users/matonny/Desktop/n13m/src/assets/cap.png",
		},
	},
	{
		id: "3",
		category: "clothes",
		price: 1499,
		title: "Czapka",
		image: {
			alt: "Czarna czapka z daszkiem",
			url: "/../assets/",
		},
	},
	{
		id: "4",
		category: "clothes",
		price: 1499,
		title: "Czapka",
		image: {
			alt: "Czarna czapka z daszkiem",
			url: "/../Users/matonny/Desktop/n13m/src/assets/cap.png",
		},
	},
];
export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<ProductList products={products} />
		</main>
	);
}

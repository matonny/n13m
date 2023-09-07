import { type ProductItemProps } from "../../types";
import { ProductItem } from "../molecules/ProductItem";

type ProductItemListProps = {
	products: ProductItemProps[];
};

export const ProductList = ({ products }: ProductItemListProps) => {
	return (
		<ul className="flex flex-row">
			{products.map((product) => {
				return (
					<li key={product.id}>
						<ProductItem {...product} />
					</li>
				);
			})}
		</ul>
	);
};

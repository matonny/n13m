import { type ProductItemProps } from "../../types";
import { ProductItemDetails } from "../atoms/ProductItemDetails";
import { ProductItemImage } from "../atoms/ProductItemImage";

export const ProductItem = ({ price, title, image }: ProductItemProps) => {
	return (
		<div className="m-4 border border-blue-400 ">
			<ProductItemImage {...image} />
			<ProductItemDetails {...{ price, title }} />
		</div>
	);
};

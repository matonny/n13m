export const ProductItemDetails = ({ title, price }: { title: string; price: number }) => {
	return (
		<div className="flex flex-row justify-between">
			<p>{price}</p>
			<p>{title}</p>
		</div>
	);
};

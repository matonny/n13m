import Image from "next/image";

import image from "/Users/matonny/Desktop/n13m/src/assets/cap.png";
export const ProductItemImage = ({ alt }: { alt: string; url: string }) => {
	return (
		<div className="m-3 hover:animate-spin">
			<Image width={400} height={400} src={image} alt={alt} priority />
		</div>
	);
};

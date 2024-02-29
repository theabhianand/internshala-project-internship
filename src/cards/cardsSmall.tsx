import PC from "../assets/pc.png";
import Button from "../components/button";
export default function CardsSmall(props: {
	tags: Array<string>;
	title: string;
	percentOff: number;
	OriginalPrice: number;
	DiscountPrice: number;
	description: string;
}) {
	return (
		<>
			<div className='flex flex-col bg-white w-72 gap-2  p-4'>
				<div>
					<img src={PC} />
				</div>
				<div className='flex flex-row gap-2'>
					{props.tags.map(tag => (
						<div className='p-2 bg-[#F2F4F7] rounded-lg text-[#074786] text-sm'>
							{tag}
						</div>
					))}
				</div>
				<div className='flex justify-center'>{props.title}</div>
				<div className='text-[#626E79]'>{props.description}</div>
				<div className='flex gap-2'>
					<div>${props.OriginalPrice}</div>
					<div className='text-xs flex items-end text-[#9FA9B3]'>
						${props.DiscountPrice}
					</div>
					<div className='text-xs flex items-end text-[#EF4C5D]'>
						({props.percentOff}% off)
					</div>
				</div>
				<div className='mt-5'>
					<Button text='View Deal' />
				</div>
			</div>
		</>
	);
}

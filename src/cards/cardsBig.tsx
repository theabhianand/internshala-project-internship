import PC from "../assets/pc.png";
import type { SVGProps } from "react";
import Button from "../components/button";
import { PhCaretDown } from "../heading/info";

export function EmojioneStar(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 64 64'
			{...props}
		>
			<path
				fill='#ffce31'
				d='M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2z'
			></path>
		</svg>
	);
}

export function MdiLightStar(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 24 24'
			{...props}
		>
			<path
				fill='currentColor'
				d='M12.86 10.44L11 6.06l-1.86 4.39l-4.75.41L8 14l-1.08 4.63L11 16.17l4.09 2.46L14 14l3.61-3.14zm3.73 10.26L11 17.34L5.42 20.7l1.46-6.35l-4.92-4.28l6.49-.57l2.55-6l2.55 6l6.49.57l-4.92 4.27z'
			></path>
		</svg>
	);
}

function Rating(props: { ratingNumber: number; comment: string }) {
	const star = Math.round(props.ratingNumber % 5);
	return (
		<>
			<div className='flex flex-col gap-3  justify-center items-center bg-[#F3F9FF] rounded-md p-5'>
				<div className='text-3xl'>{props.ratingNumber}</div>
				<div className='text-xs'>{props.comment}</div>
				<div className='flex gap-2'>
					{[1, 2, 3, 4, 5].map(num => {
						if (num < star) {
							return (
								<div className='w-2 h-2'>
									<EmojioneStar />
								</div>
							);
						} else {
							return (
								<div className='w-2 h-2'>
									<MdiLightStar />
								</div>
							);
						}
					})}
				</div>
			</div>
		</>
	);
}
interface CardsBigProps {
	children: React.ReactNode; // Assuming CardsBig will render its children
}
const CardsBig: React.FC<CardsBigProps> = ({ children }) => {
	return (
		<>
			<div className='flex flex-col md:flex-row w-full flex-grow bg-white py-5 items-center rounded-md'>
				<div className=''>
					<img src={PC} />
				</div>
				<div className='flex-grow'>
					<div className='mx-20 flex flex-col'>
						{children}
						<div className='mt-5 text-[#1B88F4] flex items-center cursor-pointer gap-1'>
							Show More
							<div>
								<PhCaretDown />
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-5 w-52'>
					<div className='mx-6'>
						{<Rating ratingNumber={9.8} comment='Exceptional' />}
					</div>

					<Button text='View' />
				</div>
			</div>
		</>
	);
};

export default CardsBig;

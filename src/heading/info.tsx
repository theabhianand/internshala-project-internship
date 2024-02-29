import type { SVGProps } from "react";
import Icon from "./icon";

export function MdiTickCircleOutline(props: SVGProps<SVGSVGElement>) {
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
				d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z'
			></path>
		</svg>
	);
}

export function PhInfo(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 256 256'
			{...props}
		>
			<path
				fill='currentColor'
				d='M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m16-40a8 8 0 0 1-8 8a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16a16 16 0 0 1 16 16v40a8 8 0 0 1 8 8m-32-92a12 12 0 1 1 12 12a12 12 0 0 1-12-12'
			></path>
		</svg>
	);
}

export function PhCaretDown(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 256 256'
			{...props}
		>
			<path
				fill='currentColor'
				d='m213.66 101.66l-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 164.69l74.34-74.35a8 8 0 0 1 11.32 11.32'
			></path>
		</svg>
	);
}
function Info() {
	return (
		<>
			<div className='flex justify-between'>
				<div className='flex flex-row gap-10'>
					<Icon
						svg={<MdiTickCircleOutline />}
						text='Last Seen - February 22, 2020'
					/>
					<Icon svg={<PhInfo />} text='Advertising Disclosure' />
				</div>
				<div className='flex gap-2'>
					<div>Top Relevant</div>
					<div className='flex items-center'>
						<PhCaretDown />
					</div>
				</div>
			</div>
		</>
	);
}

export default Info;

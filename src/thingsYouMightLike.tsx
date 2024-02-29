import CardsSmall from "./cards/cardsSmall";

export default function ThingsYouMightLike() {
	return (
		<>
			<div>
				<div className='md:text-3xl text-xl flex justify-center md:justify-start font-bold'>
					Related deals you might like
				</div>
				<div className='mt-10 flex gap-10 md:flex-row flex-col items-center flex-wrap'>
					<CardsSmall
						tags={["20% off", "Limited Time"]}
						title='Website Builder'
						DiscountPrice={46}
						OriginalPrice={100}
						percentOff={20}
						description='Computer  Modern clasic with wix support'
					/>
					<CardsSmall
						tags={["20% off", "Limited Time"]}
						title='Website Builder'
						DiscountPrice={46}
						OriginalPrice={100}
						percentOff={20}
						description='Computer  Modern clasic with wix support'
					/>
					<CardsSmall
						tags={["20% off", "Limited Time"]}
						title='Website Builder'
						DiscountPrice={46}
						OriginalPrice={100}
						percentOff={20}
						description='Computer  Modern clasic with wix support'
					/>
				</div>
			</div>
		</>
	);
}

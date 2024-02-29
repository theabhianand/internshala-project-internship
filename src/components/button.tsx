function Button(props: { text: string }) {
	return (
		<>
			<div className='p-3 bg-[#1B88F4] rounded-lg w-full flex justify-center items-center text-white cursor-pointer'>
				{props.text}
			</div>
		</>
	);
}

export default Button;

import {
	EyeIcon,
	LockClosedIcon,
	UserIcon,
	EnvelopeIcon,
	PhotoIcon,
} from '@heroicons/react/24/outline';

function CustomInput({
	id,
	type,
	placeholder,
	pattern,
	title,
	icon: Icon,
	value,
	onChange,
	toggleShow,
	show,
}) {
	return (
		<div className='flex flex-col mx-10'>
			<label className='mb-2 text-sm font-medium'>{placeholder}</label>
			<div className='relative'>
				<Icon className='absolute h-4 w-4 cursor-pointer top-4 left-3' />
				<input
					id={id}
					type={type || 'text'}
					className='rounded-lg w-full py-4 px-4 bg-transparent pl-10 bg-lightestPrimary'
					placeholder={placeholder}
					pattern={pattern}
					title={title}
					value={value}
					onChange={onChange}
				/>
				{toggleShow && (
					<EyeIcon
						className='absolute h-4 w-4 cursor-pointer top-4 right-3'
						onClick={() => toggleShow((prevState) => !prevState)}
					/>
				)}
			</div>
		</div>
	);
}

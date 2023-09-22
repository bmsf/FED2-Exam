import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const InputComponent = ({ name, placeholder, control, as }) => {
	const Component = as || Input; // Use Input as default component
	return (
		<FormField control={control} name={name}>
			{({ field }) => (
				<FormItem>
					<FormControl>
						<Component placeholder={placeholder} {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		</FormField>
	);
};

export default InputComponent;

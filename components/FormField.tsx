import { Controller, Control, FieldValues, Path } from "react-hook-form";
import React from "react";
import {
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {Eye, EyeOff} from "lucide-react";
interface FormFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    type?: "text" | "email" | "password";
}
const FormField = <T extends FieldValues>({
    control,
    name,
    label,
    placeholder,
    type = "text",
}: FormFieldProps<T>) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <Controller name={name} control={control} render={({ field }) => (
            <FormItem>
                <FormLabel className='label'>{label}</FormLabel>
                <FormControl>
                    <div className="relative">
                        <Input
                            placeholder={placeholder}
                            type={type === 'password' && showPassword ? 'text' : type}
                            {...field}
                        />
                        {type === 'password' && (
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                {showPassword ? (
                                    <EyeOff className="h-5 w-5" />
                                ) : (
                                    <Eye className="h-5 w-5" />
                                )}
                            </button>
                        )}
                    </div>
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
        />
    );
}

export default FormField

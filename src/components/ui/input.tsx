import React from "react";

type InputProps = {
    placeholder: string;
    type?: string;
    value?: string | number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    [key: string]: any; // Allow for additional props
};

export function Input({ placeholder, type = "text", ...rest }: InputProps) {
    return (
        <input
            className="px-4 py-2 border border-gray-300 rounded-lg"
            type={type}
            placeholder={placeholder}
            {...rest}
        />
    );
}

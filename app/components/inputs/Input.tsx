'use client';

import { 
    FieldErrors,
    FieldValues,
    UseFormRegister } from "react-hook-form";
import { BiEuro  } from "react-icons/bi";

interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    formatPrice?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    type = "text",
    disabled,
    formatPrice,
    register,
    required,
    errors,
}) => {

    // Validation function to check if input meets criteria
    const validateInput = (value: string) => {
        if (type === "email") {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(value);
        } else if (type === "password") {
            // Regex pattern pour entre 5 et 10 caractères, avec au moins un chiffre, une lettre, et un caractère spécial
            const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-zA-Z]).{5,10}$/;
            return passwordPattern.test(value);
        }
        return true; 
    };
    const shouldValidate = type === "text" || type === "password" || type === "email";

    return (
        <div className="w-full relative">
            {formatPrice && (
                <BiEuro
                    size={24}
                    className="
                        text-neutral-700
                        absolute
                        top-5
                        left-2
                    "
                />
            )}
            <input 
                id={id}
                disabled={disabled}
                {...register(id, { required, ...(shouldValidate && { validate: validateInput }) })}
                placeholder=""
                type={type}
                className={`
                    peer
                    w-full
                    p-4
                    pt-6
                    font-light
                    bg-white
                    border-2
                    rounded-md
                    outline-none
                    transition
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    ${formatPrice ? 'pl-9' : 'pl-4'}
                    ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
                    ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
                `}
            />
            <label
                className={`
                    absolute
                    text-md
                    duration-150
                    transform
                    -translate-y-3
                    top-5
                    z-10
                    origin-[0]
                    ${formatPrice ? 'left-9' : 'left-4'}
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75
                    peer-focus:-translate-y-4
                    ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
                `}
            >
                {label}
            </label>
            {errors[id] && errors[id]?.type === "validate" && (
                <span className="text-rose-500 text-sm">
                    {type === "email" ? "Veuillez entrer une adresse e-mail valide." : 
                        type === "password" ? "Le mot de passe doit contenir entre 5 et 10 caractères, incluant au moins une lettre, un chiffre et un caractère spécial." :
                            ""
                    }
                </span>
            )}        
        </div>
    );
};

export default Input;

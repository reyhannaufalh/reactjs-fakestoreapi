type InputProps = {
  type?: string;
  name: string;
  id: string;
  placeholder: string;
  required?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
  type = "text",
  name,
  id,
  placeholder,
  required = false,
  className,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className={`rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-neutral-800 border-neutral-700 placeholder-neutral-300 text-white focus:ring-white ${className}`}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    />
  );
};

export default Input;

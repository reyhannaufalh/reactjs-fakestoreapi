import Label from "../atoms/Label";
import Input from "../atoms/Input";

type InputFieldProps = {
  name: string;
  type: string;
  id: string;
  placeholder: string;
  label: string;
  required: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputField: React.FC<InputFieldProps> = ({
  name,
  type,
  id,
  placeholder,
  required,
  label,
  onChange,
}) => {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

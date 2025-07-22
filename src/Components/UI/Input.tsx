type InputProps = {
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLElement>) => void;
  placeholder: string;
  className?: string;
  required?: boolean;
};

const Input = ({
  type = "text",
  value,
  onChange,
  placeholder = "",
  className = "",
  required = false,
}: InputProps) => {
  return (
    <input
      type="type"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      className={`login-input registration-input ${className}`}
    />
  );
};

export default Input;


// PAGES - folder za stranice 
// pages/login: 
//   index.tsx - glavna komponenta koja imporutuje sve druge 
//   components/ 
//       header.tsx
//       footer.tsx
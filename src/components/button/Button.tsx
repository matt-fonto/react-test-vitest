import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const styleBtn = {
  width: "100%",
  maxWidth: "380px",
  height: "40px",
  backgroundColor: "#000",
  color: "#fff",
};

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button data-testid="button" {...rest} style={styleBtn}>
      {children}
    </button>
  );
};

export default Button;

import "./Button.css";

export enum ButtonType {
  Primary,
  Secondary,
  Neutral,
}

const typeToClassname: Record<ButtonType, string> = {
  [ButtonType.Primary]: "green",
  [ButtonType.Secondary]: "red",
  [ButtonType.Neutral]: "",
};

export const Button: React.FC<{
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: ButtonType;
  visible?: boolean;
}> = ({ children, onClick, type, visible }) => (
  <button
    className={`button ${typeToClassname[type ?? ButtonType.Neutral]}`}
    onClick={onClick}
  >
    {children}
  </button>
);

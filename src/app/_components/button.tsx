import classNames from "classnames";

interface Props {
	type?: JSX.IntrinsicElements["button"]["type"];
  role: "primary" | "secondary" | "alter-black";
  title: string;
}

const Button = ({ type, role, title }: Props): React.JSX.Element => {
	return (
		<button type={type ?? "button"} className={classNames(role, "h-10 rounded-full")}>{title}</button>
	);
};

export default Button;

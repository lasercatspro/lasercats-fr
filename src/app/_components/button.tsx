import classNames from "classnames";

interface Props {
  type: "primary" | "secondary";
  title: string;
}

const Button = ({ type, title }: Props): React.JSX.Element => {
	return (
		<button className={classNames(type, "h-10 rounded-full")}>{title}</button>
	);
};

export default Button;

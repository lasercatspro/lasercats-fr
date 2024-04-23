import classNames from "classnames";
import SpecialButton from "./special-button";

interface Props {
	type?: JSX.IntrinsicElements["button"]["type"];
  role: "primary" | "secondary" | "ternary";
  title: string;
	isDisabled?: boolean
}

const Button = ({ type, role, title, isDisabled = false }: Props): React.JSX.Element => {
	return (
		<button type={type ?? "button"} role={role ?? "button"}className={classNames("h-10 rounded-sm", (isDisabled && "cursor-not-allowed "))} disabled={isDisabled}>
			<SpecialButton title={title} fullWidth />
		</button>
	);
};

export default Button;

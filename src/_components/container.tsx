import classNames from "classnames";
import { type ReactNode } from "react";

interface Props {
  children?: React.ReactNode;
  classes?: string;
}

const Container = ({ children, classes }: Props): ReactNode => {
	return <div className={classNames(classes, "mx-4 max-w-xl lg:max-w-7xl lg:mx-auto")}>{children}</div>;
};

export default Container;

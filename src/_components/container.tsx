import classNames from "classnames";
import { type ReactNode } from "react";

interface Props {
  children?: React.ReactNode;
  classes?: string;
}

const Container = ({ children, classes }: Props): ReactNode => {
	return <div className={classNames(classes, "py-8 max-w-xl lg:max-w-7xl mx-8 md:mx-auto pt-24 mb-16")}>{children}</div>;
};

export default Container;

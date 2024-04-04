import classNames from "classnames";
import { type ReactNode } from "react";

interface Props {
  children?: React.ReactNode;
  classes?: string;
}

const Container = ({ children, classes }: Props): ReactNode => {
	return <div className={classNames(classes, "pt-16 mb-16")}>{children}</div>;
};

export default Container;

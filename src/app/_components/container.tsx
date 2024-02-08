import classNames from "classnames";
import { type ReactNode } from "react";

interface Props {
  children?: React.ReactNode;
  classes?: string;
}

const Container = ({ children, classes }: Props): ReactNode => {
	return <div className={classNames(classes, "mx-auto mt-32 mb-16")}>{children}</div>;
};

export default Container;

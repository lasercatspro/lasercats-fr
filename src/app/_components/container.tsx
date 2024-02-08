import { type ReactNode } from "react";

interface Props {
  children?: React.ReactNode
}

const Container = ({ children }: Props): ReactNode => {
	return <div className="container mx-auto px-5 mt-32 mb-16">{children}</div>;
};

export default Container;

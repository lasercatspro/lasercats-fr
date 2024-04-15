import { type ReactNode } from "react";
import dayjs from "dayjs";
require("dayjs/locale/fr");
interface Props {
  dateString: string
  color?: "primary" | "grey"
}

const DateFormatter = ({ dateString, color }: Props): ReactNode => {
	return <time className={`${color === "grey" && "text-zinc-500"}`} dateTime={dateString}>{dayjs(dateString).locale("fr").format("Le DD MMMM YYYY")}</time>;
};

export default DateFormatter;

import { type ReactNode } from "react";
import dayjs from "dayjs";
require("dayjs/locale/fr");
interface Props {
  dateString: string
}

const DateFormatter = ({ dateString }: Props): ReactNode => {
	return <time dateTime={dateString}>{dayjs(dateString).locale("fr").format("Le DD MMMM YYYY")}</time>;
};

export default DateFormatter;

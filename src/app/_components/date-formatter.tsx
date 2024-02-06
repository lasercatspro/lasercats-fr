import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  return <time dateTime={dateString}>{new Date(dateString).toLocaleDateString('fr')}</time>;
};

export default DateFormatter;

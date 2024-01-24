import { formatDistanceToNowStrict, parseISO } from 'date-fns';

export default function fromNow(dateInput: string) {
  const date = parseISO(dateInput);
  return formatDistanceToNowStrict(date, { addSuffix: true });
}

import { formatDateFull, formatDateYear } from '@/app/_libs/utils';

type Props = {
  date: string;
  displayType?: 'year' | 'full';
};

export default function Date({ date, displayType = 'full' }: Props) {
  const formattedDate = displayType === 'year' 
    ? formatDateYear(date)
    : formatDateFull(date);
    
  return (
    <time dateTime={date}>
      {formattedDate}
    </time>
  );
}
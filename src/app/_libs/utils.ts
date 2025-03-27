import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date: string) => {
  return dayjs.utc(date).tz('Asia/Tokyo').format('YYYY.MM.DD');
};

export function formatDateFull(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
}

export function formatDateYear(dateString: string): string {
  const date = new Date(dateString);
  return String(date.getFullYear());
}
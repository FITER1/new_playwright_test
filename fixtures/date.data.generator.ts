type FormatType = 'date' | 'datetime';

export function generateDateTimeOrDate(
  value: number = 0,
  type: 'days' | 'years',
  direction: 'past' | 'future' | 'present' = 'present',
  formatType: FormatType = 'datetime'
): string {
  const date = new Date();
  if (direction !== 'present') {
    if (type === 'days') {
      date.setDate(direction === 'past' ? date.getDate() - value : date.getDate() + value);
    } else if (type === 'years') {
      date.setFullYear(direction === 'past' ? date.getFullYear() - value : date.getFullYear() + value);
    }
  }
  return formatDateTimeOrDate(date, formatType);
}

export function formatDateTimeOrDate(date: Date, formatType: FormatType): string {
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const day = String(date.getDate()).padStart(2, '0');
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  if (formatType === 'date') {
    return `${day} ${month} ${year}`;
  } else {
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    return `${day} ${month} ${year} ${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;
  }
}

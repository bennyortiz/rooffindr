import { format, parseISO } from 'date-fns';

/**
 * Formats a date string to a human-readable format
 */
export function formatDate(dateString: string, formatString: string = 'MMMM dd, yyyy'): string {
  try {
    return format(parseISO(dateString), formatString);
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
}

/**
 * Returns a relative time string (e.g., "2 days ago")
 */
export function getRelativeTime(dateString: string): string {
  try {
    const date = parseISO(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) {
      return 'just now';
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 2592000) {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else {
      return format(date, 'MMMM dd, yyyy');
    }
  } catch (error) {
    console.error('Error getting relative time:', error);
    return dateString;
  }
} 
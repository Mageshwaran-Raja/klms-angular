export class Utility {
  options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  };

  getCurrentDate(): string {
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-US', this.options);
  }

  convertDate(date: Date): string {
    return date.toLocaleDateString('en-US', this.options);
  }
}

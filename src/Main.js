export function format_date(dateString) {
    const date = new Date(dateString); // Convert the input to a Date object
    const day = date.getDate().toString().padStart(2, '0'); // Ensure 2-digit format
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}
// Parse a date string in the format "DD.MM.YYYY" to a Date object
import * as cheerio from 'cheerio';

export function parseDate(dateStr) {
    const [day, month, year] = dateStr.split('.');
    return new Date(year, month - 1, day); // Month is 0-indexed in JavaScript
}

export function formatDate(date, dateStyle = 'medium', locales = 'en-gb') {
	const dateToFormat = parseDate(date)
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle })
	return dateFormatter.format(dateToFormat)
}

export function truncateHtml(htmlContent, maxLength = 200) {
	// Load the HTML content
	const $ = cheerio.load(htmlContent);

	// Extract all text content
	const textContent = $.text();
	const truncated = textContent.slice(0, maxLength)
	const truncatedHtml = truncated.slice(0, truncated.lastIndexOf(' ')) + '...'
	return truncatedHtml
}

export function getDetailedSlug(filePath) {
	const relativePath = filePath.replace(/^\/src\/content\//, '');
  	// Remove the .md extension
  	return relativePath.replace(/\.md$/, '');
}
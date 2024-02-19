export const Convert12H = (time = '00:00:00') => {
    return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
}

export const ConvertFullDateTime = (timeString = '00:00:00') => {
    const [hours, minutes, seconds] = timeString.split(':');
    const date = new Date();

    // Set the time components
    date.setHours(Number(hours));
    date.setMinutes(Number(minutes));
    date.setSeconds(Number(seconds));

    // Check if the resulting date is valid
    if (isNaN(date.getTime())) {
        console.error("Invalid Date");
        return null;
    } else {
        // Log the resulting date
        return date;
    }
};

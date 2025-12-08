function updateClock() {
    const now = new Date();
    
    // Time components
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // AM/PM handling
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    // Formatting with leading zeros
    const format = (num) => num.toString().padStart(2, '0');
    
    // Update DOM
    document.getElementById('hours').textContent = format(hours);
    document.getElementById('minutes').textContent = format(minutes);
    document.getElementById('seconds').textContent = format(seconds);
    document.getElementById('period').textContent = period;
    
    // Date components
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const dayNum = now.getDate();
    const year = now.getFullYear();
    
    const dateString = `${dayName}, ${monthName} ${dayNum}, ${year}`;
    document.getElementById('date').textContent = dateString;
}

// Update immediately, then every second
updateClock();
setInterval(updateClock, 1000);

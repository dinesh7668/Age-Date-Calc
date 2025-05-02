document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const day = parseInt(document.getElementById('day').value, 10);
    const month = parseInt(document.getElementById('month').value, 10);
    const year = parseInt(document.getElementById('year').value, 10);

    if (!day || !month || !year || day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > 2100) {
        alert('Please enter a valid date.');
        return;
    }

    const dob = new Date(year, month - 1, day); // JavaScript months are 0-indexed
    const today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    // Adjust for negative days
    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate(); // Get the number of days in the last month
    }

    // Adjust for negative months
    if (months < 0) {
        years--;
        months += 12;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerText = `You are: ${years} years, ${months} months, and ${days} days old`;
    
    // Add animation class
    resultDiv.classList.add('show');

    // Remove the class after animation ends to allow re-animation on next calculation
    setTimeout(() => {
        resultDiv.classList.remove('show');
    }, 2500);
});

document.getElementById("btn").addEventListener("click",((event)=>{
    event.preventDefault()

      window.location.href="date-gap.html"

    }))

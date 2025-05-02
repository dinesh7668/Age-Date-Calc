function calculateDifference() {
    let day1 = document.getElementById("day1").value;
    let month1 = document.getElementById("month1").value;
    let year1 = document.getElementById("year1").value;
    let day2 = document.getElementById("day2").value;
    let month2 = document.getElementById("month2").value;
    let year2 = document.getElementById("year2").value;
    
    if (!day1 || !month1 || !year1 || !day2 || !month2 || !year2) {
        document.getElementById("result").innerText = "Please enter valid dates.";
        return;
    }
    
    let date1 = new Date(year1, month1 - 1, day1);
    let date2 = new Date(year2, month2 - 1, day2);
    
    let diffTime = Math.abs(date2 - date1);
    let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    let years = Math.floor(diffDays / 365);
    let months = Math.floor((diffDays % 365) / 30);
    let days = (diffDays % 365) % 30;
    
    document.getElementById("result").innerText = `Difference: ${years} years, ${months} months, and ${days} days`;
    setTimeout(() => {
        resultDiv.classList.remove('show');
    }, 2500);
}
document.getElementById("btn").addEventListener("click",((event)=>{
    event.preventDefault()

      window.location.href="index.html"

    }))

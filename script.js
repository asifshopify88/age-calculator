
function calculateAge() {

    const birthDate = document.getElementById("birthDate").value;

    if (birthDate === "") {
        document.getElementById("result").innerText =
            "Please select your date of birth.";
        return;
    }

    const today = new Date();
    const dob = new Date(birthDate + "T00:00:00");

    if (dob > today) {
        document.getElementById("result").innerText =
            "Date of birth cannot be in the future.";
        return;
    }

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        const previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("result").innerText =
        "Your Age: " + years + " Years, " +
        months + " Months, " + days + " Days";
}

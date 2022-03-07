function calculateBirthdayWeek() {
    var inputDay = document.getElementById("date").value;
    var inputMonth = document.getElementById("month").value;
    var inputYear = document.getElementById("year").value;

    // dayOfWeek = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )

    if (inputDay <= 0 || inputDay > 31) {
        alert("Invalid day");
        return;
    }

    if (inputMonth <= 0 || inputMonth > 12) {
        alert("Invalid month");
        return;
    }

    var inputGender = document.getElementById("gender").value;

    var date = new Date(inputYear, inputMonth - 1, inputDay);
    var dayOfWeek = date.getDay();
    // const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const genderMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    const genderFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    let name;
    if (inputGender.toLowerCase() == "female") {
        name = genderFemale[dayOfWeek];
    } else if (inputGender.toLowerCase() == "male") {
        name = genderMale[dayOfWeek];
    }
    alert("Your Akan name is " + name)
}

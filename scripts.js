function calculateBirthdayWeek() {
    var inputDay = document.getElementById("date").value;
    let d = new Date(inputDay)
    day = d.getDay()

    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const genderMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    const genderFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    var inputGender = document.getElementById("gender").value;

    var birthDay = weekDays[day]
    var gMale = genderMale[day]
    var gFemale = genderFemale[day]

   
    if (inputGender == 'male') {
        alert('You are born on ' + birthDay + ' and your akan name is ' + gMale)
    } else if (inputGender == 'female') {
        alert('You are born on ' + birthDay + ' and your akan name is ' + gFemale)
    }
}

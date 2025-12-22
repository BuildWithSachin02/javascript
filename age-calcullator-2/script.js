// Button ko pakad rahe hain (Calculate Age button)
const btn = document.getElementById("btn");

// Result dikhane wali jagah ko pakad rahe hain
const result = document.getElementById("result");


// Jab user button par click kare
btn.addEventListener("click", () => {

  // Input box se user ki birth date ki value le rahe hain
  // Yeh value text (string) form me hoti hai: "2003-05-10"
  const birthdayValue = document.getElementById("birthday").value;

  // Agar user ne date select hi nahi ki
  if (birthdayValue === "") {
    // Toh error message dikha do
    result.textContent = "Please select your date of birth";
    return; // Yahin code stop kar do
  }

  // User ki birth date ko REAL DATE object me badal rahe hain
  // Taaki computer ise date samjhe
  const birthDate = new Date(birthdayValue);

  // Aaj ki current date aur time le rahe hain
  const today = new Date();

  // Aaj ki date - birth date
  // Result milliseconds me aata hai
  const diffTime = today - birthDate;

  // Total milliseconds ko days me convert kar rahe hain
  // (1000ms * 60sec * 60min * 24hours = 1 day)
  const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // Total days me se kitne pure years hue
  // 1 year = 365 days (simple logic)
  const years = Math.floor(totalDays / 365);

  // Years nikalne ke baad kitne din bache
  const remainingDaysAfterYears = totalDays % 365;

  // Bache hue din me se months nikal rahe hain
  // 1 month = approx 30 days
  const months = Math.floor(remainingDaysAfterYears / 30);

  // Months nikalne ke baad bache hue din
  const days = remainingDaysAfterYears % 30;

  // Ab time ka part nikal rahe hain (hours)
  // % 24 matlab: ek din ke andar kitne ghante
  const hours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);

  // Minutes nikal rahe hain
  // % 60 matlab: ek ghante ke andar kitni minutes
  const minutes = Math.floor((diffTime / (1000 * 60)) % 60);

  // Seconds nikal rahe hain
  // % 60 matlab: ek minute ke andar kitne seconds
  const seconds = Math.floor((diffTime / 1000) % 60);

  // Ab final result ko screen par dikhate hain
  // Jo bhi calculate hua hai, sab user ko bata dete hain
  result.textContent =
    `Your age is ${years} years, ${months} months, ${days} days, ` +
    `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
});

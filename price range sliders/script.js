// ===============================
// ELEMENTS
// ===============================
const minRange = document.getElementById("minRange");
const maxRange = document.getElementById("maxRange");

const minInput = document.getElementById("minInput");
const maxInput = document.getElementById("maxInput");

const minText = document.getElementById("minDisplay");
const maxText = document.getElementById("maxDisplay");

const apply_btn = document.getElementById("apply-btn");

const gap = 500;

// ===============================
// MIN RANGE SLIDER
// ===============================
minRange.addEventListener("input", () => {
  let minVal = Number(minRange.value);//isse mene input ko hmne string se => Numbers me convert kiya 
  let maxVal = Number(maxRange.value); // same isse bhi qki hme input string me milta h usse hmne number me convert kr diya h

  if (maxVal - minVal < gap) { //issme kyy ho rha h muje difrence ko manage krne ke liye hmne ek global var bnya ussm hmne apne hisab se ek hisab se value dedi  jise diffrence bnaa rhe dono min aur max same nnaa hoo
    minRange.value = maxVal - gap; //abb hmne yeh kiya h ki ek diffrence bnne kel iye hmne max - gap kiya h jise min aur max dono ke bich me 500 ka gap rhe 
    minVal = maxVal - gap;  //same 
  }

  minInput.value = minVal; // jesa ki me chhta tha ki mera ek achaa ui ho toh mene uper niche display test bnya h aur toh hmne yehi kiya issme 
  minText.innerText = minVal; // display text ko hmne power dii h esa keh skte h hum min ki power abb hmne mindisplay ko di h 
});

// ===============================
// MAX RANGE SLIDER
// ===============================
maxRange.addEventListener("input", () => {
  let minVal = Number(minRange.value); //
  let maxVal = Number(maxRange.value);

  if (maxVal - minVal < gap) {
    maxRange.value = minVal + gap;// issme dyaan dene wli baat abb mene issme + gap kiya q min me toh hmne -gap kiya issme q nhi nhi esa nhi issme hme kyy krna h ki dono min aur max me diffrence bnnaake rkhna h mujhe min hmne - kiya toh max me +gap kiya qki agr me dono me -gap karunga toh dono same ho jayenge isliye 
    maxVal = minVal + gap; // same
  }

  maxInput.value = maxVal;
  maxText.innerText = maxVal;
});

// ===============================
// MIN INPUT BOX
// ===============================
minInput.addEventListener("input", () => {
  let minVal = Number(minInput.value);

  minRange.value = minVal;
  minText.innerText = minVal;
});

// ===============================
// MAX INPUT BOX
// ===============================
maxInput.addEventListener("input", () => {
  let maxVal = Number(maxInput.value);

  maxRange.value = maxVal;
  maxText.innerText = maxVal;
});

// ===============================
// APPLY BUTTON VALIDATION
// ===============================
apply_btn.addEventListener("click", () => {
  const minVal = Number(minRange.value);
  const maxVal = Number(maxRange.value);

  // Minimum limit check
  if (minVal < 2000) {
    alert("Minimum price must be at least ₹2000");
    return;
  }

  // Maximum limit check
  if (maxVal > 10000) {
    alert("Maximum price cannot exceed ₹10000");
    return;
  }

  // Gap check
  if (maxVal - minVal < gap) {
    alert(`Price difference must be at least ₹${gap}`);
    return;
  }
  
  // SUCCESS
  alert(`Price filter applied successfully:\n₹${minVal} - ₹${maxVal}`);
});

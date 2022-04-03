let validEmail = false;

let validName = false;

let validPhone = false;

function validateName(nameRef) {

  let val = nameRef.value;

  const submitBtn = document.getElementById("submitBtn");

  if(val.split(" ").length == 2 && val.split(" ")[0].length >= 4 && val.split(" ")[1].length >= 4 ) {

    if(val.split(" ")[0].match(/\d+/g) == null && val.split(" ")[1].match(/\d+/g) == null) {

      nameRef.style.color = 'black';

      validName = true;

    }

    if(validEmail && validPhone) {

      submitBtn.disabled = false;

    } else {

      submitBtn.disabled = true;

    }

  } else {

    validName = false;

    submitBtn.disabled = true;

    nameRef.style.color = 'red';

  }

}

function validateEmail(emailRef) {

  const emailregex = /\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/g;

  const submitBtn = document.getElementById("submitBtn");

  if(emailRef.value.match(emailregex) != emailRef.value) {

    emailRef.style.color = 'red';

    validEmail = false;

    submitBtn.disabled = true;

  } else {

    emailRef.style.color = 'black';

    validEmail = true;

    if(validName && validPhone) {

      submitBtn.disabled = false;

    } else {

      submitBtn.disabled = true;

    }

  }

}

function validateNumber(numberRef,event) {

  let num = numberRef.value;

  const submitBtn = document.getElementById("submitBtn");



  if(num.length == 18) {

    numberRef.value = numberRef.oldValue;

    if(updateProvider(num) && updateState(num)) {

      validPhone = true;

    } else {

      validPhone = false;

    }

    if(validName && validEmail && validPhone) {

      submitBtn.disabled = false;

    } else {

      submitBtn.disabled = true;

    }

    return true;

  }

  if(num.length == 0) {

    numberRef.value = "(" + num;

  } else if(num.length == 4 && event.keyCode != 8) {

    updateProvider(num);

    numberRef.value = num + ") - ";

  } else if(num.length == 11 && event.keyCode != 8) {

    updateState(num);

    numberRef.value = num + " - ";

  }

  validPhone = false;

  submitBtn.disabled = true;

  return false;

}

function updateProvider(num) {

  var provider = document.getElementById("provider");

  if(num.length >= 4) {
    var num = parseInt(num.split("(")[1].substr(0,3));
    if(num >= 621 && num <= 799) {

      provider.innerHTML = `<img src="./jio.png" alt="Jio"/>`;

    } else if(num >= 801 && num <= 920) {

      provider.innerHTML = `<img src="./idea.png" alt= "Idea"/>`;

    } else if(num >= 921 && num <= 999) {

      provider.innerHTML = `<img src="./vodafone.png" alt= "Vodafone"/>`;

    } else {

      provider.innerText = "";

      return false;

    }

    return true;

  }

}

function updateState(num) {

  var state = document.getElementById("state");

  if(num.length >= 11) {

    var num = parseInt(num.split(") - ")[1].substr(0,3));

    console.log(num);

    if(num >= 000 && num <= 010) {

      state.innerText = "Madhya Pradesh";

    } else if(num >= 011 && num <= 020) {

      state.innerText = "Maharastra";

    } else if(num >= 021 && num <= 030) {

      state.innerText = "Karnataka";

    } else if(num > 031 && num <= 040) {

      state.innerText = "Gujarat";

    }  else if(num > 041 && num <= 050) {

      state.innerText = "Andhra Pradesh";

    } else if(num > 051 && num <= 060) {

      state.innerText = "Arunachal Pradesh";

    } else if(num > 061 && num <= 070) {

      state.innerText = "Assam";

    } else if(num > 071 && num <= 100) {

      state.innerText = "Bihar";

    } else if(num > 101 && num <= 120) {

      state.innerText = "Chattisgarh";

    } else if(num > 121 && num <= 150) {

      state.innerText = "Goa";

    } else if(num > 151 && num <= 180) {

      state.innerText = "Haryana";

    } else if(num > 181 && num <= 210) {

      state.innerText = "Himachal Pradesh";

    } else if(num > 211 && num <= 230) {

      state.innerText = "Jharkhand";

    } else if(num > 231 && num <= 270) {

      state.innerText = "Karnataka";

    } else if(num > 271 && num <= 300) {

      state.innerText = "Kerala";

    } else if(num > 301 && num <= 340) {

      state.innerText = "Manipur";

    } else if(num > 341 && num <= 380) {

      state.innerText = "Meghalaya";

    } else if(num > 381 && num <= 410) {

      state.innerText = "Mizoram";

    } else if(num > 411 && num <= 430) {

      state.innerText = "Nagaland";

    } else if(num > 431 && num <= 460) {

      state.innerText = "odisha";

    } else if(num > 461 && num <= 500) {

      state.innerText = "Punjab";

    } else if(num > 501 && num <= 530) {

      state.innerText = "Rajasthan";

    } else if(num > 531 && num <= 550) {

      state.innerText = "Sikkim";

    } else if(num > 551 && num <= 570) {

      state.innerText = "Tamil Nadu";

    } else if(num > 571 && num <= 590) {

      state.innerText = "Telangana";

    } else if(num > 591 && num <= 610) {

      state.innerText = "Tripura";

    } else if(num > 611 && num <= 630) {

      state.innerText = "Uttar Pradesh";

    } else if(num > 631 && num <= 650) {

      state.innerText = "Uttarakhand";

    } else if(num > 651 && num <= 670) {

      state.innerText = "West Bengal";

    } else if(num > 671 && num <= 690) {

      state.innerText = "Andaman and Nicobar Islands";

    } else if(num > 690 && num <= 720) {

      state.innerText = "Dadra and Nagar Haveli and Daman and Diu";

    } else if(num > 721 && num <= 740) {

      state.innerText = "Chandigarh";

    } else if(num > 741 && num <= 760) {

      state.innerText = "Lakshadweep";

    } else if(num > 761 && num <= 780) {

      state.innerText = "Puducherry";

    } else if(num > 781 && num <= 800) {

      state.innerText = "Delhi";

    } else if(num > 801 && num <= 810) {

      state.innerText = "Ladakh";

    } else if(num > 811 && num <= 850) {

      state.innerText = "Jammu and Kashmir";

    }



  } else {

    state.innerText = "";

    return false;

  }

  return true;

}



function submit() {

  var name = document.getElementById("fullName").value.split(" ")[0];

  var number = document.getElementById("phoneNumber").value;

  window.location.href = window.location.href.replace('index.html','enterotp.html?name='+ name + '&number=' + number);

}

let otp = {

  val : undefined,

  attempts : 0

};
//thankyou
function updateTextOnLoad() {

  let queryParams = Object.fromEntries(new URLSearchParams(window.location.search).entries());

  document.getElementById("thankyounote").innerText = `Dear ${queryParams.name}, Thank you for your enquiry 4 digit verification number has been sent to your phone number ${queryParams.number} ` ;

  otp.val = Math.floor((Math.random() * 10000));

  console.log(otp.val);

}
// otp validation
function validateOtp(otpRef) {

  console.log(otp);

  otp.attempts++;

  if(otpRef.value == otp.val) {

    document.getElementById("otp-div").innerText = "Validation Successfull";
    window.location.href = `http://pixel6.co/`

  }

  // more than 3 attempts

  if(otp.attempts > 2) {

    window.location.href = `http://pixel6.co/error404`;

  }

}
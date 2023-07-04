const userNameInput = document.querySelector("[name='firstName']");
const userLastNameInput = document.querySelector("[name='lastName']");
const tripKmInput = document.querySelector("[name='kilometers']");
const userAgeInput = document.getElementById("selectAge");
const btnConfirm = document.querySelector(".btn-submit");
const btnDelete = document.querySelector(".btn-delete");


btnConfirm.addEventListener("click", function() {

    document.querySelector(".ticket").classList.replace("d-none", "d-block");

    const name = userNameInput.value;
    const lastName = userLastNameInput.value;
    const km = tripKmInput.value;
    const ageSelectIndex = userAgeInput.selectedIndex;

    let price = (km * 0.21).toFixed(2);

    let coupon = 0;

    if (ageSelectIndex === 0) {
      coupon = ((price * 20) / 100).toFixed(2);
      price = (price - coupon).toFixed(2);
    } else if (ageSelectIndex === 2){
      coupon = ((price * 40) / 100).toFixed(2);
      price = (price - coupon).toFixed(2);
    }

    document.querySelector(".table-name").innerHTML = name;
    document.querySelector(".table-lastname").innerHTML = lastName;
    document.querySelector(".table-wagon").innerHTML = Math.floor((Math.random() * 20) + 1 );
    document.querySelector(".table-coupon").innerHTML = "- " + coupon;
    document.querySelector(".table-price").innerHTML = price + "€";
  }
)

btnDelete.addEventListener( "click", function() {
    userNameInput.value = "";
    userLastNameInput.value = "";
    tripKmInput.value = "";
    userAgeInput.value = "";
  }
)
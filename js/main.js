
/* di base il "document." ti serve a recuperare degli elementi dall'html, 
quello che c'è dopo è solo il modo in cui recuperi questi elementi
(in base all'id, alla classe oppure ad altre cose come in questo caso)*/

const tripKmInput = document.querySelector("[name='kilometers']");
const userAgeInput = document.querySelector("[name='age']");
const btnSubmit = document.querySelector("[type='submit']");

btnSubmit.addEventListener("click", function() {
    const km = tripKmInput.value;
    const age = userAgeInput.value;

    let price = (km * 0.21).toFixed(2);

    let coupon = 0;

    if (age <= 18) {
      coupon = ((price * 20) / 100).toFixed(2);
    } else if (age > 65){
      coupon = ((price * 40) / 100).toFixed(2);
    }

    console.log("Hai uno sconto equivalente a ", coupon, "€, quindi il costo del biglietto è:", (price - coupon).toFixed(2), "€");
  }
)


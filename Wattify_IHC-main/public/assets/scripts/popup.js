document.querySelector('.card-number-input').oninput = () =>{
    formatCardNumber(document.querySelector('.card-number-input'));
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
}

document.querySelector('.card-holder-input').oninput = () => {
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () =>{
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () =>{
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () => {
    const cvvInput = document.querySelector('.cvv-input');
    const cvvValue = cvvInput.value;

    // Verificar la longitud del valor del CVV
    if (cvvValue.length > 3) {
        cvvInput.value = cvvValue.slice(0, 3); // Acortar el valor a tres dígitos
    }

    document.querySelector('.cvv-box').innerText = cvvInput.value;
}


document.querySelector('form').addEventListener('submit', function(event) 
{event.preventDefault();
});

let button = document.querySelector("button");
let cardNumber = document.querySelector(".card-number-input");
let cardHolder = document.querySelector(".card-holder-input")
let cvv = document.querySelector(".cvv-input");
let month = document.querySelector(".month-input");
let year = document.querySelector(".year-input");

button.addEventListener("click", showPopUp);

function showPopUp(){
    let isComplete = cvv.value && cardHolder.value && cardNumber.value && month.value != "month" && year.value != "year"? true : false;

    if(isComplete){
        Swal.fire({
            icon: "success",
            title: "¡El pago se realizó exitosamente!",
            timerProgressBar: true,
            confirmButtonColor: "#ffb703",
          }).then( ()=>{}
          )
    }else{
        Swal.fire({
            icon: "error",
            title: "Verifica los datos e inténtalo nuevamente",
            timerProgressBar: true,
            confirmButtonColor: "#ffb703",
          }).then( ()=>{}
            //codigo para regresar a Consumo
          )
    }
}

function formatCardNumber(input) {
    input.value = input.value.replace(/\D/g, "");
    input.value = input.value.replace(/(\d{4})(?=\d)/g, "$1 ");
  }

  function checkName(input) {
    let regex = /^[A-Za-z\s]+$/;
    let element = document.querySelector('.card-holder-input');
    if (regex.test(input.value)) {
      element.value = input.value;
    } else {
      element.value = "";
    }
  }
  
  document.querySelector('.card-holder-input').addEventListener('input', function() {
    checkName(this);
  });

  document.getElementById('open').addEventListener('click', function() {
    setTimeout(function() {
        window.location.href = 'consumo.html';
    }, 3000);
});

  
  
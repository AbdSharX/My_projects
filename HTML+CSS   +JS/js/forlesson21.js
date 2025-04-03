let form = document.querySelector("#form");


document.querySelector("button.knopkabox4").onclick = 
function() 
{
   if(form.name.value.length == 0){
      document.querySelector("#error").innerHTML = "Пожалуйста заполните поле для имени";
      return false;
   }

   else if(form.name.value.length > 15){
      document.querySelector("#error").innerHTML = "Пожалуйста заполните поле для имени корректно";
      return false;
   }

   else if(form.name.value.length <= 2){
      document.querySelector("#error").innerHTML = "Пожалуйста заполните поле для имени корректно";
      return false;
   }

   else if(form.number.value.length == 0){
      document.querySelector("#error").innerHTML = "Пожалуйста заполните поле для номеров";
      return false;
   }

   else if(form.number.value.length < 9){
      document.querySelector("#error").innerHTML = "Пожалуйста заполните поле для номеров корректно";
      return false;
   }
    
   else if(form.nameavto.value.length == 0){
      document.querySelector("#error").innerHTML = "Пожалуйста заполните поле для выбора авто";
      return false;
   }

   else if(form.nameavto.value != "Lamborgini" && form.nameavto.value != "Chevrolet"  && form.nameavto.value != "Ferarri"){
      document.querySelector("#error").innerHTML = "Извините но у нас в данное время нет в наличии такого авто";
      return false;
   }
   else{
   document.querySelector("#error").innerHTML = "";
   if(form.nameavto.value == "Lamborgini")
      alert("Вы забронировали под названием Lamborgini");
   if(form.nameavto.value == "Chevrolet")
      alert("Вы забронировали под названием Chevrolet");
   if(form.nameavto.value == "Ferarri")
      alert("Вы забронировали под названием Ferarri");
   }
}

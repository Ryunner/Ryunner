document.addEventListener("DOMContentLoaded", function () {
    var submitButton = document.querySelector(".login__submit");
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var acceptCheckbox = document.getElementById("accept");
    var messageElement = document.getElementById("message");
  
    submitButton.addEventListener("click", function () {
      var username = usernameInput.value.trim();
      var password = passwordInput.value.trim();
      var accepted = acceptCheckbox.checked;
  
      if (username === "Yeraldin" && password === "Amor de mi vida" && accepted) {
        messageElement.textContent = "Mi amor, Quiero que sepas lo profundos y sinceros que son mis sentimientos hacia ti. Desde que estamos juntos, mi mundo ha cobrado un significado que nunca antes había experimentado. Cada día a tu lado es un regalo que atesoro profundamente. Eres la personificación de la belleza en mi mundo, tanto por fuera como por dentro. Tu sonrisa ilumina mi día, y cada vez que te miro, me quedo sin aliento. Tu forma de ser es un faro de luz en mi vida, una guía constante que me inspira a ser una mejor persona. Lo que siento por ti es infinito, un amor que no conoce límites ni fronteras. Es un sentimiento que crece con cada mirada compartida, cada risa compartida y cada momento que pasamos juntos. Contigo he experimentado un amor y una pasión que nunca creí posibles, y cada día que pasa, mi amor por ti se profundiza aún más. Eres la persona más importante en mi vida, mi apoyo constante y mi compañera inquebrantable. Quiero que sepas que mi deseo más profundo es pasar el resto de mi vida a tu lado, enfrentando juntos cada desafío y celebrando cada logro. Eres mi amor eterno, mi razón de ser, y no puedo esperar para construir un futuro lleno de amor y felicidad junto a ti. Te amo más allá de las palabras y más allá del tiempo, y siempre serás el faro que guía mi camino. Con todo mi amor, Juan Sebastian el amor de tu vida.";
      } else {
        messageElement.textContent = "SNIIF Código incorrecto D:";
      }
    });
  });
  
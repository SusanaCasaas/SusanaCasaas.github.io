let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #360259;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #0597F2;">Soy Ingeniera en Mecatrónica.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();

window.onload = function() {
  const who = ["the dog", "my granma", "histurtle", "my bird"];
  const what = ["eat", "pissed", "crushed", "broked"];
  const when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  const getNumberRandom = array => {
    return Math.floor(Math.random() * array);
  };
  const getRandomItem = arr => {
    return arr[getNumberRandom(arr.length)];
  };
  const getMessage = () => {
    const sujetoRamdom = getRandomItem(who);
    const verboRamdom = getRandomItem(what);
    const accionRandom = getRandomItem(when);
    const excusa = `${sujetoRamdom}
   ${verboRamdom} ${accionRandom}`;
    document.getElementById("excuse").innerHTML = excusa;
  };
  getMessage();
};

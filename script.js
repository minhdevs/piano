const notes = [
  "a48.mp3",
  "a55.mp3",
  "a69.mp3",
  "a76.mp3",
  "a83.mp3",
  "a90.mp3",
  "b57.mp3",
  "b73.mp3",
  "b84.mp3",
  "a49.mp3",
  "a56.mp3",
  "a70.mp3",
  "a77.mp3",
  "a84.mp3",
  "b49.mp3",
  "b66.mp3",
  "b74.mp3",
  "b86.mp3",
  "a50.mp3",
  "a57.mp3",
  "a71.mp3",
  "a78.mp3",
  "a85.mp3",
  "b50.mp3",
  "b67.mp3",
  "b76.mp3",
  "b87.mp3",
  "a51.mp3",
  "a65.mp3",
  "a72.mp3",
  "a79.mp3",
  "a86.mp3",
  "b52.mp3",
  "b68.mp3",
  "b79.mp3",
  "b89.mp3",
  "a52.mp3",
  "a66.mp3",
  "a73.mp3",
  "a80.mp3",
  "a87.mp3",
  "b53.mp3",
  "b69.mp3",
  "b80.mp3",
  "b90.mp3",
  "a53.mp3",
  "a67.mp3",
  "a74.mp3",
  "a81.mp3",
  "a88.mp3",
  "b54.mp3",
  "b71.mp3",
  "b81.mp3",
  "a54.mp3",
  "a68.mp3",
  "a75.mp3",
  "a82.mp3",
  "a89.mp3",
  "b56.mp3",
  "b72.mp3",
  "b83.mp3",
];

const a = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

const b = [
  "1",
  "2",
  "4",
  "5",
  "6",
  "8",
  "9",
  "q",
  "w",
  "e",
  "t",
  "y",
  "i",
  "o",
  "p",
  "s",
  "d",
  "g",
  "h",
  "j",
  "l",
  "z",
  "c",
  "v",
  "b",
];

const codeNoteA = [
  "49",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "48",
  "81",
  "87",
  "69",
  "82",
  "84",
  "89",
  "85",
  "73",
  "79",
  "80",
  "65",
  "83",
  "68",
  "70",
  "71",
  "72",
  "74",
  "75",
  "76",
  "90",
  "88",
  "67",
  "86",
  "66",
  "78",
  "77",
];

const codeNoteB = [
  "49",
  "50",
  "52",
  "53",
  "54",
  "56",
  "57",
  "81",
  "87",
  "69",
  "84",
  "89",
  "73",
  "79",
  "80",
  "83",
  "68",
  "71",
  "72",
  "74",
  "76",
  "90",
  "67",
  "86",
  "66",
];

$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);

async function setNote() {
  container = $(".container");
  tones = "";
  return "Hello";
}
setNote()
  .then((success, error) => {
    for (let i = 0; i < 5; i++) {
      if (i == 4) {
        tones += `
          <div class="box-tone">
            <div class="a">1</div>
            <div class="a">2</div>
            <div class="a">3</div>
            <div class="a">4</div>
            <div class="a">5</div>
            <div class="a">6</div>
            <div class="a">7</div>
            <div class="a">7</div>
            <div class="b b1">Shift <br />+ <br />1</div>
            <div class="b b2">Shift <br />+ <br />1</div>
            <div class="b b3">Shift <br />+ <br />1</div>
            <div class="b b4">Shift <br />+ <br />1</div>
            <div class="b b5">Shift <br />+ <br />1</div>
          </div>
          `;
      } else {
        tones += `
        <div class="box-tone">
        <div class="a">1</div>
        <div class="a">2</div>
        <div class="a">3</div>
        <div class="a">4</div>
        <div class="a">5</div>
        <div class="a">6</div>
        <div class="a">7</div>
          <div class="b b1">Shift <br />+ <br />1</div>
          <div class="b b2">Shift <br />+ <br />1</div>
          <div class="b b3">Shift <br />+ <br />1</div>
          <div class="b b4">Shift <br />+ <br />1</div>
          <div class="b b5"><i class="fa-solid fa-arrow-up"></i> <br />+ <br />1</div>
        </div>
        `;
      }
    }
    container.innerHTML = tones;
  })
  .then((success, error) => {
    noteA = $$(".a");
    for (let i = 0; i < noteA.length; i++) {
      noteA[i].innerHTML = a[i];
      noteA[i].onmousedown = () => {
        playNote(codeNoteA[i]);
      };

      noteA[i].setAttribute("note", "a" + codeNoteA[i]);
    }
  })
  .then((success, error) => {
    noteB = $$(".b");
    for (let i = 0; i < noteB.length; i++) {
      noteB[i].innerHTML = `<p>shift</p><p>+</p>${b[i]}`;
      noteB[i].onmousedown = () => {
        playNote(codeNoteB[i], true);
      };
      noteB[i].setAttribute("note", "b" + codeNoteB[i]);
    }
  });
var note = new Audio();
var src = "";
var befor;
function playNote(code, shiftKey = false) {
  befor == code ? note.pause() : (befor = code);

  if (shiftKey) {
    src = "b" + code + ".mp3";
  } else {
    src = "a" + code + ".mp3";
  }
  note = new Audio("./piano/note/" + src);
  note.play();
}

document.onkeydown = (e) => {
  code = e.keyCode;
  type = e.shiftKey ? "b" : "a";
  let k = $('[note="' + type + code + '"]');
  try {
    k.classList.add("note-active");
    setTimeout(() => {
      k.classList.remove("note-active");
    }, 100);
    playNote(code, e.shiftKey);
  } catch (sd) {
    console.clear();
  }
};
document.addEventListener(
  "contextmenu",
  function (e) {
    e.preventDefault();
  },
  false
);
(function () {
  (function () {
    try {
      (function b(i) {
        if (("" + i / i).length !== 1 || i % 20 === 0) {
          (function () {}.constructor("debugger")());
        } else {
          debugger;
        }
        b(++i);
      })(0);
    } catch (e) {
      setTimeout(a, 5000);
    }
  })();
})();

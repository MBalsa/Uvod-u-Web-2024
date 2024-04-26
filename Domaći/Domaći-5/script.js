const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

const powerBtn = document.querySelector(".power--btn");
const powerBox = document.querySelector(".power--btn-box");
const bankBtn = document.querySelector(".bank--btn");
const bankBox = document.querySelector(".bank--btn-box");
const btns = document.querySelectorAll(".btn");
const soundN = document.querySelector(".sound-name");
const slider = document.getElementById("myRange");

powerBtn.addEventListener("click", function () {
  powerBtn.classList.toggle("on");
  if (powerBtn.classList.contains("on")) {
    powerBox.style.backgroundColor = "green";
  } else {
    powerBox.style.backgroundColor = "red";
  }
});

bankBtn.addEventListener("click", function () {
  bankBtn.classList.toggle("onBank");
});

const currentBank = bankBtn.classList.contains("onBank") ? bankTwo : bankOne;

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (powerBtn.classList.contains("on")) {
      const currentBank = bankBtn.classList.contains("onBank")
        ? bankTwo
        : bankOne;

      const sound = currentBank.find(
        (item) => item.keyTrigger === btn.textContent
      );

      if (sound) {
        let audio = new Audio(sound.url);
        audio.volume = slider.value / 100;
        audio.play();
        soundN.textContent = sound.id;
      }
    }
  });
});

function playSound(key) {
  if (powerBtn.classList.contains("on")) {
    const currentBank = bankBtn.classList.contains("onBank")
      ? bankTwo
      : bankOne;

    const sound = currentBank.find(
      (item) => item.keyTrigger.toUpperCase() === key.toUpperCase()
    );

    if (sound) {
      let audio = new Audio(sound.url);
      audio.volume = slider.value / 100;
      audio.play();
      soundN.textContent = sound.id;
    }
  }
}

document.addEventListener("keydown", function (e) {
  playSound(e.key);
});

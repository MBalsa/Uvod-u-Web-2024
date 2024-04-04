const ucenici = [
  {
    ime: "Ana",
    prezime: "Kovačević",
    godina_rodjenja: 2005,
    pol: `ž`,
    ocjene: {
      matematika: 4,
      maternji_jezik: 5,
      engleski_jezik: 3,
      biologija: 4,
      likovna_kultura: 5,
    },
    izracunajProsjek: function () {
      let sum = 0;
      for (let i = 0; i < Object.entries(this.ocjene).length; i++) {
        sum = sum + Object.entries(this.ocjene)[i][1];
      }
      this.prosjek = sum / Object.entries(this.ocjene).length;
      return this.prosjek;
    },

    dodijeliUspjeh: function () {
      if (this.prosjek >= 4.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je odličan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je odlična.`;
        }
      } else if (this.prosjek >= 3.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je vrlodobar.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je vrlodobra.`;
        }
      } else if (this.prosjek >= 2.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je dobar.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je dobra.`;
        }
      } else if (this.prosjek >= 1.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je dovoljan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je dovoljna.`;
        }
      } else {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je nedovoljan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je nedovoljna.`;
        }
      }
    },
  },
  {
    ime: "Marko",
    prezime: "Petrović",
    godina_rodjenja: 2006,
    pol: "m",
    ocjene: {
      matematika: 5,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 3,
      likovna_kultura: 4,
    },
    izracunajProsjek: function () {
      let sum = 0;
      for (let i = 0; i < Object.entries(this.ocjene).length; i++) {
        sum = sum + Object.entries(this.ocjene)[i][1];
      }
      this.prosjek = sum / Object.entries(this.ocjene).length;
      return this.prosjek;
    },
    dodijeliUspjeh: function () {
      if (this.prosjek >= 4.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je odličan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je odlična.`;
        }
      } else if (this.prosjek >= 3.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je vrlodobar.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je vrlodobra.`;
        }
      } else if (this.prosjek >= 2.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je dobar.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je dobra.`;
        }
      } else if (this.prosjek >= 1.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je dovoljan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je dovoljna.`;
        }
      } else {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je nedovoljan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je nedovoljna.`;
        }
      }
    },
  },
  {
    ime: "Elena",
    prezime: "Jovanović",
    godina_rodjenja: 2005,
    pol: "ž",
    ocjene: {
      matematika: 3,
      maternji_jezik: 5,
      engleski_jezik: 4,
      biologija: 4,
      likovna_kultura: 4,
    },
    izracunajProsjek: function () {
      let sum = 0;
      for (let i = 0; i < Object.entries(this.ocjene).length; i++) {
        sum = sum + Object.entries(this.ocjene)[i][1];
      }
      this.prosjek = sum / Object.entries(this.ocjene).length;
      return this.prosjek;
    },
    dodijeliUspjeh: function () {
      if (this.prosjek >= 4.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je odličan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je odlična.`;
        }
      } else if (this.prosjek >= 3.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je vrlodobar.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je vrlodobra.`;
        }
      } else if (this.prosjek >= 2.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je dobar.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je dobra.`;
        }
      } else if (this.prosjek >= 1.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je dovoljan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je dovoljna.`;
        }
      } else {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je nedovoljan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je nedovoljna.`;
        }
      }
    },
  },
  {
    ime: "Ivan",
    prezime: "Popović",
    godina_rodjenja: 2007,
    pol: "m",
    ocjene: {
      matematika: 5,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 5,
      likovna_kultura: 3,
    },
    izracunajProsjek: function () {
      let sum = 0;
      for (let i = 0; i < Object.entries(this.ocjene).length; i++) {
        sum = sum + Object.entries(this.ocjene)[i][1];
      }
      this.prosjek = sum / Object.entries(this.ocjene).length;
      return this.prosjek;
    },
    dodijeliUspjeh: function () {
      if (this.prosjek >= 4.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je odličan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je odlična.`;
        }
      } else if (this.prosjek >= 3.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je vrlodobar.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je vrlodobra.`;
        }
      } else if (this.prosjek >= 2.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je dobar.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je dobra.`;
        }
      } else if (this.prosjek >= 1.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je dovoljan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je dovoljna.`;
        }
      } else {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je nedovoljan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je nedovoljna.`;
        }
      }
    },
  },
  {
    ime: "Jelena",
    prezime: "Nikolić",
    godina_rodjenja: 2006,
    pol: "ž",
    ocjene: {
      matematika: 4,
      maternji_jezik: 3,
      engleski_jezik: 5,
      biologija: 4,
      likovna_kultura: 4,
    },
    izracunajProsjek: function () {
      let sum = 0;
      for (let i = 0; i < Object.entries(this.ocjene).length; i++) {
        sum = sum + Object.entries(this.ocjene)[i][1];
      }
      this.prosjek = sum / Object.entries(this.ocjene).length;
      return this.prosjek;
    },
    dodijeliUspjeh: function () {
      if (this.prosjek >= 4.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je odličan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je odlična.`;
        }
      } else if (this.prosjek >= 3.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je vrlodobar.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je vrlodobra.`;
        }
      } else if (this.prosjek >= 2.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je dobar.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je dobra.`;
        }
      } else if (this.prosjek >= 1.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je dovoljan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je dovoljna.`;
        }
      } else {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je nedovoljan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je nedovoljna.`;
        }
      }
    },
  },
  {
    ime: "Stefan",
    prezime: "Stojanović",
    godina_rodjenja: 2007,
    pol: "m",
    ocjene: {
      matematika: 5,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 3,
      likovna_kultura: 5,
    },
    izracunajProsjek: function () {
      let sum = 0;
      for (let i = 0; i < Object.entries(this.ocjene).length; i++) {
        sum = sum + Object.entries(this.ocjene)[i][1];
      }
      this.prosjek = sum / Object.entries(this.ocjene).length;
      return this.prosjek;
    },
    dodijeliUspjeh: function () {
      if (this.prosjek >= 4.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je odličan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je odlična.`;
        }
      } else if (this.prosjek >= 3.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je vrlodobar.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je vrlodobra.`;
        }
      } else if (this.prosjek >= 2.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je dobar.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je dobra.`;
        }
      } else if (this.prosjek >= 1.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je dovoljan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je dovoljna.`;
        }
      } else {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je nedovoljan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je nedovoljna.`;
        }
      }
    },
  },
  {
    ime: "Milica",
    prezime: "Simić",
    godina_rodjenja: 2005,
    pol: "ž",
    ocjene: {
      matematika: 4,
      maternji_jezik: 5,
      engleski_jezik: 4,
      biologija: 3,
      likovna_kultura: 4,
    },
    izracunajProsjek: function () {
      let sum = 0;
      for (let i = 0; i < Object.entries(this.ocjene).length; i++) {
        sum = sum + Object.entries(this.ocjene)[i][1];
      }
      this.prosjek = sum / Object.entries(this.ocjene).length;
      return this.prosjek;
    },
    dodijeliUspjeh: function () {
      if (this.prosjek >= 4.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je odličan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je odlična.`;
        }
      } else if (this.prosjek >= 3.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je vrlodobar.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je vrlodobra.`;
        }
      } else if (this.prosjek >= 2.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je dobar.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je dobra.`;
        }
      } else if (this.prosjek >= 1.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je dovoljan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je dovoljna.`;
        }
      } else {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je nedovoljan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je nedovoljna.`;
        }
      }
    },
  },
  {
    ime: "Nikola",
    prezime: "Pavlović",
    godina_rodjenja: 2006,
    pol: "m",
    ocjene: {
      matematika: 3,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 5,
      likovna_kultura: 4,
    },
    izracunajProsjek: function () {
      let sum = 0;
      for (let i = 0; i < Object.entries(this.ocjene).length; i++) {
        sum = sum + Object.entries(this.ocjene)[i][1];
      }
      this.prosjek = sum / Object.entries(this.ocjene).length;
      return this.prosjek;
    },
    dodijeliUspjeh: function () {
      if (this.prosjek >= 4.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je odličan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je odlična.`;
        }
      } else if (this.prosjek >= 3.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je vrlodobar.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je vrlodobra.`;
        }
      } else if (this.prosjek >= 2.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je dobar.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je dobra.`;
        }
      } else if (this.prosjek >= 1.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je dovoljan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je dovoljna.`;
        }
      } else {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je nedovoljan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je nedovoljna.`;
        }
      }
    },
  },
  {
    ime: "Sara",
    prezime: "Ilić",
    godina_rodjenja: 2007,
    pol: "ž",
    ocjene: {
      matematika: 5,
      maternji_jezik: 3,
      engleski_jezik: 5,
      biologija: 4,
      likovna_kultura: 3,
    },
    izracunajProsjek: function () {
      let sum = 0;
      for (let i = 0; i < Object.entries(this.ocjene).length; i++) {
        sum = sum + Object.entries(this.ocjene)[i][1];
      }
      this.prosjek = sum / Object.entries(this.ocjene).length;
      return this.prosjek;
    },
    dodijeliUspjeh: function () {
      if (this.prosjek >= 4.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je odličan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je odlična.`;
        }
      } else if (this.prosjek >= 3.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je vrlodobar.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je vrlodobra.`;
        }
      } else if (this.prosjek >= 2.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je dobar.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je dobra.`;
        }
      } else if (this.prosjek >= 1.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je dovoljan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je dovoljna.`;
        }
      } else {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je nedovoljan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je nedovoljna.`;
        }
      }
    },
  },
  {
    ime: "Luka",
    prezime: "Đorđević",
    godina_rodjenja: 2005,
    pol: "m",
    ocjene: {
      matematika: 4,
      maternji_jezik: 4,
      engleski_jezik: 4,
      biologija: 5,
      likovna_kultura: 5,
    },
    izracunajProsjek: function () {
      let sum = 0;
      for (let i = 0; i < Object.entries(this.ocjene).length; i++) {
        sum = sum + Object.entries(this.ocjene)[i][1];
      }
      this.prosjek = sum / Object.entries(this.ocjene).length;
      return this.prosjek;
    },
    dodijeliUspjeh: function () {
      if (this.prosjek >= 4.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je odličan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je odlična.`;
        }
      } else if (this.prosjek >= 3.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je vrlodobar.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je vrlodobra.`;
        }
      } else if (this.prosjek >= 2.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je dobar.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je dobra.`;
        }
      } else if (this.prosjek >= 1.5) {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je dovoljan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je dovoljna.`;
        }
      } else {
        if (this.pol === "m") {
          this.uspjeh = `${this.ime} ${this.prezime} je nedovoljan.`;
        } else {
          this.uspjeh = `${this.ime} ${this.prezime} je nedovoljna.`;
        }
      }
    },
  },
];

console.log(ucenici[0].izracunajProsjek());

ucenici[0].dodijeliUspjeh();
console.log(ucenici[0].uspjeh);

function statistkaUspjeha(nizObjekata) {
  const objekat = {
    odlican: 0,
    vrlodobar: 0,
    dobar: 0,
    dovoljan: 0,
    nedovoljan: 0,
  };
  for (let i = 0; i < nizObjekata.length; i++) {
    if (nizObjekata[i].izracunajProsjek() >= 4.5) {
      objekat.odlican++;
    } else if (nizObjekata[i].izracunajProsjek() >= 3.5) {
      objekat.vrlodobar++;
    } else if (nizObjekata[i].izracunajProsjek() >= 2.5) {
      objekat.dobar++;
    } else if (nizObjekata[i].izracunajProsjek() >= 1.5) {
      objekat.dovoljan++;
    } else {
      objekat.nedovoljan++;
    }
  }
  return objekat;
}

console.log(statistkaUspjeha(ucenici));

// Bubble Sort algoritam sortiranja
function sortirajUcenike(nizObjekata) {
  for (let i = 0; i < nizObjekata.length; i++) {
    for (let j = 0; j < nizObjekata.length - i - 1; j++) {
      if (nizObjekata[j].prezime > nizObjekata[j + 1].prezime) {
        let temp = nizObjekata[j];
        nizObjekata[j] = nizObjekata[j + 1];
        nizObjekata[j + 1] = temp;
      }
    }
  }
  return nizObjekata;
}

console.log(sortirajUcenike(ucenici));

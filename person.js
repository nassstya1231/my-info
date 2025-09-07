// person.js
export const person = {
  firstName: "Анастасія",
  lastName: "Наконечна",
  middleName: "Юріївна",
  age: 18,
  parents: {
    mother: "Наконечна Олена Іванівна",
    father: "—" 
  },
  birthplace: "с. Кашперівка, Білоцерківський район, Київська область",
  currentCity: "Гуртожиток №10 НУБіП, вул. Горіхуватський шлях, 7А",
  pets: [
    { type: "кіт", name: "Кубік" },
    { type: "кіт", name: "Мурчик" },
  ],
  favoriteLanguages: ["Python", "JavaScript"],
  university: "Національний університет біоресурсів і природокористування України",

  getInfo() {
    return {
      fullName: `${this.lastName} ${this.firstName} ${this.middleName}`,
      age: this.age,
      parents: { ...this.parents },
      birthplace: this.birthplace,
      currentCity: this.currentCity,
      pets: this.pets.map(p => ({ ...p })),
      favoriteLanguages: [...this.favoriteLanguages],
      university: this.university
    };
  }
};

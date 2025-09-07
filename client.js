import { person } from "./person.js";

function showPersonInfo(info) {
  console.log("=== Інформація про особу ===");
  console.log("ПІБ:", info.fullName);
  console.log("Вік:", info.age);
  console.log("Мати:", info.parents.mother);
  console.log("Батько:", info.parents.father);
  console.log("Місто народження:", info.birthplace);
  console.log("Місце перебування:", info.currentCity);
  console.log("Домашні улюбленці:");
  info.pets.forEach(p => console.log(`  - ${p.type}: ${p.name}`));
  console.log("Улюблені мови програмування:", info.favoriteLanguages.join(", "));
  console.log("Університет:", info.university);
}

const info = person.getInfo();
showPersonInfo(info);

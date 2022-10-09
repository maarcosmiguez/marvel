export const urlBase = "https://gateway.marvel.com/v1/public/characters";
const timeZone = "ts=1000";
const apikey = "&apikey=b6847664cfd533605e325588b62af044";
const hash = "&hash=4990c9ec6007b3a745c1bbc20f22b7a3";
const limit = "&limit=100";
export const eventos = "events=321,314,315";
export const parametrosComunes = `${timeZone}${limit}${apikey}${hash}`;

// pegada personajes:
// https://gateway.marvel.com/v1/public/characters?ts=1000&limit=100&apikey=b6847664cfd533605e325588b62af044&hash=4990c9ec6007b3a745c1bbc20f22b7a3&events=321,314,315

//pegada eventos de personaje id 1009187:
//https://gateway.marvel.com/v1/public/characters/1009187/events?ts=1000&limit=100&apikey=b6847664cfd533605e325588b62af044&hash=4990c9ec6007b3a745c1bbc20f22b7a3

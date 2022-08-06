const fs = require("fs/promises");
const path = require("path");

const dataPath = path.join(__dirname, "db", "films.json");
// const dataPath = path.resolve("db", "films.json");
// const dataPath = path.join(__dirname, "..", "db", "films.json");
console.log(__dirname);
console.log(dataPath);
// async function fileRead(path) {
//   try {
//     const data = await fs.readFile(path, "utf-8");
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// fileRead(dataPath);

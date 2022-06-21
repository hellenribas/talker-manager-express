const fs = require('fs').promises;

const readFile = async (PATH_FILE) => {
    try {
        const jsonFile = await fs.readFile(PATH_FILE, 'utf8');
        return jsonFile;
    } catch (e) {
        console.log(`erro: ${e.message}`);
    }
};

const writeFile = async (PATH_FILE, text) => {
  try {
      const readFiles = await fs.readFile(PATH_FILE, 'utf8');
      const file = (JSON.parse(readFiles));
      file.push(text);
      const newArray = JSON.stringify(file);
      await fs.writeFile(PATH_FILE, newArray);
  } catch (err) {
      console.log(`erro: ${err.message}`);
  }
};

const deleteFile = async (PATH_FILE, text) => {
    try {
        await fs.writeFile(PATH_FILE, JSON.stringify(text));
        return text;
    } catch (err) {
        console.log(`erro: ${err.message}`);
    }
};

module.exports = {
   readFile,
   writeFile,
   deleteFile,
};
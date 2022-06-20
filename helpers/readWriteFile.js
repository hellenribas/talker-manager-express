const fs = require('fs').promises;

const readFile = async (PATH_FILE) => {
    try {
        const jsonFile = await fs.readFile(PATH_FILE, 'utf8');
        return jsonFile;
    } catch (e) {
        console.log(`erro: ${e.message}`);
    }
};
module.exports = {
   readFile,
};
const fs = require("fs").promises;

const arguments = process.argv.slice(2)

console.log(arguments);



async function ReadFile(file) {
    const data = await fs.readFile(file);
    const datatostring = data.toString();
    console.log(datatostring);
}


async function WriteFile(content) {
    await fs.writeFile('spesa.txt', content, {flag: 'a+'})
}


const content = `${arguments[0]}`
const content2 = `${arguments[1]}`


async function WriteAndRead () {
    await WriteFile ("Prodotto\n");
    await WriteFile (content);
    await WriteFile ("\n");
    await WriteFile ("Quantita\n");
    await WriteFile (content2);
    await ReadFile('spesa.txt');
}

WriteAndRead();
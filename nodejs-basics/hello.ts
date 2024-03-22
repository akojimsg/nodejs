const os = require('os');
const fs = require('fs');

//os object to interact with operating system
console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.networkInterfaces());
console.log(os.userInfo());
console.log(os.uptime());
console.log(os.release());
console.log(os.type());
console.log(os.userInfo());

//Read a csv array and convert to a json array
fs.readFile('./resources/file.csv', (err: any, data: Buffer) => {
  if (err) console.log(err);

  console.log(data.toString());
});

const readStream = fs.createReadStream('./resources/file.csv', {
  encoding: 'utf8',
});
readStream.on('data', (chunk: any) => {
  console.log(chunk);
});

//Write file to a buffer
fs.writeFile('./resources/out.txt', 'Hello world!', (err: any) => {
  if (err) console.log(err);
});

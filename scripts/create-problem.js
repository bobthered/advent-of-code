import fs from "fs";
import { DateTime } from "luxon";
import Readline from "readline";

const readline = Readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const currentYear = DateTime.now().toFormat("yyyy");

const year = await new Promise((resolve) => {
  readline.question(
    `What year is this for ? (default="${currentYear}") `,
    (answer) => {
      resolve(answer || currentYear);
    }
  );
});
const day = await new Promise((resolve) =>
  readline.question("What day is this for ? ", resolve)
);
const title = await new Promise((resolve) =>
  readline.question("What is the title ? ", resolve)
);

const path = `${day}-${title.toLowerCase().split(" ").join("-")}`;

const writeFile = (path, content) => {
  const writeStream = fs.createWriteStream(path);
  writeStream.write(content);
  writeStream.end();
};

readline.close();

readline.on("close", () => process.exit(0));

if (!fs.existsSync(`./${year}/${path}`)) {
  fs.mkdirSync(`./${year}/${path}`, { recursive: true });

  const files = [
    {
      path: `./${year}/${path}/index.test.js`,
      content: `import { describe, it, expect } from 'vitest';
import { example1, example2, input } from './input.js';
import { partOne, partTwo } from './solution';

describe('Part One', () => {
  it('Example', () => {
    expect(partOne(example1)).toBe(1);
  })

//  it('User Puzzle Input', () => {
//    expect(partOne(input)).toBe(1);
//  })
})

// describe('Part Two', () => {
//   it('Example', () => {
//     expect(partTwo(example2)).toBe(1);
//   })
// 
//   it('User Puzzle Input', () => {
//     expect(partTwo(input)).toBe(1);
//   })
// })`,
    },
    {
      path: `./${year}/${path}/input.js`,
      content: `export const example1 = \`\`;\rexport const example2 = \`\`;\rexport const input = \`\`;`,
    },
    { path: `./${year}/${path}/README.md`, content: `# ${day} - ${title}` },
    {
      path: `./${year}/${path}/solution.js`,
      content: `export const partOne = (input = '') => {
  // parse input
  const lines = input.split('\\n');
  
  return 1;
}`,
    },
  ];

  files.map((file) => {
    console.log(file.path);
    writeFile(file.path, file.content);
  });

  let readmeContents = await new Promise((resolve) =>
    fs.readFile(`./${year}/README.md`, "utf8", (err, data) => resolve(data))
  );
  readmeContents = readmeContents.split("\n");
  const readmePreContents = readmeContents.splice(0, 4);
  readmeContents[
    +day - 1
  ] = `| ${day} | [${title}](./${path}/README.md) | [Solution](./${path}/solution.js)|`;
  readmeContents = [...readmePreContents, ...readmeContents].join("\n");

  await new Promise((resolve) =>
    fs.writeFile(`./${year}/README.md`, readmeContents, resolve)
  );
}

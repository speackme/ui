const fs = require('fs');

const filesToCopy = ['package.json', 'README.md', 'LICENSE', 'CHANGELOG.md'];

filesToCopy.forEach((file) => {
	fs.copyFileSync(file, `dist/${file}`);
});

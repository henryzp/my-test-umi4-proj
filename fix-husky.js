const fs = require('fs');
const path = require('path');
const rootPath = './.git/hooks';
// const rootPath = './';
const filenames = fs.readdirSync(rootPath);
const hookList = [
  'applypatch-msg',
  'pre-applypatch',
  'post-applypatch',
  'pre-commit',
  'pre-merge-commit',
  'prepare-commit-msg',
  'commit-msg',
  'post-commit',
  'pre-rebase',
  'post-checkout',
  'post-merge',
  'pre-push',
  'post-update',
  'push-to-checkout',
  'pre-auto-gc',
  'post-rewrite',
  'sendemail-validate',
];
const insertLine = 'export PATH=/usr/local/bin:$PATH';
filenames.forEach(filename => {
  if (!hookList.includes(filename)) {
    return;
  }
  const filepath = path.join(rootPath, filename);
  const stat = fs.statSync(filepath);
  if (stat.isFile()) {
    const data = fs.readFileSync(filepath, 'utf-8').split('\n');
    data.splice(1, 0, insertLine);
    fs.writeFileSync(filepath, data.join('\n'), { encoding: 'utf-8' });
  }
});

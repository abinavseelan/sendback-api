const exampleContainer = document.getElementById('code-snippet');
const codeHeader = document.getElementById('code-header');

let noteBook; // eslint-disable-line

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line
  notebook = RunKit.createNotebook({
    element: exampleContainer,
    source: 'const request = require(\'axios\');\n\n// Replace \'xx\' with any number you require\nrequest\n\t.get(\'http://127.0.0.0:1337/status-code/2xx\')\n\t.then((response) => {\n\t\tconsole.log(response)\n\t})\n\t.catch(() => {});',
  });
});

// eslint-disable-next-line
const changeExample = (range) => {
  exampleContainer.innerHTML = '';
  let content;
  switch (range) {
    case '2': {
      content = 'const request = require(\'axios\');\n\n// Replace \'xx\' with any number you require\nrequest\n\t.get(\'http://127.0.0.0:1337/status-code/2xx\')\n\t.then((response) => {\n\t\tconsole.log(response)\n\t})\n\t.catch(() => {});';

      codeHeader.innerText = 'Success response codes (2xx)';
      break;
    }

    case '3': {
      content = `
            const request = require('axios');\n\n// Replace 'xx' with any number you require\nrequest\n\t.get('http://127.0.0.0:1337/status-code/3xx')\n\t.then(() => {\n\t\t// no-op since this response code will trigger the catch block\n\t})\n\t.catch((err) => {\n\t\tconsole.log(err);\n\t});
          `;

      codeHeader.innerText = 'Redirect response codes (3xx)';
      break;
    }

    case '4': {
      content = 'const request = require(\'axios\');\n\n// Replace \'xx\' with any number you require\nrequest\n\t.get(\'http://127.0.0.0:1337/status-code/4xx\')\n\t.then(() => {\n\t\t// no-op since this response code will trigger the catch block\n\t})\n\t.catch((err) => {\n\t\tconsole.log(err);\n\t});';

      codeHeader.innerText = 'Client error response codes (4xx)';
      break;
    }

    case '5': {
      content = 'const request = require(\'axios\');\n\n// Replace \'xx\' with any number you require\nrequest\n\t.get(\'http://127.0.0.0:1337/status-code/5xx\')\n\t.then(() => {\n\t\t// no-op since this response code will trigger the catch block\n\t})\n\t.catch((err) => {\n\t\tconsole.log(err);\n\t});';

      codeHeader.innerText = 'Server error response codes (5xx)';
      break;
    }

    default: {
      break;
    }
  }

  // eslint-disable-next-line
  notebook = RunKit.createNotebook({
    element: exampleContainer,
    source: content,
  });
};

new Clipboard('.link'); // eslint-disable-line

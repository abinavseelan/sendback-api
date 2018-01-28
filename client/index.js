/* global notebook */
const exampleContainer = document.getElementById('code-snippet');

let noteBook; // eslint-disable-line
document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line
  notebook = RunKit.createNotebook({
    element: exampleContainer,
    source: '// 2xx response codes\n\nconst request = require(\'axios\');\n\n// Replace \'xx\' with any number you require\nrequest\n\t.get(\'http://127.0.0.0:1337/status-code/2xx\')\n\t.then((response) => {\n\t\tconsole.log(response)\n\t})\n\t.catch(() => {});',
  });
});

// eslint-disable-next-line
const changeExample = (range) => {
  let content;
  switch (range) {
    case '2': {
      content = '// 2xx response codes\n\nconst request = require(\'axios\');\n\n// Replace \'xx\' with any number you require\nrequest\n\t.get(\'http://127.0.0.0:1337/status-code/2xx\')\n\t.then((response) => {\n\t\tconsole.log(response)\n\t})\n\t.catch(() => {});';
      break;
    }

    case '3': {
      content = '// 3xx response codes\n\nconst request = require(\'axios\');\n\n// Replace \'xx\' with any number you require\nrequest\n\t.get(\'http://127.0.0.0:1337/status-code/3xx\')\n\t.then(() => {\n\t\t// no-op since this response code will trigger the catch block\n\t})\n\t.catch((err) => {\n\t\tconsole.log(err);\n\t});';
      break;
    }

    case '4': {
      content = '// 4xx response codes\n\nconst request = require(\'axios\');\n\n// Replace \'xx\' with any number you require\nrequest\n\t.get(\'http://127.0.0.0:1337/status-code/4xx\')\n\t.then(() => {\n\t\t// no-op since this response code will trigger the catch block\n\t})\n\t.catch((err) => {\n\t\tconsole.log(err);\n\t});';
      break;
    }

    case '5': {
      content = '// 5xx response codes\n\nconst request = require(\'axios\');\n\n// Replace \'xx\' with any number you require\nrequest\n\t.get(\'http://127.0.0.0:1337/status-code/5xx\')\n\t.then(() => {\n\t\t// no-op since this response code will trigger the catch block\n\t})\n\t.catch((err) => {\n\t\tconsole.log(err);\n\t});';
      break;
    }

    default: {
      break;
    }
  }

  if (notebook && typeof notebook.setSource === 'function') {
    notebook.setSource(content);
  }
};

new Clipboard('.link-clipboard'); // eslint-disable-line

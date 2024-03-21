const inputObject = {
  head: {},
  body: {},
};

const compileToHTML = (obj) => {
  let html = "<!DOCTYPE html>\n<html>\n";

  for (const key in obj) {
    if (typeof obj[key] === "object") {
      html += `<${key}>\n`;
      for (const prop in obj[key]) {
        html += `<${prop}></${prop}>\n`;
      }
      html += `</${key}>\n`;
    }
  }

  html += "</html>";
  return html;
};

console.log(compileToHTML(inputObject));

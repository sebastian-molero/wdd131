const yearSpan = document.getElementById("currentyear");
const lastModifiedParagraph = document.getElementById("lastModifed");

yearSpan.textContent = new Date().getFullYear();
lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;

const availableKeywords = [
  "Harry Potter",
  "Hermiona Grenger",
  "Ronald Weasley",
  "Albus Brumbál",
  "Dobby",
  "Rubeus Hagrid",
  "Draco Malfoy",
  "Pansy Parkinson",
];

const input = document.getElementById("input");
const resultBox = document.querySelector(".result-box");

const showAutocompleteResults = () => {
  let inputContent = input.value.toLowerCase();

  let results = inputContent.length
    ? availableKeywords.filter((oneKeyword) =>
        oneKeyword.toLowerCase().includes(inputContent)
      )
    : [];

  if (results.length) {
    display(results);
  } else {
    resultBox.innerHTML = "";
  }
};

const display = (array) => {
  const ul = document.createElement("ul");
  array.forEach((oneItem) => {
    const li = document.createElement("li");
    li.textContent = oneItem;
    li.addEventListener("click", () => {
      input.value = oneItem;
      resultBox.innerHTML = "";
    });

    ul.append(li);
  });

  resultBox.innerHTML = "";
  resultBox.append(ul);
};

input.addEventListener("keyup", showAutocompleteResults);

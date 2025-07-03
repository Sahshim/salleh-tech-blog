---
layout: default
title: ITIL FlashCard
permalink: /itil-flashcards/
---
{% include_relative itil-flashcards/index.html %}
<h1>ITIL FlashCards</h1>
<div id="flashcard-container">
  <div id="flashcard" onclick="flipCard()">
    <div id="card-front" class="card-side"></div>
    <div id="card-back" class="card-side hidden"></div>
  </div>
  <div class="controls">
    <button onclick="prevCard()">Previous</button>
    <button onclick="flipCard()">Flip</button>
    <button onclick="nextCard()">Next</button>
  </div>
</div>

<style>
#flashcard-container {
  text-align: center;
  margin: 40px auto;
  max-width: 600px;
}
#flashcard {
  border: 1px solid #ccc;
  padding: 40px;
  border-radius: 10px;
  cursor: pointer;
  min-height: 200px;
  font-size: 18px;
  background: #f9f9f9;
  position: relative;
}
.card-side {
  display: block;
}
.hidden {
  display: none;
}
.controls {
  margin-top: 20px;
}
button {
  margin: 0 10px;
  padding: 10px 20px;
}
</style>

<script>
// Sample Flashcards
const flashcards = [
  { front: "Acceptance criteria", back: "A list of minimum requirements that a service or service component must meet for it to be acceptable to key stakeholders." },
  { front: "Agile", back: "An umbrella term for a collection of frameworks and techniques that together enable teams and individuals to work in a way that is typified by collaboration, prioritization, iterative and incremental delivery, and timeboxing." },
  { front: "Asset register", back: "A database or list of assets, capturing key attributes such as ownership and financial value." },
  { front: "Availability", back: "The ability of an IT service or other configuration item to perform its agreed function when required." }
  // Load more from JSON if needed
];

let currentIndex = 0;
let isFront = true;

function renderCard() {
  document.getElementById("card-front").textContent = flashcards[currentIndex].front;
  document.getElementById("card-back").textContent = flashcards[currentIndex].back;
  document.getElementById("card-front").classList.remove("hidden");
  document.getElementById("card-back").classList.add("hidden");
  isFront = true;
}

function flipCard() {
  isFront = !isFront;
  document.getElementById("card-front").classList.toggle("hidden", !isFront);
  document.getElementById("card-back").classList.toggle("hidden", isFront);
}

function nextCard() {
  currentIndex = (currentIndex + 1) % flashcards.length;
  renderCard();
}

function prevCard() {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  renderCard();
}

window.onload = renderCard;
</script>

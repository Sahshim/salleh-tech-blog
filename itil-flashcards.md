---
layout: default
title: ITIL FlashCard
permalink: /itil-flashcards/
---

<h1>📚 ITIL FlashCards</h1>
<p>Test your knowledge of ITIL terms with these interactive flashcards.</p>

<style>
.flashcard-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
}
.flashcard {
  background: #fff;
  border: 1px solid #ccc;
  width: 300px;
  height: 180px;
  perspective: 1000px;
  cursor: pointer;
}
.flashcard-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  transform-style: preserve-3d;
}
.flashcard.flipped .flashcard-inner {
  transform: rotateY(180deg);
}
.flashcard-front,
.flashcard-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}
.flashcard-front {
  background-color: #f0f8ff;
}
.flashcard-back {
  background-color: #e6ffe6;
  transform: rotateY(180deg);
}
</style>

<div class="flashcard-container" id="flashcard-container"></div>

<script>
const cards = [
  { front: "Acceptance criteria", back: "A list of minimum requirements that a service or service component must meet for it to be acceptable to key stakeholders." },
  { front: "Agile", back: "An umbrella term for a collection of frameworks and techniques that together enable teams and individuals to work in a way typified by collaboration, prioritization, iterative delivery, and timeboxing." },
  { front: "Architecture management practice", back: "The practice of providing an understanding of all the different elements that make up an organization and how those elements relate to one another." },
  // ADD THE REST OF YOUR TERMS HERE — Truncated for example
];

const container = document.getElementById("flashcard-container");

cards.forEach(card => {
  const div = document.createElement("div");
  div.className = "flashcard";
  div.innerHTML = `
    <div class="flashcard-inner">
      <div class="flashcard-front">${card.front}</div>
      <div class="flashcard-back">${card.back}</div>
    </div>
  `;
  div.onclick = () => div.classList.toggle("flipped");
  container.appendChild(div);
});
</script>

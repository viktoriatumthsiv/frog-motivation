const express = require("express");
const app = express();
const PORT = 3000;
 
app.use(express.static("public"));

 
const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

 
const motivations = [
  { message: "Ти можеш усе. Але не сьогодні.", mood: "lazy" },
  { message: "Головне — почати. Але можна й не починати.", mood: "neutral" },
  { message: "Навіть жаба інколи нічого не робить.", mood: "frog-philosophy" }
];

const bugPredictions = [
  { prediction: "Баг буде там, де ти не дивився", severity: "high" },
  { prediction: "Все працює. Це підозріло.", severity: "critical" },
  { prediction: "Помилка в коді, але винен не ти (ти)", severity: "medium" }
];

const excuses = [
  { excuse: "У мене конфлікт з реальністю", category: "life" },
  { excuse: "Я відкрив IDE і закрив", category: "developer-life" },
  { excuse: "Це не баг — це емоційний стан", category: "classic" }
];

const truths = [
  { truth: "Stack Overflow знає тебе краще за друзів", painLevel: 7 },
  { truth: "Ти знову забудеш, як це працює", painLevel: 8 },
  { truth: "Продакшен — це тестове середовище", painLevel: 10 }
];

 
app.get("/frog/motivation", (req, res) => {
  res.json({ status: "ok", data: randomItem(motivations) });
});

app.get("/frog/bug-prediction", (req, res) => {
  res.json({ status: "ok", data: randomItem(bugPredictions) });
});

app.get("/frog/excuse", (req, res) => {
  res.json({ status: "ok", data: randomItem(excuses) });
});

app.get("/frog/truth", (req, res) => {
  res.json({ status: "ok", data: randomItem(truths) });
});
 
app.listen(PORT, () => {
  console.log(` FrogChaos API працює на http://localhost:${PORT}`);
});

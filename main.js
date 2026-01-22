const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", async () => {
    const endpoint = btn.dataset.endpoint;
    result.textContent = "Жаба думає... ";

    try {
      const response = await fetch(window.location.origin + endpoint);
      const data = await response.json();

      let output = "";
      if (data.data.message) {
        output = data.data.message;
      } else if (data.data.prediction) {
        output = data.data.prediction;
      } else if (data.data.excuse) {
        output = data.data.excuse;
      } else if (data.data.truth) {
        output = data.data.truth;
      } else {
        output = JSON.stringify(data.data);
      }

      result.textContent = output;
    } catch (error) {
      console.error(error);
      result.textContent = "Жаба мовчить. Сервер впав 🪦";
    }
  });
});

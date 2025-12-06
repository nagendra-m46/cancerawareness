async function loadquote() {
  const quoteEl = document.getElementById('quote');
  quoteEl.textContent = "Loading...";

  try {
    const response = await fetch("https://zenquotes.io/api/random");

    const data = await response.json();
    quoteEl.textContent = `"${data[0].q}" — ${data[0].a}`;
  } catch (error) {
    console.error(error);
    quoteEl.textContent = "Stay strong. Even on the hardest days, you are not alone.";
  }
}

loadquote();

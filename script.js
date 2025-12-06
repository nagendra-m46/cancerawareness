async function loadquote() {
  const quoteE1 = document.getElementById('quote');
  quoteE1.textContent = 'Loading...';

  try {
    const response = await fetch('https://api.quotable.io/random');

    if (!response.ok) {
      throw new Error('HTTP error:' + response.status);
    }
    const data = await response.json();
    quoteE1.textContent = `"${data.content}" — ${data.author}`;
  } catch (error) {
    console.error('error fetching quote:', error);
    quoteE1.textContent = 'Stay strong . Even on the hardest days, you are not alone.';
  }
}

loadquote();

const OpenAI = require("openai");

// Replace 'your_api_key_here' with your actual API key
const openai = new OpenAI({
  apiKey: "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",
});

async function main() {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }],
      model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]);
  } catch (error) {
    if (error.code === "insufficient_quota") {
      console.error("Rate limit exceeded. Retrying after delay...");
      await delay(5000); // Retry after 5 seconds (adjust as needed)
      await main(); // Retry the main function
    } else {
      console.error("An error occurred:", error);
    }
  }
}

// Function to introduce delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main();

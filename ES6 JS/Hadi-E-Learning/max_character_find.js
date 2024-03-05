function findMostFrequentCharacter(text) {
  // Create a counting box for characters
  let characterCounts = {};

  // Count each character's appearances
  for (let i = 0; i < text.length; i++) {
    const character = text[i];
    characterCounts[character] = characterCounts[character] + 1 || 1;
  }

  // Find the character with the most appearances (using a simple index-based loop)
  let mostFrequentCharacter = "";
  let highestCount = 0;

  for (let i = 0; i < text.length; i++) {
    const character = text[i];
    const count = characterCounts[character];

    // Check if the current character's count is higher than the current highest count
    if (count > highestCount) {
      mostFrequentCharacter = character;
      highestCount = count;
    }

    // Optimization: Stop iterating if the count of the current character matches the string length
    if (count === text.length) {
      break; // No need to continue, as we've found a character that appears in every position
    }
  }

  // Return the count of the most frequent character
  return characterCounts[mostFrequentCharacter];
}

let result = findMostFrequentCharacter("ABDUWWWWAAAAAAA");
console.log(result); // Output: 4

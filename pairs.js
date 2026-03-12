// 1. The array of 8 names
const names = [
    "Rohail",
    "Thushan",
    "Navpreet",
    "Priya",
    "Afrin",
    "Prathana",
    "Bipassa",
    "Ghanshyam",
    "Reejan",
    "Sanjay",
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const shuffled = shuffleArray([...names]);

console.log("--- Exam Pairs ---");
for (let i = 0; i < shuffled.length; i += 2) {
    const pairNumber = (i / 2) + 1;
    const driver = shuffled[i];
    const navigator = shuffled[i + 1];

    console.log(`Pair ${pairNumber}: ${driver} (Driver) & ${navigator} (Navigator)`);
}
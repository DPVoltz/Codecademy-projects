// Array of predefined messages

const part1Messages = [
    "Believe in yourself",
    "Every journey begins",
    "Dreams become real", 
    "Success is built", 
    "Challenges are faced", 
    "You have the power", 
    "Confidence grows", 
    "Great things happen", 
    "Keep your focus", 
    "Your mindset shapes" ];

const part2Messages = [
    " even when the path is unclear,", 
    " with a single brave step,", 
    " when effort meets vision,", 
    " through consistent effort,", 
    " with courage and persistence,", 
    " to rewrite your story,", 
    " when you take action,", 
    " when you push forward,", 
    " on what truly matters,", 
    " the world you create," ];

const part3Messages = [
    " because you are stronger than you think.", 
    " and every step forward counts.", 
    " so never stop believing in yourself.", 
    " even when no one is watching.", 
    " and that’s how progress is made.", 
    " and no one can take that from you.", 
    " not just ideas.", 
    " no matter the odds.", 
    " and success will follow.", 
    " starting from within." ];
//function to generate a random index for each part of the message
    function generateRandomMessage() {
        const randomPart1 = Math.floor(Math.random() * part1Messages.length);
        const randomPart2 = Math.floor(Math.random() * part2Messages.length);
        const randomPart3 = Math.floor(Math.random() * part3Messages.length);

        const part1 = part1Messages[randomPart1];
        const part2 = part2Messages[randomPart2];
        const part3 = part3Messages[randomPart3];

        const randomMessage = `${part1} ${part2} ${part3}`;

        messageDisplay.textContent = randomMessage;
        return randomMessage;
    }

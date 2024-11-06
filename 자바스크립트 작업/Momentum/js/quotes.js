const quotes = [
    { quote: "Happiness often comes from little, simple things.", author: "Frederick Schiller" },
    { quote: "A journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
    { quote: "The most important thing to achieve your dream is action.", author: "Paulo Coelho" },
    { quote: "Opportunities are not something you wait for, but something you create.", author: "George Bernard Shaw" },
    { quote: "It takes courage to make the impossible possible.", author: "Nelson Mandela" },
    { quote: "The secret to success is taking steps toward your goal, one at a time.", author: "Beethoven" },
    { quote: "Insanity is doing the same thing over and over and expecting different results.", author: "Albert Einstein" },
    { quote: "Don’t confuse a single defeat with a final defeat.", author: "F. Scott Fitzgerald" },
    { quote: "Small actions accumulate to create big changes.", author: "Dalai Lama" },
    { quote: "Life is not about finding yourself; it's about creating yourself.", author: "George Bernard Shaw" }
];
const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");
const todayQuote = quotes[Math.ceil(Math.random() * quotes.length)];

quote.innerHTML = todayQuote.quote;
author.innerHTML = todayQuote.author;



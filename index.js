//https://repl.it/@zohminga/Avengers-Quiz?embed=1&output=1
const chalk = require('chalk')
console.log(
  chalk
    .hex('#005b96')
    .bold(
      "Are you an Avengers know-all? Thor's hammer! You are? Why don't you prove it by taking this suitably epic quiz?",
    ),
)
console.log('\n---------------------------------')

var readLineSync = require('readline-sync')
var score = 0

function play(question, answer) {
  var userInput = readLineSync.question(question)
  if (userInput.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.green('>> correct'))
    score++
  } else {
    console.log(chalk.red('>> wrong!!'))
    console.log(chalk.green('\nThe correct answer is ' + answer))
  }
  console.log('------------------------')
}

questions = [
  {
    question:
      'Q1. What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?\n\n\ta)2005\n\tb)2008\n\tc)2010\n',
    answer: 'b',
  },
  {
    question:
      'Q2. What is the name of Thor’s hammer? \n\n\ta)Vanir\n\tb)Mjolnir\n\tc)Aesir\n',
    answer: 'b',
  },
  {
    question:
      'Q3. What is Captain America’s shield made of?\n\n\ta)Adamantium\n\tb)Carbonadium\n\tc)Vibranium\n',
    answer: 'c',
  },
  {
    question:
      'Q4. What is the alien race Loki sends to invade Earth in The Avengers?\n\n\ta)The Chitauri\n\tb)The Kree\n\tc)The Flerkens\n',
    answer: 'a',
  },
  {
    question:
      'Q5. Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet?\n\n\ta)Loki\n\tb)The Collector\n\tc)Tony Stark\n',
    answer: 'a',
  },
  {
    question:
      'Q6. What fake name does Natasha use when she first meets Tony?\n\n\ta)Nicole Rohan\n\tb)Natalia Romanoff\n\tc)Natalie Rushman\n',
    answer: 'c',
  },
  {
    question:
      'Q7. Where does Peggy tell Steve she wants to meet him for a dance, before he plunges into the ice?\n\n\ta)El Morocco\n\tb)The Copacabana\n\tc)The Stork Club\n',
    answer: 'c',
  },
  {
    question:
      'Q8. Where do Lady Sif and Volstagg keep the Reality Stone after the Dark Elves tried to steal it?\n\n\ta)On Vomir\n\tb)In a vault on Asgard?\n\tc)To the Collector\n',
    answer: 'c',
  },
  {
    question:
      "Q9.  What does the Winter Soldier say after Steve recognizes him for the first time?\n\n\ta)'What did you say?'\n\tb)'Who the hell is Bucky?'\n\tc)'Do i know you'\n",
    answer: 'b',
  },
  {
    question:
      'Q10.  Who is killed by Loki in the Avengers?\n\n\ta)Agent Coulson\n\tb)Maria Hill\n\tc)Dr Erik Selvig\n',
    answer: 'a',
  },
  {
    question:
      'Q11. Who is Black Panther’s sister?\n\n\ta)Shuri\n\tb)Nakia\n\tc)Okoye\n',
    answer: 'a',
  },
  {
    question:
      'Q12. What type of doctor is Stephen Strange?\n\n\ta)Cardiothoracic Surgeon\n\tb)Neurosurgeon\n\tc)Trauma Surgeon\n',
    answer: 'b',
  },
  {
    question:
      'Q13. During the fight on the planet Titan, who is the only one who is able to wound Thanos?\n\n\ta)Iron Man\n\tb)Thor\n\tc)Dr Strange\n',
    answer: 'a',
  },
  {
    question:
      'Q14. What is Stan Lee doing in Avengers: Infinity War?\n\n\ta)Catching a ball at Dougers Stadium\n\tb)Yelling at the Avengers\n\tc)Driving a Bus\n',
    answer: 'c',
  },
  {
    question:
      'Q15. How many Avengers are there in the first Avengers film?\n\n\ta)4\n\tb)5\n\tc)6\n',
    answer: 'c',
  },
  {
    question:
      'Q16. Who was the keeper of the Soul Stone at Vomir\n\n\ta)Red Skull\n\tb)The Destroyer\n\tc)Hela\n',
    answer: 'a',
  },
  {
    question:
      'Q17. What Alien race did Capt Marvel live with from 1989-1995?\n\n\ta)The Kree\n\tb)The Skurlls\n\tc)The Watchers\n',
    answer: 'b',
  },
  {
    question:
      'Q18.Which Race Invades The Earth In The First Avengers Film?\n\n\ta)The Kree\n\tb)The Skurlls\n\tc)The Chitauri\n',
    answer: 'c',
  },
  {
    question:
      'Q19. Which Infinity Stone Is Tesseract?\n\n\ta)Space Stone\n\tb)Soul Stone\n\tc)Mind Stone\n',
    answer: 'c',
  },
  {
    question:
      'Q20.  How many Avengers films are currently out?\n\n\ta)3\n\tb)4\n\tc)5\n',
    answer: 'a',
  },
]

for (i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer)
}
console.log(
  chalk.hex('#005b96')('Congratulation!! Your scored : ' + score + '/20'),
)

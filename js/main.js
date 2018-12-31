let userName = 'You';
userName ?
  console.log('Hello, ' + userName + '!'):
	console.log('Hello!');

let userQuestion = 'Is it going to rain today?';
console.log(`${userName} asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 20);

let eightBall = '';


//using switch for conditional and using string  
switch (randomNumber) {
	case 0:
		eightBall = 'It is certain.';
		break;
	case 1:
		eightBall = 'It is decidedly so.';
		break; 
	case 2:
    	eightBall = 'Without a doubt.';
		break;
	case 3:
		eightBall = 'Yes - definitely.';
		break;
	case 4:
		eightBall = 'You may rely on it.';
		break;
	case 5:
		eightBall = 'As I see it, yes.';
		break;
	case 6:
		eightBall = 'Most likely.';
		break;
	case 7:
		eightBall = 'Outlook good.';
		break;
	case 8:
		eightBall = 'Yes.';
		break;
	case 9:
		eightBall = 'Signs point to yes.';
		break;
	case 10:
		eightBall = 'Reply hazy, try again.';
		break; 
	case 11:
    	eightBall = 'Ask again later.';
		break;
	case 12:
		eightBall = 'Better not tell you now.';
		break;
	case 13:
		eightBall = 'Cannot predict now.';
		break;
	case 14:
		eightBall = 'Concentrate and ask again.';
		break;
	case 15:
		eightBall = 'Don\'t count on it.';
		break;
	case 16:
		eightBall = 'My reply is no.';
		break;
	case 17:
		eightBall = 'My sources say no.';
		break;
	case 18:
		eightBall = 'Outlook not so good.';
		break; 
	case 19:
    eightBall = 'Very doubtful.';
		break;

	default:
		eightBall = 'Try again';
		break;
}

console.log(randomNumber, `The Magic 8 Ball answered: ${eightBall}`);

//using else if statments and string concatenation

if (randomNumber === 0) {
  	eightBall = 'It is certain.';
  	console.log(randomNumber, 'The Magic 8 Ball answered: ' + eightBall);

} else if (randomNumber === 1) {
  	eightBall = 'It is decidedly so.';
  	console.log(randomNumber, 'The Magic 8 Ball answered: ' + eightBall);
 
} else if (randomNumber === 2) {
	eightBall = 'Without a doubt.';
  	console.log(randomNumber, 'The Magic 8 Ball answered: ' + eightBall);

} else if (randomNumber === 3) {
 	 eightBall = 'Yes - definitely.';
 	 console.log(randomNumber, 'The Magic 8 Ball answered: ' + eightBall);

} else if (randomNumber === 4) {
  	eightBall = 'You may rely on it.';
  	console.log(randomNumber, 'The Magic 8 Ball answered: ' + eightBall);

} else if (randomNumber === 5) {
  	eightBall = 'As I see it, yes.';
  	console.log(randomNumber, 'The Magic 8 Ball answered: ' + eightBall);

} else if (randomNumber === 6) {
  	eightBall = 'Most likely.';
  	console.log(randomNumber, 'The Magic 8 Ball answered: ' + eightBall);

} else if (randomNumber === 7) {
  	eightBall = 'Outlook good.';
  	console.log(randomNumber, 'The Magic 8 Ball answered: ' + eightBall);

} else if (randomNumber === 8) {
  	eightBall = 'Yes.';
  	console.log(randomNumber, 'The Magic 8 Ball answered: ' + eightBall);

} else if (randomNumber === 9) {
  	eightBall = 'Signs point to yes.';
  	console.log(randomNumber, 'The Magic 8 Ball answered: ' + eightBall);

} else if (randomNumber === 10) {
  	eightBall = 'Reply hazy, try again.';
  	console.log(randomNumber, 'The Magic 8 Ball answered: ' + eightBall);

} else if (randomNumber === 11) {
  	eightBall = 'Ask again later.';
  	console.log(randomNumber, 'The Magic 8 Ball answered: ' + eightBall);

} else if (randomNumber === 12) {
  	eightBall = 'Better not tell you now.';
  	console.log(randomNumber, 'The Magic 8 Ball answered: ' + eightBall);

} else if (randomNumber === 13) {
  	eightBall = 'Cannot predict now.';
  	console.log(randomNumber, 'The Magic 8 Ball answered: ' + eightBall);

} else if (randomNumber === 14) {
  eightBall = 'Concentrate and ask again.';
  console.log(randomNumber, 'The Magic 8 Ball answered: ' + eightBall);

} else if (randomNumber === 15) {
  eightBall = 'Don\'t count on it.';
  console.log(randomNumber, 'The Magic 8 Ball answered: ' + eightBall);

} else if (randomNumber === 16) {
  eightBall = 'My reply is no.';
  console.log(randomNumber, 'The Magic 8 Ball answered: ' + eightBall);

} else if (randomNumber === 17) {
  eightBall = 'My sources say no.';
  console.log(randomNumber, 'The Magic 8 Ball answered: ' + eightBall);

} else if (randomNumber === 18) {
  eightBall = 'Outlook not so good.';
  console.log(randomNumber, 'The Magic 8 Ball answered: ' + eightBall);

} else if (randomNumber === 19) {
  eightBall = 'Very doubtful.';
  console.log(randomNumber, 'The Magic 8 Ball answered: ' + eightBall);

} else {
  eightBall = 'Try again';
  console.log(randomNumber, eightBall);
} 

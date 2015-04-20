// Welcome to the Monte Hall problem.
// The only two variables you want to change are num and doSwitch. Num is the amount of possible secret doors you're giving.
// To be honest I wasnt exactly sure what the assignement was asking me to do by running it 1000 times (do I run my program
// with 3 doors 1000 times or do I run my program once with 1000 possibilities?). I decided to code the harder option.
// doSwitch is either true or false. If you want the computer to switch guesses each time set it to true. If you want
// it to only use one guess the whole time set it to false. When testing this program, I wasn't comfortable asking my
// computer to iterate 1000 times so I settled for 10 times to test. But all the logic works (I believe) so if you ever
// want to set num to 1000 I'm sure the program would still work. 

var doors = {}
var possible = []
var num = 10
var doSwitch = false
var guess = 0
var count = 0
var stop = num

secretDoors = function () {
	// Creates num secret doors or rather populates the object doors with num keys and values.
	// It will randomly give one key true and the rest false.
	for (var i=0; i < num; i++) {
		doors[i] = false
		possible.push(i)
	}
	doors[(Math.floor(Math.random() * (num - 0)))] = true
}

guesser = function () {
	// This function with act as the guesser for the object created by secretDoors.
	// It will pick a random number <= num
	// If switch === true, the function will return a different number with each guess.
	// If switch === false, the function will pick one number and always return that number.
	if (doSwitch === false) {
		if (count === 0) {
			count += 1
			guess = Math.floor(Math.random() * (possible.length - 0))
		}
		else {
		}
	}
	else {
		guess = possible[(Math.floor(Math.random() * (possible.length - 0)))]
	}
}

backstage = function () {
	var bcount = 0
	// backstage will act like the crew in the show. 
	// It will take the number given by guesser and:
	// knock off one value of doors if that value is false and that value !== guess.
	for (i=0;i<possible.length;i++) {
		if (possible[i] === guess) {
		}
		else if (doors[possible[i]] === true){
		}
		else {
			if (bcount === 0) {	
				delete doors[possible[i]]
				for (j=0;j<possible.length;j++) {
					if (possible[j] === possible[i]) {
						possible.splice(j, 1)
					}
				}
				bcount += 1
			}
			else {
			}
		}
	}
}

master = function () {
	// It will run the other functions in order
	// It will also check to see if the length of doors is = 2. If we reach this case:
	// if doSwitch === false {if doors['guess'] === true {win} else {lose}}
	// if doSwitch === true {if doors['guess'] === false {win} else {lose}}
	if (possible.length === 2) {
		if (doSwitch === false) {
			if (doors[guess] === true) {
				console.log('win1')
			}
			else {
				console.log('lose1')
			}
		}
		else {
			if (doors[guess] === false) {
				console.log('win2')
			}
			else {
				console.log('lose2')
			}
		}
	}
	else {
		guesser()
		backstage()
	}
}

secretDoors()
while (stop > 1) {
	stop -= 1
	console.log(doors)
	console.log('Guess = '+guess)
	master()
}


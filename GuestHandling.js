export class Guests {
	constructor(suffix, firstName, lastName) {
		this.suffix = suffix;
		this.firstName = firstName;
		this.lastName = lastName;
	}

	toString = () => {
		var string1 = this.Suffix + ". ";
		var string2 = this.firstName + " ";
		var string3 = this.lastName;

		return string1 + string2 + string3;
	};
}

export function checkIn(guestList, roomList) {
	let suffix, firstName, lastName;

	do {
		suffix = parseInt(window.prompt("1 - Mr.\n2 - Mrs.\n3 - Dr."));
	} while (suffix < 1 || suffix > 3);

	firstName = window.prompt("Enter your first name: ");
	lastName = window.prompt("Enter your last name: ");

	var newGuest = new Guests(suffix, firstName, lastName);

	guestList.push(newGuest);
	return;
}

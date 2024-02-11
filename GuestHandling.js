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

// Display the currently available rooms in roomList
export function showRoomList(roomList) {
	let listedRoomNumbers = roomList.map((room) => room.roomNumber);

	if (listedRoomNumbers.length === 0) {
		window.alert("No rooms to display!");
		return;
	}

	window.alert("Currently Available Rooms:\n" + listedRoomNumbers);

	let roomSelect = parseInt(prompt("Choose a Room:"));

	for (var i = 0; i < listedRoomNumbers.length; i++) {
		if (parseInt(roomSelect) == parseInt(listedRoomNumbers[i])) {
			window.alert(roomList[i]);
			return;
		}
	}

	window.alert("Room not found!");
	return;
}

// Create a random assortment of rooms to fill the hotel, including
// random amenities.
// REMOVE BEFORE RELEASE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export function populate(roomList) {
	for (let i = 0; i < 531; i++) {
		var newRoom = new Room(
			i + 100,
			Math.floor((i + 100) / 100),
			Math.floor(Math.random() * 3) + 1,
			Math.floor(Math.random()) * 2 + 1
		);
		roomList.push(newRoom);
	}
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
	showRoomList;
	return;
}

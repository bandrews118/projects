export class Room {
	constructor(number, floor, bed, smoking) {
		this.roomNumber = number;

		this.roomFloor = floor;

		switch (parseInt(bed)) {
			case 1:
				this.roomBed = "Queen";
				break;
			case 2:
				this.roomBed = "King";
				break;
			case 3:
				this.roomBed = "Double";
				break;
		}

		switch (parseInt(smoking)) {
			case 1:
				this.roomSmoke = "Yes";
				break;
			default:
				this.roomSmoke = "No";
		}

		this.roomOccupied = false;
		if (this.roomOccupied == false) {
			this.roomOccupants = "N/A";
		}
	}

	toString = () => {
		var string1 = "Room Number: " + this.roomNumber;
		var string2 = "\nFloor: " + this.roomFloor;
		var string3 = "\nBed: " + this.roomBed;
		var string4 = "\nSmoking?: " + this.roomSmoke;
		var string5 = "\nOccupied?: " + this.roomOccupied;
		var string6 = "\nOccupant(s): " + this.roomOccupants;

		return string1 + string2 + string3 + string4 + string5 + string6;
	};
}

/**
 * Get the details of a new room by prompting the user.
 * Returns the new room with its details.
 */
export function getNewRoomFromUser() {
	// Feature complete; Refine to catch repeated data
	let number, floor, bed, isSmoking;
	do {
		number = prompt("Please enter a room number (100-530)");
		number = parseInt(number);
	} while (number < 100 || number > 530);

	floor = Math.floor(number / 100);

	do {
		bed = prompt(
			"Please make a selection:\n1 - Queen Bed\n2 - King Bed\n3 - Double Bed"
		);
	} while (bed < 1 || bed > 3);

	do {
		isSmoking = prompt(
			"Please make a selection:\n1 - Smoking\n2 - Non-Smoking"
		);
		isSmoking = parseInt(isSmoking);
	} while (isSmoking < 1 || isSmoking > 2 || isSmoking == null);

	var newRoom = new Room(number, floor, bed, isSmoking);
	return newRoom;
}

// Returns a message stating there are no rooms, or confirming deletion.
export function userDeleteRoom(roomList) {
	// If there are not rooms to delete, call the user an idiot.
	// Ryker: This is an early return, we do these when we don't need the rest of the code
	// 	to execute. aka an idiot or safety check.
	if (roomList.length === 0) {
		window.alert("No rooms to delete!");
		return;
	}

	let userIn = prompt(
		"Choose a room to delete:" + roomList.map((room) => room.roomNumber)
	);

	// search for room to delete
	for (var i = 0; i < roomList.length; i++) {
		// If the room is found, remove it from room list.
		if (roomList[i].roomNumber == parseInt(userIn)) {
			roomList.splice(i, 1);
			window.alert("Deleted!");
			return;
		}
	}

	// If the room wasn't found, show this message.
	// Ryker: This is "default returning", aka if the closing curly brace at the end of the
	// method is reached, the method will return anyways.
	// So in this case, if the for loop doesn't cause a return after deleting a room
	// We let the userDeleteRoom method run all the way to its default return
	// and do a console log.
	window.alert("Room not found!");
}

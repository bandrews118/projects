class Room {
	constructor(number, floor, bed, smoking) {
		this.roomNumber = number;
		this.roomFloor = floor;
		this.roomBed = bed;
		this.roomSmoke = smoking;
		this.roomOccupied = false;
	}

	// Convert this to return a string instead
	// toString = () => {
	// 	return {
	// 		roomNumber: this.roomNumber,
	// 		roomFloor: this.roomFloor,
	// 		roomBed: this.roomBed,
	// 		roomSmoke: this.roomSmoke,
	// 		RoomOccupied: this.roomOccupied,
	// 	};
	// };
}

/**
 * The main program, currently a hotel app.
 */
async function main() {
	var roomList = [];
	var userIn;
	do {
		roomList.push(getNewRoomFromUser());
		userIn = prompt("Add another room?\n1 - Yes\n2 - No");
		userIn = parseInt(userIn);
	} while (userIn == 1);
	console.log(roomList);
}

/**
 * Get the details of a new room by prompting the user.
 * Returns the new room with its details.
 */
function getNewRoomFromUser() {
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
		bed = parseInt(bed);
	} while (bed < 1 || bed > 3);

	do {
		isSmoking = prompt(
			"Please make a selection:\n1 - Smoking\n2 - Non-Smoking"
		);
		isSmoking = parseInt(isSmoking);
	} while (isSmoking < 1 || isSmoking > 2 || isSmoking == null);

	console.log(number, floor, bed, isSmoking);

	var newRoom = new Room(number, floor, bed, isSmoking);
	console.log(newRoom);
	return newRoom;
}

function delRoom() {
	var userIn = prompt("Choose a room to delete: ");
	userIn = parseInt(userIn);

	for (var i = 0; i < roomList.length - 1; i++) {
		if (userIn == roomList[i].roomNumer) {
			console.log(userIn);
			console.log(roomList[i]);
			console.log(roomList[i].roomNumber);
			roomList.splice(i, i + 1);
		}
	}
}

main();

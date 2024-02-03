// Ryker: This is a javascript "enum" it maps constants like 0, 1, 2
// to more concrete actions. Instead of saying
// "When user input is equal to 0"
// This enum translates that to
// "When user input is equal to Main Menu"
// Almost entirely for documentation and readability purposes. Helps you not make mistakes.
const UserActions = {
	MainMenu: 0,
	AddRoom: 1,
	DeleteRoom: 2,
	Quit: 3,
};

// TODO OPTIONAL - Maybe convert these to string representations?
// i.e. instead of 1,2,3 for bed, maybe Full, Queen, King ?
class Room {
	constructor(number, floor, bed, smoking) {
		this.roomNumber = number;
		this.roomFloor = floor;
		this.roomBed = bed;
		this.roomSmoke = smoking;
		this.roomOccupied = false;
	}

	toString = () => {
		return this.roomNumber;
	};
}

/**
 * The main program, currently a hotel app.
 */
async function main() {
	var roomList = [
		new Room(100, 1, 2, 1),
		new Room(200, 2, 3, 2),
		new Room(300, 3, 1, 2),
	];
	// Ryker: Try and stick with only one variable to process user input
	var userIn = UserActions.MainMenu;

	do {
		switch (userIn) {
			case UserActions.AddRoom:
				roomList.push(getNewRoomFromUser());
				userIn = parseInt(prompt(`Add another room?\n1 - Yes\n2 - No`));
				// If user picks no, set userIn to go back to menu
				if (userIn === 2) {
					userIn = UserActions.MainMenu;
				}
				break;
			case UserActions.DeleteRoom:
				userDeleteRoom(roomList);
				userIn = UserActions.MainMenu;
				break;
			/** TODO - Create a case to display all the rooms in the hotel.
				Try not to use console.log for this. */
			// https://www.w3schools.com/js/tryit.asp?filename=tryjs_output_alert
			case UserActions.MainMenu:
			// Fall through to the default case, which is also MainMenu
			default:
				userIn = parseInt(
					prompt(
						"Welcome to Hotel Lotus!\n1 - Add Room\n2 - Delete Room\n3 - Exit"
					)
				);
		}
	} while (userIn != UserActions.Quit);
	console.log("Thank you for staying with us! Goodbye!");
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

// TODO - write a summary for what this does. Look at the other examples.
function userDeleteRoom(roomList) {
	// If there are not rooms to delete, call the user an idiot.
	// Ryker: This is an early return, we do these when we don't need the rest of the code
	// 	to execute. aka an idiot or safety check.
	if (roomList.length === 0) {
		console.log("No rooms to delete, idiot!");
		return;
	}

	let userIn = prompt("Choose a room to delete:" + roomList);

	// search for room to delete
	for (var i = 0; i < roomList.length; i++) {
		// If the room is found, remove it from room list.
		if (roomList[i] == parseInt(userIn)) {
			roomList.splice(i, 1);
			console.log("Deleted!");
			return;
		}
	}

	// If the room wasn't found, show this message.
	// Ryker: This is "default returning", aka if the closing curly brace at the end of the
	// method is reached, the method will return anyways.
	// So in this case, if the for loop doesn't cause a return after deleting a room
	// We let the userDeleteRoom method run all the way to its default return
	// and do a console log.
	console.log("Room not found!");
}

main();

import { Room, getNewRoomFromUser, userDeleteRoom } from "./RoomList.js";
import { Guests, checkIn, showRoomList, populate } from "./GuestHandling.js";

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
	ShowRoom: 3,
	CheckIn: 4,
	Quit: 5,
};

/**
 * The main program, currently a hotel app.
 */
function main() {
	var roomList = [];
	var guestList = [];

	//populate(roomList);

	// Ryker: Try and stick with only one variable to process user input
	var userIn = UserActions.MainMenu;

	do {
		switch (userIn) {
			case UserActions.AddRoom:
				roomList.push(getNewRoomFromUser());
				userIn = doneCheck(userIn);
				roomList.sort();
				break;
			case UserActions.DeleteRoom:
				userDeleteRoom(roomList);
				userIn = doneCheck(userIn);
				break;
			case UserActions.ShowRoom:
				showRoomList(roomList);
				userIn = doneCheck(userIn);
				break;
			case UserActions.CheckIn:
				checkIn(guestList, roomList);
				userIn = doneCheck(userIn);
				break;
			case UserActions.MainMenu:
			// Fall through to the default case, which is also MainMenu
			default:
				userIn = parseInt(
					prompt(
						"Welcome to Hotel Lotus!\n1 - Add Room\n" +
							"2 - Delete Room\n" +
							"3 - Display Rooms\n" +
							"4 - Check In\n" +
							"5 - Exit"
					)
				);
		}
	} while (userIn != UserActions.Quit);
	window.alert("Thank you for staying with us! Goodbye!");
}

// Check if a user is done performing an action. If they respond with 1, they return to the
// current case. If they respond 2, they are returned to the main menu.
function doneCheck(userIn) {
	let repeatAction;

	do {
		switch (parseInt(userIn)) {
			case 1:
				repeatAction = parseInt(prompt("Add another room?\n1 - Yes\n2 - No"));
				break;
			case 2:
				repeatAction = parseInt(
					prompt("Delete another room??\n1 - Yes\n2 - No")
				);
				break;
			case 3:
				repeatAction = parseInt(
					prompt("Display rooms again for some reason?\n1 - Yes\n2 - No")
				);
				break;
			case 4:
				repeatAction = parseInt(
					prompt("Check in another guest?\n1 - Yes\n2 - No")
				);
				break;
		}
		// UPDATE THIS AS NEW FUNCTIONS ARE ADDED
	} while (repeatAction < 1 || repeatAction > 4);

	if (repeatAction === 2) {
		return UserActions.MainMenu;
	} else {
		return userIn;
	}
}

function myOnLoad() {
	// attach functions to html here
	$("#startMain").click(() => {
		main();
	});
}

window.onload = myOnLoad;

main();

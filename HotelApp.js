import { Room, getNewRoomFromUser, userDeleteRoom } from "./RoomList.js";
import { Guests, checkIn, showRoomList, populate } from "./GuestHandling.js";
import { HotelStrings } from "./StringConstants.js";

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
				userIn = parseInt(prompt(HotelMenuStrings.MainMenu));
		}
	} while (userIn != UserActions.Quit);
	window.alert(HotelMenuString.Goodbye);
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

/**
 * Important note: text is what an element is displaying, i.e. on textWindow
 * it's initial text value is TODO
 * But .val is to grab the value of an input, in our case things like what the user has
 * typed into userInput.
 * text is static text, .val is dynamic and changed by the user usually.
 */
function setTextWindow(text) {
	$("#textWindow").text(text);
}

function onSubmitInput() {
	const userInput = $("#userInput").val().toLowerCase();
	// TODO - implement the other cases
	if (parseInt(userInput) === UserActions.Quit || userInput === "quit") {
		setTextWindow(HotelStrings.Menus.GoodBye);
	}
}

/**
 * This function is where we're going to attach our javascript code to the html of the page
 * $("...") is the jquery selector syntax, which is how you grab the html elements
 * For example, $("#textWindow") means grab the html element with the id (# is the id symbol) textWindow
 * Then there are functions for updating and manipulating them, or pieces you can override.
 */
function myOnLoad() {
	// attach functions to html here

	// Set Initial Screen
	setTextWindow(HotelStrings.Menus.MainMenu);

	$("#submitInput").click(onSubmitInput);

	$("#userInput").on("keypress", (e) => {
		// 13 == enterKey
		if (e.which === 13) {
			onSubmitInput();
		}
	});
}

window.onload = myOnLoad;

// main();

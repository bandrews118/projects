// TODO: Write sorting algorithm to be called in getNewRoomFromUser to
// enforce sequential ordering of rooms by room number
// DONE: Used native .sort() method of the array object.

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
	Quit: 4,
};

// TODO OPTIONAL - Maybe convert these to string representations?
// i.e. instead of 1,2,3 for bed, maybe Full, Queen, King ?
// DONE - Implemented switch case to convert integer input
// to a string during construction.
class Room {
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
	}

	toString = () => {
		return this.roomNumber +
		this.roomFloor +
		this.roomBed +
		this.roomSmoke +
		this.roomOccupied;
	};
}

/**
 * The main program, currently a hotel app.
 */
async function main() {
	var roomList = [];
    
    populate(roomList);
    roomList.sort;

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
			/** TODO - Create a case to display all the rooms in the hotel.
				Try not to use console.log for this. 
				TODO - Format it to display ammenities and occupancy */
			// https://www.w3schools.com/js/tryit.asp?filename=tryjs_output_alert
			case UserActions.ShowRoom:
				showRoomList(roomList, roomNumbers);
				userIn = doneCheck(userIn);
				break;
			case UserActions.MainMenu:
			// Fall through to the default case, which is also MainMenu
			default:
				userIn = parseInt(
					prompt(
						"Welcome to Hotel Lotus!\n1 - Add Room\n2 - Delete Room\n3 - Display Rooms\n4 - Exit"
					)
				);
		}
	} while (userIn != UserActions.Quit);
	window.alert("Thank you for staying with us! Goodbye!");
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

// TODO - Write a summary for what this does. Look at the other examples.
// DONE - See below.
// Prompt the user to select a room to be deleted.
// Returns a message stating there are no rooms, or confirming deletion.
function userDeleteRoom(roomList) {
	// If there are not rooms to delete, call the user an idiot.
	// Ryker: This is an early return, we do these when we don't need the rest of the code
	// 	to execute. aka an idiot or safety check.
	if (roomList.length === 0) {
		window.alert("No rooms to delete!");
		return;
	}

	let userIn = prompt("Choose a room to delete:" + roomList);

	// search for room to delete
	for (var i = 0; i < roomList.length; i++) {
		// If the room is found, remove it from room list.
		if (roomList[i] == parseInt(userIn)) {
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
				repeatAction = parseInt(prompt("Delete another room??\n1 - Yes\n2 - No"));
				break;
			case 3:
				repeatAction = parseInt(prompt(
					"Display rooms again for some reason?\n1 - Yes\n2 - No"));
				break;
		}
	// UPDATE THIS AS NEW FUNCTIONS ARE ADDED
	} while (repeatAction < 1 || repeatAction > 3);
	
    if(repeatAction === 2) {
		return UserActions.MainMenu;
    }
	else {
		return userIn;
	}
}

// Display the currently available rooms in roomList
// TODO - Modify to show ammenities
function showRoomList(roomList) {
	let listedRoomNumbers = roomList.map(room => room.roomNumber);
	console.log(listedRoomNumbers);
	
	if (listedRoomNumbers.length === 0) {
		window.alert("No rooms to display!");
		return;
	}
	
	window.alert("Currently Available Rooms:\n" + listedRoomNumbers);
	
	let roomSelect = parseInt(prompt("Choose a Room:"));
    
	for(var i = 0; i < listedRoomNumbers.length; i++) {
		if (parseInt(roomSelect) == parseInt(listedRoomNumbers[i])) {
			window.alert(roomList[i]);
			return;
		} 
	}
	
	window.alert("Room not found!")
	return;
}

// Create a random assortment of rooms to fill the hotel, including
// random amenities.
// REMOVE BEFORE RELEASE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function populate(roomList) {
    for(let i = 0; i < 431; i++) {
        var newRoom = new Room(i+100, Math.floor((i+100)/100), (Math.floor(Math.random() * 3)) + 1, (Math.floor(Math.random()) * 2) + 1);
        roomList.push(newRoom);
    }
}

main();

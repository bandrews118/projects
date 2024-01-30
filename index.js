var roomList = [];
var number;
var floor;
var bed;
var smoking;

class Room {
    constructor(number, floor, bed, smoking){
        this.roomNumber = number;
        this.roomFloor = floor;
        this.roomBed = bed;
        this.roomSmoke = smoking;
        this.roomOccupied = false;
        console.log(number, floor, bed, smoking);}}
        
function addRoom() {
    number = prompt("Enter room number (100-530):");
        if (number.length < 3 || number.length > 3 || number < 100 || number > 530){
            do {
                number = prompt("Invalid entry. Please enter room number (100-530)");
            } while(number.length < 3 || number.length > 3 || number < 100 || number > 530);}
    floor = number.toString[0];
    bed = prompt("Queen or King bed?");
    let isSmoking = prompt("Smoking/Non-Smoking?");
        if(isSmoking.toLowerCase !== "smoking" && isSmoking.toLowerCase !== "non-smoking") {
            do{
                isSmoking = prompt("I didn't understand that. Please enter \"Smoking\" or \"Non-Smoking\"");
            } while(isSmoking.toLowerCase != "non-smoking" && isSmoking.toLowerCase != "smoking");}
            switch(isSmoking.toLowerCase) {
                case(isSmoking=="smoking"):
                    smoking = true;
                    break;
                case(isSmoking="non-smoking"):
                    smoking = false;
                    break;}            
    console.log(number, floor, bed, isSmoking);
    
    var newRoom = new Room(number, floor, bed, smoking);
    console.log(newRoom);
    roomList.push(newRoom);}

addRoom();

console.log(roomList);

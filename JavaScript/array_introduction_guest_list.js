var guest_list = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var guest = prompt("Enter your name, guest!");
if(guest_list.includes(guest)){
    console.log("You are welcome, " + guest + "!");
}
else{
    console.log("Who are you, " + guest + "?");
}
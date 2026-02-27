// fetch or grab or pull my DOM elements using getElementById()
const form = document.getElementById("guestForm")
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const guestList = document.getElementById("guestList")
const count = document.getElementById("count")

// using an array for our "fake database"
// the UI will be rebuilt from this array everytime something changes
let guests = [] 

// have an edit mode that acts like a switch
// if null, we are creating a new guest
// if it has number, we are updating our guest info
let editingID = null


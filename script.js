function addCart() {
    let layoutContainer = document.getElementById("layoutContainer");
    let newCart = document.createElement("div");
    newCart.classList.add("cart");
    newCart.textContent = "New Cart";
    newCart.onclick = function() { selectCart(this); };
    layoutContainer.appendChild(newCart);
}

function selectCart(cartElement) {
    let cartInfo = document.getElementById("cartInfo");
    cartInfo.innerHTML = `<h3>Selected Cart</h3><div>Section: <input type='text'></input></div><div>Sequence: <input type='text'></input></div><div>Parts: <ul id='partList'></ul></div><button onclick='addPart()'>Add Part</button>`;
}

class Part {
    constructor(partNumber, sequenceNumber, sectionNumber, projectNumber, quantity, status) {
        this.partNumber = partNumber;
        this.sequenceNumber = sequenceNumber;
        this.sectionNumber = sectionNumber;
        this.projectNumber = projectNumber;
        this.quantity = quantity;
        this.status = status; // Status: 'ready', 'unready', or 'paint'
    }

    // Method to display part information
    display() {
        let partElement = document.createElement("li");
        partElement.classList.add("part");
        partElement.textContent = `Part Number: ${this.partNumber}, Status: ${this.status}`;
        return partElement;
    }
}

function addPart(sequenceNumber, sectionNumber, projectNumber) {
    let partNumber = prompt("Enter Part Number:");
    let quantity = prompt("Enter Quantity:");
    let status = prompt("Enter Status (ready/unready/paint):");

    let newPart = new Part(partNumber, sequenceNumber, sectionNumber, projectNumber, quantity, status);

    let partList = document.getElementById("partList");
    partList.appendChild(newPart.display());
}

// Assuming a selected cart's section and sequence number are stored
let selectedCartSectionNumber = 1; // Example section number
let selectedCartSequenceNumber = 1; // Example sequence number
let selectedCartProjectNumber = 1; // Example project number

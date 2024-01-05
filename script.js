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
        this.status = status;
    }

    toXml() {
        return `<part>
                    <partNumber>${this.partNumber}</partNumber>
                    <sequenceNumber>${this.sequenceNumber}</sequenceNumber>
                    <sectionNumber>${this.sectionNumber}</sectionNumber>
                    <projectNumber>${this.projectNumber}</projectNumber>
                    <quantity>${this.quantity}</quantity>
                    <status>${this.status}</status>
                </part>`;
    }
}

function addPart(sequenceNumber, sectionNumber, projectNumber) {
    let partNumber = prompt("Enter Part Number:");
    let quantity = prompt("Enter Quantity:");
    let status = prompt("Enter Status (ready/unready/paint):");

    let newPart = new Part(partNumber, sequenceNumber, sectionNumber, projectNumber, quantity, status);
    sendPartToServer(newPart);
}

function sendPartToServer(part) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8000/save-xml", true);
    xhr.setRequestHeader("Content-Type", "application/xml");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Part saved successfully.");
        }
    };

    let xmlData = part.toXml();
    xhr.send(xmlData);
}

function loadPartsFromServer() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8000/load-xml", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let xmlResponse = xhr.responseXML;
            displayParts(xmlResponse);
        }
    };
    xhr.send();
}

function displayParts(xml) {
    // Code to parse the XML and update the UI
}

// Assuming a selected cart's section and sequence number are stored
let selectedCartSectionNumber = 1; // Example section number
let selectedCartSequenceNumber = 1; // Example sequence number
let selectedCartProjectNumber = 1; // Example project number

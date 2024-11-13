// Part 1: Class and Objects
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    updatePrice(newPrice) {
        this.price = newPrice;
        alert(`Price updated to $${this.price}`);
    }

    sellProduct(quantity) {
        if (this.quantity >= quantity) {
            this.quantity -= quantity;
            const totalSale = this.price * quantity;
            alert(`Sold ${quantity} units. Total sale: $${totalSale}`);
            updateProductInfo();
        } else {
            alert('We are sorry, there is not enough stock to sell at this time.');
        }
    }

    restockProduct(quantity) {
        this.quantity += quantity;
        alert(`${quantity} units restocked.`);
        updateProductInfo();
    }
}

let product;

function createProduct() {
    const name = document.getElementById("name").value;
    const price = parseFloat(document.getElementById("price").value);
    const quantity = parseInt(document.getElementById("quantity").value);

    if (name && !isNaN(price) && !isNaN(quantity)) {
        product = new Product(name, price, quantity);
        updateProductInfo();
        alert('Product created successfully!');
    } else {
        alert('Please fill in all fields correctly!');
    }
}

function updateProductPrice() {
    if (product) {
        const newPrice = parseFloat(prompt('Enter new price:'));
        if (!isNaN(newPrice)) {
            product.updatePrice(newPrice);
        } else {
            alert('Invalid price entered.');
        }
    } else {
        alert('Product not created yet.');
    }
}

function sellProduct() {
    if (product) {
        const quantityToSell = parseInt(prompt('Enter quantity to sell:'));
        if (!isNaN(quantityToSell)) {
            product.sellProduct(quantityToSell);
        } else {
            alert('Invalid quantity entered.');
        }
    } else {
        alert('Product not created yet.');
    }
}

function restockProduct() {
    if (product) {
        const quantityToRestock = parseInt(prompt('Enter quantity to restock:'));
        if (!isNaN(quantityToRestock)) {
            product.restockProduct(quantityToRestock);
        } else {
            alert('Invalid quantity entered.');
        }
    } else {
        alert('Product not created yet.');
    }
}

function updateProductInfo() {
    const infoDiv = document.getElementById('productInfo');
    if (product) {
        infoDiv.innerHTML = `
            <p>Name: ${product.name}</p>
            <p>Price: $${product.price}</p>
            <p>Quantity: ${product.quantity}</p>
        `;
    } else {
        infoDiv.innerHTML = `<p>No product created yet.</p>`;
    }
}

// Part 2: Arrays & Sets
function findUniqueWords(words) {
    return [...new Set(words)];
}
function commonElements(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}

const words = ["apple", "Samsung", "Dell", "apple", "HP", "Lenovo","HP","Dell", "HP"];
const uniqueWords = findUniqueWords(words);
console.log("Unique Words:", uniqueWords);

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const common = commonElements(array1, array2);
console.log("Common Elements:", common); 


// Part 3: Maps
class StudentGrades {
    constructor() {
        this.gradesMap = new Map();
    }

    addGrade(studentName, grade) {
        if (this.gradesMap.has(studentName)) {
            return `${studentName} already has a grade. Use update to modify.`;
        }
        this.gradesMap.set(studentName, grade);
        return `${studentName}'s grade of ${grade} has been added.`;
    }

    getGrade(studentName) {
        if (!this.gradesMap.has(studentName)) {
            return `${studentName} not found.`;
        }
        return `${studentName}'s grade is ${this.gradesMap.get(studentName)}.`;
    }

    updateGrade(studentName, newGrade) {
        if (!this.gradesMap.has(studentName)) {
            return `${studentName} not found.`;
        }
        this.gradesMap.set(studentName, newGrade);
        return `${studentName}'s grade has been updated to ${newGrade}.`;
    }

    removeStudent(studentName) {
        if (!this.gradesMap.has(studentName)) {
            return `${studentName} not found.`;
        }
        this.gradesMap.delete(studentName);
        return `${studentName} has been removed from the records.`;
    }
}

const studentGrades = new StudentGrades();

function addStudentGrade() {
    const name = document.getElementById('studentName').value;
    const grade = document.getElementById('studentGrade').value;
    if (name && grade) {
        const result = studentGrades.addGrade(name, grade);
        document.getElementById('result').textContent = result;
    } else {
        document.getElementById('result').textContent = 'Please enter both name and grade.';
    }
}

function getStudentGrade() {
    const name = document.getElementById('studentName').value;
    if (name) {
        const result = studentGrades.getGrade(name);
        document.getElementById('result').textContent = result;
    } else {
        document.getElementById('result').textContent = 'Please enter a student name.';
    }
}

function updateStudentGrade() {
    const name = document.getElementById('studentName').value;
    const newGrade = document.getElementById('studentGrade').value;
    if (name && newGrade) {
        const result = studentGrades.updateGrade(name, newGrade);
        document.getElementById('result').textContent = result;
    } else {
        document.getElementById('result').textContent = 'Please enter both name and new grade.';
    }
}

function removeStudent() {
    const name = document.getElementById('studentName').value;
    if (name) {
        const result = studentGrades.removeStudent(name);
        document.getElementById('result').textContent = result;
    } else {
        document.getElementById('result').textContent = 'Please enter a student name.';
    }
}

// Part 4: Cybersecurity
function validatePassword() {

    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');


    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length >= 8 && specialCharPattern.test(password)) {
        messageElement.textContent = 'Password is valid!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Password must be at least 8 characters long and contain at least one special character!';
        messageElement.style.color = 'red';
    }
}

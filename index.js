const buttonColorSet = document.getElementsByClassName("color-button");
for (const buttons of buttonColorSet) {
    buttons.setAttribute("style", "background-color: pink; font-weight: bold;");
}

function hotSaleImg1() {
    document.getElementById("hot-sales-img1").src = "images/pant2.jpg";
}

const readMoreButtons = document.getElementsByClassName("read-more-btn");
for (const readMoreButton of readMoreButtons) {
    readMoreButton.addEventListener("click", function () {
        alert("Thank you for shopping with us we love you,for more info on delivery contact lidyaonlineshopa@gmail.com")
    })
}

// for subscribe field 
const subscribeButton = document.getElementById("subscibe-btn");

subscribeButton.addEventListener("click", function () {
    const nameInput = document.getElementById("floatingInputName");
    document.getElementById("thanks-for-subscribe").innerText = "Thanks " + nameInput.value.toUpperCase() + "...\n Asante 'Welcome to lidya online clothes'!";
    console.log(nameInput.value);
})
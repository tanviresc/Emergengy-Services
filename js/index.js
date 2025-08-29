const heartBtns = document.getElementsByClassName("heart_btn");
for (let heartBtn of heartBtns) {
  heartBtn.addEventListener("click", function () {
    const heartCountElement = document.getElementById("heartCount");
    let currentCount = Number(heartCountElement.innerText);
    
    if (heartBtn.classList.contains("liked")) {
      heartBtn.classList.remove("liked");
      heartBtn.style.color = "black";
      currentCount -= 1;
    } else {
      heartBtn.classList.add("liked");
      heartBtn.style.color = "red"; 
      currentCount += 1;
    }

    heartCountElement.innerText = currentCount;
  });
}


let coins = 100;
const coinCount = document.querySelector(".coinCount");
const callBtns = document.getElementsByClassName("call_btn");
const cartContainer = document.getElementById("cart_container");
for (let callBtn of callBtns) {
  callBtn.addEventListener("click", function () {
    const callerTitle = callBtn.parentNode.parentNode.children[1].innerText;
    const callerNumber = callBtn.parentNode.parentNode.children[3].innerText;

    if (coins < 20) {
      alert("You must have at least 20 coins to make a call!");
      return;
    }

    coins -= 20;
    coinCount.innerText = coins;
    alert(`${callerTitle} Calling to: ${callerNumber}`);

    const newCart = document.createElement("div");
    const date = new Date().toLocaleTimeString();

    newCart.innerHTML = `
             <div class="bg-gray-100 rounded-xl py-1 px-2 mt-3 flex justify-between items-center">
                    <div class="">
                  <h2 class="font-regular">${callerTitle}</h2>
                  <h3>${callerNumber}</h3>
                </div>
                  <p>${date}</p>
                </div>
        `;

    cartContainer.append(newCart);
  });
}

document.getElementById("clearBtn").addEventListener("click", function () {
  const cartContainer = document.getElementById("cart_container");
  cartContainer.innerHTML = "";
  coins = 100;
  coinCount.innerText = coins;
  document.getElementById("heartCount").innerText = "0";
  for (let heartBtn of heartBtns) {
    heartBtn.classList.remove("liked");
    heartBtn.style.color = "gray";
  }
  copyCount = 0;
  copyCounter.innerText = copyCount;
});

let copyCount = 0;
const copyCounter = document.querySelector(".copy_count");
const copyButtons = document.getElementsByClassName("copy_btn");

for (const copyBtn of copyButtons) {
  copyBtn.addEventListener("click", function () {
    const callerNumber = copyBtn.parentNode.parentNode.children[3].innerText;

    navigator.clipboard.writeText(callerNumber).then(() => {
      alert(`Coppied The Number: ${callerNumber}`);

      copyCount++;
      copyCounter.innerText = copyCount;
    });
  });
}

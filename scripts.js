// คำอวยพรแบบสุ่ม
const randomMessages = [
    "ขอให้ชีวิตราบรื่นเหมือนสายน้ำ",
    "ขอให้ความสุขลอยไปกับกระทง",
    "ขอให้ปีนี้เต็มไปด้วยความโชคดี",
    "ขอให้ความรักลอยมาเหมือนกระทง",
    "ขอให้สุขภาพแข็งแรงตลอดปี"
];

// ฟังก์ชันสร้างกระทง
function createLantern(messageText) {
    const lantern = document.createElement("div");
    lantern.classList.add("lantern");

    const lanternImg = document.createElement("img");
    lanternImg.src = "images/krathong.png"; // เปลี่ยนเป็นไฟล์กระทงของคุณ
    lanternImg.alt = "กระทง";

    const message = document.createElement("div");
    message.classList.add("lantern-message");
    message.textContent = messageText || randomMessages[Math.floor(Math.random() * randomMessages.length)];

    lantern.appendChild(lanternImg);
    lantern.appendChild(message);

    const startX = Math.random() * 100;
    lantern.style.left = `${startX}%`;
    lantern.style.bottom = "0%";

    document.getElementById("floating-lanterns").appendChild(lantern);

    setTimeout(() => { lantern.remove(); }, 10000);
}

// ฟังก์ชันส่งคำอวยพร
function submitMessage() {
    const messageText = document.getElementById("message").value;
    if (messageText.trim() !== "") {
        createLantern(messageText);
        document.getElementById("message").value = "";
        showPopup();
    } else {
        alert("กรุณากรอกคำอวยพรก่อนส่ง!");
    }
}

// ฟังก์ชันแสดงป๊อปอัพ
function showPopup() {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.textContent = "คำอวยพรของคุณได้ถูกส่งแล้ว!";
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.classList.add("show");
        setTimeout(() => {
            popup.classList.remove("show");
            document.body.removeChild(popup);
        }, 1000);
    }, 100);
}

// โหลดกระทงแบบสุ่มเมื่อเปิดเว็บ
window.onload = function() {
    for (let i = 0; i < 5; i++) {
        createLantern();
    }
    setInterval(() => createLantern(), 5000);
};

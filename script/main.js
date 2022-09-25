const notificationBox = document.getElementById("notification-box");
const readAllBtn = document.getElementById("read-all-btn");
const notificationCard = document.querySelectorAll(".notification-card");
const unreadMessages = document.querySelectorAll('[data-status="unread"]');

let updateNotificationNum = () => {
    notificationBox.textContent = document.querySelectorAll('[data-status="unread"]').length;
}
let readNotification = (unreadEl) => {
    if(unreadEl.getAttribute("data-status") === "unread"){
        unreadEl.setAttribute("data-status", "read");
        updateNotificationNum();
    }
}
notificationCard.forEach((value) => {
    value.addEventListener("click", () => {
        readNotification(value);
    }, false);
    value.addEventListener("keypress", (e) =>{
        if(e.keyCode === 13){
            readNotification(value);
        }
    });
});
readAllBtn.addEventListener("click", () => {
    unreadMessages.forEach((value) => readNotification(value));
});
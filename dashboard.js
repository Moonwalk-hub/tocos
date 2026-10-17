
function deliver(button) {
    let row = button.parentElement.parentElement;
    let status = row.querySelector(".status");

    if (status.innerText === "Pending") {
        status.innerText = "✓ Delivered";
        status.classList.add("done");

        button.parentElement.innerText = "Completed";

        let pending = document.getElementById("pending");
        let delivered = document.getElementById("delivered");

        pending.innerText = Number(pending.innerText) - 1;
        delivered.innerText = Number(delivered.innerText) + 1;
    }
}

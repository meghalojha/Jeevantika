<script>
let slots = document.querySelectorAll(".slot");
let selectedText = document.getElementById("selectedSlot");

slots.forEach(slot=>{
slot.onclick = ()=>{
document.querySelectorAll(".slot").forEach(s=>s.classList.remove("selected"));
slot.classList.add("selected");
selectedText.innerText = "Selected Slot: " + slot.innerText;
}
})
</script>

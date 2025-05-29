const form = document.getElementById("appointmentForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const model = document.getElementById("model").value;
  const vin = document.getElementById("vin").value;
  const date = document.getElementById("date").value;

  await db.collection("appointments").add({
    model, vin, date,
    status: "pending"
  });

  alert("Appointment requested! We'll confirm soon.");
  form.reset();
});

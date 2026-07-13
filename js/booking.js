// js/booking.js
let selectedSlotSignature = "Morning (8AM-12PM)";

function openModal(specName = "Orthopedic Physiotherapy") {
  document.getElementById('b-spec').value = specName;
  document.getElementById('modalOverlay').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modalOverlay').style.display = 'none';
}

function selectSlot(element) {
  document.querySelectorAll('.slot-btn').forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');
  selectedSlotSignature = element.getAttribute('data-slot');
}

async function submitBooking() {
  const submitBtn = document.getElementById('book-submit-btn');
  
  const payload = {
    fullName: document.getElementById('b-name').value,
    phone: document.getElementById('b-phone').value,
    address: document.getElementById('b-address').value,
    region: document.getElementById('b-region').value,
    specialization: document.getElementById('b-spec').value,
    appointmentDate: document.getElementById('b-date').value,
    timeSlot: selectedSlotSignature,
    razorpayOrderId: "rzp_test_placeholder" // Temporary routing bypass variable
  };

  if(!payload.fullName || !payload.phone || !payload.address || !payload.appointmentDate) {
    alert("Please completely fill out all mandatory registration fields.");
    return;
  }

  submitBtn.innerText = "Processing Reservation...";
  submitBtn.disabled = true;

  try {
    const response = await fetch(`${API_BASE_URL}/api/bookings/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (result.success) {
      window.location.href = `success.html?ref=${result.bookingRef}`;
    } else {
      alert(`Booking Error: ${result.error}`);
      submitBtn.innerText = "Confirm & Pay ₹200 →";
      submitBtn.disabled = false;
    }
  } catch (err) {
    console.error(err);
    alert("Communication link timeout error.");
    submitBtn.innerText = "Confirm & Pay ₹200 →";
    submitBtn.disabled = false;
  }
}
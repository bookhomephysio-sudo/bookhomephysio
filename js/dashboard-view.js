// js/dashboard-view.js
document.addEventListener('DOMContentLoaded', async () => {
  const tableBody = document.getElementById('queueTableBody');
  const token = localStorage.getItem('bhp_auth_token');

  try {
    const response = await fetch(`${API_BASE_URL}/api/bookings`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const result = await response.json();

    if (!result.data || result.data.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:32px;">No active entries.</td></tr>`;
      return;
    }

    tableBody.innerHTML = result.data.map(b => `
      <tr>
        <td><strong>${b.booking_ref}</strong></td>
        <td>${b.patients?.full_name || 'Patient'}</td>
        <td>${b.specialization}</td>
        <td>${b.appointment_date} (${b.time_slot})</td>
        <td>${b.region}</td>
        <td><span class="badge badge-pending">${b.session_status}</span></td>
      </tr>
    `).join('');
  } catch (err) {
    tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:red; padding:32px;">Sync Error.</td></tr>`;
  }
});
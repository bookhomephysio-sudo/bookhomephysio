// js/auth-portal.js
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const credentials = {
    email: document.getElementById('staffEmail').value,
    phone: document.getElementById('staffPhone').value
  };

  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });

    const result = await response.json();
    if (result.success) {
      localStorage.setItem('bhp_auth_token', result.token);
      localStorage.setItem('bhp_user_profile', JSON.stringify(result.profile));
      window.location.href = 'dashboard.html';
    } else {
      alert(`Access Denied: ${result.error}`);
    }
  } catch (err) {
    alert("Authentication engine mapping timeout.");
  }
});
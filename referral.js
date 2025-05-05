// Simple referral tracker using localStorage
document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search);
  const ref = params.get('ref');
  if (ref) {
    localStorage.setItem('referralCode', ref);
    console.log('Referral from:', ref);
  }
});
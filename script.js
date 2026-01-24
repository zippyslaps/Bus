<script>
  // Function to generate QR code without flicker
  function generateQRCode() {
    const qrContainer = document.getElementById("qrcode");

    // Hide container during redraw to prevent flicker
    qrContainer.style.visibility = "hidden";

    // Remove old QR code
    while (qrContainer.firstChild) {
      qrContainer.removeChild(qrContainer.firstChild);
    }

    // Generate new QR code
    new QRCode(qrContainer, {
      text: "nBus-1618-Unlimited-WestMidlands-" + Date.now(),
      width: 200,
      height: 200,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });

    // Show container immediately after redraw
    qrContainer.style.visibility = "visible";
  }

  // Generate QR code initially
  generateQRCode();

  // Refresh QR code every 3 seconds (Ibex auto-refresh can call this instead if you want)
  setInterval(generateQRCode, 3000);

  // Live expiry timer
  function updateExpiry() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-GB', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    const dateStr = now.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    const expiryElement = document.getElementById('expiry-time');
    expiryElement.textContent = `${timeStr} ${dateStr}`;
  }

  // Update expiry immediately and every second
  updateExpiry();
  setInterval(updateExpiry, 1000);
</script>

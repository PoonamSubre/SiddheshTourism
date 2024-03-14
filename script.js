document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const amount = document.getElementById('amount').value;

    // Make API call to CryptoMus to initiate the payment
    fetch('https://app.cryptomus.com/api/payment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Replace 'your-api-key' with your actual API key from CryptoMus
            'Authorization': 'Bearer your-api-key'
        },
        body: JSON.stringify({
            amount: amount,
            // Replace 'bc6e3a20-4d2b-4e6d-afab-3a24dd82e241' with your actual merchant ID
            merchant_id: 'bc6e3a20-4d2b-4e6d-afab-3a24dd82e241',
            // Optionally include any other parameters required by the CryptoMus API
        })
    })
    .then(response => response.json())
    .then(data => {
        // Redirect user to the payment URL received from CryptoMus
        window.location.href = data.payment_url;
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Payment could not be processed. Please try again later.');
    });
});

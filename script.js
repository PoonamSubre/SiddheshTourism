document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const amount = document.getElementById('amount').value;

    //. API call to CryptoMus to initiate the payment
    fetch('https://app.cryptomus.com/dashboard/get', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Replace 'your-api-key' with your actual API key from CryptoMus
            'Authorization': 'bc6e3a20-4d2b-4e6d-afab-3a24dd82e241'
        },
        body: JSON.stringify({
            amount: amount,
            // merchant ID
            merchant_id: 'bc6e3a20-4d2b-4e6d-afab-3a24dd82e241',
            // Optionally include any other parameters required by the CryptoMus API
        })
    })
    .then(response => response.json())
    .then(data => {
        // Redirect user to the payment URL received from CryptoMus
        window.location.href = data.https://app.cryptomus.com/dashboard/get;
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Payment could not be processed. Please try again later.');
    });
});

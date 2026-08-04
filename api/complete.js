
module.exports = async (req, res) => {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { paymentId, txid } = req.body;
    const PI_API_KEY = "Y48gijtfedrxchh54lqoolpapbb3j8ix3vmsunpbiypkiku6l9v0zybgqwr75bc1";

    try {
        // Send completion request to Pi Network API
        const response = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/complete`, {
            method: 'POST',
            headers: {
                'Authorization': `Key ${PI_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ txid: txid || "app-txid" })
        });

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        console.error("Pi Complete API Error:", error);
        return res.status(500).json({ error: error.message });
    }
};

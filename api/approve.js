module.exports = async (req, res) => {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { paymentId } = req.body || {};
    const PI_API_KEY = "x57ckph0viaa1udskmxxyktbwdflia3jxz4ol8yxjhrzszb2ficjcittrefgw3lp";

    try {
        // Send approval request to official Pi Network API
        const response = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/approve`, {
            method: 'POST',
            headers: {
                'Authorization': `Key ${PI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        console.error("Pi Approve API Error:", error);
        return res.status(500).json({ error: error.message });
    }
};

module.exports = async (req, res) => {
  try {
    const { paymentId } = req.body || {};
    const apiKey = "yqfnn803zbwvaqjnixwk";

    const response = await fetch(`https://api.pipanetwork.com/v1/payments/${paymentId}/approve`, {
      method: 'POST',
      headers: {
        'Authorization': `Key ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

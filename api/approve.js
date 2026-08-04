 exports.handler = async (event) => {
    try {
        const { paymentId } = JSON.parse(event.body);
        const apiKey = "yqfnn803zbwvaqjnixwkxdaomgwfzcxgmmjvct8cqhi8z7aiuretstq0ojnvcemf";

        // Use standard fetch without require
        const response = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/approve`, {
            method: 'POST',
            headers: {
                'Authorization': `Key ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};

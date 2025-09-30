// Controllers/paymentController.js
const Insta = require("instamojo-nodejs");

// Initialize once
Insta.setKeys(process.env.INSTA_API_KEY, process.env.INSTA_AUTH_TOKEN);
// true = sandbox, false = production
Insta.isSandboxMode(false);

const paymentController = async (req, res) => {
    try {
        const { amount, buyer, email, phone } = req.body;

        const data = new Insta.PaymentData();
        data.purpose = "Gem Business Payment";
        data.amount = amount;
        data.buyer_name = buyer;
        data.email = email;
        data.phone = phone;
        data.send_email = true;
        data.send_sms = true;
        data.allow_repeated_payments = false;
        data.redirect_url = "http://localhost:5173/thank-you";

        Insta.createPayment(data, (err, response) => {
            if (err) {
                console.error("Instamojo SDK Error:", err);
                return res.status(500).json({ error: err });
            }

            try {
                const responseData = JSON.parse(response);
                console.log("Instamojo raw response:", responseData);

                if (responseData && responseData.payment_request) {
                    return res.json({
                        payment_url: responseData.payment_request.longurl,
                    });
                } else {
                    // If API rejects (e.g., bad creds, missing fields)
                    return res.status(400).json({
                        error: "Payment request failed",
                        details: responseData,
                    });
                }
            } catch (parseError) {
                console.error("Response Parse Error:", parseError);
                return res.status(500).json({ error: "Invalid response from Instamojo" });
            }
        });
    } catch (error) {
        console.error("Controller Error:", error);
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { paymentController };

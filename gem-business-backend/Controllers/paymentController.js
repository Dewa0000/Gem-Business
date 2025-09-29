// Controllers/paymentController.js
const Insta = require("instamojo-nodejs");

// Initialize once
Insta.setKeys(process.env.INSTA_API_KEY, process.env.INSTA_AUTH_TOKEN);
Insta.isSandboxMode(false); // set false in production

const paymentController = async (req, res) => {
    try {
        const { amount, buyer, email, phone } = req.body;

        const data = new Insta.PaymentData();

        data.purpose = "Gem Business Payment";
        data.amount = amount;
        data.buyer_name = buyer; // snake_case ✅
        data.email = email;
        data.phone = phone;
        data.send_email = true;
        data.send_sms = true;
        data.allow_repeated_payments = false;
        data.redirect_url = "http://localhost:5173/thank-you";

        Insta.createPayment(data, (err, response) => {
            if (err) {
                return res.status(500).json({ error: err });
            } else {
                const responseData = JSON.parse(response);
                return res.json({ payment_url: responseData.payment_request.longurl });
            }
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { paymentController };

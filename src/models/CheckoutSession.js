import mongoose from 'mongoose';

const checkoutSessionSchema = new mongoose.Schema({
    sessionId: {
        type: String,
        required: true
    },
    isFullfilled: {
        type: Boolean,
        default: false
    }
})
const CheckoutSession = mongoose.models.CheckoutSession || mongoose.model('CheckoutSession', checkoutSessionSchema);

export default CheckoutSession; 
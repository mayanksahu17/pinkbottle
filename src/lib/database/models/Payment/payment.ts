import mongoose from 'mongoose';
import { IPayment } from './types';

const paymentSchema = new mongoose.Schema<IPayment>({
    paymentStatus:{
        type:String,
        enum:["Paid","Unpaid"]
    },
    name: String,
    email: String,
    planPurchased: String,
    mobileNumber: String
});

const Payment = mongoose.models?.Payment || mongoose.model<IPayment>('Payment', paymentSchema, 'payments');
export default Payment;

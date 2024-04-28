import Payment from "@/lib/database/models/Payment/payment";
import dbConnect from "@/lib/database/mongodb";
import { PaymentDetails } from "./payment.types";

export async function createPayment(paymentDetails:PaymentDetails) {
    try {
      await dbConnect();
      const payment = await Payment.create(paymentDetails);
      if (payment) {
        return {
          success: true,
          data: JSON.parse(JSON.stringify(payment)),
        };
      } else {
        return {
          success: false,
          error: "Something went wrong creating the payment in mongodb",
        };
      }
    } catch (error: any) {
      console.log("Something went wrong creating the payment in mongodb");
      return {
        success: false,
        error: error.message,
      };
    }
  }
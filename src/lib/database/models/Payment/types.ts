export interface IPayment {
    paymentStatus: 'Paid' | 'Unpaid'
    name: string,
    email: string,
    planPurchased: string,
    mobileNumber: string
}
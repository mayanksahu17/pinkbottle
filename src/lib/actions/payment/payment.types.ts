export type PaymentDetails = {
    paymentStatus?: 'Paid' | 'Unpaid'
    name?: string | null,
    email?: string | null,
    planPurchased?: string | null,
    mobileNumber?: string | null
}
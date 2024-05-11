import { ISubscription } from "@/lib/database/models/Subscription/types";
import { Jobs } from "@/lib/database/models/User/types";


export type CreateStudentProps = {
    clerkId: string;
    firstName: string;
    lastName: string;
    email: string;
}

export type UpdateStudentProps = {
    id: string;
    updateDetails: {
        firstName?: string;
        lastName?: string;
        // email: string;
        payment?: {
            status?: "Paid" | "Unpaid";
            subscription?: ISubscription;
        };
        jobs?: Jobs[];
        resume?: string;
        cover?: string;
    };
};

export type JobDetailsProp = {
    _id?: string;
    image?: string;
    title?: string;
    position?: string;
    date?: Date;
    status?: string
}


export type UpdateJobProps = {
    userId: string;
    jobId: string;
    jobUpdateDetails: JobDetailsProp
}




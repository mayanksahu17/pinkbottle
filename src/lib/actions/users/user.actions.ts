'use server';
import User from '@/lib/database/models/User/User';
import {
  CreateStudentProps,
  UpdateJobProps,
  UpdateStudentProps,
} from './user.types';
import { Jobs } from '@/lib/database/models/User/types';
import { dbConnect } from '@/lib/database/mongodb';
import Lead from '@/lib/database/models/Leads/leads';

export async function createStudent(userDetails: CreateStudentProps) {
  try {
    await dbConnect();
    console.log('Create Student called');
    const createdUser = await User.create(userDetails);

    // Create the same data in the Leads collection
    try {
      const leadUser = await Lead.create(userDetails);
      console.log('New Student and Lead created');
    } catch (error: any) {
      if (error.code === 11000) {
        console.warn(
          'Duplicate lead entry, skipping creation in Leads collection.'
        );
      } else {
        console.error('Error creating lead entry:', error);
        // If there is an error other than duplicate key, rethrow it
        throw new Error('Error creating lead entry');
      }
    }

    if (createdUser) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(createdUser)),
      };
    } else {
      return {
        success: false,
        error: 'Something went wrong creating the user in mongodb',
      };
    }
  } catch (error: any) {
    console.log('Something went wrong creating the user in mongodb', error);
    return {
      success: false,
      error: error.message,
    };
  }
}

export async function updateStudent(updateDate: UpdateStudentProps) {
  try {
    await dbConnect();
    const updatedUser = await User.findOneAndUpdate(
      { clerkId: updateDate.id },
      updateDate.updateDetails,
      { new: true }
    ); // the userId is the clerk Id of the user
    console.log(updatedUser);

    if (updatedUser) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(updatedUser)),
      };
    } else {
      return {
        success: false,
        error: 'Something went wrong updating the user',
      };
    }
  } catch (error: any) {
    console.log('Something went wrong updating the user');
    return {
      success: false,
      error: error.message,
    };
  }
}

export async function updateStudentJobs(updateDetails: UpdateJobProps) {
  try {
    await dbConnect();
    const user = await User.findOne({ clerkId: updateDetails.userId }); // the userId is the clerk Id of the user
    if (user) {
      const jobIndex = user.jobs.findIndex(
        (job: Jobs) => job._id === updateDetails.jobId
      );
      if (jobIndex === -1) {
        return {
          success: false,
          error: 'Job not found',
        };
      }
      user.jobs[jobIndex] = {
        ...user.jobs[jobIndex],
        ...updateDetails.jobUpdateDetails,
      };
      user.save((err: Error, updatedJob: Jobs) => {
        if (err) {
          return {
            success: false,
            error: 'Something went wrong updating the job',
          };
        }
        return {
          success: true,
          data: JSON.parse(JSON.stringify(updatedJob)),
        };
      });
    } else {
      return {
        success: false,
        error: 'User not found',
      };
    }
  } catch (error: any) {
    console.log('Something went wrong updating the job');
    return {
      success: false,
      error: error.message,
    };
  }
}

export async function getStudentById(id: string) {
  try {
    await dbConnect();
    const user = await User.findOne({ clerkId: id });
    if (user) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(user)),
      };
    } else {
      return {
        success: false,
        error: 'Something went wrong fetching the user from the mongodb',
      };
    }
  } catch (error: any) {
    console.log('Something went wrong fetching the user from the mongodb');
    return {
      success: false,
      error: error.message,
    };
  }
}

export async function deleteStudent(id: string) {
  try {
    await dbConnect();
    const deletedUser = await User.findOneAndDelete({ clerkId: id });
    if (deletedUser) {
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        error: 'Something went wrong deleting the user',
      };
    }
  } catch (error: any) {
    console.log('Something went wrong deleting the user');
    return {
      success: false,
      error: error.message,
    };
  }
}

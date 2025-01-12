import { dbConnect } from "@/lib/database/mongodb";
import { NextRequest, NextResponse } from "next/server";
import User from "@/lib/database/models/User/User";
import React from "react";

export async function GET(request:NextRequest) {
    const userId = request.headers.get('X-User-Id'); 

    await dbConnect();

    try {
        
  const user = await User.findOne({clerkId : userId})

  if (!user) {
    return NextResponse.json({error: 'User not found'} , {status:404});
  }
       console.log("payment status",user.payment.status);
  
       return NextResponse.json({paidstatus:user.payment.status} , {status:200});

    } catch (error) {
        console.error('Error fetching user:', error);
        return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 });
      }
    }
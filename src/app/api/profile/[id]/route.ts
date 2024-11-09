import { NextRequest, NextResponse } from 'next/server'
import { dbConnect } from '@/lib/database/mongodb'
import Profile from '@/lib/database/models/Profile/profile'
import { Expectations } from '../../../../lib/database/models/Profile/types'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id

  await dbConnect()

  try {
    const profile = await Profile.findById(id)
    if (!profile) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 })
    }
    return NextResponse.json(profile)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id

  await dbConnect()

  try {
    const updatedProfile = await Profile.findByIdAndUpdate(
      id,
      { expectations: await request.json() as Expectations },
      { new: true }
    )
    if (!updatedProfile) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 })
    }
    return NextResponse.json(updatedProfile)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 })
  }
}

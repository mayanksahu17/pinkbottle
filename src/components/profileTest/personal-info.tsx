import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Pencil, Camera, X ,Save} from 'lucide-react'
import { UploadButton } from "@/utils/uploadthing"  // Adjust import if needed

export default function PersonalInfo({ data, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(data || {})
  const [isUploading, setIsUploading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handlePhotoUpload = (url) => {
    setFormData(prev => ({ ...prev, profilePhoto: url }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onUpdate(formData)
    setIsEditing(false)
  }

  const handleUploadStart = () => {
    setIsUploading(true)
  }

  const handleUploadComplete = (res) => {
    setIsUploading(false)
    if (res && res.length > 0) {
      handlePhotoUpload(res[0].fileUrl)  // Update profile photo with the uploaded file URL
    }
  }

  const handleUploadError = (error) => {
    setIsUploading(false)
    console.error("Upload error:", error)
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-neutral-900">Profile set up</h2>
          <p className="text-neutral-600 mt-1">
            This section includes the information you shared when first setting up your HiredEasy profile.
          </p>
        </div>
        {!isEditing ? (
          <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)}>
            <Pencil className="h-4 w-4" />
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" onClick={() => setIsEditing(false)}>
              <X className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleSubmit}>
              <Save className="h-4 w-4" /> {/* Display save icon when editing */}
            </Button>
          </div>
        )}
      </div>

      <Card className="rounded-xl border border-neutral-200">
        <CardContent className="p-6">
          <div className="space-y-6">
            {/* Avatar Section */}
            <div className="pb-6 border-b border-neutral-200">
              <h3 className="text-lg font-semibold mb-4">Avatar</h3>
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={formData.profilePhoto || "/placeholder.svg"} />
                  <AvatarFallback>{formData.fullName?.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="text-red-500 border-red-500 hover:bg-red-50"
                      onClick={() => setFormData(prev => ({ ...prev, profilePhoto: '' }))}>
                      <Camera className="h-4 w-4 mr-2" /> Remove photo
                    </Button>
                    <UploadButton
                      endpoint="profilePictureUploader"  
                      onClientUploadComplete={handleUploadComplete}
                      onUploadError={handleUploadError}
                    />
                    <Button 
                      className="bg-emerald-400 hover:bg-emerald-500"
                      disabled={isUploading}>
                      <Camera className="h-4 w-4 mr-2" />
                      {isUploading ? "Uploading..." : "Change photo"}
                    </Button>
                  </div>
                  <p className="text-sm text-neutral-600">
                    File upload criteria like file format: JPG, JPEG, PNG, and max file size of 5MB.
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Information Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Personal information</h3>
              </div>

              <div className="space-y-4">
                <div className="grid gap-y-4">
                  {[{ label: 'Full name', name: 'fullName' }, { label: 'Location', name: 'location' }, { label: 'Postcode', name: 'postcode' }, { label: 'Phone number', name: 'phone' }].map((field) => (
                    <div key={field.name} className="flex items-center py-2">
                      <div className="w-1/3">
                        <span className="text-neutral-700 font-medium">{field.label}:</span>
                      </div>
                      {isEditing ? (
                        <Input
                          name={field.name}
                          value={formData[field.name] || ''}
                          onChange={handleChange}
                          className="w-2/3"
                        />
                      ) : (
                        <span className="text-neutral-600 w-2/3">{formData[field.name]}</span>
                      )}
                    </div>
                  ))}

                  <div className="flex items-center py-2">
                    <div className="w-1/3">
                      <span className="text-neutral-700 font-medium">English level:</span>
                    </div>
                    <div className="w-2/3">
                      {isEditing ? (
                        <Select
                          value={formData.englishLevel}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, englishLevel: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select English level" />
                          </SelectTrigger>
                          <SelectContent className="bg-white shadow-lg">
                            <SelectItem value="professional">Professional working proficiency</SelectItem>
                            <SelectItem value="native">Native</SelectItem>
                            <SelectItem value="fluent">Fluent</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="basic">Basic</SelectItem>
                          </SelectContent>
                        </Select>
                      ) : (
                        <span className="text-neutral-600 w-2/3">{formData.englishLevel}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
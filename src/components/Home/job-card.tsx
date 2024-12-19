import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface JobCardProps {
  title: string
  companies: Array<{
    logo: string
    name: string
  }>
}

export function JobCard({ title, companies }: JobCardProps) {
  return (
    <Card className="w-[260px] sm:w-[280px] md:w-[300px] flex-shrink-0 bg-white shadow-lg hover:shadow-xl transition-shadow duration-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-xs sm:text-sm font-medium text-gray-900 text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {companies.map((company) => (
            <div key={company.name} className="flex items-center gap-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center p-1">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xs text-gray-600">{company.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ShowcaseItem {
  stats: {
    primary: {
      value: string
      label: string
    }
    secondary: {
      value: string
      label: string
    }
  }
  products: string[]
  caseStudy: {
    company: string
    image: string
    title: string
    logo: string
  }
}

const showcaseData: ShowcaseItem[] = [
  {
    stats: {
      primary: {
        value: "5+",
        label: "Amazon businesses on Stripe including Prime, Audible, and Amazon Pay",
      },
      secondary: {
        value: "50+",
        label: "Payment methods available on Stripe",
      },
    },
    products: ["Payments", "Connect"],
    caseStudy: {
      company: "Amazon",
      image: "/https://unsplash.com/photos/close-up-of-shopping-cart-on-top-of-computer-keyboard-with-shipping-boxes-around-it-and-copy-space-concept-of-e-commerce-shipping-drop-shipping-and-retailers-3d-rendering-6elR6qXxT3s",
      title: "See how Amazon simplified cross-border payments with Stripe",
      logo: "/placeholder.svg?height=50&width=120",
    },
  },
  {
    stats: {
      primary: {
        value: "+5.5%",
        label: "Uplift from Stripe's Global Payments Infrastructure",
      },
      secondary: {
        value: "+1%",
        label: "Uplift from Adaptive Acceptance",
      },
    },
    products: ["Payments", "Sigma"],
    caseStudy: {
      company: "Twilio",
      image: "/https://plus.unsplash.com/premium_photo-1686810855087-838adffd3170?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "See how Twilio increased authorization rates by 10% with Stripe",
      logo: "/placeholder.svg?height=50&width=120",
    },
  },
  {
    stats: {
      primary: {
        value: "Millions",
        label: "BMW owners using ConnectedDrive Store",
      },
      secondary: {
        value: "350+",
        label: "US dealerships",
      },
    },
    products: ["Payments", "Connect"],
    caseStudy: {
      company: "BMW",
      image: "/https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "See how BMW revolutionized connected car services with Stripe",
      logo: "/placeholder.svg?height=50&width=120",
    },
  },
]

export function EnterpriseShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % showcaseData.length)
    }, 4000) // Change every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const currentItem = showcaseData[currentIndex]

  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-8">
        <div className="text-sm font-medium text-purple-600">Enterprise reinvention</div>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
          Bring agility to your enterprise
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-600">
          Quickly build great payments experiences, improve performance, expand into new markets, and
          engage customers with subscriptions and marketplaces. Get expert integration guidance from our{" "}
          <a href="#" className="text-purple-600 hover:text-purple-700">
            professional services
          </a>{" "}
          team and{" "}
          <a href="#" className="text-purple-600 hover:text-purple-700">
            certified partners
          </a>
          , and connect Stripe to Salesforce, SAP, and more through the{" "}
          <a href="#" className="text-purple-600 hover:text-purple-700">
            Stripe App Marketplace
          </a>
          .
        </p>
        <Button className="mt-6 bg-purple-600 hover:bg-purple-700">
          Explore Stripe for enterprises
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-12">
          <div>
            <div className="text-3xl font-bold text-gray-900">{currentItem.stats.primary.value}</div>
            <p className="mt-2 text-sm text-gray-600">{currentItem.stats.primary.label}</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">{currentItem.stats.secondary.value}</div>
            <p className="mt-2 text-sm text-gray-600">{currentItem.stats.secondary.label}</p>
          </div>
          <div>
            <div className="font-medium text-gray-900">Products used</div>
            <div className="mt-4 space-y-2">
              {currentItem.products.map((product) => (
                <div key={product} className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-md bg-purple-600" />
                  <span className="text-sm text-gray-600">{product}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <Card className="overflow-hidden">
            <div className="relative aspect-[16/9]">
              <img
                src={currentItem.caseStudy.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <img
                    src={currentItem.caseStudy.logo}
                    alt={currentItem.caseStudy.company}
                    className="h-8"
                  />
                  <Button variant="ghost" className="text-white">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <h3 className="text-2xl font-bold text-white">{currentItem.caseStudy.title}</h3>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="mt-16 flex justify-center gap-8">
        {showcaseData.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-purple-600" : "bg-gray-200"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}


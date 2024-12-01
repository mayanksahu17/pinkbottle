'use client'

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Card {
  id: number
  name: string
  color: string
  x: number
  y: number
  isActive?: boolean
}

const cards: Card[] = [
  { id: 1, name: "Tax", color: "bg-purple-500", x: 70, y: 0 },
  { id: 2, name: "Billing", color: "bg-yellow-400", x: 0, y: 30 },
  { id: 3, name: "Payments", color: "bg-gradient-to-br from-blue-400 to-purple-500", x: 50, y: 50 },
  { id: 4, name: "Radar", color: "bg-gradient-to-br from-pink-400 to-red-500", x: 70, y: 70 },
]

const ghostCards = Array.from({ length: 12 }, (_, i) => ({
  id: i + 5,
  x: Math.random() * 80,
  y: Math.random() * 80,
}))

export default function ModularSolutions() {
  const [activeCards, setActiveCards] = useState<Card[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const randomCard = cards[Math.floor(Math.random() * cards.length)]

      // Randomize position within bounds of the container
      const randomX = Math.random() * 80
      const randomY = Math.random() * 80

      setActiveCards((prev) => {
        const isAlreadyActive = prev.some((card) => card.id === randomCard.id)
        if (isAlreadyActive) return prev
        return [...prev, { ...randomCard, x: randomX, y: randomY, isActive: true }]
      })
    }, Math.random() * 2000 + 1000) // Random interval between 1 to 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-purple-600 font-medium"
            >
              Freshly Baked 
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing 
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit ullam, modi excepturi voluptates iste, aliquam doloribus recusandae, atque aut quis nam. Nostrum officia quisquam sunt esse doloribus qui harum dicta.
            </motion.p>
          </div>
          <div className="w-full lg:w-1/2 relative aspect-square">
            {/* Ghost Cards Background */}
            {ghostCards.map((card) => (
              <div
                key={card.id}
                className="absolute w-16 h-16 border-2 border-gray-100 rounded-lg"
                style={{
                  left: `${card.x}%`,
                  top: `${card.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}

            {/* Active Cards */}
            {activeCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute"
                style={{
                  left: `${card.x}%`,
                  top: `${card.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="relative">
                  {index > 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 -z-10"
                    >
                      <svg
                        width="100"
                        height="100"
                        className="absolute"
                        style={{
                          transform: `translate(${
                            (activeCards[index - 1].x - card.x) * 5
                          }px, ${(activeCards[index - 1].y - card.y) * 5}px)`,

                        }}
                      >
                        <line
                          x1="50"
                          y1="50"
                          x2="50"
                          y2="50"
                          stroke="rgb(139 92 246)"
                          strokeWidth="2"
                          className="opacity-30"
                        />
                      </svg>
                    </motion.div>
                  )}
                  <div
                    className={`w-16 h-16 ${card.color} rounded-lg shadow-lg flex items-center justify-center`}
                  >
                    <span className="text-white text-sm font-medium">{card.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { RemoveScroll } from "react-remove-scroll"
import { Button } from "./ui/button"

const TallyFormModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [modalPosition, setModalPosition] = useState({ top: 0 })

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight

      setModalPosition({ top: scrollY + viewportHeight * 0.1 })

      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className={`fixed inset-0 bg-black bg-opacity-80 z-[9999] backdrop-blur-md transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
    >
      <RemoveScroll enabled={isOpen}>
        <div
          className={`bg-white rounded-lg relative w-full max-w-3xl mx-auto transition-all duration-300 ease-in-out ${isOpen ? "translate-y-0" : "translate-y-4"
            }`}
          style={{
            position: "absolute",
            top: `${modalPosition.top}px`,
            left: 0,
            right: 0,
            maxHeight: "80vh",
            height: "80vh",
            margin: "0 auto",
            opacity: isOpen ? 1 : 0,
          }}
        >
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg text-3xl text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="Close modal"
          >
            ×
          </button>
          <div className="h-[70vh] rounded-lg">
            <iframe
              src="https://tally.so/r/n9pAx1"
              className="w-full h-full"
              style={{
                border: "none",
                overflow: "auto",
                display: "block",
              }}
              title="Tally subscription form"
            />
          </div>
        </div>
      </RemoveScroll>
    </div>,
    document.body,
  )
}

export default function BudgeAIForm() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <Button className="rounded-full bg-green-700 hover:bg-green-600" size="lg" onClick={() => setIsModalOpen(true)}>
        Get Early Access
      </Button>

      <TallyFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export function BudgeAIFormNavbar() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      <Button variant="outline" className="inline-flex text-black rounded-full" onClick={() => setIsModalOpen(true)}>
        Get Early Access
      </Button>

      <TallyFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export function BudgeAIFormFaq() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <Button className="h-10 mt-16 rounded-3xl px-8" size="lg" onClick={() => setIsModalOpen(true)}>
        Get Early Access
      </Button>

      <TallyFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

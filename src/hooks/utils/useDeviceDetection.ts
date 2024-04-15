'use client'

import { useEffect, useState } from 'react'

import { useMediaQuery } from 'react-responsive'

const MOBILE_DEVICE = { maxWidth: 768 }
const NOTEBOOK_DEVICE = { minWidth: 768, maxWidth: 1400 }
const DESKTOP_DEVICE = { minWidth: 1400 }

export function useDeviceDetection() {
  const mobile = useMediaQuery(MOBILE_DEVICE)
  const notebook = useMediaQuery(NOTEBOOK_DEVICE)
  const desktop = useMediaQuery(DESKTOP_DEVICE)

  const [isMobile, setIsMobile] = useState(false)
  const [isNotebook, setIsNotebook] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsMobile(mobile)
  }, [mobile])

  useEffect(() => {
    setIsNotebook(notebook)
  }, [notebook])

  useEffect(() => {
    setIsDesktop(desktop)
  }, [desktop])

  return { isMobile, isNotebook, isDesktop }
}

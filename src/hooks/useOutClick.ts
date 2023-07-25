import React, { useRef, useEffect } from 'react'

export const useOutClick = (
  callbackFunction: () => void,
): React.MutableRefObject<HTMLDivElement | null> => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleOutClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        if (callbackFunction) {
          callbackFunction()
        }
      }
    }

    window.addEventListener('mousedown', handleOutClick)

    return () => {
      window.removeEventListener('mousedown', handleOutClick)
    }
  }, [callbackFunction])

  return ref
}

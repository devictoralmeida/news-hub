import React, { useRef, useEffect } from 'react'

export const useKeydownPress = (
  keyId: string,
  callbackFunction: (element: HTMLParagraphElement | null) => void,
): React.MutableRefObject<HTMLParagraphElement | null> => {
  const ref = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    const handleKeydownPress = (event: KeyboardEvent) => {
      if (event.key === keyId) {
        if (callbackFunction) callbackFunction(ref.current)
      }
    }

    window.addEventListener('keydown', handleKeydownPress)

    return () => {
      window.removeEventListener('keydown', handleKeydownPress)
    }
  }, [callbackFunction, keyId])

  return ref
}

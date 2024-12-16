import { onBeforeUnmount } from 'vue'

export const useScrollLock = () => {
  if (!import.meta.client) return { lockScroll: () => {}, unlockScroll: () => {} }

  const lockScroll = () => {
    const scrollY = window.scrollY
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    
    document.body.dataset.scrollY = scrollY.toString()
    
    document.body.style.cssText = `
      position: fixed;
      top: -${scrollY}px;
      left: 0;
      right: 0;
      width: 100%;
      overflow: hidden;
      padding-right: ${scrollbarWidth}px;
    `
  }

  const unlockScroll = () => {
    const scrollY = parseInt(document.body.dataset.scrollY || '0')
    document.body.style.cssText = ''
    
    window.scrollTo(0, scrollY)
  }

  // Move inside composable function
  if (import.meta.client) {
    onBeforeUnmount(() => {
      unlockScroll()
    })
  }

  return { lockScroll, unlockScroll }
}
export const useScrollLock = () => {
  const lockScroll = () => {
    if (!import.meta.client) return

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
    if (!import.meta.client) return
    
    const scrollY = parseInt(document.body.dataset.scrollY || '0')
    document.body.style.cssText = ''
    
    window.scrollTo(0, scrollY)
  }

  onBeforeUnmount(() => {
    unlockScroll()
  })


  return { lockScroll, unlockScroll }
}
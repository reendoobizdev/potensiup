import React, {
    useReducer,
    useEffect,
    useCallback,
    useRef,
    useMemo
  } from 'react';
  import { WhatsappSVG, CloseSVG, CheckSVG, SendSVG } from './misc/Icons';
  import darkBG from '../public/assets/bg-chat-tile-dark.png';
  import lightBG from '../public/assets/bg-chat-tile-light.png';
  import AdminAvatar from '../public/assets/admin.png';
import Image from 'next/image';

//   import SoundBeep from '../public/assets/whatsapp-notification.mp3';
  
  
  // Just to change the ugly arabic font
  const isArabic = (text) =>
    /[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(text)
  

  
  function reducer(state, action) {
    switch (action.type) {
      case 'open':
        return {
          ...state,
          isOpen: true,
          isNotification: false
        }
      case 'close':
        return {
          ...state,
          isOpen: false
        }
  
      case 'delay':
        return {
          ...state,
          isDelay: false
        }
      case 'notification':
        return {
          ...state,
          isNotification: true
        }
      case 'message':
        return {
          ...state,
          message: action.payload
        }
      default:
        return state
    }
  }
  
  export default function FloatingWhatsApp({
    phoneNumber = '6281927652061',
    accountName = 'Romy',
    height = 320,
    statusMessage = 'Chat dibalas sekitar 15 menit',
    chatMessage = 'Hai salam kenal! 🤝 \nAda yang bisa saya bantu?',
    darkMode = false,
    allowClickAway = false,
    allowEsc = false,
    styles = {},
    className = 'custom-class',
    placeholder = 'Type a message..',
    notification = false,
    notificationDelay = 180000, // 3 minutes
    notificationSound = false
  }) {
    const [{ isOpen, isDelay, isNotification, message }, dispatch] = useReducer(
      reducer,
      {
        isOpen: false,
        isDelay: true,
        isNotification: false,
        message: ''
      }
    )
  
    if (notificationDelay < 30000)
      throw new Error(
        'notificationDelay prop value must be at least 30 seconds (30000 ms)'
      )
  
    const soundRef = useRef(null)
    const notificationInterval = useRef(0)
    const time = useMemo(
      () => new Date().toTimeString().split(`:`).slice(0, 2).join(`:`),
      []
    )
  
    const handleOpen = (event) => {
      event.stopPropagation()
      if (isOpen) return
  
      dispatch({ type: 'open' })
  
      setTimeout(() => dispatch({ type: 'delay' }), 2000)
  
      window.clearInterval(notificationInterval.current)
    }
  
    const handleChange = (event) => {
      dispatch({ type: 'message', payload: event.target.value })
    }
  
    const handleSubmit = (event) => {
      event.preventDefault()
      if (!message) return
  
      window.open(
        `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}`
      )
      dispatch({ type: 'message', payload: '' })
    }
  
    const onNotification = useCallback(() => {
      if (!notification) return
  
      notificationInterval.current = window.setInterval(() => {
        if (notificationSound) {
          if (soundRef.current) {
            soundRef.current.currentTime = 0
            soundRef.current.play()
          }
        }
        dispatch({ type: 'notification' })
      }, notificationDelay)
    }, [notification, notificationDelay, notificationSound])
  
    const onClickOutside = useCallback(() => {
      if (!allowClickAway || !isOpen) return
  
      dispatch({ type: 'close' })
    }, [allowClickAway, isOpen])
  
    const onEscKey = useCallback(
      (event) => {
        if (!allowEsc || !isOpen) return
  
        if (event.key === 'Escape') dispatch({ type: 'close' })
      },
      [allowEsc, isOpen]
    )
  
    useEffect(() => {
      onNotification()
    }, [onNotification])
  
    useEffect(() => {
      document.addEventListener('click', onClickOutside, false)
  
      return () => document.removeEventListener('click', onClickOutside)
    }, [onClickOutside])
  
    useEffect(() => {
      document.addEventListener('keydown', onEscKey, false)
  
      return () => document.removeEventListener('keydown', onEscKey)
    }, [onEscKey])
  
    return (
      <div
        className={`floatingWhatsapp ${className}`}
      >
        <div
          className="whatsappButton"
          onClick={(event) => handleOpen(event)}
          style={styles}
          aria-hidden="true"
        >
          <WhatsappSVG />
          {isNotification && <span className="notificationIndicator">1</span>}
        </div>
        <div
          className={`whatsappChatBox ${isOpen ? "open" : "close"}`}
          onClick={(event) => event.stopPropagation()}
          aria-hidden="true"
          style={{ height: isOpen ? height : 0 }}
        >
          <header className="chatHeader">
            <div className="avatar">
                <Image src={AdminAvatar} width={40} height={40}/>
            </div>
            <div className="status">
              <span className="statusTitle">{accountName}</span>
              <span className="statusSubtitle">{statusMessage}</span>
            </div>
            <div
              className="close"
              onClick={() => dispatch({ type: 'close' })}
              aria-hidden="true"
            >
              <CloseSVG />
            </div>
          </header>
  
          <div
            className="chatBody"
          >
            {isDelay ? (
              <div className="chatBubble">
                <div className="typing">
                  <div className="dot" />
                  <div className="dot" />
                  <div className="dot" />
                </div>
              </div>
            ) : (
              <div className="message">
                <span className="triangle" />
                <span className="accountName">{accountName}</span>
                <p className="messageBody">{chatMessage}</p>
                <span className="messageTime">
                  {time}
                  <span style={{ marginLeft: 5 }}>
                    <CheckSVG />
                  </span>
                </span>
              </div>
            )}
          </div>
  
          <footer className="chatFooter">
            <form onSubmit={handleSubmit}>
              <input
                className={`input ${isArabic(message) ? "arabic" : ''}`}
                placeholder={placeholder}
                onChange={handleChange}
                value={message}
                dir="auto"
              />
              <button
                type="submit"
                className="buttonSend"
                disabled={message === ''}
              >
                <SendSVG />
              </button>
            </form>
          </footer>
        </div>
      </div>
    )
  }
  
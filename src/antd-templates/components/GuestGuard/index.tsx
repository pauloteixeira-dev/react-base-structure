import React from 'react'
import { useAuth } from 'hooks/useAuth'
import { useLocation, Navigate } from 'react-router-dom'

type TProps = {
  children: React.ReactNode
}

const GuestGuard:React.FC<TProps> = ({ children }) => {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  if (isAuthenticated) {
    return <Navigate to='/' state={{ from: location }} replace />
  }

  return <div>{children}</div>
}

export default GuestGuard

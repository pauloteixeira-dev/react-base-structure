import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import { STORAGE_USER_DATA_KEY } from 'constants/localStorage'
import { TUserData } from 'model/dtos/Login'

type TProps = {
  children: React.ReactNode,
}

const ProducerGuard:React.FC<TProps> = ({ children }) => {
  const location = useLocation()
  const lsUserData = localStorage.getItem(STORAGE_USER_DATA_KEY)
  const userData: TUserData = lsUserData && JSON.parse(lsUserData)


  if (userData?.producer) {
    return <div>{children}</div>
  }
  return <Navigate to='/producer-select/select' state={{ from: location }} replace />
}

export default ProducerGuard

import React from 'react'
import { useAuth } from 'hooks/useAuth'
import { useLocation, Navigate } from 'react-router-dom'
import { STORAGE_USER_DATA_KEY } from 'constants/localStorage'
import { TUserData } from 'model/dtos/Login'

type TProps = {
  children: React.ReactNode,
  allowedPermissions?: string[],
}

const AuthGuard:React.FC<TProps> = ({ children, allowedPermissions }) => {
  const { isAuthenticated } = useAuth()
  const location = useLocation()
  const lsUserData = localStorage.getItem(STORAGE_USER_DATA_KEY)
  const userData: TUserData = lsUserData && JSON.parse(lsUserData)

  const isAllowed = Boolean(!allowedPermissions
    || userData?.permissions.find(permission => allowedPermissions?.includes(permission)))

  if (!isAuthenticated) {
    return <Navigate to='/authentication/login' state={{ from: location }} replace />
  }

  if (isAllowed) {
    return <div>{children}</div>
  }
  return <Navigate to='/unauthorized' state={{ from: location }} replace />
}

export default AuthGuard

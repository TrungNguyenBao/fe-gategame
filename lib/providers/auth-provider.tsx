import axios from 'axios'
import { sendCode, signin, signup, verifyCode } from '../../lib/services/auth'
import { useRouter } from 'next/dist/client/router'
import { createContext, useContext, useEffect, useState } from 'react'
import { callAPI } from '../api'
import {
  setTokenAdmin,
  getTokenAdmin,
  setTokenUser,
  clearTokenAdmin,
} from '../api/header'
import { useAlert } from './alert-dialog'

interface User {
  id: string
  username: string
}
export const AuthContext = createContext<{
  me?: any
  setMe?: any
  token?: any,
  setToken?: any
  logout?: any
  getMe?: any
  login?: any
  register?: any
  verify?: any
  resend?: any
}>({})

export const INFO_ME = 'info_me'
export const TOKEN_ME = 'token_me'

export function AuthProvider({ children }: { children: any }) {
  const [me, setMe] = useState();
  const [token, setToken] = useState();

  const login = async (loginData: any) => {
    const { data: { Error, User } } = await signin(loginData);
    if (User) {
      window.localStorage.setItem(INFO_ME, JSON.stringify(User))
      window.localStorage.setItem(TOKEN_ME, JSON.stringify(User?.Token))
      setMe(User)
      setToken(User?.Token)
      // window.location.reload()
    }
    return { Error };
  }

  const verify = async (data: any) => {
    const { data: { Error, User } } = await verifyCode(data)
    if (User) {
      window.localStorage.setItem(INFO_ME, JSON.stringify(User))
      window.localStorage.setItem(TOKEN_ME, JSON.stringify(User?.Token))
      setMe(User)
      setToken(User?.Token)
      // window.location.reload()
    }
    return { Error };
  }

  const resend = async ({ email }: any) => {
    const { data: { Error, Result } } = await sendCode({ email })
    return { Error, Result }
  }

  const logout = () => {
    window.localStorage.removeItem(INFO_ME)
    window.localStorage.removeItem(TOKEN_ME)
    setMe(null)
    setToken(null)
  }

  const register = async (data: any) => {
    const { data: { Error, Result } } = await signup(data);
    return { Error, Result }
  }

  const getMe = () => {
    try {
      let jsonString
      let obj
      jsonString = window.localStorage.getItem(INFO_ME)
      obj = JSON.parse(jsonString)
      return obj;
    } catch {
      return null;
    }
  }

  useEffect(() => {
    try {
      let jsonString
      let obj

      jsonString = window.localStorage.getItem(INFO_ME)
      obj = JSON.parse(jsonString)
      setMe(obj);

      jsonString = window.localStorage.getItem(TOKEN_ME)
      obj = JSON.parse(jsonString)
      setToken(obj)
    }
    catch (ex) {
      console.log(ex);
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        me,
        token,
        setMe,
        setToken,
        logout,
        login,
        getMe,
        register,
        verify,
        resend,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

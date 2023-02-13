import http from '@/lib/http'

const SIGN_IN = '/auth/create-token'
const SIGN_UP = '/auth/sign-up'
const USER_PROFILE = '/auth/profile'

export const signIn = (info) => http.post(SIGN_IN, info)
export const signUp = (info) => http.post(SIGN_UP, info)
export const getProfile = () => http.post(USER_PROFILE)

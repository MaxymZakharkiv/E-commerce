import http from '@/lib/http'

const SIGN_IN = '/auth/token'
const SIGN_UP = '/auth/sign-up'

export const signIn = (info) => http.post(SIGN_IN, info)
export const signUp = (info) => http.post(SIGN_UP, info)

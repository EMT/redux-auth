// @flow
export const AUTH_SET_WAITING = 'AUTH_SET_WAITING'
export const AUTH_SET_FAILED = 'AUTH_SET_FAILED'
export const AUTH_SET_SUCCEEDED = 'AUTH_SET_SUCCEEDED'

export type TypeAuthPayload = {
    id: null | number | string,
    user: { [key: string]: any },
}

export type TypeAuthSetWaiting = { type: 'AUTH_SET_WAITING' }
export type TypeAuthSetFailed = { type: 'AUTH_SET_FAILED' }
export type TypeAuthSetSucceeded = { type: 'AUTH_SET_SUCCEEDED', payload: TypeAuthPayload }

// @flow
export const AUTH_SET_ID = 'AUTH_SET_ID'
export const AUTH_SET_USER = 'AUTH_SET_USER'
export const AUTH_SET_WAITING = 'AUTH_SET_WAITING'
export const AUTH_SET_DONE = 'AUTH_SET_DONE'
export const AUTH_SET_FAILED = 'AUTH_SET_FAILED'
export const AUTH_SET_SUCCEEDED = 'AUTH_SET_SUCCEEDED'

export type TypeAuthSetId = {
    type: 'AUTH_SET_ID',
    payload: ? number | string,
}

export type TypeAuthSetUser = {
    type: 'AUTH_SET_USER',
    payload: { [key: string]: any },
}

export type TypeAuthSetWaiting = { type: 'AUTH_SET_WAITING' }
export type TypeAuthSetDone = { type: 'AUTH_SET_DONE' }
export type TypeAuthSetFailed = { type: 'AUTH_SET_FAILED' }
export type TypeAuthSetSucceeded = { type: 'AUTH_SET_SUCCEEDED' }

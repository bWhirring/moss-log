// @ts-nocheck

const proto = Object.prototype
const isObject = params => params !== null && typeof params === 'object'

export const _cl = (ite: [], ...sub: []) => joint(ite, sub)
export const _log = (ite: [], ...sub: []) => console.log(joint(ite, sub))

function joint(ite, sub) {
  let ret: string = ''
  for (let i = 0; i < ite.length; i++) {
    ret += ite[i]
    const val = sub?.[i]
    if(val) ret += isObject(val) ? JSON.stringify(val): val
  }

  return ret
}

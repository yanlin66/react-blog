import {
  randomWord
} from './utils'

import {
  isAuthenticated
} from './Session'

export default function isPlatform() {
  return sessionStorage.isPlatform
}

export function _util(){
  return {
    randomWord:randomWord,

    isPlatform:isPlatform,

    isAuthenticated:isAuthenticated
  };
}

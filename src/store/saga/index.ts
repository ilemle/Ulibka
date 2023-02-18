 import {all} from 'redux-saga/effects'
import { photosWatcher } from './photos'
  
 export function* rootWatcher(){
    yield all([photosWatcher()])
 }  
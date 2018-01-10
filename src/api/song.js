/**
 * Created by lzf_allen on 2017/10/8.
 */
import {commonParams} from './config'
import axios from 'axios'
export function getLyric (mid) {
  const url = '/api/lyric'
  const data = Object.assign({}, commonParams, {
    musicid: mid,
    nobase64: 1,
    songtype: 0,
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

import {$Toast,$Message} from '../iview/base/index'

export function errorMsg(data, msg) {
  if (data.code === -2) {
    $Toast({
      content: `${msg}失败：${data.msg}`,
      type: 'error'
    })
  } else {
    $Toast({
      content: `${msg}失败`,
      type: 'error'
    })
  }
}
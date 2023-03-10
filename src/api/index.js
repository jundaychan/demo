import request from "./request";

export const getText = () => request({ url: 'daily_word/recommend?app_secret=WnhrK251TWlUUThqaVFWbG5OeGQwdz09&app_id=rgihdrm0kslojqvm', method: 'get' })
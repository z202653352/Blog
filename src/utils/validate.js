// 邮箱校验
export const validateEmail = (rule, value, callback) => {
  var emailRegExp = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
  var emailRegExp1 = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  if ((!emailRegExp.test(value) && value != '') || (!emailRegExp1.test(value) && value != '')) {
    callback(new Error('请输入有效邮箱格式！'));
  } else {
    callback();
  }
};
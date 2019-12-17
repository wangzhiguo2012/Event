
// 这个js文件中用来保存网站中的一些配置信息
// 例如所有的接口地址，都可以保存在这个文件中
// 下面这些保存的配置信息的变量最好避免被其他代码不小心修改了
// 可以变量命名书写为全大写的形式
// 命名的多个部分使用——连接（下划线命名方法）




var BASE_URL = 'http://localhost:8000';



var LOGIN = BASE_URL + '/admin/login';
var LOGOUT = BASE_URL + '/admin/logout'
var GET_USER = BASE_URL + '/admin/getuser'
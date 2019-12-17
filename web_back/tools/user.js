// 使用user.jsdui 对项目中域用户操作有关的请求功能进行保存

var user = {
    // 设置login方法，用来设置方法
    login: function (options) {
        $.ajax({
            type: 'post',
            url: LOGIN,
            data: {
                // 第一个 user_name是data的属性
                // 第二个是 user_name是html中data的实参
                user_name: options.data.user_name,
                password: options.data.password
            },
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }

            }
        });
    },
    logout: function (options) {
        $.ajax({
            type: 'post',
            url: LOGOUT,

            success: function (res) {
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }

            }
        });
    },
    getUser: function (options) {
        $.ajax({
            url: GET_USER,
            success: function (res) {
                if (res.code == 200) {
                    options.success(res.data);
                }
            }
        })
    }
};
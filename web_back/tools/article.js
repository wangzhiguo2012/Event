var article = {
    getCate: function (options) {
        $.ajax({
            url: GET_CATE,
            success: function (res) {
                //   检测响应是否成功
                if (res.code === 200) {
                    // 调用模板方法生出结构
                    options.success(res)

                }
            }
        })
    },
    addCate: function (options) {
        $.ajax({
            type: 'post',
            url: ADD_CATE,
            data: $('form').serialize(),
            success: function (res) {
                if (res.code === 200) {
                    options.success(res)
                }
            }
        });

    }
}


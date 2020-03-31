import Mock from 'mockjs'

Mock.mock('/list',{
    "cartData|10":[
    {
        "produce":"@ctitle(3,5)",
        "detailMsg":"@ctitle(6,10)",
        "price|100-500":0,
        "img":"@image(100x100,red)",

        "num":0
    }]
})
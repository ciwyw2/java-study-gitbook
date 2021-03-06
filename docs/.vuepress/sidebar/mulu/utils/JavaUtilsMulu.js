exports.mulu = {
    title: 'Java工具类',   // 必要的
    //path: '/base/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    collapsable: true, // 可选的, 默认值是 true,
    sidebarDepth: 1,    // 可选的, 默认值是 1
    children: [
        {
            title: '跨域支持',   // 必要的
            //path: '/base/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
                {
                    title: 'CorsConfig',   // 必要的
                    path: 'utils/java/跨域支持/CorsConfig.md',
                }]
        },
        {
            title: 'SpringContext工具类',   // 必要的
            path: 'utils/java/SpringContext工具类.md',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
           
        }
    ]
}
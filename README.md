# taro 插件同步文件

把打包内容同步到 windows 下,解决 wsl2 下(`\\wsl$`)打包出的小程序文件直接从开发工具读会无法读取到的正确内容

## 用法

- `npm i -D taro-plugin-sync-in-wsl`

- 在 taro 的[配置](https://taro-docs.jd.com/taro/docs/config)下增加插件,以微信小程序为例如(tips:输出目录也可以修改成通过环境变量.env 文件获取):

```js
module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  defineConstants: {},
  mini: {},
  h5: {},
  plugins: [
    [
      'taro-plugin-sync-in-wsl',
      {
        weapp: [
          {
            sourcePath: 'dist',
            outputPath: '/mnt/d/path/in/windows/Code/dist',
          },
          {
            sourcePath: 'cloud',
            outputPath: '/mnt/d/path/in/windows/Code/cloud',
          },
        ],
      },
    ],
  ],
}
```

- 执行 taro 的 `npm run dev:weapp` 或其他

## todo

- [ ] npm test
- [ ] ci + npm publish

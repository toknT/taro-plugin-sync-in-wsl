# taro 插件同步文件

把打包内容同步到 windows 下,解决 wsl2 下(`\\wsl$`)打包出的小程序文件直接从开发工具读会无法读取到的正确内容

## 用法

- `yarn add -D taro-plugin-sync-in-wsl`

- 在 taro 的[配置](https://taro-docs.jd.com/taro/docs/config)下增加插件,以抖音小程序为例如:

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
      "taro-plugin-sync-in-wsl",
      { dists: { tt: "/mnt/d/path/in/windows" } },
    ],
  ],
};
```

- 执行taro的 `yarn dev:tt` 或其他
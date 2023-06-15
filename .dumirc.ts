import { defineConfig } from 'dumi';

const repo = 'react-cron-plus'; // 项目名

export default defineConfig({
  outputPath: 'docs-dist',
  favicons: ['https://avatars0.githubusercontent.com/u/9441414?s=200&v=4'],
  themeConfig: {
    name: 'CronPlus',
    hd: { rules: [] },
    rtl: true,
    logo: 'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  },
  history: {
    type: 'hash', // 打包后
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/react-cron-plus/' : '/', // 静态资源地址 ./其实也可以
  hash: true, // 这块是静态资源会标记hash 并不是路由中的hash 不要弄混了
});

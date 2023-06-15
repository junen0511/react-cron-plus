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
  mode: 'site',
  devServer: {
    port: 1998, // 自定义端口号
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
});

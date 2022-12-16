// kiwi-disable
import { defineConfig } from "umi";
import theme from "../src/theme";
import routes from "./routes";
import proxy from "./proxy";
import { commit, commitUserName, buildDate } from "../version.js";
import { commonTabs } from "../src/utils/businessMenus";
import react from "@vitejs/plugin-react";

// const os = require('os');
// const WORKER_LENGTH = os.cpus().length - 1;

// const isSourceMapEnabled = process.env.NODE_ENV !== 'production' || process.argv.indexOf('--sourcemap') !== -1;

const config = defineConfig({
  routes,
  mfsu: false,
  // vite: {
  //   plugins: [
  //     react({
  //       babel: {
  //         plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
  //       },
  //     }),
  //   ],
  // },
  // nodeModulesTransform: {
  //   type: 'none',
  // },
  // terserOptions: {
  //   parallel: true,
  // },
  extraBabelPlugins: [],
  // esbuild: {},
  devtool:
    process.env.NODE_ENV === "production"
      ? "source-map"
      : "cheap-module-source-map",
  lessLoader: {
    javascriptEnabled: true,
    math: "always",
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  chainWebpack: (config, { webpack }) => {},
  // antd: {},
  // dynamicImport: {
  //   loading: '@/Loading',
  // },
  title: "gm2-detail-front",
  metas: [
    {
      name: "version",
      content: `${buildDate}@${commitUserName}@${commit}`,
    },
  ],
  locale: {
    antd: true,
    default: "zh-CN",
    title: true,
    baseNavigator: true,
  },
  // chunks:
  //   process.env.NODE_ENV === 'production'
  //     ? ['reactVendor', 'antd', 'umiVendor', 'dzgVendors', 'vendors', 'commonBusinessServices', 'default', 'umi']
  //     : ['umi'],
  history: { type: "hash" },
  hash: true,
  publicPath: "/gm2-detail-front/",
  proxy,
  ignoreMomentLocale: true,
  theme: theme,
  mountElementId: "gm2-detail-front",
  mock: false,
  targets: {
    chrome: 80,
    // firefox: false,
    // safari: false,
    // edge: false,
    // ios: false,
  },
  copy: ["static"],
});

export default config;

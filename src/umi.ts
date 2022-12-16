// @ts-nocheck
import React from 'react';
import whyDidYouRender from '@welldone-software/why-did-you-render';

import 'intl';
import { plugin } from '@@/core/plugin';
import { createHistory } from '@@/core/history';
import { ApplyPluginsType } from '@umijs/runtime';
import { renderClient } from '@umijs/renderer-react';
import routes from '@@/routes';
import './global.less';
import _ from 'lodash';

import * as Plugin_0 from '@/app';
import * as Plugin_1 from '@/dynamicRouter';

window._ = _;

plugin.register({
  apply: Plugin_0,
  path: '@app',
});

plugin.register({
  apply: Plugin_1,
  path: '@/dynamicRouter',
});

const getClientRender = (args: { hot?: boolean; routes?: any[] } = {}) =>
  plugin.applyPlugins({
    key: 'render',
    type: ApplyPluginsType.compose,
    initialValue: () => {
      const opts = plugin.applyPlugins({
        key: 'modifyClientRenderOpts',
        type: ApplyPluginsType.modify,
        initialValue: {
          routes: args.routes || routes,
          plugin,
          history: createHistory(args.hot),
          isServer: process.env.__IS_SERVER,
          rootElement: 'gm2-detail-front',
          defaultTitle: `gm2-detail-front`,
        },
      });
      return renderClient(opts);
    },
    args,
  });

const clientRender = getClientRender();
export default clientRender();

window.g_umi = {
  version: '3.2.24',
};

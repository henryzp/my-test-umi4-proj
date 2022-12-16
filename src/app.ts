import "reflect-metadata";
import React from "react";
import theme from "./theme";
import { ConfigProvider, Modal, notification, message } from "antd";
import enUS from "antd/lib/locale/en_US";
import zhCN from "antd/lib/locale/zh_CN";
import { Provider } from "react-redux";
import RootWrapper from "./RootWrapper";
import "moment/locale/zh-cn";
import "./styles/common.less";
import { keyEventHelper } from "@/utils/keyEventHelper";
import { copyHelper } from "@/utils/copyHelper";
import { enableMapSet } from "immer";
import store from "./store";
import { Container } from "typedi";
import { TYPE_STORE } from "@/constants/di";
import { getCurrentLang, LangEnum } from "./utils/I18N";
import { setLocale } from "umi";
import moment from "moment";
import preloadPlugin from "./utils/preloadPlugin";
import { registerValidateRules } from "@formily/core";
import { isEmpty, isValid, isArr } from "@formily/shared";
import { formilyErrorHelper } from "./utils/formily-error-helper";
import { formilyCopyHelper } from "./utils/formily-copy-helper";
import { matchRoutes } from "umi";

const isValidateEmpty = (value: any) => {
  if (isArr(value)) {
    for (let i = 0; i < value.length; i++) {
      if (isValid(value[i])) return false;
    }
    return true;
  } else {
    //compat to draft-js
    if (value?.getCurrentContent) {
      /* istanbul ignore next */
      return !value.getCurrentContent()?.hasText();
    }
    return isEmpty(value);
  }
};

registerValidateRules({
  // 重写max的规则
  // @ts-ignore
  max(value, rule) {
    if (isValidateEmpty(value)) return "";
    const length = (value + "").length;
    const max = Number(rule.max);
    return length > max ? rule.message : "";
  },
  // 数量最大值
  // @ts-ignore
  maxValue(value, rule) {
    if (isValidateEmpty(value)) return "";
    const maxValue = Number(rule.maxValue);
    return Number(value) > Number(maxValue) ? rule.message : "";
  },
});

// formily的错误提示处理，要和GM2海运的保持统一
formilyErrorHelper(theme["ant-prefix"]);
formilyCopyHelper(theme["ant-prefix"]);

enableMapSet();

Container.set(TYPE_STORE, store);

message.config({ top: 40 });
notification.config({ prefixCls: `${theme["ant-prefix"]}-notification` });

keyEventHelper(theme["ant-prefix"]);
copyHelper(theme["ant-prefix"]);

const isEnUS = getCurrentLang() === LangEnum["en-US"];

const locale = isEnUS ? enUS : zhCN;

setTimeout(() => {
  !isEnUS && moment.locale("zh-cn");
  isEnUS && moment.locale("en");
}, 0);

/**
 * 路由切换回调方法
 * @export
 * @param {{ matchedRoutes }} { matchedRoutes 匹配到的路由 }
 * @return void
 */
export function onRouteChange({ clientRoutes, location }: any) {
  const route = matchRoutes(clientRoutes, location.pathname)?.pop()?.route;
  if (route) {
    document.title = route.title || "";
  }
}

/**
 * 路由修改回调
 * @export
 * @param {*} { routes } 项目路由
 * @return undefined
 */
export function patchRoutes({ routes }: any) {
  // routes是一个类数组，需要转换成数组
  preloadPlugin.install(Array.prototype.slice.call(routes));
}

/**
 * 根节点
 * @export
 * @param {React.ReactNode} container 节点渲染容器
 * @return 根节点
 */
export function rootContainer(container: React.ReactNode) {
  // https://github.com/umijs/umi/issues/8390
  setLocale(getCurrentLang());

  Modal.config({
    rootPrefixCls: `${theme["ant-prefix"]}`,
  });
  return React.createElement(
    Provider,
    { store },
    React.createElement(
      ConfigProvider,
      {
        prefixCls: theme["ant-prefix"],
        /**
         * getPopupContainer
         * @param node HTMLElement
         * @returns HTMLElement
         */
        getPopupContainer: (node: HTMLElement) => {
          if (node && node.parentElement) {
            return node.parentElement;
          }
          return document.body;
        },
      },
      React.createElement(RootWrapper, {}, container)
    )
  );
}

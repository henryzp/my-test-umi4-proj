import React, { useEffect } from "react";

/**
 * 页面loading
 * @return 空节点
 */
export default () => {
  useEffect(() => {
    loading.start();
    return () => {
      loading.destroy();
    };
  }, []);
  return <></>;
};

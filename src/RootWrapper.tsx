import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
// import { authActions } from "./auth/rsModel";
import { TRootState } from "./reducers";
import { AliveScope } from "react-activation";

const connector = connect((state: TRootState) => {
  return {
    IS_USER_INFO_INIT: state.auth_userInfoReducer.IS_USER_INFO_INIT as boolean,
  };
});

const RootWrapper: React.FC<ConnectedProps<typeof connector>> = ({
  children,
  dispatch,
  IS_USER_INFO_INIT = false,
}) => {
  useEffect(() => {
    // dispatch(authActions.getUserInfo());
  }, []);

  return (
    <AliveScope>
      <>{IS_USER_INFO_INIT && children}</>
    </AliveScope>
  );
};

export default connector(RootWrapper);

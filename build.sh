#!/bin/sh
export PATH="$PATH:$PWD/node_modules/.bin/"
VERSION=`sentry-cli releases propose-version`

cross-env NODE_ENV=production UMI_APP_VERSION=$VERSION PROGRESS=none BABELRC=on APP_ROOT=./ NODE_OPTIONS=--max_old_space_size=2048 max build

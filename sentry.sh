#!/bin/sh
export PATH="$PATH:$PWD/node_modules/.bin/"
VERSION=`sentry-cli releases propose-version`

export SENTRY_PROJECT="gm2-detail-front"
export SENTRY_ORG="dzg"
export SENTRY_AUTH_TOKEN="cce6f9ff948d40a2b4d66b5c8727baf197348ffe096e45ae9c0bf075bd4c504c"
export SENTRY_URL="https://fem.900jit.com"

sentry-cli releases new "$VERSION"

sentry-cli \
releases files "$VERSION" \
upload-sourcemaps "./dist" \
--url-prefix=~/gm2-detail-front \
--validate

sentry-cli releases finalize "$VERSION"

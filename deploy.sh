#!/bin/sh

pnpm -r up
pnpm run prettier
pnpm run build

scp -r -i ~/.ssh/shqcloud.pem ./out/* ubuntu@49.235.162.23:~/www/apps/youhaoai/out

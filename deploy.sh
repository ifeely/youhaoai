#!/bin/sh

pnpm -r up
pnpm run build

scp -r -i ~/.ssh/shqcloud.pem ./out/* ubuntu@124.222.130.121:~/www/apps/youhaoai
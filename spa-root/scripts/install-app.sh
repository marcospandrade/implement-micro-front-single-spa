#!/bin/bash

yarn &
cd ..

git clone git@gitlab.internal.b2w.io:team/wms/wms-micro-front/wms-reports.git
cd wms-reports
cp .env.example .env
yarn &

cd ..
git clone git@gitlab.internal.b2w.io:team/wms/wms-micro-front/wms-auth.git
cd wms-auth
cp .env.example .env
yarn &

cd ..
git clone git@gitlab.internal.b2w.io:team/wms/wms-micro-front/wms-styleguide.git
cd wms-styleguide
yarn &

cd ..
git clone git@gitlab.internal.b2w.io:team/wms/wms-micro-front/wms-access-control.git
cd wms-access-control
cp .env.example .env
yarn &

cd ..
git clone git@gitlab.internal.b2w.io:team/wms/wms-micro-front/wms-vader.git
cd wms-vader
cp .env.example .env
yarn &

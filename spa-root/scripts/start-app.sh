#!/bin/bash

cd ../react-header 
yarn start &

cd ../react-lazy 
yarn start &

cd ../react-multiples 
yarn start &

cd ../react-parcel 
yarn start &

cd ../react-route-todo 
yarn start &

cd ../react-single 
yarn start &

cd ../utils 
yarn start &

cd ../spa-root 
yarn start &

xdg-open http://localhost:8600
#!/bin/bash

rm -rf ./build/env.js
touch ./build/env.js

echo "window.env = {" >> ./build/env.js

vars=$(printenv | grep 'REACT_APP')

for i in $(echo $vars | sed "s/ / /g")
do
   if printf '%s\n' "$i" | grep -q -e '='; then
        varname=$(printf '%s\n' "$i" | sed -e 's/=.*//')
        varvalue=$(printf '%s\n' "$i" | sed -e 's/^[^=]*=//')
    fi

    echo "  $varname: \"$varvalue\"," >> ./build/env.js
done

echo "}" >> ./build/env.js

node server.js
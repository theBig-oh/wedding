#!/bin/bash

index=1

for file in *; do
  if [[ -f "$file" ]]; then
    extension="${file##*.}"
    mv "$file" "$index.$extension"
    index=$((index+1))
  fi
done
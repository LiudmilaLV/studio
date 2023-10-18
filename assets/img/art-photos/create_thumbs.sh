#!/bin/bash

# Get script location
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

# Function to resize images
function create_thumbs {
    dir=$1
    mkdir -p "${dir}/thumbs"
    find "$dir" -maxdepth 1 -type f \( -iname \*.jpg -o -iname \*.png -o -iname \*.jpeg \) -exec bash -c 'convert "$0" -resize 400x400 "$1/thumbs/$(basename "$0")"' {} "$dir" \;
}

# Walking through directories and creating thumbs
find "$SCRIPT_DIR" -maxdepth 1 -type d ! -path "$SCRIPT_DIR" -print0 | while IFS= read -r -d '' dir; do
    create_thumbs "$dir"
done

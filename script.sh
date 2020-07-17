#!/bin/bash

# This is script pushes code to master branch on github in just one click.

PULL=$1

if [ $PULL == [yY] ]
then
	echo "Pulling from git"
fi


read -p "Commit message: " MM

git add --all
git commit -m ${MM}
git push -u origin master

echo $?


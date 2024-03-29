#!/bin/bash

# This is script pushes code to master branch on github in just one click.

PULL=$1

if [ $PULL == 'y' ]
then
	echo " ** Pulling from git ** "
	git pull
fi


read -p " Commit message: " MM

git add --all && git commit -m ${MM} && git push -u origin master || echo "FAILED"


if [ $? -eq 0 ]
then
	echo " *** DONE *** "
fi


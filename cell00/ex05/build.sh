#!/bin/env bash

i=1;

j=$#;

if [[ $j -eq 0 ]]
then
	echo "No arguments supplied";
	exit;
fi
while [[ $i -le $j ]]
do
	mkdir "ex$1";
	i=$(($i + 1));
	shift 1;
done

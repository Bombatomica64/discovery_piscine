#!/bin/env bash
i=1;

j=$#;

if [[ $j -eq 0 ]]
then
	echo "No arguments supplied"
	exit;
fi

if [[ $j -gt 3 ]]
then
	j=3;
fi

while [[ $i -le $j ]]
do
	echo $1;
	i=$((i + 1));
	shift 1;
done

#!/bin/bash

checkwifi=$(nmcli radio wifi)
echo "$checkwifi"
if [ "$checkwifi" = "enabled" ];then
    nmcli radio wifi off
else 
    nmcli radio wifi on
fi



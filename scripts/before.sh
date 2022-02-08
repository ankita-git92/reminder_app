#!/bin/sh

# check if reminder-app folder exits
if [ ! -d /home/ubuntu/reminder-app ]; then
    mkdir -vp /home/ubuntu/reminder-app
fi
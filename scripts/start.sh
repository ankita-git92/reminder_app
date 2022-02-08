cd /home/ubuntu/reminder-app

current_env=`cat /etc/reminder/env`
current_config=`cat /etc/reminder/bucket`

aws s3 cp s3://$current_config/$current_env/$current_env.reminder-app.env .env

echo "Starting Reminder App - Stage Server"

yarn 

yarn stage:stop || yarn stage:start

yarn stage:start
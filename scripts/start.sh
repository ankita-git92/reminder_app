cd /home/ubuntu/altvest-app

current_env=`cat /etc/altvest/env`
current_config=`cat /etc/altvest/bucket`

aws s3 cp s3://$current_config/$current_env/$current_env.altvest-app.env .env

echo "Starting Altvest App - Stage Server"

yarn 

yarn stage:stop || yarn stage:start

yarn stage:start
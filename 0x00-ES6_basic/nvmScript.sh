#!/usr/bin/env bash
#
# this script will help you install node version manager
# allowing you to switch between different nodejs versions
# if you already have a nodejs install and running, its all fine
# after running the script you will be able to access,
# ALX required nodejs version 12.11.1 with a single command
#
# sudo apt-get update -y
ALX_NODE_VERSION=12.11.1
RED='\e[0;31m'
YELLOW="\e[0;33m"
PURPLE="\e[1;34m"
BLUE="\e[0;34m"
LIGHT_BLUE="\e[1;34m"
GREEN="\e[0;32m"
NC='\033[0m'

echo -e "${RED}\nChecking your environment...${NC}\n"
progress_bar() {
  duration=$1
  bar_length=50

  for ((i=0; i<duration; i++)); do
    percent=$(( (i + 1) * 100 / duration ))
    filled=$(( (i + 1) * bar_length / duration ))
    unfilled=$(( bar_length - filled + 1 ))

    printf "${LIGHT_BLUE}\r["
    printf "%0.s█" $(seq 1 $filled)
    if [[ $percent -eq 100 ]] then
      printf "%0.s" $(seq 1 $unfilled)
    else
      printf "%0.s-" $(seq 1 $unfilled)
    fi

    printf "] %d%%" $percent

    sleep 1
  done
  printf "\n"
  echo -e "${NC}"
}


[[ ! $(dpkg-query -W nodejs) ]] > /dev/null 2>&1 && sudo apt install nodejs -y
[[ -z '${NVM_BIN}' ]] > /dev/null 2>&1 && sudo apt install nvm -y

if [[ $(nodejs -v) != 12.11.1 ]] then
  progress_bar 5
  echo -e "${GREEN}Installing node-version(12.11.1) through nvm...${NC}"
  nvm install $ALX_NODE_VERSION
  echo -e "${GREEN}"
  read -p "Do you want to setup alias for alx-node-version [y/n] " choice
  echo -e "${NC}"

  if [[ "$choice" == "y" || "$choice" == "Y" || "$choice" == "yes" ]] then
    nvm alias alx 12.11.1
    echo -e "${GREEN}Alias set.\n\t Use \`nvm use alx\`${NC}\n"
  elif [[ "$choice" == "n" ]] then
    echo -e "${PURPLE}Here is the command to help you swith to alx-node-version${NC}"
    echo -e "${YELLOW}\n\t nvm use 12.11.1\n${NC}"
  else
    echo -e "${RED}No choice was made exiting the program"
    exit
  fi
  echo -e "${PURPLE}Bye thank you for running the script!${NC}"
fi

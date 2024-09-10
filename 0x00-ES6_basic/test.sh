#!/usr/bin/bash

# Define color variables
YELLOW='\033[1;33m'
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# Function to display a progress bar
progress_bar() {
  duration=$1
  bar_length=50

  for ((i=0; i<=duration; i++)); do
    percent=$(( (i) * 100 / duration ))
    filled=$(( (i) * bar_length / duration ))
    unfilled=$(( bar_length - filled ))

    printf "\r["
    printf "%0.s#" $(seq 1 $filled)
    if [[ $percent -eq 100 ]]; then
      printf "%0.s" $(seq 1 $unfilled)
    else
      printf "%0.s-" $(seq 1 $unfilled)
    fi
    printf "] %d%%" $percent

    sleep 1
  done
  printf "\n"
}

if [[ $(node -v) != v12.11.1 ]]; then
  echo -e "${RED}You are not using the ALX Node.js version...${NC}"

  echo "Waiting for 5 seconds..."
  progress_bar 5

  echo "Installing ALX Node.js version (12.11.1)..."
  # Uncomment the next line to actually install the version using nvm
  # nvm install 12.11.1

  echo -e "${GREEN}Do you want to setup alias for alx-node-version [y/n]${NC}"
  read -p "" choice
  if [[ "$choice" == "y" || "$choice" == "Y" || "$choice" == "yes" ]]; then
    nvm alias alx 12.11.1
    echo "Alias set. Use \`nvm use alx\`."
  elif [[ "$choice" == "n" || "$choice" == "N" ]]; then
    echo -e "${YELLOW}\n\t nvm use 12.11.1\n${NC}"
  else
    echo "No valid choice was made. Exiting the program."
    exit
  fi
  echo "Bye, thank you for running the script!"
fi

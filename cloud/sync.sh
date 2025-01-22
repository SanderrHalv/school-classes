#!/bin/bash

# Sync assignment
if [ -d "assignments" ]; then
  cd assignments
  git pull
  cd ..
else
  echo "Directory 'assignment' does not exist."
fi

# Sync labs
if [ -d "labs" ]; then
  cd labs
  git pull
  cd ..
else
  echo "Directory 'labs' does not exist."
fi

# Sync lectures
if [ -d "lectures" ]; then
  cd lectures
  git pull
  cd ..
else
  echo "Directory 'lectures' does not exist."
fi

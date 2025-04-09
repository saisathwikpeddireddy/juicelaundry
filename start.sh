#!/bin/bash

# Check if http-server is available
if command -v npx &>/dev/null; then
  echo "Starting with Node.js http-server..."
  npx http-server . -p 5000 -c-1
else
  # Fall back to Python's built-in HTTP server
  echo "http-server not found, falling back to Python's HTTP server..."
  
  # Check for Python 3
  if command -v python3 &>/dev/null; then
    python3 -m http.server 5000
  # Check for Python 2
  elif command -v python &>/dev/null; then
    python -m SimpleHTTPServer 5000
  else
    echo "Error: Neither Node.js http-server nor Python is available."
    echo "Please install one of them to run this website locally."
    exit 1
  fi
fi
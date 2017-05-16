# node-nginx-vhost

Generate a nginx vhost file for use with a node application

## Installation

- Clone this repo
- Run `npm install`

## Configuration

If want to restrict access to some IP addresses, copy `restrictedIps.sample.json` to  `restrictedIps.json`, and edit it according to your needs.

## Usage

Run the app:

    node app <root> <sub> <port> [restrictedIps]

Arguments:
- `root`: the root domain (e.g. example.com)
- `sub`: the sub domain name (e.g. sub if your app is at sub.example.com)
- `port`: the port your app is running on (e.g. 3000)
- `restrictedIps`, if provided, can be either:
  - `yes` or `1` to enable the list given in `restrictedIps.json`
  - OR a comma-separated list of IP addresses (e.g. 178.123.87.33,158.23.187.10)

The previous arguments would give (no `restrictedIps.json`):

    node app example.com sub 3000 178.123.87.33,158.23.187.10
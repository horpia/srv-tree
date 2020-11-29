# Servers Infrastructure Tree

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/horpia/srv-tree.svg?style=flat)]()  

Very simple backend infrastructure visualizer. Probably will be helpful for projects with many dedicated physical 
servers on one or more Data Centers.

What this tool provides:

- your infrastructure as simple-structured [xml](/public/data);
- four node types: Data Center, Server, Virtual Machine, Service;
- node global (WAN) and local (LAN) domain/ip indicator;
- node description and configuration (cpu, ram, os, port etc);
- predefined icons for most popular services like MySQL, Nginx, Redis and so on;
- search nodes by input text;
- collapse nodes to the specified nesting level.

![screenshot](https://user-images.githubusercontent.com/8748590/100553184-64f58b80-329d-11eb-989d-f88b2bbd6442.png)


## How to use

Just copy `build` folder to any location on your web-server and edit `build/data.xml` file in any modern IDE.
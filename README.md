# treeVisualizer
This project seeks to provide a nice binary tree visualizer!

## Basic Specification
Functionality Goals:
* When the screen is clicked, add a new node and join it in the currently existing tree to the nearest node where clicked;
* Keep track of the current number of nodes in the top right;
* When hovering over or clicking on a specific node, list the amount of children nodes that it has;
* When a node is deleted, rearrange the tree correctly.

Restrictions:
* Do not use more than 8 added mb of memory;
* Do not take longer than 1.5 seconds for any particular operation.

## Architecture Plan
The current plan is to use NextJS, and Vercel for deployment.

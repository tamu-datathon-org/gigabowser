# gigabowser
Website deployment for TAMUdatathon 

![Build and Deploy Website](https://github.com/tamu-datathon-org/gigabowser/workflows/Build%20and%20Deploy%20Website/badge.svg?branch=master&event=push)

Deployment Cycle:
1. Nabbit fetches the website from webflow and outputs assets into the webflow folder
2. The folder is pushed to the `webflow` branch (with the same file structure)
3. Whenever we want to do a deployment, we create a PR to merge the latest commit from the webflow branch to master
4. When the branch is merged, a github action runs soul-patch and deploys the website to the `gh-pages` branch (publishes the website to Github Pages)

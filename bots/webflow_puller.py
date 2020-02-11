websiteToGet = "microsoft.com"
githubToPush = "danielabreo.github.io"
githubToClone = "git@github.com:danielabreo/danielabreo.github.io.git"
downloadlocation = "/Users/dan/websites/test/website/"

import subprocess

# remove files from github to clone
subprocess.run("rm " + downloadlocation + "*", shell=True)

# download files from website to get
subprocess.run(["wget", "-kp", websiteToGet], cwd=downloadlocation)

# transfer files between download location and github
subprocess.call("mv ~/websites/test/website/"+websiteToGet+"/* ~/websites/test/website", shell=True)

# remove downloaded website file folder
subprocess.run(["rm", "-r",websiteToGet], cwd=downloadlocation)

subprocess.run(["rm", "robots.txt"], cwd=downloadlocation)

# clone repository of github to push
subprocess.run(["git", "add", "--all"], cwd=downloadlocation)
subprocess.run(["git", "commit", "-m", "updated website"], cwd=downloadlocation)
subprocess.run(["git", "push"], cwd=downloadlocation)

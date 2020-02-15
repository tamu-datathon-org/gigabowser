import config
import subprocess as sp

def getFiles():
    # delete all non-hidden files in the gitRepo folder
    sp.run("rm -r "+config.repoPath+"/*",shell=True)

    # download website to a folder in the gitRepo folder
    sp.run("wget -k -p -r "+config.siteLink,shell=True,cwd=config.repoPath)

    # move files into the gitRepo folder
    sp.run("mv "+config.repoPath+"/"+config.siteLink+"/* "+config.repoPath,shell=True) 

    # delete folder used to download website files
    sp.run("rm -r "+config.repoPath+"/"+config.siteLink,shell=True)

def pushFiles():
    # push files to github
    sp.run("git add --all",shell=True,cwd=config.repoPath)
    sp.run("git commit -m \"updated website\"",shell=True,cwd=config.repoPath)
    sp.run("git push",shell=True,cwd=config.repoPath)

getFiles()
pushFiles()

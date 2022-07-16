# Table of Contents
- [How to do git pull request]()
- [Undoing commit and push ]()
- [Changing directory name]()
- [Git non-fast-forward error]()
- [Git permission denied (publickey) error solution]()

# Learning Github Collaboration Essentials

## How to do git pull request
1. Check a task given and ellaborate in Github issue : set label and assignee
2. 

1. Create a branch and move to the branch with : git branch -b myBranch 
2. Add changes, commit, and push to the <strong>branch</strong>
3. Github will automatically sense the push and let you know about the change like below

<img src="../reference/git-branch-ahead-of-master.png" width=700 height=350 />

4. Open a pull request and compare the two branches : 1) main 2) newly created branch. Explain why it should be merged with the main branch. 

<img src="../reference/created-pull-request.png" width=640 height=360 />

5. Set other details such as assginee, label, reviewer, and linked issue before completing the pull request

<img src="../reference/reviewer-linked-issue.png" width=800 height=600 />

6. Check what details have been made in Files changed tab.

<img src="../reference/check-changed-content.png" width=700 height=370 />

7. Make a review on it. 

<img src="../reference/make-review.png" width=680 height=600 />

8. Once reviews done and your team members approve your contribution, merge the change and delete the branch. You can revert the merge commit. 

<img src="../reference/merge.png" width=700 height=225 />

9. Check the result. The merge commit is on main branch now. 

<img src="../reference/result.png" width=700 height=280 />


## Undoing commit and push 
Troubleshoting <strong>done</strong> by <br/>
<a href="https://github.com/developerasun">
<img src="https://github.com/developerasun.png?size=50" alt="Jake Sung"/>
</a>

Paragraph <strong>edited and translated</strong> by <br/>
<a href="https://github.com/developerasun">
<img src="https://github.com/developerasun.png?size=50" alt="Jake Sung"/>
</a>

[See JS debugging tutorial in YouTube](https://www.youtube.com/watchv=eGpCdJ8DDaM&t=81s)

During this YouTube tutorial, I had encountered one github troubleshooting. A commit for image file had been placed in javascript code, not the original image one. Undoing a git push I made had always been a unwelcome guest so I decided to face it and figure out this time.

### How to undo git add
<ol>
  <li> git reset HEAD [file name] </li>
  <li> check result with git status </li>
</ol>

### How to undo git commit
<ol>
  <li>git log</li>
  <li>git reset --soft HEAD~1</li>
</ol>


In the below example, do __*git reset --soft HEAD~2*__ to undo the hightlighted commit fb43dd4.  
<img src="https://user-images.githubusercontent.com/83855174/137629565-f74687a9-c5be-40aa-8c0c-f7875b750270.png" width=500px height=300px/>  

<ul>
  <li>HEAD~1 : one step before HEAD</li>  
  <li>HEAD~2 : two steps before HEAD</li>  
  <li>e.g. git reset --soft HEAD~2  : undo two commits(HEAD, HEAD~1)</li>  
</ul>

### How to undo git push 
<ol>
  <li>git log</li>
  <li>git revert [commit hash]</li>
  <li>git push [the repo where the misled commit was pushed] main</li>
</ol>

By following above instruction, the expected result is as follows : 
<ul>
  <li>Message that say [Revert "your mis-typed commit"] </li>
  <li>Github deleting the file you added with the wrong commit</li>
  <li>The file being deleted in your local</li>
</ul>

## Changing directory name
<ol>
  <li>git mv (current name) (change name)</li>
  <li>git add</li>
  <li>git commit</li>
  <li>git push</li>
</ol>
<p>
  Your folder name will be changed and the commits of the files belonging to the folder will be affected, meaning previous commits overwritten.    
</p>


## Git non-fast-forward error
Troubleshoting <strong>done</strong> by <br/>
<a href="https://github.com/jshhhhh">
<img src="https://github.com/jshhhhh.png" width=50px height=50px alt="정석환"/>
</a>

Paragraph <strong>edited and translated</strong> by <br/>
<a href="https://github.com/developerasun">
<img src="https://github.com/developerasun.png?size=50" alt="Jake Sung"/>
</a>


### Problems happened
![1](https://user-images.githubusercontent.com/86046319/138065504-ee12da03-a540-4398-8b88-ae5f7308f46c.png?size=50)<br/>
1. Git push rejected / git push 문제 발생

### Troubleshooting process
![2](https://user-images.githubusercontent.com/86046319/138065599-b4b16381-78ac-4f5a-bb97-fb34c92fcbc2.png)<br/>
2. Trying to merge with pull keyword / pull로 먼저 병합 시도


![3](https://user-images.githubusercontent.com/86046319/138065625-7bed0dc6-43f0-4feb-837d-8bb7b922533f.png)<br/>
3. Fixing repo mapping(occured because of branch rename) / branch --set-upstream-to=origin/main main 명령어 사용


![4](https://user-images.githubusercontent.com/86046319/138065634-5fa4e08c-0ac7-4e4f-ad07-e7d0591a344b.png)<br/>
4. Pull done(not clear) / 확실하지 않지만 pull이 진행된 것 같음


![5](https://user-images.githubusercontent.com/86046319/138065642-9325f635-0b1c-4362-8ebf-a04f94cc8cd9.png)<br/>
5. Push attempt and email error occured / push 시도 → email privacy restrictions 오류 발생


### Solution and result
![6](https://user-images.githubusercontent.com/86046319/138065652-abb41621-63fb-4991-b214-b685401e4a9b.png)<br/>
6. Adjusting profile setting for the email error / 프로필 Settings → Emails에서 Block command line pushes that expose my email 체크 해제 <br/>
7. Push success / push 성공

## Git permission denied (publickey) error solution
Troubleshoting <strong>done</strong> by <br/>
<a href="https://github.com/omago123">
<img src="https://github.com/omago123.png" width=50px height=50px alt="김정기"/>
</a>

Paragraph <strong>edited and translated</strong> by <br/>
<a href="https://github.com/developerasun">
<img src="https://github.com/developerasun.png?size=50" alt="Jake Sung"/>
</a>


issue : git permission denied (publickey). fatal: Could not read from remote repository. Please make sure you have the correct access rights and the repository exists

reason : Git is used based on SSH or http. If you an SSH key to connect, you need to register an ssh key for each PC.

1. Open the terminal and insert ssh key generate command.

![image](https://user-images.githubusercontent.com/73014464/138223854-d489bd6c-61aa-465b-a0df-f5d081ccc5cb.png)

2. Press Enter.  id_rsa file is generated path is C:\Users\[사용자]/.ssh/id_rsa 

![image](https://user-images.githubusercontent.com/73014464/138224031-70450f8b-3425-44a6-98b8-1db8875561ab.png)

3. If you want enter a password, enter the password  otherwise press enter

![image](https://user-images.githubusercontent.com/73014464/138225410-9fff0071-5185-4da8-aae1-f6db99659045.png)

4. SSH KEY IS GENERATED

![image](https://user-images.githubusercontent.com/73014464/138225495-36c47afd-8026-4fcf-8470-a298a0123e82.png)

5. Move to Setting menu in Github.

![image](https://user-images.githubusercontent.com/73014464/138225630-1d1165a1-c8cb-4c69-92ed-555e8fbff577.png)

6. if you press SSH keys in Settings The following screen appear.

![image](https://user-images.githubusercontent.com/73014464/138229074-7d427303-add2-4120-8b0e-70989ffb3dbd.png)

7. if you open id_rsa.pub file in ssh folder using notepad you can see the key value.

Copy the entire file and paste it where you entered the SSH key value earlier.

![image](https://user-images.githubusercontent.com/73014464/138229707-c76074d5-ada2-452c-be78-f0f49706d2d0.png)

8. After the generation is complete, check in the terminal whether it has been successfully generated on the PC.

![image](https://user-images.githubusercontent.com/73014464/138230392-59d584da-18bd-48e1-b366-82cea3c13949.png)

result Now you can git push or git commit


# Contributors
<a href="https://github.com/developerasun">
<img src="https://github.com/developerasun.png?size=50" alt="Jake Sung"/>
</a>

<a href="https://github.com/jshhhhh">
<img src="https://github.com/jshhhhh.png" width=50px height=50px alt="정석환"/>
</a>

<a href="https://github.com/omago123">
<img src="https://github.com/omago123.png" width=50px height=50px alt="김정기"/>
</a>

# List of references
- [how to undo git commit](https://devconnected.com/how-to-undo-last-git-commit/)
- [how to undo git push](https://stackoverflow.com/questions/37606168/how-to-undo-a-git-push) 
- [git permission - tistory blog post](https://maliceit.tistory.com/51) 
- [git reset --hard, --soft](https://kyounghwan01.github.io/blog/etc/git/git-reset-revert/#reset) 
- [git name change](https://blog.naver.com/1740948/222102496323)
- [git pull request](https://youtu.be/9FZaYz0s8s4)

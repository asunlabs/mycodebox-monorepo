# Learning bitbucket essentials

> With best-in-class Jira integration, and built-in CI/CD, Bitbucket Cloud is the native Git tool in Atlassian’s Open DevOps solution. Join millions of developers who choose to build on Bitbucket. 

- How to use Bitbucket

1. create a folder
1. initialize a git repo
1. issue an *app password* from bitbucket
1. clone bitbucket repo and enter the password
1. see result

<details>
<summary>Bitbucket app password</summary>

> Starting Mar 1, 2022, Bitbucket users will no longer be able to use their Atlassian account password to interact with Bitbucket via Git over https and the Bitbucket API. Users will need to start using Bitbucket app passwords for Git commands, scripts, and integrating tools.
</details>

## Workflow with Jira

- [Watch this video to get familiar with Jira/Bitbucket](https://youtu.be/QccHnSWE_BM)

1. create an issue in Jira and check issue key.
1. open a project in IDE(should be root directory)
1. checkout to a new branch named with the issue key.
1. add a git commit with the issue key prefix(set a prefix commit hook)
1. push the commit to remote
1. check the Jira issue and confirm the commit is registered.
1. create a pull request in bitbucket/codestream with GUI
1. get the PR reviewed in bitbucket/codestream

## Why choose Bitbucket Cloud?

> Reduce context-switching by managing your Jira issues in Bitbucket with the built-in Jira UI. And when you include your issue key in commits, your Jira issue statuses update automatically.

> Comprehensive code review features to help you find and fix bugs before you deploy. Review large diffs with ease, view third-party code reports, and open Jira tickets right from the PR screen.

> Use our built-in CI/CD tool, Bitbucket Pipelines, to create powerful, automated workflows. Or connect Bitbucket Cloud to on-prem CI/CD tools like Bamboo or Jenkins.

### See code and deployment status at a glance in Jira

> Integrating Jira and Bitbucket means an always up-to-date board that shows you when a feature is ready for release and gives you a birds eye view of work that still needs to be completed

## Reference

- [Bitbucket](https://bitbucket.org/product)
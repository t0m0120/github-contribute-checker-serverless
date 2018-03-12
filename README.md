## github-contribute-checker-serverless

現在のgithubのcontributeを取得し指定時間にdiscordへ通知するlambda function

```
$ serverless install --url https://github.com/t0m0120/github-contribute-checker-serverless.git
$ cd github-contribute-checker-serverless
$ yarn 
```

setting
`handeler.js`でgithubName/discoredのチャンネルWebhookを入力
`serverless.yml`のevents - schedule: へ時間を指定。

```
sls deploy
```
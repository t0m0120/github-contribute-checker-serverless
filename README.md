## github-contribute-checker-serverless

現在のgithubのcontributeを取得し指定時間にdiscordへ通知するlambda function

```
$ git clone  git@github.com:t0m0120/github-contribute-checker-serverless.git
$ yarn 
```

setting
`handeler.js`でgithubName/discoredのチャンネルWebhookを入力
`serverless.yml`のevents - schedule: へ時間を指定。
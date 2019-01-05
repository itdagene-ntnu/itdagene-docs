---
id: backup
title: Backup
---

Taking backups are importart for itdagene as we store lots of information in our database and as static files. We use `cron` jobs to run backups at set intervals, and push them to `backblaze`.

### cron daemon
We do are large backup at 01:00 every day. This is done using `cron` job. Currently the cron job runs the `backup.sh` script which is located at `/home/itdagene19/infra/backup.sh`.
```zsh
# View and edit cron jobs
$ crontab -e
```

### rclone
The backup is pushed to backblaze using `rclone`. Look throught `backup.sh` to see what is backed up. rclone can hold multiple remotes, which is places it will push the files. Our config lies in `/home/itdagene/.config/rclone/rclone.conf`.

> Output from `cat rclone.conf`

```
[backblaze]
type = b2
account = ------------------
key = -----------------
endpoint =
```

You can add new configs by using the interactive command-line-tool. This will give the option to view, edit, add, remove remotes.

> Output from `rclone config`

```
Current remotes:
Name                 Type
====                 ====
backblaze            b2
e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q>
```
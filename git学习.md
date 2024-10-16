```text
Your identification has been saved in C:\Users\Asuka/.ssh/id_ed25519
Your public key has been saved in C:\Users\Asuka/.ssh/id_ed25519.pub
The key fingerprint is:
SHA256:Ce5a29x23xZu5LwnJ7VMqWE3n988WCXpRRXNDDoCRvg lmjshineee@163.com
The key's randomart image is:
+--[ED25519 256]--+
|       o+     .==|
|      .. .   .  =|
|      ..  . o  o |
|     . .E. . .o o|
|      . S    . oo|
|     .       o.O.|
|      o     . &.*|
|     o + .. .oo%*|
|    . . o... .o*X|
+----[SHA256]-----+
```

```text
Asuka@Yunni MINGW64 ~
$ eval "$(ssh-agent -s)"
Agent pid 1176

Asuka@Yunni MINGW64 ~
$ ssh-add ~/.ssh/id_ed25519
Identity added: /c/Users/Asuka/.ssh/id_ed25519 (lmjshineee@163.com)

Asuka@Yunni MINGW64 ~
$

```

```text
Asuka@Yunni MINGW64 ~
$ ssh -T git@github.com
The authenticity of host 'github.com (20.205.243.166)' can't be established.
ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
This key is not known by any other names.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'github.com' (ED25519) to the list of known hosts.
Hi lmjshineee! You've successfully authenticated, but GitHub does not provide shell access.

```

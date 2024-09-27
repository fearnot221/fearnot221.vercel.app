---
title: SCIST K-POP_World
description: SCIST K-POP_World Challenge Writeup
summary: SCIST K-POP_World Challenge Writeup
published: '2024-09-26T11:49:00.000+08:00'
tags:
  - Writeup
---

:::error warning
注意！請先按照文字說明嘗試看看，不要直接看Command
Commad僅會提供關鍵指令
:::
### Setup
用snippet建立環境後打開遊戲就會看到第一個flag了

:::tip
PSY is right beside you, and he has been waiting for a long time
:::

### Gangnam Style
根據上一段提示直接打開檔案

:::Commad
```bash
cat Gangnam_Style
```
:::

:::tip
PSY has been waiting for you for a long time. 
He knows that Tzuyu has some clues about winter, but he only knows that she is at a TV station.
:::

### Run away
按照上一步的提示，找到位在`~/TV_stations/Music_Bank/guest/Tzuyu`的檔案`Run_Away`

> [!Important] Commad
||`cat ~/TV_stations/Music_Bank/guest/Tzuyu/Run_Away`||

>[!Tip]
>Tzuyu doesn’t know where Winter is, but she knows Sullyoon has some clues. However, the TV station’s MC often hides, so you must find her first.

### Gorilla
按照上一步說明提到often hides，可以推測檔案被隱藏起來了，運用`ls -a`來找出隱藏檔案

>[!Important]Command
>||`cat ~/TV_stations/Music_Core/.MC/.Sullyoon/.Gorilla`||

>[!Tip]
Sullyoon told you that her fellow member Kyujin knows where Winter is.

### See that
根據上題說明找到`Kyujin`資料夾，給`cute_cat`執行權限後，他說他需要新歌
有兩種方法，一種是建立`See_that?`這個檔案
另一種是把`~/TV_stations/Music_Core/.MC/.Sullyoon/See_that?`移過來
再次執行後發現還是沒有flag，可以試著查看binary
>[!Important]Command
||`strings ~/agencies/JYPE/Nmixx/Kyujin/cute_cat`||

>[!Tip]
I heard that Winter was at LE SSERAFIM's dance studio two hours ago.

### MC manchae
按照上段敘述找到`LE_SSERAFIM`資料夾，發現`Chaewon`資料夾有東西，給權限執行後
他說他要`manchae`，根據CTFd題目敘述，可以知道`manchae = maknae eunchae`
所以找到`eunchae`資料夾，發現有個`smile_potato`，複製到`Chaewon`資料夾內，再次執行即可
>[!Important]Command
||`cp ~/TV_stations/Music_Bank/MC/eunchae/smile_potato .`||

>[!Tip]
Chaewon told you that Winter just left half an hour ago, and now she’s at SM

### NingNing's Daily
根據前面說明來到`SM`資料夾，按照CTFd順序先進入`NingNing`資料夾，打開`NingNing's_Daily`，他叫你從`What_is_in_my_Bag`資料夾中找到他的耳機，因為是「他的耳機」，可以推測會有他的名字，找到後解壓縮tar檔案，進入資料夾即可找到他的耳機
>[!Important]Command
||`find . -name "Ning*" `||

>[!Tip]
>Winter is right beside Giselle
Go find her!!!!!!!

### Winter is afraid of ghost
根據提示來到`Giselle`資料夾，給權限後執行，發現他要求你消滅所有的鬼，按照要求刪掉後再次執行即可
>[!Important]Command
||`find . -name "ghost" -delete`||

>[!Tip]
>Congratulations! You finally found Winter
Hope you enjoyed the game
I am Fearnot, bye-bye!

### bonus
#### aespa is A Group
顧名思義，查看當前群組即可
>[!Important]Command
>||`groups`||

#### Got a command
一直`ls`真的很煩，`tree`指令超好用，但是怎麼沒辦法用，想辦法找出密碼來安裝
>[!Important]Command
>||`sudo apt install tree`||

---
>[!Note]Reference
>https://curious-lucifer.netlify.app/blog/scist_linux_challenge_rpg_blog/

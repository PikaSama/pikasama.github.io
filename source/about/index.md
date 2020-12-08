---
title: About
date: 2020-02-29 20:39:57
reward: true
---
<center>
<img width='132' height='128' src="https://cdn.jsdelivr.net/gh/PikaSama/shelter-images@1.3.18/images/avatar2.png"/>

<big>Zorin</big>
</center>


> I looked upon some blank scape for domain. Upon the bleak walls，upon the white trunks of decayed trees. With the utter depression souls. There was an iceness. A sinking, a sickening of the heart.
>
> --- Edgar Allan Poe *The Fall of the House of Usher*

A coder, lives in Guangzhou, China.

一个失败者

~~一个喜欢折腾但又次次翻车的沙雕，熬夜冠军，摸鱼冠军，命名鬼才，典型死宅，是个废人的说~~

<meting-js server="netease" type="song" id="425280053"></meting-js>

# 介绍
一个不起眼的小博客，主要用于技术交流和个人闲谈

博客使用Hexo搭建，由Coding CI部署至Github Pages，使用又拍云CDN加速

网站主题会不定期更换<font color="white">(花心大萝卜石锤，内心：我全都要.jpg)</font>

## 网站名字的由来
如果你认得出网站的favicon(标签页旁的logo)，那你应该知道这个名字其实来源于 [Porter Robinson](https://music.163.com/#/artist?id=185871) 和 [Madeon](https://music.163.com/#/artist?id=40280) 合作的一首曲子[《Shelter》](https://music.163.com/#/song?id=425280053)，这首Midtempo风格的歌我当初循环了很多遍，同时MV的故事也很感人<font color="white">(凛是真的好看！)</font>，所以就给网站取名 **“Shelter”** 了

## 联系方式
Github: [PikaSama](https://github.com/pikasama)

邮箱: pikasama@qq.com

QQ: [2108586824](http://wpa.qq.com/msgrd?v=3&uin=2108586824&site=qq&menu=yes)

Bilibili: [Zorin_](https://space.bilibili.com/163044485)

网易云音乐: [Zorin_](https://music.163.com/#/user/home?id=416843684)
# ~~瞎扯淡~~/~~网站~~博主动态

## 2020.10.18
一个半月没更新动态了，以后也没什么时间维护博客，可能会在节假日时间抽空写一下文章

这次算是一个大更新吧，只不过很多是细节上的优化，新功能很少

习惯了js变量提升的我还是看不顺眼用箭头函数命名函数这个方式，看来还是用在匿名函数/回调函数香啊

 1. 采用Promise+async/await方式异步执行代码，抛弃setTimeout的瀑布流式代码
 2. 合并多个js文件，减少请求次数
 3. 压缩js文件，提升访问速度
 4. 设置面板的统计功能支持文章访问量统计，兼容主题访问统计样式
 5. 更新主题，更新hexo版本
 6. 抛弃cookie，采用localStorage方式存储数据
 7. 废弃无用的新人状态，优化新人转正的方式
 8. 优化主题黑暗模式的适配，适配MiniValine的黑暗模式
 9. 设置面板新添加载动画，适配黑暗模式
 10. 设置面板增添新功能：动态文字
 11. 简化配置文件，使用脚本加载器，对应类型页面加载对应文件，确保需要全局使用的函数能提前初始化
 12. 更新代码高亮样式
 13. 更新文章、页面
 14. 写了两个没什么用的项目，欢迎围观：[spider-checkupdate](https://github.com/PikaSama/spider-checkupdate)，[spider-manga](https://github.com/PikaSama/spider-manga)

## 2020.8.26
 1. 设置面板增加“自定义表情包”功能
 2. 一些黑暗模式的样式修复
 3. 评论系统可能不会立即生效自定义的表情包，故添加评论系统重载的按钮，可在页面加载完后自动跳转至评论
 4. 可能是这个月的最后一次更新(这个暑假好像都没啥贡献，我好蔡啊)

## 2020.8.19
 1. 一些bug的修复
 2. 优化代码逻辑
 3. 取消默认主题修改强调色的功能，将默认强调色加入调色盘(主要是懒得单独写代码去适配)

## 2020.8.18
有一段时间没写动态了呐

 1. 新文章：Inside主题进阶配置 | 附加篇
 2. 帮助页面完善
 3. 新增：更改强调色时，遵循侧边栏背景的设置来决定是否覆盖主题的侧边栏背景
 4. 一些bug的修复
 5. 一些新坑

## 2020.8.11
 1. 新增通知系统，含新人提示和公告通知
 2. 新增设置面板功能
 3. js代码优化
 4. 新手教程(还在写，进度0%)

通知系统应该写了2天，设置面板写了差不多有4天了，把文件传到Github Releases真是一个愚蠢的选择(你去看我的releases可以知道我一天为了测试能发多少个版本~~刷版本号石锤~~)，然后决定放在自己的COS上，开发期间也在不断优化，把之前写的代码也重构了(注释也变简略了些)，每天都是忙到凌晨2点，浏览器的标签页只看得见图标，不禁感叹自己真是个彩笔。

## 2020.8.1
更改字体加载源(loli.net)，提升加载速度

## 2020.7.31
 1. 个人主页的静态资源使用JsDelivr CDN加速，加快访问速度(个人主页：[Home | Zorin](https://zorin.beaa.cn))
 2. 点击特效js延迟加载时间

## 2020.7.30
才没喝多少口的柠檬茶(大杯)就被我倒洒了...(没错我在水动态)

## 2020.7.27
 1. 新文章出炉，内容较多，持续更新
 2. 完善点击特效，字数统计功能
 3. Live2d看板娘显示修复

## 2020.7.20
取消“Abyss”分类和页面，Abyss分类的新文章只会在博客驻留1天

## 2020.7.19
 1. 新增文章字数统计和阅读时长功能
 2. 如果文章引用了歌曲，可能会因为网络环境导致字数统计精确度降低

## 2020.7.18
新增代码块复制功能

## 2020.7.16
 1. 网站主题改为[inside](https://github.com/ikeq/hexo-theme-inside)（本地测试耗时2天，感谢Theme Inside群里的大佬们的帮助）
 2. 主题含有调色板，可以更改网站颜色样式
 3. 因主题原因，深渊分类的文章无法在首页隐藏，请见谅
 4. 网站直接使用Coding CI部署至Github，部署速度加快

## 2020.7.9
 1. 因遇到无法解决的问题，网站取消存储在又拍云，选择使用又拍云CDN加速Gthub，并设置解析将国内访问解析到又拍云CDN，国外访问解析到源站Github
 2. 因个人原因，博客停更一段时间，空下时间去折腾点其他的东西，不过我还会水动态的 ~~说白了是灵感枯竭~~

## 2020.7.5
源码迁移至Coding，使用Coding CI将源码推送至Github，Github再用Travis CI部署博客(禁止套娃hhh)

## 2020.7.4
 1. 诈尸更新，网站迁移至又拍云并使用CDN，大大提升了访问速度，并使用Travis CI进行持续集成，可在多端轻松部署
 2. 你可能会发现侧边栏的主页按钮变白了，并且和下面按钮的间距不一样，这是因为侧边栏按钮的代码被我分割成主页部分和其他部分了，而且找不到相符合的颜色，所以会出现这样的状况，如果我不这样做，就会出现按钮打开的是空白页面的问题

## 2020.6.20
 1. 评论系统改为MiniValine，图片使用CDN加速(之前文章引用的图片还未加速)
 2. 最近Fork了一个Valine的表情包项目，用在MiniValine上，可以使用脚本一建生成图片列表
 3. 项目地址：[Blog-Emoticons](http://github.com/PikaSama/blog-emoticons)

## 2020.6.7
失踪人口回归，填完了一个坑，博客开始对外开放(向朋友宣传)

## 2020.5.11
个人主页: [Home | Zorin](https://zorin.beaa.cn)

## 2020.4.16
 1. 为Pandownload哀悼，感谢你陪伴了我2年
 2. [数据删除]
 3. 近期应该会写一个关于Pandownload的文章
 4. 闲的蛋疼用写了一个个人主页，放在腾讯云COS上，访问速度不咋样，看看能给我烧掉多少钱，网址之后会更新上

## 2020.4.5
 1. [数据删除]
 2. archlinux安装小记的文章又被吞掉一部分篇幅了(sftp没同步成功，手残把没同步成功的文章本地编辑，然后旧的文章覆盖了新的文章- -)
 3. 我在Linux里还有之前写好的文章，用Linux Reader导出到Windows再用SFTP同步过去，成功恢复

## 2020.4.4
为了探究Windows下的vscode的ssh连接不稳定的问题（Linux没这个情况），在备份了博客源码的情况下进行一系列操蛋的操作（包括但不限于删掉Termux回炉重造），最后发现好像是手机一息屏就会发生这个问题2333333，这该死的休眠策略

## 2020.x.x
不记得了.......

## 2020.1.xx
创建本站

# 感谢
## 博客引擎
- [Hexo](hexo.io)
## 托管服务
- [Github Pages](https://pages.github.com/)
## 网站主题
- [Ayer](https://gitee.com/shen-yu/hexo-theme-ayer)
- [Inside](https://github.com/ikeq/hexo-theme-inside)
## 评论系统
- [MiniValine](https://github.com/MiniValine/MiniValine)
- [Valine-Admin](https://github.com/DesertsP/Valine-Admin)
## 统计
- [不蒜子统计](http://busuanzi.ibruce.info/)
## CDN
- [JsDelivr](https://www.jsdelivr.com/)
- [又拍云](https://www.upyun.com)

页面初始日期：2020.2.29 20:39
页面更新日期：2020.10.18 18:57
# 基于gartner报告的技术成熟度曲线可视化平台
该平台基于历年Gartner技术成熟度报告中技术发展阶段数据，展示与数据相关的技术发展的变化趋势。该平台展示了12个技术分类，并使用eCharts桑基图展示了技术的变化发展情况。前端采用Vue进行制作，后端采用Django进行制作。

本仓库为前端部分

> 还不太会用github,所以目前只能把之前word中的操作手册直接搬过来了
> 话说应该不会真的有人看这个吧.如果想要详细了解还是直接邮箱联系我吧

## 前端项目部署操作手册

### 一、项目的运行
本系统项目的整体前端操作Vue项目是由vite脚手架创建的。因此在运行期间需要通过vite以及vue的各种处理方式来进行运行。 首先要安装 Vite 的脚手架： npm install -g create-vite 然后通过这个脚手架创建项目（项目名称假设为 vite_cli_demo）： create-vite vite_cli_demo 执行上面的命令后，脚手架首先会让操作者选择项目要使用的框架：

这里选择使用 vue 框架创建项目，选择 vue 框架之后，脚手架还会提供选择是否使用 TypeScript：

选择 vue-ts，即项目使用 TypeScript 开发：

随后，Vite 的脚手架就会自动帮助操作者搭建出vite_cli_demo 项目了。但是，它这里默认没有帮助操作者安装好项目所有的依赖，所以需要操作者进入项目目录： cd vite_cli_demo 安装依赖： npm install 安装好之后，项目的目录结构将默认变为：

Vite 的脚手架（create-vite）搭建的项目Vue 的脚手架 Vue CLI（@vue/cli）搭建的项目的目录结构是比较相似的。将该项目运行起来需要输入： npm run dev

浏览器中打开得到的项目地址，即进入前端操作。

### 二、前端的部署

前端采用宝塔面板进行部署,方式简单,步骤如下

打开工程源码,定位到项目位置

使用npm run build 命令打包生成目标文件,目标文件在.\vue-begin01\dist文件夹下

打开宝塔面板,在根目录下创建目标文件存放的文件夹

将.\vue-begin01\dist 文件夹下的文件上传至宝塔文件夹中

在网站处添加域名和站点,根目录选择刚刚创建的文件夹

创建后通过浏览器进入域名,即可进入刚刚创建的网站

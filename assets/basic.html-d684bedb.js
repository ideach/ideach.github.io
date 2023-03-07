import{_ as i,M as t,p as d,q as c,R as n,t as s,N as l,a1 as a}from"./framework-96b046e1.js";const r={},o=a(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h2 id="文件与目录" tabindex="-1"><a class="header-anchor" href="#文件与目录" aria-hidden="true">#</a> 文件与目录</h2><h3 id="linux目录结构" tabindex="-1"><a class="header-anchor" href="#linux目录结构" aria-hidden="true">#</a> Linux目录结构</h3><p><code>Centos7</code></p><table><thead><tr><th style="text-align:left;">目录名称</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong><code>/bin</code></strong></td><td style="text-align:left;">Binaries(二进制文件)这个目录存放着最经常使用的命令</td></tr><tr><td style="text-align:left;"><strong><code>/sbin</code></strong></td><td style="text-align:left;">SuperBin系统管理员使用的命令</td></tr><tr><td style="text-align:left;"><strong><code>/etc </code></strong></td><td style="text-align:left;">Etcetera(等等),存放所有的系统管理所需要的配置文件和子目录</td></tr><tr><td style="text-align:left;"><strong><code>/var</code></strong></td><td style="text-align:left;">Variable(变量),存放经常被修改的文件,缓存/日志</td></tr><tr><td style="text-align:left;"><strong><code>/usr</code></strong></td><td style="text-align:left;">UnixSharedResources(系统资源),系统默认软件命令目录</td></tr><tr><td style="text-align:left;"><code>/usr/bin</code></td><td style="text-align:left;">等同于/bin</td></tr><tr><td style="text-align:left;"><code>/usr/sbin</code></td><td style="text-align:left;">等同于/sbin</td></tr><tr><td style="text-align:left;"><code>/usr/lib</code></td><td style="text-align:left;">等同于/lib</td></tr><tr><td style="text-align:left;"><code>/usr/etc</code></td><td style="text-align:left;">安装软件时使用的配置文件</td></tr><tr><td style="text-align:left;"><code>/usr/share</code></td><td style="text-align:left;">软件包/软件源安装的软件目录</td></tr><tr><td style="text-align:left;"><code>/usr/src</code></td><td style="text-align:left;">系统级源码目录</td></tr><tr><td style="text-align:left;"><code>/usr/local</code></td><td style="text-align:left;">自定义安装软件目录(常用)</td></tr><tr><td style="text-align:left;"><code>/usr/local/src</code></td><td style="text-align:left;">用户级源码安装文件常用目录</td></tr><tr><td style="text-align:left;"><strong><code>/boot</code></strong></td><td style="text-align:left;">(引导)启动 Linux 时使用的一些核心文件，包括一些连接文件以及镜像文件</td></tr><tr><td style="text-align:left;"><strong><code>/dev</code></strong></td><td style="text-align:left;">Device(设备),存放 Linux 的外部设备,接入后以文件形式出现(未挂载)</td></tr><tr><td style="text-align:left;"><strong><code>/home</code></strong></td><td style="text-align:left;">(家目录)用户的主目录,内部存放用户目录</td></tr><tr><td style="text-align:left;"><strong><code>/lib</code></strong></td><td style="text-align:left;">Library(库),存放着系统最基本的动态连接共享库</td></tr><tr><td style="text-align:left;"><strong><code>/media</code></strong></td><td style="text-align:left;">(媒体),系统自动识别并自动挂载的设备</td></tr><tr><td style="text-align:left;"><strong><code>/mnt</code></strong></td><td style="text-align:left;">临时挂载文件系统的目录</td></tr><tr><td style="text-align:left;"><strong><code>/opt</code></strong></td><td style="text-align:left;">optional(可选),安装第三方大型软件目录</td></tr><tr><td style="text-align:left;"><strong><code>/proc</code></strong></td><td style="text-align:left;">系统内存映射目录</td></tr><tr><td style="text-align:left;"><strong><code>/root</code></strong></td><td style="text-align:left;">系统用户主目录</td></tr><tr><td style="text-align:left;"><strong><code>/selinux</code></strong></td><td style="text-align:left;">RedHut/CentOS系防火墙目录</td></tr><tr><td style="text-align:left;"><strong><code>/srv</code></strong></td><td style="text-align:left;">网络服务启动后需要访问的数据目录</td></tr><tr><td style="text-align:left;"><strong><code>/sys</code></strong></td><td style="text-align:left;">sysfs(文件系统)目录</td></tr><tr><td style="text-align:left;"><strong><code>/tmp</code></strong></td><td style="text-align:left;">存放临时文件目录</td></tr><tr><td style="text-align:left;"><strong><code>/run</code></strong></td><td style="text-align:left;">临时文件系统,存储系统启动以来的信息</td></tr></tbody></table><h3 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作" aria-hidden="true">#</a> 基本操作</h3><ul><li><h4 id="路径分类" tabindex="-1"><a class="header-anchor" href="#路径分类" aria-hidden="true">#</a> 路径分类</h4><ul><li><strong>绝对路径:</strong> 由根目录 <code>/</code> 写起, 例如 <code>/usr/share/doc</code><br></li><li><strong>相对路径:</strong> 不是以 <code>/</code> 写起, 例如当前目录下 <code>local/src</code></li></ul></li><li><h4 id="文件-文件夹基本操作" tabindex="-1"><a class="header-anchor" href="#文件-文件夹基本操作" aria-hidden="true">#</a> 文件/文件夹基本操作</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出目录文件名</span>
<span class="token function">ls</span> 相对路径/绝对路径<span class="token punctuation">(</span>默认为当前路径<span class="token punctuation">)</span>
    <span class="token parameter variable">-a</span> <span class="token builtin class-name">:</span> 列出全部文件
    <span class="token parameter variable">-d</span> /目录名 <span class="token builtin class-name">:</span> 列出目录本身
    <span class="token parameter variable">-l</span> <span class="token builtin class-name">:</span> 列出文件目录属性
    <span class="token parameter variable">-h</span> <span class="token builtin class-name">:</span> 列出文件目录属性并人性化显示

<span class="token comment"># 切换工作目录</span>
<span class="token builtin class-name">cd</span> 相对路径/绝对路径

<span class="token comment"># 显示树状目录结构</span>
tree

<span class="token comment"># 显示当前所在目录</span>
<span class="token builtin class-name">pwd</span> -指令
    <span class="token parameter variable">-P</span> <span class="token builtin class-name">:</span> 显示当前目录<span class="token punctuation">(</span>非软链接目录<span class="token punctuation">)</span>

<span class="token comment"># 创建空目录</span>
<span class="token function">mkdir</span> -指令 目录名
    <span class="token parameter variable">-m</span> <span class="token number">777</span> 目录名 <span class="token builtin class-name">:</span> 配置文件的权限
    <span class="token parameter variable">-p</span> /路径 <span class="token builtin class-name">:</span> 递归创建目录

<span class="token comment"># 创建空文件</span>
<span class="token function">touch</span> 文件名

<span class="token comment"># 删除空目录</span>
<span class="token function">rmdir</span> -指令 目录名
    <span class="token parameter variable">-p</span> <span class="token builtin class-name">:</span> 递归删除空目录

<span class="token comment"># 复制文件或目录</span>
<span class="token function">cp</span> -指令 文件/目录
    <span class="token parameter variable">-a</span> <span class="token builtin class-name">:</span> 相当于 <span class="token parameter variable">-pdr</span>
    <span class="token parameter variable">-d</span> <span class="token builtin class-name">:</span> 复制软链接
    <span class="token parameter variable">-f</span> <span class="token builtin class-name">:</span> 强制复制/覆盖不提醒
    <span class="token parameter variable">-i</span> <span class="token builtin class-name">:</span> 目标文件存在/复制时询问
    <span class="token parameter variable">-l</span> <span class="token builtin class-name">:</span> 复制成为硬链接
    <span class="token parameter variable">-p</span> <span class="token builtin class-name">:</span> 同时复制文件属性
    <span class="token parameter variable">-r</span> <span class="token builtin class-name">:</span> 递归复制

<span class="token comment"># 删除文件或目录</span>
<span class="token function">rm</span> -指令 文件/目录
    <span class="token parameter variable">-f</span> <span class="token builtin class-name">:</span> 强行删除
    <span class="token parameter variable">-i</span> <span class="token builtin class-name">:</span> 删除前询问
    <span class="token parameter variable">-r</span> <span class="token builtin class-name">:</span> 递归删除

<span class="token comment"># 移动文件/目录,修改文件/目录名称</span>
<span class="token function">mv</span> -指令 目录/文件
    <span class="token parameter variable">-f</span> <span class="token builtin class-name">:</span> 强行覆盖
    <span class="token parameter variable">-i</span> <span class="token builtin class-name">:</span> 询问是否覆盖

<span class="token comment"># 创建链接</span>
<span class="token function">ln</span> -指令 源文件/目录 链接名
    <span class="token parameter variable">-s</span> <span class="token builtin class-name">:</span> 软链接
    <span class="token parameter variable">-f</span> <span class="token builtin class-name">:</span> 强制执行
    <span class="token parameter variable">-i</span> <span class="token builtin class-name">:</span> 交互模式,文件存在则提示

<span class="token comment"># 显示当前时间</span>
<span class="token function">date</span> 
    <span class="token parameter variable">-s</span> <span class="token builtin class-name">:</span> 设置日期

<span class="token comment"># 查看已经执行过的历史命令</span>
<span class="token function">history</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作" aria-hidden="true">#</a> 文件操作</h3><ul><li><h4 id="文件查看" tabindex="-1"><a class="header-anchor" href="#文件查看" aria-hidden="true">#</a> 文件查看</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 从第一行显示文件内容</span>
<span class="token function">cat</span> -指令 文件名
    <span class="token parameter variable">-b</span> <span class="token builtin class-name">:</span> 列出行号
    <span class="token parameter variable">-n</span> <span class="token builtin class-name">:</span> 列出行号<span class="token punctuation">(</span>包括空格<span class="token punctuation">)</span>
    <span class="token parameter variable">-v</span> <span class="token builtin class-name">:</span> 列出特殊字符

<span class="token comment"># 从第一行显示文件内容(选项同上)</span>
<span class="token function">tac</span> <span class="token builtin class-name">:</span> 反向显示文件内容

<span class="token comment"># 全屏幕显示文件内容</span>
<span class="token function">more</span> 文件名
    space <span class="token builtin class-name">:</span> 向下翻一页
    Enter <span class="token builtin class-name">:</span> 向下翻一行
    q <span class="token builtin class-name">:</span> 离开
    Ctrl+F <span class="token builtin class-name">:</span> 向下滚动一屏
    Ctrl+B <span class="token builtin class-name">:</span> 向上滚动一屏
    <span class="token operator">=</span> <span class="token builtin class-name">:</span> 输出当前行的行号
    :f <span class="token builtin class-name">:</span> 输出文件名和行号

<span class="token comment"># 动态加载文件(较大的文件)</span>
<span class="token function">less</span> 文件名

<span class="token comment"># 显示文件开头10行</span>
<span class="token function">head</span> -指令 文件名
    <span class="token parameter variable">-n</span> <span class="token builtin class-name">:</span> 自定义显示行数
<span class="token comment"># 显示文件末尾10行</span>
<span class="token function">tail</span> -指令 文件名
    <span class="token parameter variable">-n</span> <span class="token builtin class-name">:</span> 自定义显示行数
    <span class="token parameter variable">-f</span> <span class="token builtin class-name">:</span> 动态显示
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="文本处理" tabindex="-1"><a class="header-anchor" href="#文本处理" aria-hidden="true">#</a> 文本处理</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 重定向写入(没有会创建)</span>
内容 <span class="token operator">&gt;</span> 文件名

<span class="token comment"># 重定向追加(没有会创建)</span>
内容 <span class="token operator">&gt;&gt;</span> 文件名

<span class="token comment"># 管道符</span>
<span class="token function">cat</span> abc.txt <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;abc&#39;</span>
<span class="token comment"># 上一条命令执行失败, 执行下一条</span>
<span class="token function">cat</span> abc.txt <span class="token operator">||</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;not file&#39;</span>
<span class="token comment"># 后台执行</span>
.install.sh <span class="token operator">&amp;</span>
<span class="token comment"># 上一条命令执行成功, 执行下一条</span>
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token comment"># 文本切分</span>
<span class="token function">cut</span> -指令 文件路径
    <span class="token parameter variable">-d</span> <span class="token builtin class-name">:</span> 自定义分割符
    <span class="token parameter variable">-f</span> <span class="token builtin class-name">:</span> 分割后显示范围<span class="token punctuation">[</span>索引<span class="token punctuation">]</span>

<span class="token comment"># 文本排序 默认为字母排序</span>
<span class="token function">sort</span> -指令 <span class="token parameter variable">-t</span> <span class="token string">&#39;:&#39;</span> 文件路径 
    <span class="token parameter variable">-t</span> <span class="token builtin class-name">:</span> 分割字符
    -k数字 <span class="token builtin class-name">:</span> 排序范围<span class="token punctuation">[</span>索引<span class="token punctuation">]</span>
    <span class="token parameter variable">-n</span> <span class="token builtin class-name">:</span> 数字排序
    <span class="token parameter variable">-h</span> <span class="token builtin class-name">:</span> <span class="token function">ls</span> -h时使用 
    <span class="token parameter variable">-r</span> <span class="token builtin class-name">:</span> 倒序

<span class="token comment"># 文本统计命令</span>
<span class="token function">wc</span> -指令 文件路径
    <span class="token parameter variable">-l</span> <span class="token builtin class-name">:</span> 行数
    <span class="token parameter variable">-w</span> <span class="token builtin class-name">:</span> 单词数

<span class="token comment"># 文本搜索</span>
<span class="token function">grep</span> -指令 <span class="token string">&#39;文本&#39;</span> 文件路径
    <span class="token parameter variable">-n</span> <span class="token builtin class-name">:</span> 显示行号
    <span class="token parameter variable">-i</span> <span class="token builtin class-name">:</span> 忽略大小写
    <span class="token parameter variable">-v</span> <span class="token builtin class-name">:</span> 不包含的行
    <span class="token parameter variable">-d</span> <span class="token builtin class-name">:</span> 查找目录
    -E正则 <span class="token builtin class-name">:</span> 正则表达式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="搜索查找" tabindex="-1"><a class="header-anchor" href="#搜索查找" aria-hidden="true">#</a> 搜索查找</h3><ul><li><h4 id="文件-文本搜索" tabindex="-1"><a class="header-anchor" href="#文件-文本搜索" aria-hidden="true">#</a> 文件/文本搜索</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 文件搜索</span>
<span class="token function">find</span> 搜索范围 -指令
    <span class="token parameter variable">-name</span> <span class="token builtin class-name">:</span> 按照文件名查找
    <span class="token parameter variable">-user</span> <span class="token builtin class-name">:</span> 按照归属用户查找
    <span class="token parameter variable">-size</span> +200M/-100M/40M <span class="token builtin class-name">:</span> 按照指定文件大小查找

<span class="token comment"># 文件索引搜索</span>
<span class="token comment"># 建立数据库查询</span>
updatedb
<span class="token comment"># 通过索引搜索文件</span>
<span class="token function">locate</span> 要搜索的文件 

<span class="token comment"># 过滤查找(一般与管道符|配合)</span>
<span class="token function">grep</span> -指令 查找内容 源文件
    <span class="token parameter variable">-n</span> <span class="token builtin class-name">:</span> 显示行号
    <span class="token parameter variable">-i</span> <span class="token builtin class-name">:</span> 忽略字母大小写
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="压缩解压" tabindex="-1"><a class="header-anchor" href="#压缩解压" aria-hidden="true">#</a> 压缩解压</h3><ul><li><h4 id="文件-文件夹的压缩和解压" tabindex="-1"><a class="header-anchor" href="#文件-文件夹的压缩和解压" aria-hidden="true">#</a> 文件/文件夹的压缩和解压</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># gz压缩(只能压缩文件 *.gz)</span>
<span class="token function">gzip</span> 文件名
<span class="token comment"># gz解压</span>
gunzip 文件.gz

<span class="token comment"># zip压缩(文件和目录 *.zip)</span>
<span class="token function">zip</span> -指令 压缩名 被压缩内容
    <span class="token parameter variable">-r</span> <span class="token builtin class-name">:</span> 递归压缩<span class="token punctuation">(</span>包含<span class="token punctuation">)</span>
<span class="token comment"># zip解压</span>
<span class="token function">unzip</span> -指令 文件.zip
    <span class="token parameter variable">-d</span> 目录名 <span class="token builtin class-name">:</span> 指定解压后存放目录

<span class="token comment"># tar压缩解压</span>
<span class="token function">tar</span> -指令 压缩文件名 被压缩文件 解压目录 
    <span class="token parameter variable">-c</span> <span class="token builtin class-name">:</span> 打包tar文件
    <span class="token parameter variable">-v</span> <span class="token builtin class-name">:</span> 显示详细信息
    <span class="token parameter variable">-f</span> <span class="token builtin class-name">:</span> 指定压缩后的文件名
    <span class="token parameter variable">-z</span> <span class="token builtin class-name">:</span> 打包同时压缩
    <span class="token parameter variable">-x</span> <span class="token builtin class-name">:</span> 解包tar文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用户和用户组" tabindex="-1"><a class="header-anchor" href="#用户和用户组" aria-hidden="true">#</a> 用户和用户组</h2><h3 id="用户管理" tabindex="-1"><a class="header-anchor" href="#用户管理" aria-hidden="true">#</a> 用户管理</h3><ul><li><h4 id="用户相关配置文件" tabindex="-1"><a class="header-anchor" href="#用户相关配置文件" aria-hidden="true">#</a> 用户相关配置文件</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 用户信息</span>
/etc/passwd

<span class="token comment"># 用户口令信息(root权限)</span>
/etc/shadow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="用户操作" tabindex="-1"><a class="header-anchor" href="#用户操作" aria-hidden="true">#</a> 用户操作</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 新建用户</span>
<span class="token function">useradd</span> -指令 用户名
    <span class="token parameter variable">-c</span> <span class="token builtin class-name">:</span> 注释
    <span class="token parameter variable">-d</span> <span class="token builtin class-name">:</span> 指定用户主目录
    <span class="token parameter variable">-g</span> <span class="token builtin class-name">:</span> 指定用户所属组
    <span class="token parameter variable">-s</span> <span class="token builtin class-name">:</span> 指定用户登录shell

<span class="token comment"># 删除用户</span>
<span class="token function">userdel</span> -指令 用户名
    <span class="token parameter variable">-r</span> <span class="token builtin class-name">:</span> 将用户目录同时删除

<span class="token comment"># 修改用户</span>
<span class="token function">usermod</span> -指令 用户名
    <span class="token parameter variable">-c</span> <span class="token builtin class-name">:</span> 注释
    <span class="token parameter variable">-d</span> <span class="token builtin class-name">:</span> 指定用户主目录
    <span class="token parameter variable">-g</span> <span class="token builtin class-name">:</span> 指定用户所属组
    <span class="token parameter variable">-s</span> <span class="token builtin class-name">:</span> 指定用户登录shell

<span class="token comment"># 指定用户口令</span>
<span class="token function">passwd</span> -指令 用户名
    <span class="token parameter variable">-d</span> <span class="token builtin class-name">:</span> 使账号无口令
    <span class="token parameter variable">-f</span> <span class="token builtin class-name">:</span> 用户下次登录修改-指令
    <span class="token parameter variable">-l</span> <span class="token builtin class-name">:</span> 禁用账号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用户组管理" tabindex="-1"><a class="header-anchor" href="#用户组管理" aria-hidden="true">#</a> 用户组管理</h3><ul><li><h4 id="用户组相关配置文件" tabindex="-1"><a class="header-anchor" href="#用户组相关配置文件" aria-hidden="true">#</a> 用户组相关配置文件</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 用户组信息</span>
/etc/group
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="用户组管理-1" tabindex="-1"><a class="header-anchor" href="#用户组管理-1" aria-hidden="true">#</a> 用户组管理</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 新增用户组</span>
<span class="token function">groupadd</span> -指令 用户组
    <span class="token parameter variable">-g</span> <span class="token builtin class-name">:</span> 指定GID

<span class="token comment"># 删除用户组</span>
<span class="token function">groupdel</span> 用户组

<span class="token comment"># 修改用户组</span>
<span class="token function">groupmod</span> -指令 用户组
    <span class="token parameter variable">-n</span> <span class="token builtin class-name">:</span> 修改用户组名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="进程-服务管理" tabindex="-1"><a class="header-anchor" href="#进程-服务管理" aria-hidden="true">#</a> 进程/服务管理</h2><h3 id="服务管理" tabindex="-1"><a class="header-anchor" href="#服务管理" aria-hidden="true">#</a> 服务管理</h3><ul><li><h4 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令" aria-hidden="true">#</a> 基本命令</h4></li></ul><p><code>Centos 7</code>默认服务管理进程为 <code>systemctl</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 管理服务</span>
systemctl -指令 服务名
     start <span class="token builtin class-name">:</span> 开启服务
     stop <span class="token builtin class-name">:</span> 停止服务
     restart <span class="token builtin class-name">:</span> 重启服务
     status <span class="token builtin class-name">:</span> 查看服务状态
     list-unit-files <span class="token builtin class-name">:</span> 查看服务启动状态
     <span class="token builtin class-name">enable</span> <span class="token builtin class-name">:</span> 设置开机启动
     disable <span class="token builtin class-name">:</span> 关闭服务开机启动
     is-enabled <span class="token builtin class-name">:</span> 查询是否自动启动
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="服务配置" tabindex="-1"><a class="header-anchor" href="#服务配置" aria-hidden="true">#</a> 服务配置</h4><ul><li><strong>步骤一</strong> 创建服务<code>/lib/systemd/system/name.service</code></li><li><strong>步骤二</strong> 编辑 <code>name.service</code> 服务文件</li><li><strong>步骤三</strong> <code>systemctl reload prometheus</code> 刷新配置</li></ul></li></ul><h5 id="配置文件示例" tabindex="-1"><a class="header-anchor" href="#配置文件示例" aria-hidden="true">#</a> 配置文件示例</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 控制单元 :服务描述, 启动顺序, 依赖关系</span>
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token comment"># 描述服务</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>nginx
<span class="token comment"># 说明启动顺序(在哪个服务后启动)</span>
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target 
<span class="token comment"># 说明启动顺序(在哪个服务前启动)</span>
<span class="token assign-left variable">Before</span><span class="token operator">=</span>network.target

<span class="token comment"># 服务的操作命令</span>
<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token comment"># 后台运行形式</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token comment"># 设置服务运行的用户</span>
<span class="token assign-left variable">User</span><span class="token operator">=</span>root
<span class="token comment"># 设置服务运行的组</span>
<span class="token assign-left variable">Group</span><span class="token operator">=</span>root
<span class="token comment"># 指定PID文件路径</span>
<span class="token assign-left variable">PIDFile</span><span class="token operator">=</span>/路径
<span class="token comment"># 启动命令 </span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx
<span class="token comment"># 重启命令</span>
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> reload
<span class="token comment"># 停止命令</span>
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> quit
<span class="token comment"># 指定环境变量</span>
<span class="token assign-left variable">Environment</span><span class="token operator">=</span>/路径
<span class="token comment"># 给服务分配独立临时空间</span>
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true 

<span class="token comment"># 安装部分</span>
<span class="token punctuation">[</span>Install<span class="token punctuation">]</span> 
<span class="token comment"># 默认</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="端口管理" tabindex="-1"><a class="header-anchor" href="#端口管理" aria-hidden="true">#</a> 端口管理</h3><p><code>Centos 7</code>默认防火墙进程为 <code>firewall</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 端口管理</span>
firewall-cmd
     <span class="token parameter variable">--permanent</span> --add-port<span class="token operator">=</span>端口号/协议 <span class="token builtin class-name">:</span> 开启端口
     <span class="token parameter variable">--permanent</span> --remove-port<span class="token operator">=</span>端口号/协议 <span class="token builtin class-name">:</span> 关闭端口
     <span class="token parameter variable">--reload</span> <span class="token builtin class-name">:</span> 重新载入
     --list-ports <span class="token builtin class-name">:</span> 查询开放端口列表
     --query-port<span class="token operator">=</span>端口/协议 <span class="token builtin class-name">:</span> 查询端口是否开放
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="进程管理" tabindex="-1"><a class="header-anchor" href="#进程管理" aria-hidden="true">#</a> 进程管理</h3><p><strong>进程(process)</strong> 分为 <code>交互进程</code> <code>批处理进程</code> <code>守护进程</code></p><ul><li><h4 id="进程关键字" tabindex="-1"><a class="header-anchor" href="#进程关键字" aria-hidden="true">#</a> 进程关键字</h4><ul><li><code>USER</code> 进程是由哪个用户产生的</li><li><code>PID</code> 进程的 ID 号</li><li><code>%CPU</code> 进程CPU占用率</li><li><code>%MEM</code> 进程物理内存占用率</li><li><code>VSZ</code> 进程占用虚拟内存的大小，单位 KB；</li><li><code>RSS</code> 进程占用实际物理内存的大小，单位 KB；</li><li><code>TTY</code> 进程的运行终端 <ul><li><code>tty1</code> 图形化终端</li><li><code>tty2</code>-<code>tty6</code> 本地终端</li><li><code>pts</code>/<code>0</code>-<code>255</code> 虚拟终端</li></ul></li><li><code>STAT</code>: 进程状态。 <ul><li><code>R</code>: 运行状态</li><li><code>S</code>: 睡眠状态</li><li><code>T</code>: 暂停状态</li><li><code>Z</code>: 僵尸状态</li><li><code>s</code>: 包含子进程</li><li><code>l</code>: 多线程</li><li><code>+</code>: 前台显示</li></ul></li><li><code>START</code>: 进程的启动时间</li><li><code>TIME</code>: 进程占用 CPU 的运算时间</li><li><code>COMMAND</code>: 产生此进程的命令名</li></ul></li><li><h4 id="指令操作" tabindex="-1"><a class="header-anchor" href="#指令操作" aria-hidden="true">#</a> 指令操作</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示进程</span>
<span class="token function">ps</span> 指令
    <span class="token parameter variable">-a</span> <span class="token builtin class-name">:</span> 显示当前终端所有进程信息
    <span class="token parameter variable">-u</span> <span class="token builtin class-name">:</span> 以用户格式显示进程信息
    <span class="token parameter variable">-x</span> <span class="token builtin class-name">:</span> 显示后台进程运行的参数
    <span class="token parameter variable">-e</span> <span class="token builtin class-name">:</span> 显示所有进程
    <span class="token parameter variable">-f</span> <span class="token builtin class-name">:</span> 全部格式显示<span class="token punctuation">(</span>有父进程<span class="token punctuation">)</span>

<span class="token comment"># 查看进程树</span>
pstree 指令
    <span class="token parameter variable">-p</span> <span class="token builtin class-name">:</span> 显示进程ID
    <span class="token parameter variable">-u</span> <span class="token builtin class-name">:</span> 显示进程所属用户

<span class="token comment"># 终止进程</span>
<span class="token function">kill</span> -指令 进程号
    <span class="token parameter variable">-9</span> <span class="token builtin class-name">:</span> 强制终止

<span class="token comment"># 通过进程名终止进程</span>
<span class="token function">killall</span> 进程名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="动态监控" tabindex="-1"><a class="header-anchor" href="#动态监控" aria-hidden="true">#</a> 动态监控</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 动态显示正在运行的进程</span>
<span class="token function">top</span> 指令
    <span class="token parameter variable">-d</span> 秒数 <span class="token builtin class-name">:</span> 指定每隔几秒更新<span class="token punctuation">(</span>默认为3<span class="token punctuation">)</span>
    <span class="token parameter variable">-i</span> <span class="token builtin class-name">:</span> 不显示任何闲置或者僵死进程
    <span class="token parameter variable">-p</span> 进程ID <span class="token builtin class-name">:</span> 通过指定的进程ID查询进程状态
    <span class="token parameter variable">-c</span> <span class="token builtin class-name">:</span> 显示产生进程的完整命令
    <span class="token parameter variable">-b</span> <span class="token builtin class-name">:</span> 非交互式
    <span class="token parameter variable">-n</span> <span class="token builtin class-name">:</span> 指定刷新次数
    <span class="token parameter variable">-u</span> 用户名 <span class="token builtin class-name">:</span> 查找特定用户启动的进程
    <span class="token comment"># 进程内操作</span>
    Pc <span class="token builtin class-name">:</span> 以CPU使用率排序
    M <span class="token builtin class-name">:</span> 内存使用率排序
    N <span class="token builtin class-name">:</span> PID排序
    u 然后输入用户名 <span class="token builtin class-name">:</span> 查询特定用户的进程
    k 然后输入进程号 <span class="token builtin class-name">:</span> 结束特定进程号
    q <span class="token builtin class-name">:</span> 退出top
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="系统相关" tabindex="-1"><a class="header-anchor" href="#系统相关" aria-hidden="true">#</a> 系统相关</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 把内存的数据同步到磁盘</span>
<span class="token function">sync</span>

<span class="token comment"># 重启计算机</span>
<span class="token function">reboot</span>

<span class="token comment"># 关机 </span>
<span class="token function">halt</span>

<span class="token comment"># 立刻关机</span>
<span class="token function">shutdown</span> <span class="token parameter variable">-h</span> now
<span class="token comment"># 1分钟后关机</span>
<span class="token function">shutdown</span> <span class="token parameter variable">-h</span> <span class="token number">1</span>
<span class="token comment"># 立刻重启计算机</span>
<span class="token function">shutdown</span> <span class="token parameter variable">-r</span> now
<span class="token comment"># 取消关机</span>
<span class="token function">shutdown</span> <span class="token parameter variable">-c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="磁盘管理" tabindex="-1"><a class="header-anchor" href="#磁盘管理" aria-hidden="true">#</a> 磁盘管理</h2><h3 id="磁盘操作" tabindex="-1"><a class="header-anchor" href="#磁盘操作" aria-hidden="true">#</a> 磁盘操作</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查询文件系统的磁盘占用情况</span>
<span class="token function">df</span> <span class="token parameter variable">-h</span>

<span class="token comment"># 查询指定目录磁盘占用情况</span>
<span class="token function">du</span> -指令 目录名 
    <span class="token parameter variable">-s</span> <span class="token builtin class-name">:</span> 指定目录占用大小汇总
    <span class="token parameter variable">-h</span> <span class="token builtin class-name">:</span> 人性化查看
    <span class="token parameter variable">-a</span> <span class="token builtin class-name">:</span> 含文件
    --max-depth<span class="token operator">=</span><span class="token number">1</span> <span class="token builtin class-name">:</span> 字目录深度
    <span class="token parameter variable">-c</span> <span class="token builtin class-name">:</span> 列出明细的同时,增加汇总值

<span class="token comment"># 查看cpu磁盘的相关信息</span>
iostat -指令 数字1 数字2 
    <span class="token parameter variable">-x</span> <span class="token builtin class-name">:</span> 显示更多信息
    数字1 <span class="token builtin class-name">:</span> 刷新间隔
    数字2 <span class="token builtin class-name">:</span> 刷新次数

<span class="token comment"># 硬盘分区</span>
<span class="token function">fdisk</span> -指令 /dev/sdb/c/d
    <span class="token parameter variable">-m</span> <span class="token builtin class-name">:</span> 显示命令列表
    <span class="token parameter variable">-p</span> <span class="token builtin class-name">:</span> 显示磁盘分区
    <span class="token parameter variable">-n</span> <span class="token builtin class-name">:</span> 新增分区
    <span class="token parameter variable">-d</span> <span class="token builtin class-name">:</span> 删除分区
    <span class="token parameter variable">-w</span> <span class="token builtin class-name">:</span> 写入并退出

<span class="token comment"># 格式化分区并指定分区类型</span>
<span class="token function">mkfs</span> <span class="token parameter variable">-t</span> ext4 /dev/sd<span class="token punctuation">[</span>b1/b2<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设备挂载" tabindex="-1"><a class="header-anchor" href="#设备挂载" aria-hidden="true">#</a> 设备挂载</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看磁盘分区状态(包括未挂载设备)</span>
lsblk <span class="token parameter variable">-f</span>

<span class="token comment"># 挂载设备至目录(重启失效)</span>
<span class="token function">mount</span> 设备 目录

<span class="token comment"># 卸载设备</span>
<span class="token function">umount</span> 设备/目录

<span class="token comment"># 永久挂载 添加完成后执行mount -a</span>
修改文件/etc/fstab挂载
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="软件包管理" tabindex="-1"><a class="header-anchor" href="#软件包管理" aria-hidden="true">#</a> 软件包管理</h2><h3 id="rpm包管理" tabindex="-1"><a class="header-anchor" href="#rpm包管理" aria-hidden="true">#</a> RPM包管理</h3><p><code>RPM</code> 是 <code>RedHat</code> 及分支<strong>本地</strong>软件包管理器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># rpm软件包管理</span>
<span class="token function">rpm</span> -指令 软件包名
    <span class="token parameter variable">-q</span> <span class="token builtin class-name">:</span> 查询
    <span class="token parameter variable">-a</span> <span class="token builtin class-name">:</span> 所有软件包
    <span class="token parameter variable">-i</span> <span class="token builtin class-name">:</span> 软件包常用信息
    <span class="token parameter variable">-l</span> <span class="token builtin class-name">:</span> 查询软件包中的软件
    <span class="token parameter variable">-f</span> <span class="token builtin class-name">:</span> 查询文件所属包
    <span class="token parameter variable">-e</span> 包名称 <span class="token builtin class-name">:</span> 卸载包
    <span class="token parameter variable">--nodeps</span> <span class="token builtin class-name">:</span> 不删除依赖,强制删除
    <span class="token parameter variable">-i</span> <span class="token builtin class-name">:</span> 安装
    <span class="token parameter variable">-v</span> <span class="token builtin class-name">:</span> 安装提示
    <span class="token parameter variable">-h</span> <span class="token builtin class-name">:</span> 安装过程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="yum包管理" tabindex="-1"><a class="header-anchor" href="#yum包管理" aria-hidden="true">#</a> YUM包管理</h3><p><code>YUM</code> 是 <code>RedHat</code> 及分支前端软件包管理器, 基于<a href="#rpm%E5%8C%85%E7%AE%A1%E7%90%86">RPM</a>包管理器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示软件包列表</span>
yum list

<span class="token comment"># 下载安装软件</span>
yum <span class="token function">install</span> 包名

<span class="token comment"># 更新软件包</span>
yum update

<span class="token comment"># 检查是否有可用的更新</span>
yum check-update

<span class="token comment"># 删除指定的软件包</span>
yum remove 包名

<span class="token comment"># 清理过期缓存</span>
yum clean

<span class="token comment"># 显示yum软件包所有依赖关系</span>
yum deplist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="make编译安装" tabindex="-1"><a class="header-anchor" href="#make编译安装" aria-hidden="true">#</a> MAKE编译安装</h3><p>编译安装一般使用 <code>gcc</code> 编译器</p><ul><li><h4 id="编译安装过程" tabindex="-1"><a class="header-anchor" href="#编译安装过程" aria-hidden="true">#</a> 编译安装过程</h4><ul><li><strong>步骤1</strong> <code>./configure</code> 参数传递配置文件, 生成 <code>Makefile.in</code> 文件</li><li><strong>步骤2</strong> <code>make</code> 根据 <code>Makefile.in</code> 文件, 构建应用程序</li><li><strong>步骤3</strong> <code>make install</code> 复制应用程序到指定目录</li></ul></li><li><h4 id="依赖环境" tabindex="-1"><a class="header-anchor" href="#依赖环境" aria-hidden="true">#</a> 依赖环境</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 编译安装依赖环境</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc gcc-c++ <span class="token function">make</span> autoconf libtool-ltdl-devel gd-devel freetype-devel libxml2-devel libjpeg-devel libpng-devel openssl-devel curl-devel bison patch <span class="token function">unzip</span> libmcrypt-devel libmhash-devel ncurses-devel <span class="token function">sudo</span> <span class="token function">bzip2</span> flex libaio-devel

<span class="token comment"># 安装构建软件所需RPM包</span>
yum <span class="token function">install</span> yum-utils
yum-builddep python

<span class="token comment"># 配置脚本, 生成Makefile.in</span>
./configure <span class="token punctuation">\\</span>
    <span class="token comment"># 配置安装目录</span>
    <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/目录

<span class="token comment"># 构建并安装</span>
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="网络管理" tabindex="-1"><a class="header-anchor" href="#网络管理" aria-hidden="true">#</a> 网络管理</h2><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 网卡配置文件</span>
/etc/sysconfig/network-scripts/ifcfg-ens33

<span class="token comment"># host配置文件</span>
/etc/hostname
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="网络命令" tabindex="-1"><a class="header-anchor" href="#网络命令" aria-hidden="true">#</a> 网络命令</h3><p><code>Centos</code> 默认网卡名为 <code>ens33</code></p><ul><li><h4 id="网络请求命令" tabindex="-1"><a class="header-anchor" href="#网络请求命令" aria-hidden="true">#</a> 网络请求命令</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载文件</span>
<span class="token function">wget</span> -选项 /目录/ URL <span class="token parameter variable">-O</span> /目录/文件名
    <span class="token parameter variable">-b</span> <span class="token builtin class-name">:</span> 后台下载
    <span class="token parameter variable">-p</span> <span class="token builtin class-name">:</span> 指定下载目录
    <span class="token parameter variable">-O</span> <span class="token builtin class-name">:</span> 指定下载目录及文件名

<span class="token comment"># 发送请求(下载文件,获取信息)</span>
<span class="token function">curl</span> URL
    <span class="token parameter variable">-O</span> <span class="token builtin class-name">:</span> 下载文件,不写则为请求

<span class="token comment"># 检查网络服务器是否联通</span>
<span class="token function">ping</span> IP地址
    <span class="token parameter variable">-c</span> <span class="token builtin class-name">:</span> 检查次数,不使用则为无限
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="nmtui命令" tabindex="-1"><a class="header-anchor" href="#nmtui命令" aria-hidden="true">#</a> Nmtui命令</h4></li></ul><p><strong>图形化</strong>模式设置网络</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动命令</span>
nmtui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h5 id="ip命令" tabindex="-1"><a class="header-anchor" href="#ip命令" aria-hidden="true">#</a> IP命令</h5></li></ul>`,76),p=n("code",null,"ip",-1),v=n("code",null,"ifconfig",-1),m={href:"https://www.runoob.com/linux/linux-comm-ip.html",target:"_blank",rel:"noopener noreferrer"},u=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示网络接口信息</span>
<span class="token function">ip</span> <span class="token function">link</span>
<span class="token comment"># 开启网卡</span>
<span class="token function">ip</span> <span class="token function">link</span> <span class="token builtin class-name">set</span> 网卡名 up
<span class="token comment"># 关闭网卡</span>
<span class="token function">ip</span> <span class="token function">link</span> <span class="token builtin class-name">set</span> 网卡名 down

<span class="token comment"># 显示网卡ip信息</span>
<span class="token function">ip</span> addr
<span class="token comment"># 设置网卡ip地址</span>
<span class="token function">ip</span> addr <span class="token function">add</span> <span class="token number">192.168</span>.0.1:24 dev 网卡名
<span class="token comment"># 删除网卡ip地址</span>
<span class="token function">ip</span> addr del <span class="token number">192.168</span>.0.1:24 dev 网卡名

<span class="token comment"># 显示系统路由信息</span>
<span class="token function">ip</span> route
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="netstat命令" tabindex="-1"><a class="header-anchor" href="#netstat命令" aria-hidden="true">#</a> Netstat命令</h4></li></ul>`,2),b=n("code",null,"netstat",-1),k={href:"https://www.runoob.com/linux/linux-comm-netstat.html",target:"_blank",rel:"noopener noreferrer"},h=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># netstat命令参数</span>
<span class="token function">netstat</span> -指令
    -a: --all，显示所有监听和未监听的socker
    -l: --listening，显示所有监听的端口
    -t: 所有的 tcp 协议的端口
    -u: 所有的 udp 协议的端口
    -p: --programs，与链接相关程序名和进程的PID
    -n: 进制使用域名解析功能。链接以数字形式展示<span class="token punctuation">(</span>IP地址<span class="token punctuation">)</span>，而不是通过主机名或域名形式展示
    -r: --route，显示路由表信息

<span class="token comment"># 常用操作</span>
<span class="token comment"># 查看路由信息</span>
<span class="token function">netstat</span> <span class="token parameter variable">-r</span> 
<span class="token comment"># 统计系统中tcp连接监听地址、端口、进程</span>
<span class="token function">netstat</span> <span class="token parameter variable">-tlnp</span>
<span class="token comment"># 查看该进程网络信息</span>
<span class="token function">netstat</span> <span class="token parameter variable">-anp</span> <span class="token operator">|</span> <span class="token function">grep</span> 进程号
<span class="token comment"># 查看网络端口号占用情况</span>
<span class="token function">netstat</span> –nlp <span class="token operator">|</span> <span class="token function">grep</span> 端口号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ssh管理" tabindex="-1"><a class="header-anchor" href="#ssh管理" aria-hidden="true">#</a> SSH管理</h3><ul><li><h4 id="ssh-keygen命令" tabindex="-1"><a class="header-anchor" href="#ssh-keygen命令" aria-hidden="true">#</a> SSH-KEYGEN命令</h4><ul><li><code>SSH-Keygen</code> 用于 <code>OpenSSH</code> 身份验证密钥的生成、管理和转换</li><li>支持 <code>RSA</code> 和 <code>DSA</code> 两种认证密钥</li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 指定创建的密钥类型</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa

<span class="token comment"># 生成密钥匙描述信息追加到公钥末尾(常用于git)</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;t@oa.email&quot;</span>

<span class="token comment"># 读取OpenSSH私钥或者公钥</span>
ssh-keygen <span class="token parameter variable">-e</span>

<span class="token comment"># 指定保存密钥的文件名</span>
ssh-keygen <span class="token parameter variable">-f</span> ~/.ssh/id_rsa

<span class="token comment"># 查看是否已经添加对应主机密钥</span>
ssh-keygen <span class="token parameter variable">-F</span> <span class="token number">192.168</span>.1.1

<span class="token comment"># 删除对应主机密钥</span>
ssh-keygen <span class="token parameter variable">-R</span> <span class="token number">192.168</span>.1.1

<span class="token comment"># 指定密码 &#39;&#39;为空</span>
ssh-keygen <span class="token parameter variable">-N</span> <span class="token string">&#39;&#39;</span>

<span class="token comment"># 静默模式</span>
ssh-keygen <span class="token parameter variable">-q</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="ssh-copy-id命令" tabindex="-1"><a class="header-anchor" href="#ssh-copy-id命令" aria-hidden="true">#</a> SSH-COPY-ID命令</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 把本地公钥文件安装到指定远程主机下</span>
ssh-copy-id root@192.168.1.1

<span class="token comment"># 指定文件</span>
ssh-copy-id <span class="token parameter variable">-i</span> ~/.ssh/id_rea.pub root@192.168.0.75

<span class="token comment"># 批量复制</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> node01 node02 node03
<span class="token keyword">do</span>
    ssh-copy-id ¥i
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="日志管理" tabindex="-1"><a class="header-anchor" href="#日志管理" aria-hidden="true">#</a> 日志管理</h2><p><code>CentOS</code> 使用 <code>Rsyslog</code> 服务实现日志功能</p><h3 id="系统日志" tabindex="-1"><a class="header-anchor" href="#系统日志" aria-hidden="true">#</a> 系统日志</h3><ul><li><h4 id="系统日志目录" tabindex="-1"><a class="header-anchor" href="#系统日志目录" aria-hidden="true">#</a> 系统日志目录</h4></li></ul><table><thead><tr><th style="text-align:left;">日志文件</th><th style="text-align:left;">说明</th><th style="text-align:left;">查看方式</th></tr></thead><tbody><tr><td style="text-align:left;"><code>/var/log/boot.log</code></td><td style="text-align:left;">系统启动日志</td><td style="text-align:left;">直接查看</td></tr><tr><td style="text-align:left;"><code>/var/log/cron</code></td><td style="text-align:left;">系统定时任务相关日志</td><td style="text-align:left;">直接查看</td></tr><tr><td style="text-align:left;"><code>/var/log/yum.log</code></td><td style="text-align:left;">yum相关的</td><td style="text-align:left;">直接查看</td></tr><tr><td style="text-align:left;"><code>/var/log/lastog</code></td><td style="text-align:left;">所有用户最后一次登录日志</td><td style="text-align:left;"><code>lastlog</code></td></tr><tr><td style="text-align:left;"><code>/var/log/messag</code></td><td style="text-align:left;">记录系统重要消息日志</td><td style="text-align:left;">直接查看</td></tr><tr><td style="text-align:left;"><code>/var/log/secure</code></td><td style="text-align:left;">记录验证授权信息(用户登录验证信息)</td><td style="text-align:left;">直接查看</td></tr><tr><td style="text-align:left;"><code>/var/tun/ulmp</code></td><td style="text-align:left;">记录当前登录用户的信息(随着用户登录不断变化)</td><td style="text-align:left;"><code>w</code> 格式化<br><code>who</code> 详细 <br><code>users</code> 用户名</td></tr></tbody></table><p><strong>注:</strong> 部分日志需要命令查看</p><ul><li><h4 id="系统日志结构" tabindex="-1"><a class="header-anchor" href="#系统日志结构" aria-hidden="true">#</a> 系统日志结构</h4><ul><li>事件产生的时间</li><li>发生事件的服务器的主机名</li><li>产生事件的服务名或程序名</li><li>事件的具体信息</li></ul></li></ul><h3 id="配置文件-1" tabindex="-1"><a class="header-anchor" href="#配置文件-1" aria-hidden="true">#</a> 配置文件</h3><p>配置文件路径为 <code>/etc/rsyslog.conf</code></p><ul><li><h4 id="配置文件格式" tabindex="-1"><a class="header-anchor" href="#配置文件格式" aria-hidden="true">#</a> 配置文件格式</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 格式 *代表连接符号</span>
服务*级别       日志记录位置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="服务" tabindex="-1"><a class="header-anchor" href="#服务" aria-hidden="true">#</a> 服务</h5><table><thead><tr><th style="text-align:left;">服务名称</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>auth</code></td><td style="text-align:left;"><code>pam</code> 产生的日志，认证日志</td></tr><tr><td style="text-align:left;"><code>authpriv</code></td><td style="text-align:left;"><code>ssh</code> , <code>ftp</code>等登录信息的验证信息，认证授权认证</td></tr><tr><td style="text-align:left;"><code>cron</code></td><td style="text-align:left;">时间任务相关</td></tr><tr><td style="text-align:left;"><code>kern</code></td><td style="text-align:left;">内核</td></tr><tr><td style="text-align:left;"><code>lpr</code></td><td style="text-align:left;">打印</td></tr><tr><td style="text-align:left;"><code>mail</code></td><td style="text-align:left;">邮件</td></tr><tr><td style="text-align:left;"><code>mark</code> / <code>rsyslog</code></td><td style="text-align:left;"><code>rsyslog</code>服务内部的信息,时间标识</td></tr><tr><td style="text-align:left;"><code>news</code></td><td style="text-align:left;">新闻组</td></tr><tr><td style="text-align:left;"><code>user</code></td><td style="text-align:left;">用户程序产生的相关信息</td></tr><tr><td style="text-align:left;"><code>uucp</code></td><td style="text-align:left;">nix to unix copy, unix主机之间相关的通讯</td></tr><tr><td style="text-align:left;"><code>local</code> 1~7</td><td style="text-align:left;">自定义的日志设备</td></tr></tbody></table><h5 id="连接符" tabindex="-1"><a class="header-anchor" href="#连接符" aria-hidden="true">#</a> 连接符</h5><table><thead><tr><th style="text-align:left;">符号</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">服务 <code>.</code> 级别</td><td style="text-align:left;">表示大于某个级别的信息</td></tr><tr><td style="text-align:left;">服务 <code>.=</code> 级别</td><td style="text-align:left;">表示等于某个级别的信息</td></tr><tr><td style="text-align:left;">服务 <code>.!</code> 级别</td><td style="text-align:left;">表示某个级别之外的信息</td></tr></tbody></table><h5 id="级别" tabindex="-1"><a class="header-anchor" href="#级别" aria-hidden="true">#</a> 级别</h5><table><thead><tr><th style="text-align:left;">符号</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>debug</code></td><td style="text-align:left;">有调式信息的, 日志信息最多</td></tr><tr><td style="text-align:left;"><code>info</code></td><td style="text-align:left;">一般信息的日志, 最常用</td></tr><tr><td style="text-align:left;"><code>notice</code></td><td style="text-align:left;">普通信息, 有一定重要性</td></tr><tr><td style="text-align:left;"><code>warning</code> / <code>warn</code></td><td style="text-align:left;">警告级别, 不会影响到服务或系统的运行</td></tr><tr><td style="text-align:left;"><code>err</code> / <code>error</code></td><td style="text-align:left;">错误级别, 阻止某个功能或者模块不能正常工作的信息</td></tr><tr><td style="text-align:left;"><code>crit</code></td><td style="text-align:left;">临界级别, 阻止整个系统或者整个软件不能正常工作的信息</td></tr><tr><td style="text-align:left;"><code>alert</code></td><td style="text-align:left;">警告级别, 需要立即处理</td></tr><tr><td style="text-align:left;"><code>emerg</code></td><td style="text-align:left;">无法使用等严重信息</td></tr></tbody></table><h5 id="日志记录位置" tabindex="-1"><a class="header-anchor" href="#日志记录位置" aria-hidden="true">#</a> 日志记录位置</h5><table><thead><tr><th style="text-align:left;">符号</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>/path/file</code></td><td style="text-align:left;">存储为文件</td></tr><tr><td style="text-align:left;"><code>@@192.168.1.1</code></td><td style="text-align:left;">发送到 TCP 服务</td></tr><tr><td style="text-align:left;"><code>@192.168.1.1</code></td><td style="text-align:left;">发送到 UDP 服务</td></tr><tr><td style="text-align:left;"><code>root</code></td><td style="text-align:left;">发送到用户</td></tr><tr><td style="text-align:left;"><code>~</code></td><td style="text-align:left;">丢弃日志</td></tr><tr><td style="text-align:left;"><code>^/path/script.sh</code></td><td style="text-align:left;">执行脚本,日志内容作为脚本参数</td></tr></tbody></table><ul><li><h4 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 记录mail日志等级为error及以上日志</span>
mail.err                /var/log/mail_err.log

<span class="token comment"># 记录mail所有等级为warn级别的日志（仅记录warn级别）</span>
mail.<span class="token operator">=</span>warn              /var/log/mail_err.log

<span class="token comment"># 记录kern所有日志</span>
kern.*                  /var/log/kern.log

<span class="token comment"># 将mail的所有信息，除了info以外，其他的都写入/var/adm/mail</span>
mail.*<span class="token punctuation">;</span>mail.<span class="token operator">!=</span>info      /var/adm/mail

<span class="token comment"># 将日志等级为crit或更高的内核消息定向到远程主机finlandia</span>
<span class="token comment"># 如果主机崩溃，磁盘出现不可修复的错误，可能无法读取存储的消息。如果有日志在远程主机上，可以尝试找出崩溃的原因。</span>
kern.crit               @finlandia

<span class="token comment"># 记录所有类型的warning等级及以上日志</span>
*.warning               /var/log/syslog_warn.log

<span class="token comment"># 记录mail的warning日志和kern的error日志,其他所有的info日志</span>
*.info<span class="token punctuation">;</span>mail.warning<span class="token punctuation">;</span>kern.error		/var/log/messages

<span class="token comment"># 记录kernel的info到warning日志</span>
kern.info<span class="token punctuation">;</span>kern.<span class="token operator">!</span>err     /var/adm/kernel-info

<span class="token comment"># 将mail和news的info级别日志写入/var/adminfo</span>
mail,news.<span class="token operator">=</span>info         /var/adm/info

<span class="token comment"># 紧急消息（emerg级别）将使用wall显示给当前所有登录的用户</span>
*.<span class="token operator">=</span>emerg   		        *

<span class="token comment"># 该规则将所有alert以及更高级别的消息定向到操作员的终端，即登录的用户“root”和“joey”的终端。</span>
*.alert                 root,joey
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bash快捷键" tabindex="-1"><a class="header-anchor" href="#bash快捷键" aria-hidden="true">#</a> Bash快捷键</h2><ul><li><h3 id="编辑命令" tabindex="-1"><a class="header-anchor" href="#编辑命令" aria-hidden="true">#</a> 编辑命令</h3><ul><li><code>Ctrl + a</code> : 移到命令行首</li><li><code>Ctrl + e</code> : 移到命令行尾</li><li><code>Alt + f</code> : 按单词前移（右向）</li><li><code>Alt + b</code> : 按单词后移（左向）</li><li><code>Ctrl + xx</code> : 在命令行首和光标之间移动</li><li><code>Ctrl + u</code> : 从光标处删除至命令行首</li><li><code>Ctrl + w</code> : 从光标处删除至字首</li><li><code>Alt + d</code> : 从光标处删除至字尾</li></ul></li><li><h3 id="控制命令" tabindex="-1"><a class="header-anchor" href="#控制命令" aria-hidden="true">#</a> 控制命令</h3><ul><li><code>Ctrl + l</code> : 清屏</li><li><code>Ctrl + c</code> : 终止命令</li><li><code>Ctrl + z</code> : 挂起命令</li></ul></li></ul>`,29);function g(f,x){const e=t("ExternalLinkIcon");return d(),c("div",null,[o,n("p",null,[p,s("命令与"),v,s("命令类似, 参考"),n("a",m,[s("菜鸟教程"),l(e)])]),u,n("p",null,[b,s("命令用于显示网络状态, 参考"),n("a",k,[s("菜鸟教程"),l(e)])]),h])}const w=i(r,[["render",g],["__file","basic.html.vue"]]);export{w as default};

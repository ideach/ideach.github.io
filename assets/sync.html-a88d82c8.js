import{_ as l,M as c,p as t,q as r,R as n,t as s,N as e,a1 as i}from"./framework-96b046e1.js";const o={},d=n("h1",{id:"",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#","aria-hidden":"true"},"#")],-1),p=n("h2",{id:"rsync详解",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rsync详解","aria-hidden":"true"},"#"),s(" Rsync详解")],-1),v={href:"https://rsync.samba.org/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/justlpf/article/details/123787956",target:"_blank",rel:"noopener noreferrer"},u={href:"http://www.codebaoku.com/ssh/ssh-rsync.html",target:"_blank",rel:"noopener noreferrer"},b=i(`<h3 id="命令详解" tabindex="-1"><a class="header-anchor" href="#命令详解" aria-hidden="true">#</a> 命令详解</h3><p><code>Rsync</code> 使用 <code>ssh协议</code>和<code>rsync协议</code>进行文件传输, <code>rsync协议</code> 需要目标主机安装 <code>Rsync</code> 程序</p><ul><li><h4 id="rsync基本命令" tabindex="-1"><a class="header-anchor" href="#rsync基本命令" aria-hidden="true">#</a> Rsync基本命令</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 命令格式</span>
<span class="token function">rsync</span> 选项 源路径 本地路径
<span class="token function">rsync</span> 选项 本地路径 远程路径
<span class="token function">rsync</span> 选项 远程路径 本地路径

<span class="token comment"># 本机使用 拷贝源目录</span>
<span class="token function">rsync</span> <span class="token parameter variable">-r</span> test.txt /tmp/

<span class="token comment"># 模拟执行结果</span>
<span class="token function">rsync</span> <span class="token parameter variable">-n</span> /tmp/abc root@192168.1.1:/tmp/

<span class="token comment"># 递归传输 同步元数据</span>
<span class="token function">rsync</span> <span class="token parameter variable">-a</span> /tmp/abc root@192.168.1.1:/tmp/

<span class="token comment"># 传输时压缩</span>
<span class="token function">rsync</span> <span class="token parameter variable">-z</span> /tmp/abc root@192.168.1.1:/tmp/

<span class="token comment"># 显示详细信息</span>
<span class="token function">rsync</span> <span class="token parameter variable">-v</span> /tmp/abc root@192.168.1.1:/tmp/

<span class="token comment"># 保持相同(镜像)</span>
<span class="token function">rsync</span> <span class="token parameter variable">--delete</span> /tmp/abc root@192.168.1.1:/tmp/

<span class="token comment"># 增量备份(以某个文件为基准)</span>
<span class="token function">rsync</span> --link-dest /compare/path /source/path root@192.168.1.1:/tmp/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="rsync应用实例" tabindex="-1"><a class="header-anchor" href="#rsync应用实例" aria-hidden="true">#</a> Rsync应用实例</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 同步本地目录到远程</span>
<span class="token function">rsync</span> <span class="token parameter variable">-avz</span> /tmp/abc root@192.168.1.1:/tmp

<span class="token comment"># 同步远程目录到本地</span>
<span class="token function">rsync</span> <span class="token parameter variable">-avz</span> root@192.168.1.1:/tmp/abc /tmp/

<span class="token comment"># 同步并且保持目录相同</span>
<span class="token function">rsync</span> <span class="token parameter variable">-avz</span> <span class="token parameter variable">--delete</span> /tmp/abc root@192.168.1.1:/tmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lsyncd详解" tabindex="-1"><a class="header-anchor" href="#lsyncd详解" aria-hidden="true">#</a> Lsyncd详解</h2><h3 id="lsyncd安装" tabindex="-1"><a class="header-anchor" href="#lsyncd安装" aria-hidden="true">#</a> Lsyncd安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装epel源</span>
yum <span class="token function">install</span> epel-release <span class="token parameter variable">-y</span>

<span class="token comment"># 安装lsyncd</span>
yum <span class="token function">install</span> lsyncd <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lsyncd配置" tabindex="-1"><a class="header-anchor" href="#lsyncd配置" aria-hidden="true">#</a> Lsyncd配置</h3>`,10),k={href:"https://blog.csdn.net/supahero/article/details/108051210",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.cnblogs.com/lvzhenjiang/p/14411173.html",target:"_blank",rel:"noopener noreferrer"},y=i(`<ul><li><h4 id="配置详解" tabindex="-1"><a class="header-anchor" href="#配置详解" aria-hidden="true">#</a> 配置详解</h4></li></ul><h5 id="编辑配置文件" tabindex="-1"><a class="header-anchor" href="#编辑配置文件" aria-hidden="true">#</a> 编辑配置文件</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 配置文件地址</span>
<span class="token function">vim</span> /etc/lsyncd.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="配置文件解释" tabindex="-1"><a class="header-anchor" href="#配置文件解释" aria-hidden="true">#</a> 配置文件解释</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 全局配置</span>
settings <span class="token punctuation">{</span>
    <span class="token comment"># 定义日志文件</span>
    logfile <span class="token operator">=</span><span class="token string">&quot;/var/log/lsyncd/lsyncd.log&quot;</span>,
    <span class="token comment"># 定义状态文件</span>
    statusFile <span class="token operator">=</span><span class="token string">&quot;/var/log/lsyncd/lsyncd.status&quot;</span>,
    <span class="token comment"># 指定inotify监控事件 选项 modify CloseWrite or Modify</span>
    inotifyMode <span class="token operator">=</span> <span class="token string">&quot;CloseWrite&quot;</span>,
    <span class="token comment"># 最大进程数</span>
    maxProcesses <span class="token operator">=</span> <span class="token number">7</span>,
    <span class="token comment"># 默认不启用守护模式</span>
    nodaemon <span class="token operator">=</span>true,
    <span class="token comment"># 将状态文件写入的时间间隔</span>
    statusInterval <span class="token operator">=</span> <span class="token number">10</span>,
<span class="token punctuation">}</span>
<span class="token comment"># 定义同步参数</span>
<span class="token function">sync</span> <span class="token punctuation">{</span>
    <span class="token comment"># 模式(选择一个)</span>
    <span class="token comment"># rsync模式同步</span>
    default.rsync,
    <span class="token comment"># ssh同步</span>
    default.resyncssh,
    <span class="token comment"># 本地目录同步</span>
    default.direct,

    <span class="token comment"># 同步的源目录(监控目录)</span>
    <span class="token builtin class-name">source</span> <span class="token operator">=</span> <span class="token string">&quot;/data&quot;</span>,

    <span class="token comment"># 同步目标模块, 可以使用多种模式语法</span>
    target <span class="token operator">=</span> <span class="token string">&quot;root@同步目标&quot;</span>,

    <span class="token comment"># 目标目录和源目录保持一致</span>
    delete <span class="token operator">=</span> true,

    <span class="token comment"># 是否同步进程启动前发生的改变</span>
    init <span class="token operator">=</span> true,

    <span class="token comment"># 同步间隔 默认为15秒</span>
    delay <span class="token operator">=</span> <span class="token number">15</span>,

    <span class="token comment"># 排除文件列表</span>
    excloudFrom <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>,

    <span class="token comment"># 排除文件匹配(通配符)</span>
    excloud <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;.*&quot;</span> <span class="token punctuation">}</span>,

    <span class="token comment"># rsync配置</span>
    <span class="token function">rsync</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token comment"># rsync命令绝对路径</span>
        binary <span class="token operator">=</span> <span class="token string">&quot;/usr/bin/rsync&quot;</span>,

        <span class="token comment"># 递归(同步子目录内容)</span>
        archive <span class="token operator">=</span> true,

        <span class="token comment"># 传输过程中压缩文件数据(传输快, 消耗CPU)</span>
        compress <span class="token operator">=</span> true,

        <span class="token comment"># 传输信息</span>
        verbose <span class="token operator">=</span> true,

        <span class="token comment"># 密码文件路径</span>
        password_file <span class="token operator">=</span> <span class="token string">&quot;/etc/rsync.password&quot;</span>

        <span class="token comment"># 传输限速 单位KB</span>
        _extra <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;--bwlimit=1000&quot;</span><span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="常用配置实例" tabindex="-1"><a class="header-anchor" href="#常用配置实例" aria-hidden="true">#</a> 常用配置实例</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 全局配置</span>
settings <span class="token punctuation">{</span>
    <span class="token comment"># 定义日志文件</span>
    logfile <span class="token operator">=</span><span class="token string">&quot;/var/log/lsyncd/lsyncd.log&quot;</span>,
    <span class="token comment"># 定义状态文件</span>
    statusFile <span class="token operator">=</span> <span class="token string">&quot;/var/log/lsyncd/lsyncd.status&quot;</span>,
    <span class="token comment"># 指定inotify监控事件 选项 modify CloseWrite or Modify</span>
    inotifyMode <span class="token operator">=</span> <span class="token string">&quot;CloseWrite&quot;</span>,
    <span class="token comment"># 最大进程数</span>
    maxProcesses <span class="token operator">=</span> <span class="token number">7</span>,
    <span class="token comment"># 将状态文件写入的时间间隔</span>
    statusInterval <span class="token operator">=</span> <span class="token number">10</span>,
    <span class="token comment"># 定义同步参数</span>
<span class="token punctuation">}</span>
<span class="token function">sync</span> <span class="token punctuation">{</span>
    <span class="token comment"># ssh同步</span>
    default.rsync,
    <span class="token comment"># 同步的源目录(监控目录)</span>
    <span class="token builtin class-name">source</span> <span class="token operator">=</span> <span class="token string">&quot;/data&quot;</span>,

    <span class="token comment"># 同步目标模块, ssh模式</span>
    target <span class="token operator">=</span> <span class="token string">&quot;root@192.168.1.1:/tmp&quot;</span>,
    <span class="token comment"># 目标目录和源目录保持一致</span>
    delete <span class="token operator">=</span> true,
    <span class="token comment"># 同步间隔 默认为15秒</span>
    
    delay <span class="token operator">=</span> <span class="token number">15</span>,
    <span class="token comment"># rsync配置</span>
    <span class="token function">rsync</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token comment"># rsync命令绝对路径</span>
        binary <span class="token operator">=</span> <span class="token string">&quot;/usr/bin/rsync&quot;</span>,
        <span class="token comment"># 递归(同步子目录内容)</span>
        archive <span class="token operator">=</span> true,
        <span class="token comment"># 传输过程中压缩文件数据(传输快, 消耗CPU)</span>
        compress <span class="token operator">=</span> true,
        <span class="token comment"># 传输信息</span>
        verbose <span class="token operator">=</span> true,
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lsyncd命令" tabindex="-1"><a class="header-anchor" href="#lsyncd命令" aria-hidden="true">#</a> Lsyncd命令</h3><p><code>lsyncd</code> 配置文件需运行, 创建进程</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动服务</span>
systemctl start lsyncd

<span class="token comment"># 运行配置文件记录执行记录</span>
lsyncd <span class="token parameter variable">-log</span> Exec /etc/lsyncd.conf

<span class="token comment"># 运行配置文件交互显示日志</span>
lsyncd <span class="token parameter variable">-nodaemon</span> /etc/lsyncd.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function f(g,_){const a=c("ExternalLinkIcon");return t(),r("div",null,[d,p,n("p",null,[s("官方网站"),n("a",v,[s("Rsync"),e(a)]),s(", 参考"),n("a",m,[s("CSDN"),e(a)]),n("a",u,[s("编程宝库"),e(a)])]),b,n("p",null,[s("参考"),n("a",k,[s("CSDN"),e(a)]),n("a",h,[s("吕郑江的博客"),e(a)])]),y])}const x=l(o,[["render",f],["__file","sync.html.vue"]]);export{x as default};

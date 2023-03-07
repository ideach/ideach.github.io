import{_ as t,M as c,p as r,q as o,R as n,t as s,N as e,V as d,a1 as a}from"./framework-96b046e1.js";const v={},p=n("h1",{id:"",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#","aria-hidden":"true"},"#")],-1),m=n("h3",{id:"软件包下载",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#软件包下载","aria-hidden":"true"},"#"),s(" 软件包下载")],-1),u={href:"https://redis.io/download/",target:"_blank",rel:"noopener noreferrer"},b=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载Redis版本为7.0.7</span>
<span class="token function">wget</span> https://github.com/redis/redis/archive/7.0.7.tar.gz

<span class="token comment"># 解压Redis</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> <span class="token number">7.0</span>.7.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编译安装" tabindex="-1"><a class="header-anchor" href="#编译安装" aria-hidden="true">#</a> 编译安装</h3>`,2),k=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Redis内置了Makefile直接make</span>
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token comment">#默认安装路径</span>
/usr/local/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>常用命令</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动Redis</span>
redis-server

<span class="token comment"># 连接Redis</span>
redis-cli

<span class="token comment"># 远程连接Redis</span>
redis-cli <span class="token parameter variable">-h</span> <span class="token function">host</span> <span class="token parameter variable">-p</span> port <span class="token parameter variable">-a</span> password

<span class="token comment"># 停止服务</span>
redis-cli <span class="token parameter variable">-u</span> password <span class="token function">shutdown</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置redis服务" tabindex="-1"><a class="header-anchor" href="#配置redis服务" aria-hidden="true">#</a> 配置Redis服务</h3>`,4),h=n("strong",null,"配置参考",-1),g=n("ul",null,[n("li",null,[n("strong",null,"步骤1"),s(" 在 "),n("code",null,"/etc/systemd/system/"),s(" 新建文件 "),n("code",null,"nginx.service")]),n("li",null,[n("strong",null,"步骤2"),s(" 编辑文件")])],-1),f=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 新建服务配置文件</span>
<span class="token function">vim</span> /etc/systemd/system/redis.service

<span class="token comment"># 输入以下内容------------------------开始</span>
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token comment"># 服务名</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>redis
<span class="token comment"># 启动顺序 在nerwork之后</span>
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token comment"># 后台运行</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token comment"># 启动命令</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/bin/redis-server /usr/local/etc/redis.conf
<span class="token comment"># 停止命令</span>
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/bin/kill <span class="token parameter variable">-s</span> QUIT <span class="token variable">$MAINPID</span>
<span class="token comment"># 重启命令</span>
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/bin/kill <span class="token parameter variable">-s</span> HUP <span class="token variable">$MAINPID</span>
<span class="token comment"># 分配独立临时空间</span>
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token comment"># 默认</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
<span class="token comment"># 输入以上内容------------------------结束</span>

<span class="token comment"># 重新加载配置</span>
systemctl daemon-reload

<span class="token comment"># 设置开启自启</span>
systemctl <span class="token builtin class-name">enable</span> redis.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置文件详解" tabindex="-1"><a class="header-anchor" href="#配置文件详解" aria-hidden="true">#</a> 配置文件详解</h3>`,2),_=n("li",null,[s("配置文件在Redis源目录下make后生成 "),n("code",null,"redis.conf")],-1),x={href:"https://blog.51cto.com/weiyigeek/5666728",target:"_blank",rel:"noopener noreferrer"},E=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 复制配置文件(推荐目录)</span>
<span class="token function">cp</span> redis.conf /usr/local/etc/

<span class="token comment"># 启动方式(通过配置文件)</span>
redis-server /usr/local/etc/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>参数说明</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 可访问的地址0.0.0.0为任意ip访问</span>
<span class="token builtin class-name">bind</span> <span class="token number">127.0</span>.0.1

<span class="token comment"># 保护模块, 外部网络是否访问</span>
protected-mode <span class="token function">yes</span>

<span class="token comment"># 指定监听端口</span>
port <span class="token number">6379</span>

<span class="token comment"># 客户端闲置多少秒关闭连接 0为不关闭</span>
<span class="token function">timeout</span> <span class="token number">0</span>

<span class="token comment"># 是否以守护进程方式运行</span>
daemonize no

<span class="token comment"># 指定进程号配置文件</span>
pidfile /var/run/redis_6379.pid

<span class="token comment"># 指定日志文件路径</span>
logfile <span class="token string">&quot;&quot;</span>

<span class="token comment"># 指定工作目录</span>
<span class="token function">dir</span> ./

<span class="token comment"># 数据库总量</span>
databases <span class="token number">16</span>

<span class="token comment"># 是否使用logo</span>
always-show-logo no

<span class="token comment"># 设置密码</span>
requirepass <span class="token number">142857</span>

<span class="token comment"># 设置redis能使用的最大内存</span>
maxmemory 512mb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function y(R,w){const i=c("ExternalLinkIcon"),l=c("RouterLink");return r(),o("div",null,[p,m,n("ul",null,[n("li",null,[s("下载地址"),n("a",u,[s("Redis"),e(i)])])]),b,n("ul",null,[n("li",null,[s("准备编译环境"),e(l,{to:"/linux/system/basic.html#make%E7%BC%96%E8%AF%91%E5%AE%89%E8%A3%85"},{default:d(()=>[s("MAKE编译")]),_:1})])]),k,n("ul",null,[n("li",null,[h,s(),e(l,{to:"/linux/system/basic.html#%E6%9C%8D%E5%8A%A1%E7%AE%A1%E7%90%86"},{default:d(()=>[s("服务管理")]),_:1}),g])]),f,n("ul",null,[_,n("li",null,[s("参考"),n("a",x,[s("CSDN"),e(i)])])]),E])}const I=t(v,[["render",y],["__file","install.html.vue"]]);export{I as default};

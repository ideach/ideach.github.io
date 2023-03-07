import{_ as c,M as i,p as r,q as o,R as n,t as s,N as e,V as d,a1 as a}from"./framework-96b046e1.js";const p={},v=a('<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h2 id="安装部署" tabindex="-1"><a class="header-anchor" href="#安装部署" aria-hidden="true">#</a> 安装部署</h2><h3 id="nginx-编译安装" tabindex="-1"><a class="header-anchor" href="#nginx-编译安装" aria-hidden="true">#</a> Nginx 编译安装</h3>',3),u={href:"https://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://sourceforge.net/projects/pcre/",target:"_blank",rel:"noopener noreferrer"},b=a(`<ul><li><h4 id="安装pcre" tabindex="-1"><a class="header-anchor" href="#安装pcre" aria-hidden="true">#</a> 安装PCRE</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载源码包</span>
<span class="token function">wget</span> http://downloads.sourceforge.net/project/pcre/pcre/8.45/pcre-8.45.tar.bz2

<span class="token comment"># 解压PCRE源码包</span>
<span class="token function">tar</span> <span class="token parameter variable">-jxvf</span> pcre-8.45.tar.bz2

<span class="token comment"># 进入pcre目录后执行</span>
./configure <span class="token punctuation">\\</span>
    <span class="token comment"># 指定安装路径</span>
    <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/pcre

<span class="token comment"># 编译安装</span>
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="安装nginx" tabindex="-1"><a class="header-anchor" href="#安装nginx" aria-hidden="true">#</a> 安装Nginx</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建Nginx使用的用户及用户组</span>
<span class="token function">groupadd</span> www
<span class="token function">useradd</span> <span class="token parameter variable">-g</span> www www

<span class="token comment"># 下载Nginx源码包(当前最新版本)</span>
<span class="token function">wget</span> https://nginx.org/download/nginx-1.23.3.tar.gz

<span class="token comment"># 解压源码包</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> nginx-1.23.3.tar.gz

<span class="token comment"># 进入Nginx目录后执行</span>
./configure <span class="token punctuation">\\</span>
    <span class="token comment"># 指定安装路径</span>
    <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx

<span class="token comment"># 编译安装</span>
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),g=n("h4",{id:"配置nginx服务",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置nginx服务","aria-hidden":"true"},"#"),s(" 配置Nginx服务")],-1),h=n("strong",null,"配置参考",-1),k=n("li",null,[n("strong",null,"步骤1"),s(" 在 "),n("code",null,"/etc/systemd/system/"),s(" 新建文件 "),n("code",null,"nginx.service")],-1),x=n("li",null,[n("strong",null,"步骤2"),s(" 编辑文件")],-1),f=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 新建服务配置文件</span>
<span class="token function">vim</span> /etc/systemd/system/nginx.service

<span class="token comment"># 输入以下内容------------------------开始</span>
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token comment"># 服务名</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>nginx
<span class="token comment"># 服务名</span>
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token comment"># 后台运行</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token comment"># 启动命令</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx
<span class="token comment"># 重启命令</span>
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> reload
<span class="token comment"># 关闭命令</span>
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> quit
<span class="token comment"># 分配独立临时空间</span>
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token comment"># 默认</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
<span class="token comment"># 输入以上内容------------------------结束</span>

<span class="token comment"># 重新加载配置</span>
systemctl daemon-reload

<span class="token comment"># 设置开机自启</span>
systemctl <span class="token builtin class-name">enable</span> nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="nginx常用命令" tabindex="-1"><a class="header-anchor" href="#nginx常用命令" aria-hidden="true">#</a> Nginx常用命令</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动Nginx</span>
./nginx

<span class="token comment"># 快速停止</span>
./nginx <span class="token parameter variable">-s</span> stop

<span class="token comment"># 安全停止(停止前完成一件接受的连接请求)</span>
./nginx <span class="token parameter variable">-s</span> quit

<span class="token comment"># 检查配置文件是否正确</span>
./nginx <span class="token parameter variable">-t</span>

<span class="token comment"># 重新加载配置</span>
./nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置详解" tabindex="-1"><a class="header-anchor" href="#配置详解" aria-hidden="true">#</a> 配置详解</h2><h3 id="目录详解" tabindex="-1"><a class="header-anchor" href="#目录详解" aria-hidden="true">#</a> 目录详解</h3><table><thead><tr><th style="text-align:left;">目录/文件</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong><code>/conf/</code></strong></td><td style="text-align:left;">配置文件目录</td></tr><tr><td style="text-align:left;"><code>/conf/nginx.conf</code></td><td style="text-align:left;">配置文件</td></tr><tr><td style="text-align:left;"><strong><code>/html/</code></strong></td><td style="text-align:left;">默认网页资源目录</td></tr><tr><td style="text-align:left;"><strong><code>/logs/</code></strong></td><td style="text-align:left;">访问/运行 日志文件</td></tr><tr><td style="text-align:left;"><code>/logs/access.log</code></td><td style="text-align:left;">访问日志</td></tr><tr><td style="text-align:left;"><code>/logs/error.log</code></td><td style="text-align:left;">错误日志</td></tr><tr><td style="text-align:left;"><code>/logs/nginx.pid</code></td><td style="text-align:left;">nginx进程号</td></tr><tr><td style="text-align:left;"><strong><code>/sbin/</code></strong></td><td style="text-align:left;">主程序目录</td></tr><tr><td style="text-align:left;"><code>/sbin/nginx</code></td><td style="text-align:left;">主进程文件</td></tr></tbody></table><h3 id="配置文件详解" tabindex="-1"><a class="header-anchor" href="#配置文件详解" aria-hidden="true">#</a> 配置文件详解</h3><p>配置文件 <code>/conf/nginx.conf</code></p><ul><li><h4 id="文件结构" tabindex="-1"><a class="header-anchor" href="#文件结构" aria-hidden="true">#</a> 文件结构</h4></li></ul><table><thead><tr><th style="text-align:left;">目录/文件</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">全局配置</td><td style="text-align:left;">配置影响nginx全局的指令</td></tr><tr><td style="text-align:left;">events配置</td><td style="text-align:left;">配置影响nginx服务器或与用户的网络连接</td></tr><tr><td style="text-align:left;">http配置</td><td style="text-align:left;">可以嵌套多个server，配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置</td></tr><tr><td style="text-align:left;">server配置</td><td style="text-align:left;">配置虚拟主机的相关参数(可以有多个)</td></tr><tr><td style="text-align:left;">location配置</td><td style="text-align:left;">配置请求的路由，以及各种页面的处理情况(可以有多个)</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 全局配置</span>
events <span class="token punctuation">{</span>
    <span class="token comment"># events配置</span>
<span class="token punctuation">}</span>
http
<span class="token punctuation">{</span>
    <span class="token comment"># http全局配置</span>
    server
    <span class="token punctuation">{</span> 
        <span class="token comment"># server全局配置</span>
        location <span class="token punctuation">[</span>PATTERN<span class="token punctuation">]</span>   
        <span class="token punctuation">{</span>
            <span class="token comment"># location配置</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>`,12);function y(_,E){const t=i("ExternalLinkIcon"),l=i("RouterLink");return r(),o("div",null,[v,n("ul",null,[n("li",null,[s("下载地址"),n("a",u,[s("Nginx"),e(t)])]),n("li",null,[s("需安装依赖"),n("a",m,[s("PCRE"),e(t)])]),n("li",null,[s("准备编译环境"),e(l,{to:"/linux/system/basic.html#make%E7%BC%96%E8%AF%91%E5%AE%89%E8%A3%85"},{default:d(()=>[s("MAKE编译")]),_:1})])]),b,n("ul",null,[n("li",null,[g,n("ul",null,[n("li",null,[h,s(),e(l,{to:"/linux/system/basic.html#%E6%9C%8D%E5%8A%A1%E7%AE%A1%E7%90%86"},{default:d(()=>[s("服务管理")]),_:1})]),k,x])])]),f])}const N=c(p,[["render",y],["__file","nginx.html.vue"]]);export{N as default};

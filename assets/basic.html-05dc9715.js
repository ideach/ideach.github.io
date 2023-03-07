import{_ as c,M as a,p as o,q as r,R as n,t as s,N as e,V as p,a1 as i}from"./framework-96b046e1.js";const d={},m=i('<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h2 id="安装环境" tabindex="-1"><a class="header-anchor" href="#安装环境" aria-hidden="true">#</a> 安装环境</h2><h3 id="编译安装" tabindex="-1"><a class="header-anchor" href="#编译安装" aria-hidden="true">#</a> 编译安装</h3>',3),u={href:"https://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},v=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载源码包 建议放入/usr/local/src</span>
<span class="token function">wget</span> https://www.python.org/ftp/python/3.11.1/Python-3.11.1.tar.xz

<span class="token comment"># 解压源码包</span>
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> Python-3.11.1.tar.xz

<span class="token comment"># 进入目录配置makefile</span>
./configure <span class="token punctuation">\\</span>
    <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/python3

<span class="token comment"># 编译并安装</span>
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量" aria-hidden="true">#</a> 配置环境变量</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置python环境变量</span>
<span class="token function">vim</span> /etc/profile.d/python3.sh
<span class="token comment"># 添加以下内容</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">python</span><span class="token operator">=</span><span class="token string">&#39;/usr/local/python3/bin/python3&#39;</span>

<span class="token comment"># 设置pip环境变量</span>
<span class="token function">vim</span> /etc/profile.d/pip3.sh
<span class="token comment"># 添加如下内容</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">pip</span><span class="token operator">=</span><span class="token string">&#39;/usr/local/python3/bin/pip3&#39;</span>

<span class="token comment"># 使配置生效</span>
<span class="token builtin class-name">source</span> /etc/profile.d/python3.sh 
<span class="token builtin class-name">source</span> /etc/profile.d/pip3.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function h(b,k){const l=a("ExternalLinkIcon"),t=a("RouterLink");return o(),r("div",null,[m,n("ul",null,[n("li",null,[s("源码包下载地址"),n("a",u,[s("Python"),e(l)])]),n("li",null,[s("准备编译环境"),e(t,{to:"/linux/system/basic.html#make%E7%BC%96%E8%AF%91%E5%AE%89%E8%A3%85"},{default:p(()=>[s("MAKE编译")]),_:1})])]),v])}const _=c(d,[["render",h],["__file","basic.html.vue"]]);export{_ as default};

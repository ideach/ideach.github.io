import{_ as i,M as t,p as c,q as o,R as n,t as a,N as e,a1 as l}from"./framework-96b046e1.js";const p={},r=l('<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h2 id="安装部署" tabindex="-1"><a class="header-anchor" href="#安装部署" aria-hidden="true">#</a> 安装部署</h2><h3 id="tomcat-安装" tabindex="-1"><a class="header-anchor" href="#tomcat-安装" aria-hidden="true">#</a> Tomcat 安装</h3>',3),d={href:"https://tomcat.apache.org/download-80.cgi",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.oracle.com/java/technologies/downloads/#java8",target:"_blank",rel:"noopener noreferrer"},v=l(`<ul><li><h4 id="安装jdk8" tabindex="-1"><a class="header-anchor" href="#安装jdk8" aria-hidden="true">#</a> 安装JDK8</h4></li></ul><p><code>JDK8</code> 需手动下载上传至服务器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 解压至/usr/local</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> jdk-8u351-linux-x64.tar.gz <span class="token parameter variable">-C</span> /usr/local

<span class="token comment"># 配置环境变量</span>
<span class="token function">vim</span> /etc/profile.d/java.sh

<span class="token comment"># 添加以下内容</span>
<span class="token comment"># JAVA_HOME</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/local/java
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CALSSPATH</span><span class="token operator">=</span><span class="token variable">$CLASSPATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/lib
<span class="token comment"># JRE_HOME</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JRE_HOME</span><span class="token operator">=</span>/usr/local/java/jre
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JRE_HOME</span>/bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CALSSPATH</span><span class="token operator">=</span><span class="token variable">$CLASSPATH</span><span class="token builtin class-name">:</span><span class="token variable">$JRE_HOME</span>/lib

<span class="token comment"># 使配置生效</span>
<span class="token builtin class-name">source</span> /etc/profile.d/java.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="安装tomcat" tabindex="-1"><a class="header-anchor" href="#安装tomcat" aria-hidden="true">#</a> 安装Tomcat</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载Tomcat</span>
<span class="token function">wget</span> https://dlcdn.apache.org/tomcat/tomcat-8/v8.5.84/bin/apache-tomcat-8.5.84.tar.gz

<span class="token comment"># 解压至/usr/local 并改名为Tomcat8</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> apache-tomcat-8.5.84.tar.gz <span class="token parameter variable">-C</span> /usr/local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="配置tomcat服务" tabindex="-1"><a class="header-anchor" href="#配置tomcat服务" aria-hidden="true">#</a> 配置Tomcat服务</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 修改Tomcat环境文件</span>
<span class="token function">vim</span> /usr/local/tomcat8/bin/catalina.sh
<span class="token comment"># 搜索字段 PRGDIR 在底部加入</span>
<span class="token comment"># PRGDIR=\`dirname &quot;$PRG&quot;\`</span>
<span class="token assign-left variable">CATALINA_PID</span><span class="token operator">=</span><span class="token string">&quot;/usr/local/tomcat8/bin/tomcat.pid&quot;</span>

<span class="token comment"># 新建服务配置文件</span>
<span class="token function">vim</span> /etc/systemd/system/tomcat8.service

<span class="token comment"># 输入以下内容------------------------开始</span>
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token comment"># 服务名</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>tomcat
<span class="token comment"># 服务名</span>
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target
 
<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token comment"># 后台运行</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token comment"># 服务启动时, 不会读取全局变量, 在此配置JDK</span>
<span class="token assign-left variable">Environment</span><span class="token operator">=</span><span class="token string">&quot;JAVA_HOME=/usr/local/java&quot;</span>
<span class="token comment"># 配置PID文件</span>
<span class="token assign-left variable">PIDFile</span><span class="token operator">=</span>/usr/local/tomcat8/bin/tomcat.pid
<span class="token comment"># 启动命令</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/tomcat8/bin/startup.sh
<span class="token comment"># 停止命令</span>
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/usr/local/tomcat8/bin/shutdown.sh
<span class="token comment"># 重启命令</span>
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/bin/kill <span class="token parameter variable">-s</span> HUP <span class="token variable">$MAINPID</span>
<span class="token comment"># 分配独立临时空间</span>
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token comment"># 默认</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
<span class="token comment"># 输入以上内容------------------------结束</span>

<span class="token comment"># 设置开机自启</span>
systemctl <span class="token builtin class-name">enable</span> tomcat8.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function u(b,k){const s=t("ExternalLinkIcon");return c(),o("div",null,[r,n("ul",null,[n("li",null,[a("下载地址"),n("a",d,[a("Tomcat"),e(s)])]),n("li",null,[a("需安装依赖"),n("a",m,[a("JDK8环境"),e(s)])])]),v])}const f=i(p,[["render",u],["__file","tomcat.html.vue"]]);export{f as default};

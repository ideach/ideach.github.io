import{_ as l,M as i,p as r,q as c,R as n,t as s,N as t,a1 as a}from"./framework-96b046e1.js";const o={},p=a('<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h2 id="mysql安装" tabindex="-1"><a class="header-anchor" href="#mysql安装" aria-hidden="true">#</a> MySQL安装</h2><h3 id="rpm安装" tabindex="-1"><a class="header-anchor" href="#rpm安装" aria-hidden="true">#</a> RPM安装</h3><ul><li><h4 id="软件包下载" tabindex="-1"><a class="header-anchor" href="#软件包下载" aria-hidden="true">#</a> 软件包下载</h4></li></ul>',4),d={href:"https://dev.mysql.com/downloads/mysql/",target:"_blank",rel:"noopener noreferrer"},m=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://dev.mysql.com/get/Downloads/MySQL-8.0/mysql-8.0.31-1.el7.x86_64.rpm-bundle.tar
<span class="token comment"># 下载MySQL版本为8.0.31</span>

<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> mysql-9.0.31-1.el7.x86_64.rpm-bundle.tar
<span class="token comment"># 解压软件tar包</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="软件包内容" tabindex="-1"><a class="header-anchor" href="#软件包内容" aria-hidden="true">#</a> 软件包内容</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql-community-client-8.0.31-1.el7.x86_64.rpm <span class="token comment"># MySQL客户端工具</span>
mysql-community-client-plugins-8.0.31-1.el7.x86_64.rpm <span class="token comment"># MySQL客户端插件</span>
mysql-community-common-8.0.31-1.el7.x86_64.rpm <span class="token comment"># 服务器客户端通用库</span>
mysql-community-debuginfo-8.0.31-1.el7.x86_64.rpm
mysql-community-devel-8.0.31-1.el7.x86_64.rpm <span class="token comment"># MySQL开发相关工具</span>
mysql-community-embedded-compat-8.0.31-1.el7.x86_64.rpm
mysql-community-icu-data-files-8.0.31-1.el7.x86_64.rpm <span class="token comment"># Unicode库</span>
mysql-community-libs-8.0.31-1.el7.x86_64.rpm <span class="token comment"># 客户端应用程序共享库 </span>
mysql-community-libs-compat-8.0.31-1.el7.x86_64.rpm
mysql-community-server-8.0.31-1.el7.x86_64.rpm <span class="token comment"># 数据库服务器</span>
mysql-community-server-debug-8.0.31-1.el7.x86_64.rpm
mysql-community-test-8.0.31-1.el7.x86_64.rpm <span class="token comment"># MySQL服务器测试工具</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="软件包安装" tabindex="-1"><a class="header-anchor" href="#软件包安装" aria-hidden="true">#</a> 软件包安装</h4><ul><li>安装前需卸载 <code>Mariadb</code></li><li><code>RPM</code> 安装需按固定顺序安装</li></ul></li></ul><h5 id="生产环境" tabindex="-1"><a class="header-anchor" href="#生产环境" aria-hidden="true">#</a> 生产环境</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查询是否安装Mariadb</span>
<span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> mariadb

<span class="token comment"># 查询结果</span>
mariadb-libs-5.5.68-1.el7.x86_64

<span class="token comment"># 卸载Mariadb</span>
yum remove mariadb-libs

<span class="token comment"># 服务器客户端通用库</span>
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-community-common-8.0.31-1.el7.x86_64.rpm <span class="token parameter variable">--force</span> <span class="token parameter variable">--nodeps</span>

<span class="token comment"># MySQL客户端插件</span>
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-community-client-plugins-8.0.31-1.el7.x86_64.rpm <span class="token parameter variable">--force</span> <span class="token parameter variable">--nodeps</span>

<span class="token comment"># 客户端应用程序共享库 </span>
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-community-libs-8.0.31-1.el7.x86_64.rpm <span class="token parameter variable">--force</span> <span class="token parameter variable">--nodeps</span>

<span class="token comment"># MySQL客户端工具</span>
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-community-client-8.0.31-1.el7.x86_64.rpm <span class="token parameter variable">--force</span> <span class="token parameter variable">--nodeps</span>

<span class="token comment"># ICU数据文件</span>
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-community-icu-data-files-8.0.31-1.el7.x86_64.rpm <span class="token parameter variable">--force</span> <span class="token parameter variable">--nodeps</span>

<span class="token comment"># 数据库服务器</span>
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-community-server-8.0.31-1.el7.x86_64.rpm <span class="token parameter variable">--force</span> <span class="token parameter variable">--nodeps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="开发环境" tabindex="-1"><a class="header-anchor" href="#开发环境" aria-hidden="true">#</a> 开发环境</h5><p>开发环境<strong>可选</strong>安装工具包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># MySQL开发相关工具</span>
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-community-devel-8.0.31-1.el7.x86_64.rpm <span class="token parameter variable">--force</span> <span class="token parameter variable">--nodeps</span>

<span class="token comment"># MySQL服务器测试工具</span>
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-community-test-8.0.31-1.el7.x86_64.rpm <span class="token parameter variable">--force</span> <span class="token parameter variable">--nodeps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql初始化" tabindex="-1"><a class="header-anchor" href="#mysql初始化" aria-hidden="true">#</a> MySQL初始化</h3><p>MySQL安装完成后需运行 <code>安全配置脚本</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装完成启动 Mysql</span>
systemctl start mysqld

<span class="token comment"># 运行安全配置向导</span>
/usr/bin/mysql_secure_installation

<span class="token comment"># 步骤 1 输入root密码 在/var/log/mysqld.log</span>
Enter password <span class="token keyword">for</span> user root:

<span class="token comment"># root新密码(输入密码)</span>
New password:

<span class="token comment"># 重复新密码(输入密码)</span>
Re-enter new password:

<span class="token comment"># 确认是否修改密码(yes)</span>
Change the password <span class="token keyword">for</span> root ? <span class="token punctuation">((</span>Press y<span class="token operator">|</span>Y <span class="token keyword">for</span> Yes, any other key <span class="token keyword">for</span> No<span class="token punctuation">)</span> <span class="token builtin class-name">:</span>

<span class="token comment"># 是否删除匿名用户(yes)</span>
Remove anonymous users? <span class="token punctuation">(</span>Press y<span class="token operator">|</span>Y <span class="token keyword">for</span> Yes, any other key <span class="token keyword">for</span> No<span class="token punctuation">)</span> <span class="token builtin class-name">:</span>

<span class="token comment"># 禁止root用户远程登录(根据情况)</span>
Disallow root login remotely? <span class="token punctuation">(</span>Press y<span class="token operator">|</span>Y <span class="token keyword">for</span> Yes, any other key <span class="token keyword">for</span> No<span class="token punctuation">)</span> <span class="token builtin class-name">:</span>

<span class="token comment"># 删除测试数据库(yes)</span>
Remove <span class="token builtin class-name">test</span> database and access to it? <span class="token punctuation">(</span>Press y<span class="token operator">|</span>Y <span class="token keyword">for</span> Yes, any other key <span class="token keyword">for</span> No<span class="token punctuation">)</span> <span class="token builtin class-name">:</span>

<span class="token comment"># 重新加载权限表(yes)</span>
Reload privilege tables now? <span class="token punctuation">(</span>Press y<span class="token operator">|</span>Y <span class="token keyword">for</span> Yes, any other key <span class="token keyword">for</span> No<span class="token punctuation">)</span> <span class="token builtin class-name">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql完全卸载" tabindex="-1"><a class="header-anchor" href="#mysql完全卸载" aria-hidden="true">#</a> MySQL完全卸载</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 停止服务</span>
systemctl stop mysqld

<span class="token comment"># 查询MySQL服务</span>
<span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> mysql

<span class="token comment"># 依次卸载</span>
<span class="token function">rpm</span> <span class="token parameter variable">-e</span> 软件包

<span class="token comment"># 查找MySQL相关目录</span>
<span class="token function">find</span> / <span class="token parameter variable">-name</span> mysql

<span class="token comment"># 依次删除</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /目录

<span class="token comment"># 删除配置文件</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/my.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function v(u,b){const e=i("ExternalLinkIcon");return r(),c("div",null,[p,n("p",null,[s("下载地址"),n("a",d,[s("MySQL社区版"),t(e)])]),m])}const y=l(o,[["render",v],["__file","install.html.vue"]]);export{y as default};

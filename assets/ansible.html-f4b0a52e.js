import{_ as r,M as i,p as c,q as d,R as s,t as n,N as a,V as o,a1 as l}from"./framework-96b046e1.js";const p={},m=s("h1",{id:"",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#","aria-hidden":"true"},"#")],-1),v={href:"https://docs.ansible.com/ansible/latest/",target:"_blank",rel:"noopener noreferrer"},u=s("h2",{id:"软件安装",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#软件安装","aria-hidden":"true"},"#"),n(" 软件安装")],-1),b=s("code",null,"epel",-1),k={href:"https://developer.aliyun.com/mirror/epel?spm=a2c6h.13651102.0.0.3e221b11fSNKdz",target:"_blank",rel:"noopener noreferrer"},h=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装epel源(两种方式)</span>
<span class="token function">wget</span> <span class="token parameter variable">-O</span> /etc/yum.repos.d/epel.repo https://mirrors.aliyun.com/repo/epel-7.repo
yum <span class="token function">install</span> epel-release

<span class="token comment"># yum安装Ansible</span>
yum <span class="token function">install</span> ansible <span class="token parameter variable">-y</span>

<span class="token comment"># 验证安装, 并查看版本</span>
ansible <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置详解" tabindex="-1"><a class="header-anchor" href="#配置详解" aria-hidden="true">#</a> 配置详解</h2><h3 id="配置文件模版" tabindex="-1"><a class="header-anchor" href="#配置文件模版" aria-hidden="true">#</a> 配置文件模版</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 主配置文件模版</span>
/etc/ansible/ansible.cfg 

<span class="token comment"># 主机清单模版</span>
/etc/ansible/hosts

<span class="token comment"># 存放角色目录</span>
/etc/ansible/roles/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置文件详解" tabindex="-1"><a class="header-anchor" href="#配置文件详解" aria-hidden="true">#</a> 配置文件详解</h3><ul><li><h4 id="ansible配置文件查找顺序" tabindex="-1"><a class="header-anchor" href="#ansible配置文件查找顺序" aria-hidden="true">#</a> Ansible配置文件查找顺序</h4><ul><li><ol><li>ANSIBLE_COMFIG 变量定义的配置文件</li></ol></li><li><ol start="2"><li>当前目录下 <code>./ansible.cfg</code></li></ol></li><li><ol start="3"><li>当前用户家目录下 <code>~/ansible.cfg</code></li></ol></li><li><ol start="4"><li><code>/etc/ansible/ansible.cfg</code></li></ol></li></ul></li><li><h4 id="ansible-cfg文件详解" tabindex="-1"><a class="header-anchor" href="#ansible-cfg文件详解" aria-hidden="true">#</a> ansible.cfg文件详解</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>defaults<span class="token punctuation">]</span>
<span class="token comment"># 主机列表配置文件</span>
inventory     <span class="token operator">=</span> /etc/ansible/hosts  

<span class="token comment"># 库文件存放目录</span>
library       <span class="token operator">=</span> /usr/share/my_modules/ 

<span class="token comment"># 临时py命令文件存放在远程主机目录</span>
remote_tmp    <span class="token operator">=</span> <span class="token environment constant">$HOME</span>/.ansible/tmp     

<span class="token comment"># 本机的临时命令执行目录  </span>
local_tmp     <span class="token operator">=</span> <span class="token environment constant">$HOME</span>/.ansible/tmp

<span class="token comment"># 默认并发数,同时可以执行5次</span>
forks         <span class="token operator">=</span> <span class="token number">5</span>

<span class="token comment"># 默认sudo 用户</span>
sudo_user     <span class="token operator">=</span> root

<span class="token comment"># 每次执行ansible命令是否询问ssh密码</span>
ask_sudo_pass <span class="token operator">=</span> True

<span class="token comment"># 每次执行ansible命令是否询问ssh口令   </span>
ask_pass      <span class="token operator">=</span> True

<span class="token comment"># 远程主机的端口号(默认22)</span>
remote_port   <span class="token operator">=</span> <span class="token number">22</span>        

<span class="token comment"># 检查对应服务器的指纹密钥，建议取消</span>
host_key_checking <span class="token operator">=</span> False 

<span class="token comment"># 日志文件,建议取消注释</span>
<span class="token assign-left variable">log_path</span><span class="token operator">=</span>/var/log/ansible.log

<span class="token comment"># 默认模块</span>
module_name   <span class="token operator">=</span> <span class="token builtin class-name">command</span>
<span class="token punctuation">[</span>privilege_escalation<span class="token punctuation">]</span>
<span class="token comment"># 连接后是否切换用户</span>
become <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token comment"># 切换用户方式 默认sudo</span>
become_method <span class="token operator">=</span> <span class="token function">sudo</span>
<span class="token comment"># 切换用户名</span>
become_user <span class="token operator">=</span> root
<span class="token comment"># 是否需要输入密码</span>
become_ask_pass <span class="token operator">=</span> <span class="token boolean">false</span>      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="hosts文件详解" tabindex="-1"><a class="header-anchor" href="#hosts文件详解" aria-hidden="true">#</a> hosts文件详解</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># []为组名</span>
<span class="token punctuation">[</span>test1<span class="token punctuation">]</span>
node02
<span class="token number">192.168</span>.3.43

<span class="token punctuation">[</span>test2<span class="token punctuation">]</span>
<span class="token comment"># 连续用:分隔</span>
node<span class="token punctuation">[</span>02:03<span class="token punctuation">]</span>

<span class="token comment"># 嵌套组 test3为组名 嵌套test1</span>
<span class="token punctuation">[</span>test1:test3<span class="token punctuation">]</span>
<span class="token comment"># 密码认证格式</span>
node03 <span class="token assign-left variable">ansible_port</span><span class="token operator">=</span><span class="token number">22</span> <span class="token assign-left variable">ansible_user</span><span class="token operator">=</span>root <span class="token assign-left variable">ansible_password</span><span class="token operator">=</span><span class="token string">&#39;142857&#39;</span>
<span class="token comment"># 定义test4组的公共变量批量设置密码登录信息</span>
<span class="token punctuation">[</span>test4:vars<span class="token punctuation">]</span>
<span class="token assign-left variable">ansible_port</span><span class="token operator">=</span><span class="token number">22</span>
<span class="token assign-left variable">ansible_user</span><span class="token operator">=</span>root
<span class="token assign-left variable">ansible_passowrd</span><span class="token operator">=</span><span class="token string">&#39;142857&#39;</span>

<span class="token punctuation">[</span>test4<span class="token punctuation">]</span>
node<span class="token punctuation">[</span>02:03<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ansible命令详解" tabindex="-1"><a class="header-anchor" href="#ansible命令详解" aria-hidden="true">#</a> Ansible命令详解</h3>`,10),g=s("code",null,"Ansible",-1),f=s("br",null,null,-1),y=s("code",null,"Ansible ad-hoc",-1),x={href:"https://blog.51cto.com/u_15060546/2651937",target:"_blank",rel:"noopener noreferrer"},_=l(`<ul><li><h4 id="ansible常用模块" tabindex="-1"><a class="header-anchor" href="#ansible常用模块" aria-hidden="true">#</a> Ansible常用模块</h4></li></ul><table><thead><tr><th style="text-align:left;">模块作用</th><th style="text-align:left;">模块名</th><th style="text-align:left;">模块参数</th></tr></thead><tbody><tr><td style="text-align:left;">检查节点连通性</td><td style="text-align:left;">ping</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">执行命令 默认模块</td><td style="text-align:left;">command</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">执行命令 支持特殊符号</td><td style="text-align:left;">shell</td><td style="text-align:left;">chdir=/目录名 : 切换工作目录<br> removes=/文件名 : 文件存在不执行</td></tr><tr><td style="text-align:left;">分发脚本并执行</td><td style="text-align:left;">script</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">文件目录管理</td><td style="text-align:left;">file</td><td style="text-align:left;">path=/路径 : 目标路径<br>state=touch : 创建文件<br>state=directory : 创建文件夹<br>state=link : 创建软链接<br>state=hard : 创建硬链接<br>state=absent : 删除<br>owner=用户名 : 设置所有者<br>group=组名 : 设置所属组<br>mode=777 : 设置权限</td></tr><tr><td style="text-align:left;">拷贝模块</td><td style="text-align:left;">copy</td><td style="text-align:left;">src=/主机文件 : 设置源文件<br>dest=/tmp/ : 设置目标位置<br>backup=yes : 如果存在则先备份</td></tr><tr><td style="text-align:left;">服务管理模块</td><td style="text-align:left;">systemd</td><td style="text-align:left;">name=nginx : 服务名<br>state=started : 启动服务<br>state=stoped : 关闭服务<br>state=restarted : 重启服务<br>state=reloaded : 重新加载配置文件</td></tr><tr><td style="text-align:left;">YUM包管理模块</td><td style="text-align:left;">yum</td><td style="text-align:left;">name=软件名\\软件包路径 : 指定包<br>state=installed : 安装软件<br>state=removed : 卸载软件<br>state=lastest : 更新软件</td></tr><tr><td style="text-align:left;">文件下载模块</td><td style="text-align:left;">git_url</td><td style="text-align:left;">url=&#39;链接&#39; : 文件下载链接<br>dest=/路径 : 文件下载路径</td></tr></tbody></table><ul><li><h4 id="ansible返回状态" tabindex="-1"><a class="header-anchor" href="#ansible返回状态" aria-hidden="true">#</a> Ansible返回状态</h4><ul><li>绿色: 命令已执行 状态没有发生改变</li><li>黄色: 命令已执行 状态发生改变</li><li>紫色: 命令已执行 建议使用规范模块</li><li>蓝色: 命令已执行 打印详细执行过程</li><li>红色: 命令执行失败</li></ul></li><li><h4 id="ansible命令实例" tabindex="-1"><a class="header-anchor" href="#ansible命令实例" aria-hidden="true">#</a> Ansible命令实例</h4></li></ul><p><code>ansibles</code> 是 <code>Ansible</code> 基本操作命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 格式</span>
ansible all/主机集合 <span class="token parameter variable">-m</span> 模块名 <span class="token parameter variable">-a</span> <span class="token string">&quot;命令&quot;</span>
    <span class="token parameter variable">-k</span> <span class="token builtin class-name">:</span> 使用密码远程
    <span class="token parameter variable">-i</span> <span class="token builtin class-name">:</span> 指定主机列表文件

<span class="token comment"># 查看主机列表</span>
ansible all/主机集合 --list-hosts

<span class="token comment"># 使用ping模块</span>
ansible 主机集合 <span class="token parameter variable">-m</span> <span class="token function">ping</span>

<span class="token comment"># 使用command默认模块 不支持 管道符 重定向</span>
ansible 主机集合 <span class="token parameter variable">-a</span> <span class="token string">&quot;ip a s ens33&quot;</span>
ansible 主机集合 <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;ip a s ens33&quot;</span>

<span class="token comment"># 使用shell模块</span>
ansible 主机集合 <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&quot;ps ef | grep anon&quot;</span>
<span class="token comment"># 使用chdir切换工作目录 chdir</span>
ansible 主机集合 <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&quot;chdir=/tmp touch my.txt&quot;</span>
<span class="token comment"># 文件存在不执行 create</span>
ansible 主机集合 <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&quot;touch /tmp/abc.txt create=/tmp/abc.txt&quot;</span> 
<span class="token comment"># 文件不存在不执行 removes</span>
ansible 主机集合 <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&quot;chdir=/tmpunzip abc.zip removes=/tmp/abc.txt&quot;</span> 

<span class="token comment"># 使用script模块 分发脚本并执行</span>
ansible 主机集合 <span class="token parameter variable">-m</span> script <span class="token parameter variable">-a</span> <span class="token string">&quot;/控制端主机脚本名&quot;</span>

<span class="token comment"># 使用file模块</span>
ansible 主机集合 <span class="token parameter variable">-m</span> <span class="token function">file</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;/&quot;</span>
<span class="token comment"># 新建文件 state类别 touch创建文件</span>
ansible 主机集合 <span class="token parameter variable">-m</span> <span class="token function">file</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;path=/tmp/abc.txt state=touch&quot;</span>
<span class="token comment"># 新建文件夹 directory创建文件夹</span>
ansible 主机集合 <span class="token parameter variable">-m</span> <span class="token function">file</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;path=/tmp/dir state=directory&quot;</span>
<span class="token comment"># 修改权限 owner所有者 group所属组 mode权限代码</span>
ansible 主机集合 <span class="token parameter variable">-m</span> <span class="token function">file</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;path=/tmp/dir owner=anon group=anon mode=777&quot;</span>
<span class="token comment"># 删除文件/目录 absent 删除</span>
ansible 主机集合 <span class="token parameter variable">-m</span> <span class="token function">file</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;path=/tmp/文件目录名 state=absent&quot;</span>
<span class="token comment"># 创建软链接 src源文件 path链接地址 link创建软链接 hard创建硬链接</span>
ansible 主机集合 <span class="token parameter variable">-m</span> <span class="token function">file</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;src=/etc/hosts path=/tmp/hosts state=link&quot;</span>

<span class="token comment"># 使用copy模块 src主机文件 dest目标主机目录(加文件名为改名)</span>
<span class="token comment"># 复制文件</span>
ansible 主机集合 <span class="token parameter variable">-m</span> copy <span class="token parameter variable">-a</span> <span class="token string">&quot;src=/主机文件 dest=/目标主机位置/&quot;</span>
<span class="token comment"># 如果目标主机存在先备份</span>
ansible 主机集合 <span class="token parameter variable">-m</span> copy <span class="token parameter variable">-a</span> <span class="token string">&quot;src=/主机文件 dest=/tmp/ backup=yes&quot;</span>
<span class="token comment"># 写入内容并拷贝</span>
ansible 主机集合 <span class="token parameter variable">-m</span> copy <span class="token parameter variable">-a</span> <span class="token string">&quot;content=&#39;hello&#39; desc=/tmp/abc.txt&quot;</span>

<span class="token comment"># 使用fetch模块 将远程文件拷贝到本地</span>
ansible 主机集合 <span class="token parameter variable">-m</span> fetch <span class="token parameter variable">-a</span> <span class="token string">&quot;src=/tmp/abc.txt dest=/tmp/&quot;</span>

<span class="token comment"># 使用lineinfile模块 修改单个文件的单行内容</span>
<span class="token comment"># 在文件中添加一行内容(默认添加到最后)</span>
ansible 主机集合 <span class="token parameter variable">-m</span> lineinfile <span class="token parameter variable">-a</span> <span class="token string">&quot;path=/tmp/text line=&#39;hello&#39;&quot;</span>
<span class="token comment"># 在文件test行后添加内容</span>
ansible 主机集合 <span class="token parameter variable">-m</span> lineinfile <span class="token parameter variable">-a</span> <span class="token string">&quot;path=/tmp/text line=&#39;hello&#39; insertafter=&#39;test&#39;&quot;</span>
<span class="token comment"># 替换文件中的hello为nihao</span>
ansible 主机集合 <span class="token parameter variable">-m</span> lineinfile <span class="token parameter variable">-a</span> <span class="token string">&quot;path=/tmp/text regexp=&#39;hello&#39; replase=&#39;nihao&#39;&quot;</span>

<span class="token comment"># 使用systemd管理模块</span>
<span class="token comment"># 启动服务</span>
ansible hosts <span class="token parameter variable">-m</span> systemd <span class="token parameter variable">-a</span> <span class="token string">&quot;name=nginx state=started&quot;</span>
<span class="token comment"># 关闭服务</span>
ansible hosts <span class="token parameter variable">-m</span> systemd <span class="token parameter variable">-a</span> <span class="token string">&quot;name=nginx state=stopped&quot;</span>
<span class="token comment"># 重新加载配置文件</span>
ansible hosts <span class="token parameter variable">-m</span> systemd <span class="token parameter variable">-a</span> <span class="token string">&quot;name=nginx state=reloaded&quot;</span>
<span class="token comment"># 重启服务</span>
ansible hosts <span class="token parameter variable">-m</span> systemd <span class="token parameter variable">-a</span> <span class="token string">&quot;name=nginx state=restarted&quot;</span>

<span class="token comment"># 使用yum模块</span>
<span class="token comment"># yum安装软件</span>
ansible hosts <span class="token parameter variable">-m</span> yum <span class="token parameter variable">-a</span> <span class="token string">&quot;name=nginx state=installed&quot;</span>
<span class="token comment"># yum卸载软件</span>
ansible hosts <span class="token parameter variable">-m</span> yum <span class="token parameter variable">-a</span> <span class="token string">&quot;name=nginx state=removed&quot;</span>
<span class="token comment"># yum更新软件</span>
ansible hosts <span class="token parameter variable">-m</span> yum <span class="token parameter variable">-a</span> <span class="token string">&quot;name=nginx state=lastest&quot;</span>

<span class="token comment"># 使用git_url模块</span>
ansible hosts <span class="token parameter variable">-m</span> git_url <span class="token parameter variable">-a</span> <span class="token string">&quot;url=&#39;https://mirros.aliyun.com&#39; dest=/tmp/tools/&quot;</span>

<span class="token comment"># 使用mount模块(一般挂载nfs)</span>
<span class="token comment"># 挂载</span>
ansible hosts <span class="token parameter variable">-m</span> <span class="token function">mount</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;fstype=nfs src=192.168.1.1:/wwwdata path=/mnt state=mountd&quot;</span>
<span class="token comment"># 卸载不修改fstab</span>
ansible hosts <span class="token parameter variable">-m</span> <span class="token function">mount</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;fstype=nfs src=192.168.1.1:/wwwdata path=/mnt state=umountd&quot;</span>
<span class="token comment"># 卸载修改fstab</span>
ansible hosts <span class="token parameter variable">-m</span> <span class="token function">mount</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;fstype=nfs src=192.168.1.1:/wwwdata path=/mnt state=absent&quot;</span>

<span class="token comment"># 使用cron模块</span>
<span class="token comment"># 添加定时任务</span>
ansible hosts <span class="token parameter variable">-m</span> <span class="token function">cron</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;name=test state=present minute=&#39;*/2&#39; job=&#39;/bin/ntpdate ntp1.aliyun.com &amp;&gt;/dev/null&#39;&quot;</span>
<span class="token comment"># 删除定时任务</span>
ansible hosts <span class="token parameter variable">-m</span> <span class="token function">cron</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;name=test state=absent&quot;</span>
<span class="token comment"># 注释不删除定时任务 disable=no为取消注释</span>
ansible hosts <span class="token parameter variable">-m</span> <span class="token function">cron</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;name=test minute=&#39;*/2&#39; job=&#39;/bin/ntpdate ntp1.aliyun.com &amp;&gt;/dev/null state=present disable=yes&quot;</span>

<span class="token comment"># 使用group模块 state=absent为删除组</span>
ansible hosts <span class="token parameter variable">-m</span> group <span class="token parameter variable">-a</span> <span class="token string">&quot;name=www gid=2000 state=present&quot;</span>

<span class="token comment"># 使用user模块</span>
ansible hosts <span class="token parameter variable">-m</span> user <span class="token parameter variable">-a</span> <span class="token string">&quot;name=www uid=1999 group=www shell=/bin/bash create_home=yes state=present&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="ansible-doc命令" tabindex="-1"><a class="header-anchor" href="#ansible-doc命令" aria-hidden="true">#</a> Ansible-doc命令</h4></li></ul><p><code>ansible-doc</code> 是查看 <code>Ansible</code> 模块说明命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出所有模块</span>
ansible-doc <span class="token parameter variable">-l</span>

<span class="token comment"># 查看模块帮助 -为可选项 =为强制选项</span>
ansible-doc yum
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ansible-playbook剧本详解" tabindex="-1"><a class="header-anchor" href="#ansible-playbook剧本详解" aria-hidden="true">#</a> Ansible Playbook剧本详解</h3>`,9),q={id:"语法格式yaml",tabindex:"-1"},w=s("a",{class:"header-anchor",href:"#语法格式yaml","aria-hidden":"true"},"#",-1),A=s("ul",null,[s("li",null,"hosts(主机)"),s("li",null,"tasks(任务)"),s("li",null,"variables(变量)"),s("li",null,"roles(角色)")],-1),E=s("li",null,[s("h4",{id:"变量",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#变量","aria-hidden":"true"},"#"),n(" 变量")])],-1),B=l(`<h5 id="剧本变量" tabindex="-1"><a class="header-anchor" href="#剧本变量" aria-hidden="true">#</a> 剧本变量</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>---
<span class="token comment"># 主机集合</span>
- hosts: db
  vars:
    file: /etc/hostname
  tasks:
    - name: <span class="token builtin class-name">test</span>
      <span class="token comment"># 如果变量开头要加引号</span>
      shell: <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token function">file</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="文件变量" tabindex="-1"><a class="header-anchor" href="#文件变量" aria-hidden="true">#</a> 文件变量</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># /tmp/vars_file.yml</span>
file: /etc/hostname
node: /etc/hosts

<span class="token comment"># 剧本调用</span>
---
- hosts: all
  vars_files: /tmp/vars_file.yml
  tasks:
    - name: <span class="token builtin class-name">test</span>
      shell: <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token function">node</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="分组变量" tabindex="-1"><a class="header-anchor" href="#分组变量" aria-hidden="true">#</a> 分组变量</h5><p>在Ansible目录下创建目录 自动识别各分组变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建目录格式 目录名为主机集合分组</span>
group_vars/
├── db
│   └── vars.yml
├── nfs
│   └── vars.yml
├── systemd
│   └── vars.yml
└── web
    └── vars.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="facts变量-内置变量" tabindex="-1"><a class="header-anchor" href="#facts变量-内置变量" aria-hidden="true">#</a> facts变量 内置变量</h5><p>Ansible运行剧本时系统收集服务器信息变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看ansible facts变量内容</span>
ansible <span class="token parameter variable">-i</span> hosts all <span class="token parameter variable">-m</span> setup

<span class="token comment"># 常用fact变量</span>
<span class="token comment"># 主机名</span>
ansible_hostname
<span class="token comment"># 内存大小 MB</span>
ansible_memtotal_mb
<span class="token comment"># cpu数量</span>
ansible_processor_vcpus
<span class="token comment"># 默认网卡ip</span>
ansible_default_ipv4.assress
<span class="token comment"># linux发行版本</span>
ansible_distribution
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="语法实例" tabindex="-1"><a class="header-anchor" href="#语法实例" aria-hidden="true">#</a> 语法实例</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>---
<span class="token comment"># 主机集合</span>
- hosts: all,test1
  <span class="token comment"># 任务(可以为多个)</span>
  tasks:
    <span class="token comment"># 任务名</span>
    - name: tasks name
    <span class="token comment"># 调用模块</span>
    ping: 
    <span class="token comment"># 任务名</span>
    -name: task name
    <span class="token comment"># 调用模块及命令</span>
    shell: <span class="token function">touch</span> /tmp/abc.txt
- hosts: test2
  tasks: 
    -name: tasks name
    shell: <span class="token function">touch</span> /tmp/intex.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="剧本命令" tabindex="-1"><a class="header-anchor" href="#剧本命令" aria-hidden="true">#</a> 剧本命令</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 运行剧本</span>
ansible-playbook test.yml
<span class="token comment"># 指定主机集合</span>
ansible-playbook <span class="token parameter variable">-i</span> hosts test.yml
<span class="token comment"># 检查语法</span>
ansible-playbook test.yml <span class="token parameter variable">-C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function C(M,N){const e=i("ExternalLinkIcon"),t=i("RouterLink");return c(),d("div",null,[m,s("p",null,[s("a",v,[n("Ansible官方文档"),a(e)])]),u,s("p",null,[n("需要安装"),b,n("源, 参考"),s("a",k,[n("阿里云epel源"),a(e)])]),h,s("p",null,[g,n(" 导出服务器信息为json"),f,y,n(" 命令集"),s("a",x,[n("51CTO"),a(e)])]),_,s("ul",null,[s("li",null,[s("h4",q,[w,n(" 语法格式"),a(t,{to:"/html/docs/linux/system/doubt.html#yaml%E6%A0%BC%E5%BC%8F"},{default:o(()=>[n("YAML")]),_:1})]),A]),E]),B])}const O=r(p,[["render",C],["__file","ansible.html.vue"]]);export{O as default};

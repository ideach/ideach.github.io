import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},l=e(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h2 id="docker命令" tabindex="-1"><a class="header-anchor" href="#docker命令" aria-hidden="true">#</a> Docker命令</h2><h3 id="帮助命令" tabindex="-1"><a class="header-anchor" href="#帮助命令" aria-hidden="true">#</a> 帮助命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看docker概要信息</span>
<span class="token function">docker</span> info

<span class="token comment"># 查看docker帮助文档</span>
<span class="token function">docker</span> <span class="token parameter variable">--help</span>

<span class="token comment"># 查看docker命令文档</span>
<span class="token function">docker</span> 命令 <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="镜像命令" tabindex="-1"><a class="header-anchor" href="#镜像命令" aria-hidden="true">#</a> 镜像命令</h3><p><code>Images</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出本地主机镜像</span>
<span class="token function">docker</span> images
    <span class="token parameter variable">-a</span> <span class="token builtin class-name">:</span> 列出所有docker镜像
    <span class="token parameter variable">-q</span> <span class="token builtin class-name">:</span> 只展示镜像ID

<span class="token comment"># 搜索本机镜像(如果没有搜索仓库镜像)</span>
<span class="token function">docker</span> search 镜像名字
    <span class="token parameter variable">--limit</span> <span class="token number">5</span> <span class="token builtin class-name">:</span> 显示前5个

<span class="token comment"># 拉取镜像</span>
<span class="token function">docker</span> pull 镜像名字:TAG版本<span class="token punctuation">(</span>默认最新<span class="token punctuation">)</span>

<span class="token comment"># 查看镜像/容器/数据卷所占空间</span>
<span class="token function">docker</span> system <span class="token function">df</span>

<span class="token comment"># 删除镜像</span>
<span class="token function">docker</span> rmi 镜像ID/镜像名称:版本号
    <span class="token parameter variable">-f</span> <span class="token builtin class-name">:</span> 强制删除
    <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token parameter variable">-qa</span><span class="token variable">)</span></span> <span class="token builtin class-name">:</span> 删除所有

<span class="token comment"># 更改镜像名并复制一份</span>
<span class="token function">docker</span> tag 原镜像名:版本 新镜像名:版本

<span class="token comment"># 删除无用镜像</span>
<span class="token function">docker</span> image prune
    <span class="token parameter variable">-a</span> <span class="token builtin class-name">:</span> 删除所有无用镜像
    <span class="token parameter variable">-f</span> <span class="token builtin class-name">:</span> 强制删除
    
虚悬镜像 <span class="token builtin class-name">:</span> 仓库名,标签都是none
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器命令" tabindex="-1"><a class="header-anchor" href="#容器命令" aria-hidden="true">#</a> 容器命令</h3><p><code>Container</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 新建以及启动容器</span>
<span class="token function">docker</span> run 参数 镜像名称 命令 其他
    参数
        <span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">&quot;容器新名字&quot;</span> <span class="token builtin class-name">:</span> 指定名称
        <span class="token parameter variable">-d</span> <span class="token builtin class-name">:</span> 后台运行容器
        <span class="token parameter variable">-i</span> <span class="token builtin class-name">:</span> 交互模式运行<span class="token punctuation">(</span>与-t使用<span class="token punctuation">)</span>
        <span class="token parameter variable">-t</span> <span class="token builtin class-name">:</span> 重新分配终端
        <span class="token parameter variable">-p</span> <span class="token builtin class-name">:</span> 指定映射端口
        <span class="token parameter variable">-P</span> <span class="token builtin class-name">:</span> 随机映射端口 
        <span class="token parameter variable">-v</span> <span class="token builtin class-name">:</span> 容器数据卷
    镜像名称:版本号
    命令
        /bin/bash <span class="token builtin class-name">:</span> shell版本

<span class="token comment"># 列出所有运行的容器</span>
<span class="token function">docker</span> <span class="token function">ps</span>
    <span class="token parameter variable">-a</span> <span class="token builtin class-name">:</span> 显示所有容器
    <span class="token parameter variable">-l</span> <span class="token builtin class-name">:</span> 显示最近创建的容器
    <span class="token parameter variable">-n</span> <span class="token builtin class-name">:</span> 显示当前运行的容器
    <span class="token parameter variable">-q</span> <span class="token builtin class-name">:</span> 只显示容器ID

<span class="token comment"># 启动容器</span>
<span class="token function">docker</span> start

<span class="token comment"># 重启容器</span>
<span class="token function">docker</span> restart

<span class="token comment"># 停止容器</span>
<span class="token function">docker</span> stop

<span class="token comment"># 暂停容器</span>
<span class="token function">docker</span> pause 容器名

<span class="token comment"># 恢复暂停的容器</span>
<span class="token function">docker</span> unpause 容器名

<span class="token comment"># 强制停止容器</span>
<span class="token function">docker</span> <span class="token function">kill</span>

<span class="token comment"># 清除所有停止的容器</span>
<span class="token function">docker</span> container prune

<span class="token comment"># 删除已经停止的容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> 命令 容器id
    <span class="token parameter variable">-f</span> <span class="token builtin class-name">:</span> 强制删除
    <span class="token parameter variable">-l</span> <span class="token builtin class-name">:</span> 删除容器的连接
    <span class="token parameter variable">-v</span> <span class="token builtin class-name">:</span> 删除容器挂载的数据卷

<span class="token comment"># 查看容器日志</span>
<span class="token function">docker</span> logs 容器id

<span class="token comment"># 查看容器内运行的进程</span>
<span class="token function">docker</span> <span class="token function">top</span> 容器id

<span class="token comment"># 容器内部细节</span>
<span class="token function">docker</span> inspect 容器id

<span class="token comment"># 查看容器端口映射</span>
<span class="token function">docker</span> port 容器id

<span class="token comment"># 重新进入容器(exit不会停止容器)</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器id 命令

<span class="token comment"># 重新进入容器(exit会停止)</span>
<span class="token function">docker</span> attach 容器id 命令

<span class="token comment"># 拷贝文件到主机</span>
<span class="token function">docker</span> <span class="token function">cp</span> 容器ID:容器内路径 要拷贝到主机的路径

<span class="token comment"># 导出容器镜像到主机目录</span>
<span class="token function">docker</span> <span class="token builtin class-name">export</span> 容器ID <span class="token operator">&gt;</span> 文件名

<span class="token comment"># 导入镜像到docker</span>
<span class="token function">cat</span> 镜像.tar <span class="token operator">|</span> <span class="token function">docker</span> <span class="token function">import</span> - 镜像用户/镜像名:镜像版本号

<span class="token comment"># 提交镜像</span>
<span class="token function">docker</span> commit <span class="token parameter variable">-m</span><span class="token operator">=</span><span class="token string">&quot;描述信息&quot;</span> <span class="token parameter variable">-a</span><span class="token operator">=</span><span class="token string">&quot;作者&quot;</span> 容器ID 创建的镜像名:版本号

<span class="token comment"># 容器内操作</span>
    <span class="token builtin class-name">exit</span> <span class="token builtin class-name">:</span> 退出容器<span class="token punctuation">(</span>停止<span class="token punctuation">)</span>
    ctrl+p+q <span class="token builtin class-name">:</span> 退出容器<span class="token punctuation">(</span>不停止<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="网络详解" tabindex="-1"><a class="header-anchor" href="#网络详解" aria-hidden="true">#</a> 网络详解</h3><ul><li><h4 id="网络模式" tabindex="-1"><a class="header-anchor" href="#网络模式" aria-hidden="true">#</a> 网络模式</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 虚拟网桥,每一个容器连接到docker0(默认)</span>
bridge

<span class="token comment"># 使用苏主机的ip和端口</span>
<span class="token function">host</span>

<span class="token comment"># 容器有独立的network namespace</span>
none
<span class="token comment"># 新创建的容器和指定容器恭喜那个ip</span>
container
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看docker网络模式命令</span>
<span class="token function">docker</span> network <span class="token function">ls</span>

<span class="token comment"># 创建新的网络连接</span>
<span class="token function">docker</span> network create 网络名

<span class="token comment"># 删除网络连接</span>
<span class="token function">docker</span> network <span class="token function">rm</span> 网络名

<span class="token comment"># 查看网络连接信息</span>
<span class="token function">docker</span> network inspect 网络名

<span class="token comment"># 设置容器网络模式</span>
<span class="token function">docker</span> run <span class="token parameter variable">--network</span> 网络名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据卷" tabindex="-1"><a class="header-anchor" href="#数据卷" aria-hidden="true">#</a> 数据卷</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 映射数据卷</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-v</span> /宿主机绝对路径:/容器内路径:rw/ro <span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">&#39;镜像名&#39;</span> 镜像ID/镜像名

<span class="token comment"># 容器卷继承</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true --volumes-from 父类 <span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">&#39;镜像名&#39;</span> 镜像ID/镜像名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="容器构建" tabindex="-1"><a class="header-anchor" href="#容器构建" aria-hidden="true">#</a> 容器构建</h2><h3 id="dockerfile实例" tabindex="-1"><a class="header-anchor" href="#dockerfile实例" aria-hidden="true">#</a> Dockerfile实例</h3><ul><li>文件名为 <code>Dockerfile</code></li></ul><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># 基于哪个镜像:版本</span>
<span class="token instruction"><span class="token keyword">FROM</span> centos:7.9 </span>

<span class="token comment"># 为镜像指定标签可以多个(换行用\\)</span>
<span class="token instruction"><span class="token keyword">LABEL</span> cc.anon.name=<span class="token string">&quot;anon&quot;</span> <span class="token operator">\\</span>
cc.anon.data=<span class="token string">&quot;20111111&quot;</span> </span>

<span class="token comment"># 配置工作目录</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /usr/local</span>

<span class="token comment"># 复制宿主机的demo.py到工作目录下的test.py</span>
<span class="token instruction"><span class="token keyword">ADD</span> /demo.py /test.py</span>
<span class="token comment"># 复制files文件夹下的所有文件到文件夹</span>
<span class="token instruction"><span class="token keyword">ADD</span> /files /usr/local/files</span>
<span class="token comment"># 下载文件至工作目录下的file文件夹</span>
<span class="token instruction"><span class="token keyword">ADD</span> https://anon.cc/demo.py /file/</span>
<span class="token comment"># 复制并解压文件到file文件夹里面</span>
<span class="token instruction"><span class="token keyword">ADD</span> file.gz.tar /file/</span>
<span class="token comment"># 同ADD用法一样(不能解压/只能复制本地路径)</span>
<span class="token instruction"><span class="token keyword">COPY</span> file /usr/local/file</span>

<span class="token comment"># 声明容器暴露端口</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 8080</span>

<span class="token comment"># 挂载匿名卷</span>
<span class="token instruction"><span class="token keyword">VOLUME</span> /var/log</span>

<span class="token comment"># 设置变量info</span>
<span class="token instruction"><span class="token keyword">ENV</span> info=<span class="token string">&quot;/usr/local&quot;</span></span>

<span class="token comment"># 运行命令(加-y) 构建时运行</span>
<span class="token instruction"><span class="token keyword">RUN</span> yum install vim -y</span>

<span class="token comment"># 可执行文件加参数 容器启动后运行</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;echo&quot;</span>,<span class="token string">&quot;$PATH&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="容器编排" tabindex="-1"><a class="header-anchor" href="#容器编排" aria-hidden="true">#</a> 容器编排</h2><h3 id="docker-compose实例" tabindex="-1"><a class="header-anchor" href="#docker-compose实例" aria-hidden="true">#</a> docker-compose实例</h3><ul><li>文件名为 <code>docker-compose.yml</code></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.9&quot;</span> <span class="token comment"># 配置版本号    </span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>      <span class="token comment"># 表示服务</span>
	<span class="token comment"># 服务名</span>
    <span class="token key atrule">rept</span><span class="token punctuation">:</span> 
		<span class="token comment"># 定义基础镜像    </span>
		<span class="token key atrule">image</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">:</span><span class="token number">22.04</span>    
		<span class="token comment"># 容器名</span>
		<span class="token key atrule">container_name</span><span class="token punctuation">:</span> rept_01   
		<span class="token comment"># 宿主机和容器映射端口 </span>
		<span class="token key atrule">ports</span><span class="token punctuation">:</span>    
		    <span class="token punctuation">-</span> <span class="token string">&quot;8080:8080&quot;</span>
		<span class="token comment"># 数据卷映射</span>
		<span class="token key atrule">volumes</span><span class="token punctuation">:</span>    
		    <span class="token punctuation">-</span> /data/log<span class="token punctuation">:</span>/usr/local/mysql/log
		<span class="token comment"># 自定义容器网络</span>
		<span class="token key atrule">networks</span><span class="token punctuation">:</span>    
		    <span class="token punctuation">-</span> anon_net
		<span class="token comment">#依赖的服务</span>
		<span class="token key atrule">depends_on</span><span class="token punctuation">:</span>    
		    <span class="token punctuation">-</span> redis
		    <span class="token punctuation">-</span> mysql
	<span class="token comment"># 服务名</span>
    <span class="token key atrule">redis</span><span class="token punctuation">:</span>   
		<span class="token comment"># 定义基础镜像   </span>
	    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>6.0.8
		<span class="token comment"># 宿主机和容器映射端口 </span>
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;6379:6379&quot;</span>
		<span class="token comment"># 数据卷映射</span>
        <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    	    <span class="token punctuation">-</span> /data/redis/log<span class="token punctuation">:</span>/etc/redis/redis.conf
		<span class="token comment"># 自定义容器网络</span>
    	<span class="token key atrule">networks</span><span class="token punctuation">:</span>
			<span class="token punctuation">-</span> anon_net
		<span class="token comment"># 容器启动后运行的命令</span>
        <span class="token key atrule">command</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>server /etc/redis/redis.conf   
    <span class="token comment"># 服务名</span>
    <span class="token key atrule">mysql</span><span class="token punctuation">:</span> 
		<span class="token comment"># 定义基础镜像      </span>
		<span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">5.7</span>
		<span class="token key atrule">environment</span><span class="token punctuation">:</span>
			<span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&#39;142857&#39;</span>
		<span class="token comment"># 宿主机和容器映射端口 </span>
		<span class="token key atrule">ports</span><span class="token punctuation">:</span>
			<span class="token punctuation">-</span> <span class="token string">&quot;3306:3306&quot;</span>
		<span class="token comment"># 数据卷映射</span>
		<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
			<span class="token punctuation">-</span> /data/mysql/log<span class="token punctuation">:</span>/var/lib/mysql
		<span class="token comment"># 自定义容器网络</span>
		<span class="token key atrule">networks</span><span class="token punctuation">:</span>
			<span class="token punctuation">-</span> anon_net
		<span class="token comment"># 容器启动后运行的命令</span>
		<span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>default<span class="token punctuation">-</span>authentication<span class="token punctuation">-</span>plugin=mysql<span class="token punctuation">-</span>native_password
				

<span class="token key atrule">networks</span><span class="token punctuation">:</span>   <span class="token comment"># 创建自定义网络</span>
		<span class="token key atrule">anon_net</span><span class="token punctuation">:</span>   <span class="token comment"># 自定义网络名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),c=[l];function t(p,o){return s(),a("div",null,c)}const r=n(i,[["render",t],["__file","docker.html.vue"]]);export{r as default};

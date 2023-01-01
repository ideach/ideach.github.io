import{_ as n,p as a,q as s,a1 as e}from"./framework-96b046e1.js";const i={},l=e(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h2 id="git初始设置" tabindex="-1"><a class="header-anchor" href="#git初始设置" aria-hidden="true">#</a> Git初始设置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置姓名 </span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;用户名&quot;</span>

<span class="token comment"># 设置邮箱 </span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;邮箱&quot;</span>

<span class="token comment"># 查看姓名</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name

<span class="token comment"># 查看邮箱</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git常用命令" tabindex="-1"><a class="header-anchor" href="#git常用命令" aria-hidden="true">#</a> Git常用命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化空的Git版本库</span>
<span class="token function">git</span> init

<span class="token comment"># 将文件放入暂存区</span>
<span class="token function">git</span> <span class="token function">add</span> 文件名/.<span class="token punctuation">(</span>.为工作区所有文件<span class="token punctuation">)</span>
    
<span class="token comment"># 查看暂存区/工作区状态</span>
<span class="token function">git</span> status
    
<span class="token comment"># 将暂存区文件提交至本地仓库</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;描述&quot;</span>

<span class="token comment"># 查看提交的日志</span>
<span class="token function">git</span> log
    <span class="token parameter variable">--all</span> <span class="token builtin class-name">:</span> 显示所有分支
    <span class="token parameter variable">--oneline</span> <span class="token builtin class-name">:</span> 将提交信息显示为一行
    <span class="token parameter variable">--graph</span> <span class="token builtin class-name">:</span> 以图形形式显示
        
<span class="token comment"># 查看已删除的记录</span>
<span class="token function">git</span> reflog
    
<span class="token comment"># 版本回退</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> commitID<span class="token punctuation">(</span>通过git log查看<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git分支命令" tabindex="-1"><a class="header-anchor" href="#git分支命令" aria-hidden="true">#</a> Git分支命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看分支</span>
<span class="token function">git</span> branch
    <span class="token parameter variable">-v</span> <span class="token builtin class-name">:</span> 分支信息

<span class="token comment"># 创建分支</span>
<span class="token function">git</span> branch 分支名
    <span class="token parameter variable">-d</span> <span class="token builtin class-name">:</span> 删除分支
    <span class="token parameter variable">-D</span> <span class="token builtin class-name">:</span> 强制删除
    <span class="token parameter variable">-m</span> <span class="token builtin class-name">:</span> 修改分支名

<span class="token comment"># 切换分支</span>
<span class="token function">git</span> chechout 分支名
    <span class="token parameter variable">-b</span> <span class="token builtin class-name">:</span> 不存在则创建

<span class="token comment"># 指定分支合并到当前分支</span>
<span class="token function">git</span> merge 分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git远程命令" tabindex="-1"><a class="header-anchor" href="#git远程命令" aria-hidden="true">#</a> Git远程命令</h2><ul><li><h3 id="拉取代码" tabindex="-1"><a class="header-anchor" href="#拉取代码" aria-hidden="true">#</a> 拉取代码</h3></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 拉取远程分支并与本地分支合并</span>
<span class="token function">git</span> pull 远程仓库 远程branch:本地branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h3 id="推送代码" tabindex="-1"><a class="header-anchor" href="#推送代码" aria-hidden="true">#</a> 推送代码</h3></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将本地分支版本上传到远程合并</span>
<span class="token function">git</span> push 远程仓库 本地branch:远程branch
    <span class="token parameter variable">-f</span> 强制上传
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h3 id="ssh公钥配置" tabindex="-1"><a class="header-anchor" href="#ssh公钥配置" aria-hidden="true">#</a> SSH公钥配置</h3></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 生成公钥</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> “邮箱地址”

<span class="token comment"># 查看公钥</span>
<span class="token function">cat</span> ~/.ssh/id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h3 id="设置忽略文件" tabindex="-1"><a class="header-anchor" href="#设置忽略文件" aria-hidden="true">#</a> 设置忽略文件</h3><ul><li>文件名为 <code>.gitignore</code></li><li>忽略文件内容不进行提交推送</li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 文件为通配符格式   </span>
*.txt
*.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),c=[l];function d(t,r){return a(),s("div",null,c)}const o=n(i,[["render",d],["__file","git.html.vue"]]);export{o as default};

import{_ as n,p as s,q as a,a1 as i}from"./framework-96b046e1.js";const e={},l=i(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h2 id="普通模式" tabindex="-1"><a class="header-anchor" href="#普通模式" aria-hidden="true">#</a> 普通模式</h2><ul><li>普通模式为进入 <code>vim</code> 默认模式</li><li>普通模式可以快速 <strong><code>选择</code></strong> <strong><code>修改</code></strong> <strong><code>删除</code></strong></li></ul><h3 id="光标定位" tabindex="-1"><a class="header-anchor" href="#光标定位" aria-hidden="true">#</a> 光标定位</h3><ul><li>键入后光标移动</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>w <span class="token builtin class-name">:</span> 下一个单词的开头

b <span class="token builtin class-name">:</span> 当前单词的开头

e <span class="token builtin class-name">:</span> 当前单词/下一个单词的结尾

ge <span class="token builtin class-name">:</span> 上一个单词的结尾

f* <span class="token builtin class-name">:</span> 移动到下一个*

F* <span class="token builtin class-name">:</span> 移动到上一个*

<span class="token punctuation">;</span> <span class="token builtin class-name">:</span> 重复f/F查找命令

, <span class="token builtin class-name">:</span> 反向重复f/F查找命令

<span class="token number">0</span> <span class="token builtin class-name">:</span> 到行首

^ <span class="token builtin class-name">:</span> 行首非空字符

$ <span class="token builtin class-name">:</span> 到行尾

gg <span class="token builtin class-name">:</span> 到第一行

G <span class="token builtin class-name">:</span> 到最后一行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文本操作" tabindex="-1"><a class="header-anchor" href="#文本操作" aria-hidden="true">#</a> 文本操作</h3><ul><li>键入后选择文本进行相关操作</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>d <span class="token builtin class-name">:</span> 删除模式
    <span class="token function">dd</span> <span class="token builtin class-name">:</span> 删除一行
    2dd <span class="token builtin class-name">:</span> 向下删除2行
    diw <span class="token builtin class-name">:</span> 删除单词
    daw <span class="token builtin class-name">:</span> 删除单词和空格

c <span class="token builtin class-name">:</span> 修改模式<span class="token punctuation">(</span>删除并插入<span class="token punctuation">)</span>
    ciw <span class="token builtin class-name">:</span> 删除单词
    caw <span class="token builtin class-name">:</span> 删除单词和空格

y <span class="token builtin class-name">:</span> 复制模式
    y <span class="token builtin class-name">:</span> 复制当前行

p <span class="token builtin class-name">:</span> 粘贴

u <span class="token builtin class-name">:</span> 撤销

<span class="token function">v</span> <span class="token builtin class-name">:</span> 可视模式 ctrl+v进入块可视模式
    i <span class="token builtin class-name">:</span> 选中内部<span class="token punctuation">(</span>分隔符内或者当前单词<span class="token punctuation">)</span>
    a <span class="token builtin class-name">:</span> 选中全部<span class="token punctuation">(</span>分隔符或者当前单词+后面空格<span class="token punctuation">)</span>
        b <span class="token builtin class-name">:</span> 圆括号
        B <span class="token builtin class-name">:</span> 花括号
        w <span class="token builtin class-name">:</span> 单词
        p <span class="token builtin class-name">:</span> 段落
    5gg <span class="token builtin class-name">:</span> 从光标到第5行

g <span class="token builtin class-name">:</span> 改变大小写
    ~ <span class="token builtin class-name">:</span> 光标下的字母改变大小写
    <span class="token number">3</span>~ <span class="token builtin class-name">:</span> 光标位置开始3个字母改变大小写
    g~ <span class="token builtin class-name">:</span> 改变当前行大小写
    guu <span class="token builtin class-name">:</span> 当前行变小写
    gUU <span class="token builtin class-name">:</span> 当前行变大些
    guaw <span class="token builtin class-name">:</span> 光标下的字母小写
    guaw <span class="token builtin class-name">:</span> 光标下的字母转小写

/ <span class="token builtin class-name">:</span> 查找
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指令模式" tabindex="-1"><a class="header-anchor" href="#指令模式" aria-hidden="true">#</a> 指令模式</h2><ul><li>输入 <code>:</code> 可进入<strong>指令模式</strong></li><li>按 <code>esc</code> 回到<a href="#%E6%99%AE%E9%80%9A%E6%A8%A1%E5%BC%8F">普通模式</a></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wq <span class="token builtin class-name">:</span> 保存并退出

q<span class="token operator">!</span> <span class="token builtin class-name">:</span> 强制退出

<span class="token builtin class-name">set</span> nu <span class="token builtin class-name">:</span> 显示行号

<span class="token builtin class-name">set</span> nonu <span class="token builtin class-name">:</span> 隐藏行号

noh <span class="token builtin class-name">:</span> 取消高亮
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编辑模式" tabindex="-1"><a class="header-anchor" href="#编辑模式" aria-hidden="true">#</a> 编辑模式</h2><ul><li><a href="#%E6%99%AE%E9%80%9A%E6%A8%A1%E5%BC%8F">普通模式</a> 进入<strong>编辑模式</strong></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>i <span class="token builtin class-name">:</span> 光标前插入

a <span class="token builtin class-name">:</span> 光标后插入

o <span class="token builtin class-name">:</span> 下一行插入
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编辑场景" tabindex="-1"><a class="header-anchor" href="#编辑场景" aria-hidden="true">#</a> 编辑场景</h2><ul><li>在多行同时插入文字</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入块选择模式</span>
Ctrl + <span class="token function">v</span>

<span class="token comment"># H J K L 选择相应块后进行插入</span>
Ctrl + i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),c=[l];function d(u,t){return s(),a("div",null,c)}const r=n(e,[["render",d],["__file","vim.html.vue"]]);export{r as default};

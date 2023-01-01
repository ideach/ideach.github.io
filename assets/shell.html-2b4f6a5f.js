import{_ as s,p as n,q as a,a1 as e}from"./framework-96b046e1.js";const l={},i=e(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h2 id="shell基础" tabindex="-1"><a class="header-anchor" href="#shell基础" aria-hidden="true">#</a> Shell基础</h2><h3 id="查看shell" tabindex="-1"><a class="header-anchor" href="#查看shell" aria-hidden="true">#</a> 查看Shell</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看当前系统所有shell</span>
<span class="token function">cat</span> /etc/shells

<span class="token comment"># 查看当前使用的shell</span>
<span class="token builtin class-name">echo</span> <span class="token environment constant">$SHELL</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定时任务" tabindex="-1"><a class="header-anchor" href="#定时任务" aria-hidden="true">#</a> 定时任务</h3><h4 id="定时命令" tabindex="-1"><a class="header-anchor" href="#定时命令" aria-hidden="true">#</a> 定时命令</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 编辑定时任务</span>
<span class="token function">crontab</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 查看定时任务</span>
<span class="token function">crontab</span> <span class="token parameter variable">-l</span>

<span class="token comment"># 指定用户</span>
<span class="token function">crontab</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-e</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="任务格式" tabindex="-1"><a class="header-anchor" href="#任务格式" aria-hidden="true">#</a> 任务格式</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#分钟 小时 天 月 周 命令</span>
* * * * * <span class="token function">sh</span> /tmp/test.sh

<span class="token comment"># 每月 每天 每小时 每分钟执行一次命令</span>
* * * * * <span class="token function">sh</span> /tmp/test.sh

<span class="token comment"># 每月 每天 每个 30分钟执行一次命令</span>
*/30 * * * * <span class="token function">sh</span> /tmp/test.sh

<span class="token comment"># 每月 每天 凌晨3.00执行一次命令</span>
<span class="token number">0</span> <span class="token number">3</span> * * * <span class="token function">sh</span> /tmp/test.sh

<span class="token comment"># 每月 15日 30日 凌晨3.00执行一次命令</span>
<span class="token number">0</span> <span class="token number">3</span> <span class="token number">15,30</span> * * <span class="token function">sh</span> /tmp/test.sh

<span class="token comment"># 每月 周三 周日 凌晨3.30执行一次命令</span>
<span class="token number">30</span> <span class="token number">3</span> * * <span class="token number">3,0</span> <span class="token function">sh</span> /tmp/test.sh

<span class="token comment"># 输出日志到指定文件 2&gt;&amp;1表示错误日志和标准日志一样输出</span>
*/30 * * * * <span class="token function">sh</span> /tmp/test.sh <span class="token operator">&gt;&gt;</span> /tmp/test.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="开启日志" tabindex="-1"><a class="header-anchor" href="#开启日志" aria-hidden="true">#</a> 开启日志</h4><h2 id="shell脚本" tabindex="-1"><a class="header-anchor" href="#shell脚本" aria-hidden="true">#</a> Shell脚本</h2><h3 id="shell变量" tabindex="-1"><a class="header-anchor" href="#shell变量" aria-hidden="true">#</a> Shell变量</h3><ul><li><h4 id="命名规则" tabindex="-1"><a class="header-anchor" href="#命名规则" aria-hidden="true">#</a> 命名规则</h4><ul><li>命名只能使用英文字母，数字和下划线，首个字符不能以数字开头</li><li>中间不能有空格，可以使用下划线_</li><li>不能使用标点符号</li><li>不能使用bash里的关键字（可用help命令查看保留关键字）</li><li><h5 id="变量实例" tabindex="-1"><a class="header-anchor" href="#变量实例" aria-hidden="true">#</a> 变量实例</h5></li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 单行注释</span>

:<span class="token operator">&lt;&lt;</span><span class="token string">EOF
多行注释...
多行注释...
多行注释...
EOF</span>

<span class="token comment"># 定义变量</span>
<span class="token assign-left variable">test</span><span class="token operator">=</span><span class="token string">&quot;hello,world!&quot;</span>

<span class="token comment"># 使用变量</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$test</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${test}</span>

<span class="token comment"># 只读变量</span>
<span class="token builtin class-name">readonly</span> anon

<span class="token comment"># 删除变量</span>
<span class="token builtin class-name">unset</span> anon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h4><ul><li><code>&quot;&quot;</code> (双引号)里可以有变量和转义字符</li><li><code>&#39;&#39;</code> (单引号)里的任何字符都会原样输出</li><li><h5 id="字符串实例" tabindex="-1"><a class="header-anchor" href="#字符串实例" aria-hidden="true">#</a> 字符串实例</h5></li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 定义字符串</span>
<span class="token assign-left variable">test</span><span class="token operator">=</span><span class="token string">&quot;hello&quot;</span>

<span class="token comment"># 双引号拼接</span>
<span class="token assign-left variable">hello1</span><span class="token operator">=</span><span class="token string">&quot;hello, &quot;</span><span class="token variable">\${test}</span><span class="token string">&quot;&quot;</span>
<span class="token comment"># 单引号拼接</span>
<span class="token assign-left variable">hello2</span><span class="token operator">=</span><span class="token string">&#39;hello, &#39;</span><span class="token variable">$test</span><span class="token string">&#39;&#39;</span>

<span class="token comment"># 获取字符串长度</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">#</span>test}</span>   <span class="token comment">#输出5</span>

<span class="token comment"># 提取字字符串</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${test<span class="token operator">:</span>1<span class="token operator">:</span>3}</span>    <span class="token comment">#输出ell</span>

<span class="token comment"># 查找子字符串</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> index <span class="token string">&quot;<span class="token variable">$test</span>&quot;</span> l<span class="token variable">\`</span></span> <span class="token comment">#输出2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h4><ul><li><code>bash</code> 支持一维数组</li><li>数组元素的下标由 <code>0</code> 开始</li><li><h5 id="数组实例" tabindex="-1"><a class="header-anchor" href="#数组实例" aria-hidden="true">#</a> 数组实例</h5></li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 定义数组</span>
<span class="token assign-left variable">test</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1,2</span>,3,4<span class="token punctuation">)</span>

<span class="token comment"># 读取数组单个元素</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${test<span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span> <span class="token comment">#输出1</span>
<span class="token comment"># 读取数组所有元素</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${test<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span> <span class="token comment">#输出1,2,3,4</span>

<span class="token comment"># 获取数组元素的个数</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">#</span>test<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>    <span class="token comment">#输出4</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">#</span>test<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>    <span class="token comment">#输出4</span>
<span class="token comment"># 获取数组单个元素的长度</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">#</span>test<span class="token punctuation">[</span>n<span class="token punctuation">]</span>}</span>    <span class="token comment">#输出1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shell参数传递" tabindex="-1"><a class="header-anchor" href="#shell参数传递" aria-hidden="true">#</a> Shell参数传递</h3><ul><li><h4 id="参数处理" tabindex="-1"><a class="header-anchor" href="#参数处理" aria-hidden="true">#</a> 参数处理</h4></li></ul><table><thead><tr><th style="text-align:left;">特殊字符</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>$0</code></td><td style="text-align:left;">执行的文件名</td></tr><tr><td style="text-align:left;"><code>$n</code></td><td style="text-align:left;">第n个参数</td></tr><tr><td style="text-align:left;"><code>$#</code></td><td style="text-align:left;">传递到脚本的参数个数</td></tr><tr><td style="text-align:left;"><code>$*</code></td><td style="text-align:left;">以一个单字符串显示所有向脚本传递的参数</td></tr><tr><td style="text-align:left;"><code>$$</code></td><td style="text-align:left;">脚本运行的当前进程ID号</td></tr><tr><td style="text-align:left;"><code>$!</code></td><td style="text-align:left;">后台运行的最后一个进程的ID号</td></tr><tr><td style="text-align:left;"><code>$@</code></td><td style="text-align:left;">与<code>$*</code>相同，但是使用时加引号，并在引号中返回每个参数。</td></tr><tr><td style="text-align:left;"><code>$-</code></td><td style="text-align:left;">显示Shell使用的当前选项，与<code>set</code>s命令功能相同</td></tr><tr><td style="text-align:left;"><code>$?</code></td><td style="text-align:left;">显示最后命令的退出状态。0表示没有错误，其他任何值表明有错误</td></tr></tbody></table><ul><li><h4 id="参数实例" tabindex="-1"><a class="header-anchor" href="#参数实例" aria-hidden="true">#</a> 参数实例</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 执行的文件名</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$0</span>&quot;</span>
<span class="token comment"># 第一个参数</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>
<span class="token comment"># 第二个参数</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$2</span>&quot;</span>

<span class="token comment"># 参数的个数</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$#</span>&quot;</span>
<span class="token comment"># 所有参数</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$*</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shell运算符" tabindex="-1"><a class="header-anchor" href="#shell运算符" aria-hidden="true">#</a> Shell运算符</h3><ul><li><h4 id="shell支持多种运算符" tabindex="-1"><a class="header-anchor" href="#shell支持多种运算符" aria-hidden="true">#</a> Shell支持多种运算符</h4><ul><li>算数运算符</li><li>关系运算符</li><li>布尔运算符</li><li>字符串运算符</li><li>文件测试运算符</li></ul></li><li><h4 id="算数运算符" tabindex="-1"><a class="header-anchor" href="#算数运算符" aria-hidden="true">#</a> 算数运算符</h4></li></ul><p><code>expr</code> 是一款表达式计算工具，使用它能完成表达式的求值操作。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 定义变量</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">5</span>

<span class="token comment"># 计算 a+b</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $a + $b<span class="token variable">\`</span></span> <span class="token comment">#返回15</span>

<span class="token comment"># 计算 a*b</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $a <span class="token punctuation">\\</span>* $b<span class="token variable">\`</span></span> <span class="token comment">#返回15</span>

<span class="token comment"># 比较 a是否等于b</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $a <span class="token operator">!=</span> $b<span class="token variable">\`</span></span> <span class="token comment">#返回1为true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shell流程控制" tabindex="-1"><a class="header-anchor" href="#shell流程控制" aria-hidden="true">#</a> Shell流程控制</h3><ul><li><h4 id="if-else判断" tabindex="-1"><a class="header-anchor" href="#if-else判断" aria-hidden="true">#</a> IF Else判断</h4><ul><li><code>if</code> 开头 <code>fi</code> 结尾</li><li>流程控制不能为空</li><li><h5 id="if-else-实例" tabindex="-1"><a class="header-anchor" href="#if-else-实例" aria-hidden="true">#</a> IF Else 实例</h5></li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">20</span>
<span class="token comment"># []写法</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token operator">==</span> <span class="token variable">$b</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;a 等于 b&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token parameter variable">-gt</span> <span class="token variable">$b</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;a 大于 b&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token parameter variable">-lt</span> <span class="token variable">$b</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;a 小于 b&quot;</span>
<span class="token keyword">else</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;没有符合的条件&quot;</span>
<span class="token keyword">fi</span>

<span class="token comment"># (())写法</span>
<span class="token keyword">if</span> <span class="token variable"><span class="token punctuation">((</span> $a <span class="token operator">==</span> $b <span class="token punctuation">))</span></span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;a 等于 b&quot;</span>
<span class="token keyword">elif</span> <span class="token variable"><span class="token punctuation">((</span> $a <span class="token operator">&gt;</span> $b <span class="token punctuation">))</span></span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;a 大于 b&quot;</span>
<span class="token keyword">elif</span> <span class="token variable"><span class="token punctuation">((</span> $a <span class="token operator">&lt;</span> $b <span class="token punctuation">))</span></span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;a 小于 b&quot;</span>
<span class="token keyword">else</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;没有符合的条件&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="for循环" tabindex="-1"><a class="header-anchor" href="#for循环" aria-hidden="true">#</a> for循环</h4><ul><li><code>in</code> 列表可以包含数字、字符串、文件名</li><li><h5 id="for循环实例" tabindex="-1"><a class="header-anchor" href="#for循环实例" aria-hidden="true">#</a> For循环实例</h5></li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 循环输出列表中的数字</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">loop</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;The value is: <span class="token variable">$loop</span>&quot;</span>
<span class="token keyword">done</span>
<span class="token comment"># 输出内容</span>
The value is: <span class="token number">1</span>
The value is: <span class="token number">2</span>
The value is: <span class="token number">3</span>

<span class="token comment"># 顺序输出字符串中的字符</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">str</span> <span class="token keyword">in</span> I LOVE YOU
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$str</span>
<span class="token keyword">done</span>
<span class="token comment"># 输出内容</span>
I
LOVE
YOU
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="while循环" tabindex="-1"><a class="header-anchor" href="#while循环" aria-hidden="true">#</a> While循环</h4><ul><li>条件为 <code>true</code> 时循环</li><li>一般用于从输入文件中读取数据</li><li><h5 id="while循环实例" tabindex="-1"><a class="header-anchor" href="#while循环实例" aria-hidden="true">#</a> While循环实例</h5></li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 循环打印int</span>
<span class="token assign-left variable">int</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span><span class="token variable"><span class="token punctuation">((</span> $int<span class="token operator">&lt;=</span><span class="token number">5</span> <span class="token punctuation">))</span></span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$int</span>
    <span class="token builtin class-name">let</span> <span class="token string">&quot;int++&quot;</span>
<span class="token keyword">done</span>

<span class="token comment"># 无限循环</span>
<span class="token keyword">while</span> true<span class="token punctuation">(</span>可选<span class="token punctuation">)</span>:
<span class="token keyword">do</span>
    <span class="token builtin class-name">command</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="until循环" tabindex="-1"><a class="header-anchor" href="#until循环" aria-hidden="true">#</a> Until循环</h4><ul><li>条件为 <code>true</code> 时停止</li><li>和 <code>while</code> 相反</li><li><h5 id="until循环实例" tabindex="-1"><a class="header-anchor" href="#until循环实例" aria-hidden="true">#</a> Until循环实例</h5></li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 判断a是否小于10否则一直输出</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">until</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token variable">$a</span> <span class="token parameter variable">-lt</span> <span class="token number">10</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
   <span class="token builtin class-name">echo</span> <span class="token variable">$a</span>
   <span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $a + <span class="token number">1</span><span class="token variable">\`</span></span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="case-esac语句" tabindex="-1"><a class="header-anchor" href="#case-esac语句" aria-hidden="true">#</a> Case...Esac语句</h4><ul><li>多选择语句</li><li>右圆括号 <code>)</code> 开始</li><li>两个分号<code>;;</code> 结束表示 <code>break</code></li><li><h5 id="case-esac循环实例" tabindex="-1"><a class="header-anchor" href="#case-esac循环实例" aria-hidden="true">#</a> Case...Esac循环实例</h5></li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;输入数字:&#39;</span>
<span class="token comment"># 键盘输入</span>
<span class="token builtin class-name">read</span> aNum
<span class="token comment"># 判断</span>
<span class="token keyword">case</span> <span class="token variable">$aNum</span> <span class="token keyword">in</span>
    <span class="token number">1</span><span class="token punctuation">)</span>  <span class="token builtin class-name">echo</span> <span class="token string">&#39;你选择了 1&#39;</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token number">2</span><span class="token punctuation">)</span>  <span class="token builtin class-name">echo</span> <span class="token string">&#39;你选择了 2&#39;</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token number">3</span><span class="token punctuation">)</span>  <span class="token builtin class-name">echo</span> <span class="token string">&#39;你选择了 3&#39;</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token number">4</span><span class="token punctuation">)</span>  <span class="token builtin class-name">echo</span> <span class="token string">&#39;你选择了 4&#39;</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token comment"># 无匹配用 * 捕捉</span>
    *<span class="token punctuation">)</span>  <span class="token builtin class-name">echo</span> <span class="token string">&#39;你没有输入 1 到 4 之间的数字&#39;</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="跳出循环" tabindex="-1"><a class="header-anchor" href="#跳出循环" aria-hidden="true">#</a> 跳出循环</h4></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 跳出所有循环</span>
<span class="token builtin class-name">break</span>
<span class="token comment"># 跳出当前循环</span>
<span class="token builtin class-name">continue</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40),t=[i];function c(p,o){return n(),a("div",null,t)}const r=s(l,[["render",c],["__file","shell.html.vue"]]);export{r as default};

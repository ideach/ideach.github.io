import{_ as i,M as l,p as d,q as c,R as e,t as n,N as r,a1 as a}from"./framework-96b046e1.js";const t={},o=a(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h3 id="运行级别" tabindex="-1"><a class="header-anchor" href="#运行级别" aria-hidden="true">#</a> 运行级别</h3><div class="custom-container tip"><p class="custom-container-title">备注</p><p>此命令需要CentOS安装<code>GUI</code>界面</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 命令行模式</span>
init <span class="token number">3</span>

<span class="token comment"># 图形化模式</span>
init <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ssh连接错误" tabindex="-1"><a class="header-anchor" href="#ssh连接错误" aria-hidden="true">#</a> SSH连接错误</h3>`,5),v={class:"custom-container danger"},u=e("p",{class:"custom-container-title"},"备注",-1),m=e("code",null,"远程主机公钥发生改变",-1),h={href:"https://blog.csdn.net/qq_41884002/article/details/123358315",target:"_blank",rel:"noopener noreferrer"},p=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>:<span class="token operator">&lt;&lt;</span><span class="token string">EOF
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@ WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
EOF</span>

<span class="token comment"># 解决方式</span>
ssh-keygen <span class="token parameter variable">-R</span> IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下载apache软件错误" tabindex="-1"><a class="header-anchor" href="#下载apache软件错误" aria-hidden="true">#</a> 下载Apache软件错误</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 错误信息</span>
:<span class="token operator">&lt;&lt;</span><span class="token string">EOF
错误: 无法验证 dlcdn.apache.org 的由 “/C=US/O=Let&#39;s Encrypt/CN=R3” 颁发的证书:
   颁发的证书已经过期。
要以不安全的方式连接至 dlcdn.apache.org，使用“--no-check-certificate”。
EOF</span>

<span class="token comment"># 解决方式</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> ca-certificates
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常见配置文件格式" tabindex="-1"><a class="header-anchor" href="#常见配置文件格式" aria-hidden="true">#</a> 常见配置文件格式</h3><ul><li><h4 id="yaml格式" tabindex="-1"><a class="header-anchor" href="#yaml格式" aria-hidden="true">#</a> YAML格式</h4><ul><li>#代表注释</li><li>键值对使用:表示(:后面必须有空格)</li><li>数组使用-表示</li><li>缩进必须2个空格以上(相同级别对齐)</li><li>不可使用tab</li><li>区分大小写</li><li>跨行数据使用&gt;或者|(|会保留换行符)</li><li>文件名为*.yml *.yaml</li></ul></li></ul><div class="language-yarm line-numbers-mode" data-ext="yarm"><pre class="language-yarm"><code>---  #示例
时间: 2020-11-11    12:32:12
用户: root
信息: 
  - 文件: nginx.conf
  - 行号: 14
  - 错误编码: &quot;EX&quot;
警告信息: |
  信息
  信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function b(_,g){const s=l("ExternalLinkIcon");return d(),c("div",null,[o,e("div",v,[u,e("p",null,[n("此问题为"),m,n(", 参考"),e("a",h,[n("CSDN"),r(s)])])]),p])}const f=i(t,[["render",b],["__file","doubt.html.vue"]]);export{f as default};

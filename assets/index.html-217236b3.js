import{_ as s,o as n,c as a,a as e}from"./app-06cd0c15.js";const i={},l=e(`<h1 id="又tm忘了" tabindex="-1"><a class="header-anchor" href="#又tm忘了" aria-hidden="true">#</a> 又tm忘了</h1><p><strong>根据当前分支创建分支</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> branch-name
<span class="token comment"># 同时会切换到指定分支</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>克隆分支</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone <span class="token parameter variable">-b</span> branch-name git/https://address/repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>同步远端分支变化</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> fetch
<span class="token comment">#</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>
<span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>不能 ping 到 github 了</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ping</span> github.com
<span class="token comment"># 看能不能 ping 通，ping 的 id 是多少</span>
<span class="token function">ssh</span> <span class="token parameter variable">-Tv</span> github.com
<span class="token comment"># 网上找到 github.com 的对应解析地址</span>
<span class="token comment"># 去改 host</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>新机器配密钥</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 创建密钥
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;your_email@example.com&quot;</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-b</span> <span class="token number">4096</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;your_email@example.com&quot;</span>
// 查看配置
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--list</span>
// 修改邮箱和名称
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;youremail@example.com&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;Your Name&quot;</span>
// 将生成的公钥添加到 <span class="token function">git</span> 仓库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>SSH 问题</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh: connect to <span class="token function">host</span> github.com port <span class="token number">22</span>: Connection refused
fatal: Could not <span class="token builtin class-name">read</span> from remote repository.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>找到你的.ssh文件夹，创建或修改里面的config文件
添加如下内容：
Host github.com
    Hostname ssh.github.com
    Port 443
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),t=[l];function r(c,o){return n(),a("div",null,t)}const p=s(i,[["render",r],["__file","index.html.vue"]]);export{p as default};

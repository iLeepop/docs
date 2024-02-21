import{_ as n,o as s,c as a,a as e}from"./app-2b9bfd7e.js";const i={},t=e(`<h1 id="又tm忘了" tabindex="-1"><a class="header-anchor" href="#又tm忘了" aria-hidden="true">#</a> 又tm忘了</h1><p><strong>根据当前分支创建分支</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> branch-name
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[t];function l(d,r){return s(),a("div",null,c)}const p=n(i,[["render",l],["__file","index.html.vue"]]);export{p as default};

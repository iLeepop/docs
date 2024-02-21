import{_ as s,o as n,c as a,a as e}from"./app-2b9bfd7e.js";const i={},l=e(`<h1 id="忘了" tabindex="-1"><a class="header-anchor" href="#忘了" aria-hidden="true">#</a> 忘了</h1><p><strong>查看端口</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">lsof</span> <span class="token parameter variable">-i</span> <span class="token punctuation">[</span>port<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>查看系统架构</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dpkg --print-architecture
//
arch
//
<span class="token function">file</span> /lib/systemd/systemd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看64 || 32</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>getconf LONG_BIT
//
<span class="token function">file</span> /bin/ls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看版本信息</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lsb_release <span class="token parameter variable">-a</span>
//
<span class="token function">cat</span> /etc/issue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看内核版本</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /proc/version
//
<span class="token function">uname</span> <span class="token parameter variable">-a</span>
//
<span class="token function">uname</span> <span class="token parameter variable">-r</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看系统可用空间</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">df</span> <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),d=[l];function r(c,t){return n(),a("div",null,d)}const u=s(i,[["render",r],["__file","forgot.html.vue"]]);export{u as default};

import{_ as n,r as l,o as s,c as o,b as t,d as r,e as i,a as d}from"./app-5539d687.js";const g={},a=d('<h1 id="vi-vim" tabindex="-1"><a class="header-anchor" href="#vi-vim" aria-hidden="true">#</a> Vi/Vim</h1><p>所有的 Unix Like 系统都会内建 vi 文书编辑器，其他的文书编辑器则不一定会存在。</p><p>目前使用比较多的是 vim 编辑器。</p><p>vim 具有程序编辑的能力，可以主动的以字体颜色辨别语法的正确性，方便程序设计。</p><h2 id="什么是-vim" tabindex="-1"><a class="header-anchor" href="#什么是-vim" aria-hidden="true">#</a> 什么是 vim？</h2><p>Vim 是从 vi 发展出来的一个文本编辑器。代码补全、编译及错误跳转等方便编程的功能特别丰富，在程序员中被广泛使用。</p><p>vi 是老式的字处理器，不过功能很齐全，还有可以进步的地方。</p><p>vim 则是程序开发者的一项很好用的工具。</p>',8),f={href:"https://www.vim.org/",target:"_blank",rel:"noopener noreferrer"},x=d('<h2 id="vi-vim-的使用" tabindex="-1"><a class="header-anchor" href="#vi-vim-的使用" aria-hidden="true">#</a> vi/vim 的使用</h2><p>基本上 vi/vim 共分为三种模式：</p><ol><li>命令模式（Command Mode）</li><li>输入模式（Insert Mode）</li><li>命令行模式（Command-Line Mode）</li></ol><h3 id="命令模式" tabindex="-1"><a class="header-anchor" href="#命令模式" aria-hidden="true">#</a> 命令模式</h3><p><strong>启动 vi/vim，进入命令模式。</strong></p><p>此状态下敲击键盘动作会被 Vim 识别为命令，而非输入字符，比如我们此时按下 <strong>i</strong>，并不会输入一个字符，<strong>i</strong> 被当作了一个命令。</p><p>以下是普通模式常用的几个命令：</p><ul><li><strong>i</strong> ： 切换到输入模式，在光标当前位置开始输入文本</li><li><strong>x</strong> ： 删除当前光标所在处的字符</li><li><strong>:</strong> ： 切换到底线命令模式，以在最底一行输入命令</li><li><strong>a</strong> ： 进入插入模式，在光标下一个位置开始输入文本</li><li><strong>o</strong>：在当前行的下方插入一个新行，并进入插入模式</li><li><strong>O</strong> ： 在当前行的上方插入一个新行，并进入插入模式</li><li><strong>dd</strong> ： 删除当前行</li><li><strong>yy</strong> ： 复制当前行</li><li><strong>p</strong>（小写） ： 粘贴剪贴板内容到光标下方</li><li><strong>P</strong>（大写）： 粘贴剪贴板内容到光标上方</li><li><strong>u</strong> ： 撤销上一次操作</li><li><strong>Ctrl + r</strong> ： 重做上一次撤销的操作</li><li><strong>:w</strong> ： 保存文件</li><li><strong>:q</strong> ： 退出 Vim 编辑器</li><li><strong>:q!</strong> ： 强制退出 Vim 编辑器，不保存修改</li></ul><p>若想要编辑文本，只需要启动 Vim，进入了命令模式，按下 <strong>i</strong> 切换到输入模式即可。</p><p>命令模式只有一些最基本的命令，因此仍要依靠<strong>底线命令行模式</strong>输入更多命令。</p><h3 id="输入模式" tabindex="-1"><a class="header-anchor" href="#输入模式" aria-hidden="true">#</a> 输入模式</h3><p>在命令模式下按下 <strong>i</strong> 就进入了输入模式，使用 <strong>Esc</strong> 键可以返回到普通模式。</p><p>在输入模式中，可以使用以下按键：</p><ul><li><strong>字符按键以及 Shift 组合</strong>：输入字符</li><li><strong>ENTER</strong>：回车键，换行</li><li><strong>BACK SPACE</strong>：退格键，删除光标前一个字符</li><li><strong>DEL</strong>：删除键，删除光标后一个字符</li><li><strong>方向键</strong>：在文本中移动光标</li><li><strong>HOME</strong>/<strong>END</strong>：移动光标到行首/行尾</li><li><strong>Page Up</strong>/<strong>Page Down</strong>：上/下翻页</li><li><strong>Insert</strong>：切换光标为输入/替换模式，光标将变成竖线/下划线</li><li><strong>ESC</strong>：退出输入模式，切换到命令模式</li></ul><h3 id="底线命令模式" tabindex="-1"><a class="header-anchor" href="#底线命令模式" aria-hidden="true">#</a> 底线命令模式</h3><p>在命令模式下按下 <strong>:</strong>（英文冒号）就进入了底线命令模式。</p><p>底线命令模式可以输入单个或多个字符的命令，可用的命令非常多。</p><p>在底线命令模式中，基本的命令有（已经省略了冒号）：</p><ul><li><code>:w</code>：保存文件。</li><li><code>:q</code>：退出 Vim 编辑器。</li><li><code>:wq</code>：保存文件并退出 Vim 编辑器。</li><li><code>:q!</code>：强制退出 Vim 编辑器，不保存修改。</li></ul><p>按 <strong>ESC</strong> 键可随时退出底线命令模式。</p><hr><h2 id="vi-vim-按键说明" tabindex="-1"><a class="header-anchor" href="#vi-vim-按键说明" aria-hidden="true">#</a> vi/vim 按键说明</h2><p>除了简易的 <strong>i</strong>, <strong>Esc</strong>, <strong>:wq</strong> 之外， vim 还有非常多的按键可以使用。</p><h3 id="第一部分" tabindex="-1"><a class="header-anchor" href="#第一部分" aria-hidden="true">#</a> 第一部分</h3><p><strong>一般模式可用的光标移动、复制粘贴、搜索替换等</strong></p><table><thead><tr><th style="text-align:left;">移动光标的方法</th><th></th></tr></thead><tbody><tr><td style="text-align:left;">h 或 向左箭头键(←)</td><td>光标向左移动一个字符</td></tr><tr><td style="text-align:left;">j 或 向下箭头键(↓)</td><td>光标向下移动一个字符</td></tr><tr><td style="text-align:left;">k 或 向上箭头键(↑)</td><td>光标向上移动一个字符</td></tr><tr><td style="text-align:left;">l 或 向右箭头键(→)</td><td>光标向右移动一个字符</td></tr><tr><td style="text-align:left;">如果你将右手放在键盘上的话，你会发现 hjkl 是排列在一起的，因此可以使用这四个按钮来移动光标。 如果想要进行多次移动的话，例如向下移动 30 行，可以使用 &quot;30j&quot; 或 &quot;30↓&quot; 的组合按键， 亦即加上想要进行的次数(数字)后，按下动作即可</td><td></td></tr><tr><td style="text-align:left;">[Ctrl] + [f]</td><td>屏幕<strong>向下</strong>移动一页，相当于 [Page Down]按键 <strong>(常用)</strong></td></tr><tr><td style="text-align:left;">[Ctrl] + [b]</td><td>屏幕<strong>向上</strong>移动一页，相当于 [Page Up] 按键 <strong>(常用)</strong></td></tr><tr><td style="text-align:left;">[Ctrl] + [d]</td><td>屏幕<strong>向下</strong>移动半页</td></tr><tr><td style="text-align:left;">[Ctrl] + [u]</td><td>屏幕<strong>向上</strong>移动半页</td></tr><tr><td style="text-align:left;">+</td><td>光标移动到非空格符的下一行</td></tr><tr><td style="text-align:left;">-</td><td>光标移动到非空格符的上一行</td></tr><tr><td style="text-align:left;">n[space]</td><td>那个 n 表示<strong>数字</strong>，例如 20 。按下数字后再按空格键，光标会向右移动这一行的 n 个字符。例如 20[space] 则光标会向后面移动 20 个字符距离。</td></tr><tr><td style="text-align:left;">0 或功能键[Home]</td><td>这是数字<strong>0</strong>：移动到这一行的最前面字符处 <strong>(常用)</strong></td></tr><tr><td style="text-align:left;">$ 或功能键[End]</td><td>移动到这一行的最后面字符处**(常用)**</td></tr><tr><td style="text-align:left;">H</td><td>光标移动到这个屏幕的最上方那一行的第一个字符</td></tr><tr><td style="text-align:left;">M</td><td>光标移动到这个屏幕的中央那一行的第一个字符</td></tr><tr><td style="text-align:left;">L</td><td>光标移动到这个屏幕的最下方那一行的第一个字符</td></tr><tr><td style="text-align:left;">G</td><td>移动到这个档案的最后一行**(常用)**</td></tr><tr><td style="text-align:left;">nG</td><td>n 为数字。移动到这个档案的第 n 行。例如 20G 则会移动到这个档案的第 20 行(可配合 :set nu)</td></tr><tr><td style="text-align:left;">gg</td><td>移动到这个档案的第一行，相当于 1G 啊！ <strong>(常用)</strong></td></tr><tr><td style="text-align:left;">n[Enter]</td><td>n 为数字。光标向下移动 n 行**(常用)**</td></tr><tr><td style="text-align:left;">搜索替换</td><td></td></tr><tr><td style="text-align:left;">/word</td><td>向光标之下寻找一个名称为 word 的字符串。例如要在档案内搜寻 vbird 这个字符串，就输入 /vbird 即可！ <strong>(常用)</strong></td></tr><tr><td style="text-align:left;">?word</td><td>向光标之上寻找一个字符串名称为 word 的字符串。</td></tr><tr><td style="text-align:left;">n</td><td>这个 n 是英文按键。代表重复前一个搜寻的动作。举例来说， 如果刚刚我们执行 /vbird 去向下搜寻 vbird 这个字符串，则按下 n 后，会向下继续搜寻下一个名称为 vbird 的字符串。如果是执行 ?vbird 的话，那么按下 n 则会向上继续搜寻名称为 vbird 的字符串！</td></tr><tr><td style="text-align:left;">N</td><td>这个 N 是英文按键。与 n 刚好相反，为<strong>反向</strong>进行前一个搜寻动作。 例如 /vbird 后，按下 N 则表示<strong>向上</strong>搜寻 vbird 。</td></tr><tr><td style="text-align:left;">使用 /word 配合 n 及 N 是非常有帮助的,可以让你重复的找到一些你搜寻的关键词</td><td></td></tr><tr><td style="text-align:left;">:n1,n2s/word1/word2/g</td><td>n1 与 n2 为数字。在第 n1 与 n2 行之间寻找 word1 这个字符串，并将该字符串取代为 word2 ！举例来说，在 100 到 200 行之间搜寻 vbird 并取代为 VBIRD 则： <strong>:100,200s/vbird/VBIRD/g</strong>。<strong>(常用)</strong></td></tr><tr><td style="text-align:left;"><strong>:1,$s/word1/word2/g</strong> 或 <strong>:%s/word1/word2/g</strong></td><td>从第一行到最后一行寻找 word1 字符串，并将该字符串取代为 word2 ！<strong>(常用)</strong></td></tr><tr><td style="text-align:left;"><strong>:1,$s/word1/word2/gc</strong> 或 <strong>:%s/word1/word2/gc</strong></td><td>从第一行到最后一行寻找 word1 字符串，并将该字符串取代为 word2 ！且在取代前显示提示字符给用户确认 (confirm) 是否需要取代！<strong>(常用)</strong></td></tr><tr><td style="text-align:left;">删除、复制与贴上</td><td></td></tr><tr><td style="text-align:left;">x, X</td><td>在一行字当中，x 为向后删除一个字符 (相当于 [del] 按键)， X 为向前删除一个字符(相当于 [backspace] 亦即是退格键) <strong>(常用)</strong></td></tr><tr><td style="text-align:left;">nx</td><td>n 为数字，连续向后删除 n 个字符。举例来说，我要连续删除 10 个字符， <strong>10x</strong>。</td></tr><tr><td style="text-align:left;">dd</td><td>剪切游标所在的那一整行**(常用)**，用 p/P 可以粘贴。</td></tr><tr><td style="text-align:left;">ndd</td><td>n 为数字。剪切光标所在的向下 n 行，例如 20dd 则是剪切 20 行**(常用)**，用 p/P 可以粘贴。</td></tr><tr><td style="text-align:left;">d1G</td><td>删除光标所在到第一行的所有数据</td></tr><tr><td style="text-align:left;">dG</td><td>删除光标所在到最后一行的所有数据</td></tr><tr><td style="text-align:left;">d$</td><td>删除游标所在处，到该行的最后一个字符</td></tr><tr><td style="text-align:left;">d0</td><td>那个是数字的 0 ，删除游标所在处，到该行的最前面一个字符</td></tr><tr><td style="text-align:left;">yy</td><td>复制游标所在的那一行**(常用)**</td></tr><tr><td style="text-align:left;">nyy</td><td>n 为数字。复制光标所在的向下 n 行，例如 20yy 则是复制 20 行**(常用)**</td></tr><tr><td style="text-align:left;">y1G</td><td>复制游标所在行到第一行的所有数据</td></tr><tr><td style="text-align:left;">yG</td><td>复制游标所在行到最后一行的所有数据</td></tr><tr><td style="text-align:left;">y0</td><td>复制光标所在的那个字符到该行行首的所有数据</td></tr><tr><td style="text-align:left;">y$</td><td>复制光标所在的那个字符到该行行尾的所有数据</td></tr><tr><td style="text-align:left;">p, P</td><td>p 为将已复制的数据在光标下一行贴上，P 则为贴在游标上一行！ 举例来说，我目前光标在第 20 行，且已经复制了 10 行数据。则按下 p 后， 那 10 行数据会贴在原本的 20 行之后，亦即由 21 行开始贴。但如果是按下 P 呢？ 那么原本的第 20 行会被推到变成 30 行。 <strong>(常用)</strong></td></tr><tr><td style="text-align:left;">J</td><td>将光标所在行与下一行的数据结合成同一行</td></tr><tr><td style="text-align:left;">c</td><td>重复删除多个数据，例如向下删除 10 行，[ 10cj ]</td></tr><tr><td style="text-align:left;">u</td><td>复原前一个动作。<strong>(常用)</strong></td></tr><tr><td style="text-align:left;">[Ctrl]+r</td><td>重做上一个动作。<strong>(常用)</strong></td></tr><tr><td style="text-align:left;">这个 u 与 [Ctrl]+r 是很常用的指令！一个是复原，另一个则是重做一次～ 利用这两个功能按键，你的编辑，嘿嘿！很快乐的啦！</td><td></td></tr><tr><td style="text-align:left;">.</td><td>不要怀疑！这就是小数点！意思是重复前一个动作的意思。 如果你想要重复删除、重复贴上等等动作，按下小数点**.**就好了！ <strong>(常用)</strong></td></tr></tbody></table><h3 id="第二部分" tabindex="-1"><a class="header-anchor" href="#第二部分" aria-hidden="true">#</a> 第二部分</h3><p><strong>一般模式切换到编辑模式的可用的按钮说明</strong></p><table><thead><tr><th style="text-align:left;">进入输入或取代的编辑模式</th><th></th></tr></thead><tbody><tr><td style="text-align:left;">i, I</td><td>进入输入模式(Insert mode)： i 为<strong>从目前光标所在处输入</strong>， I 为<strong>在目前所在行的第一个非空格符处开始输入</strong>。 <strong>(常用)</strong></td></tr><tr><td style="text-align:left;">a, A</td><td>进入输入模式(Insert mode)： a 为<strong>从目前光标所在的下一个字符处开始输入</strong>， A 为<strong>从光标所在行的最后一个字符处开始输入</strong>。<strong>(常用)</strong></td></tr><tr><td style="text-align:left;">o, O</td><td>进入输入模式(Insert mode)： 这是英文字母 o 的大小写。o 为在目前光标所在的下一行处输入新的一行； O 为在目前光标所在的上一行处输入新的一行！<strong>(常用)</strong></td></tr><tr><td style="text-align:left;">r, R</td><td>进入取代模式(Replace mode)： r 只会取代光标所在的那一个字符一次；R 会一直取代光标所在的文字，直到按下 ESC 为止；<strong>(常用)</strong></td></tr><tr><td style="text-align:left;">上面这些按键中，在 vi 画面的左下角处会出现**：INSERT：<strong>或</strong>：REPLACE：**的字样。 由名称就知道该动作了吧！！特别注意的是，我们上面也提过了，你想要在档案里面输入字符时， 一定要在左下角处看到 INSERT 或 REPLACE 才能输入喔！</td><td></td></tr><tr><td style="text-align:left;">[Esc]</td><td>退出编辑模式，回到一般模式中**(常用)**</td></tr></tbody></table><h3 id="第三部分" tabindex="-1"><a class="header-anchor" href="#第三部分" aria-hidden="true">#</a> 第三部分</h3><p><strong>一般模式切换到指令行模式的可用的按钮说明</strong></p><table><thead><tr><th style="text-align:left;">指令行的储存、离开等指令</th><th></th></tr></thead><tbody><tr><td style="text-align:left;">:w</td><td>将编辑的数据写入硬盘档案中**(常用)**</td></tr><tr><td style="text-align:left;">:w!</td><td>若文件属性为<strong>只读</strong>时，强制写入该档案。不过，到底能不能写入， 还是跟你对该档案的档案权限有关啊！</td></tr><tr><td style="text-align:left;">:q</td><td>离开 vi <strong>(常用)</strong></td></tr><tr><td style="text-align:left;">:q!</td><td>若曾修改过档案，又不想储存，使用 ! 为强制离开不储存档案。</td></tr><tr><td style="text-align:left;">注意一下啊，那个惊叹号 (!) 在 vi 当中，常常具有<strong>强制</strong>的意思</td><td></td></tr><tr><td style="text-align:left;">:wq</td><td>储存后离开，若为 :wq! 则为强制储存后离开 <strong>(常用)</strong></td></tr><tr><td style="text-align:left;">ZZ</td><td>这是大写的 Z 喔！如果修改过，保存当前文件，然后退出！效果等同于**(保存并退出)**</td></tr><tr><td style="text-align:left;">ZQ</td><td>不保存，强制退出。效果等同于 <strong>:q!</strong>。</td></tr><tr><td style="text-align:left;">:w [filename]</td><td>将编辑的数据储存成另一个档案**（类似另存新档）**</td></tr><tr><td style="text-align:left;">:r [filename]</td><td>在编辑的数据中，读入另一个档案的数据。亦即将 <strong>filename</strong> 这个档案内容加到游标所在行后面</td></tr><tr><td style="text-align:left;">:n1,n2 w [filename]</td><td>将 n1 到 n2 的内容储存成 filename 这个档案。</td></tr><tr><td style="text-align:left;">:! command</td><td>暂时离开 vi 到指令行模式下执行 command 的显示结果！例如 <strong>:! ls /home</strong>即可在 vi 当中察看 /home 底下以 ls 输出的档案信息</td></tr><tr><td style="text-align:left;">vim 环境的变更</td><td></td></tr><tr><td style="text-align:left;">:set nu</td><td>显示行号，设定之后，会在每一行的前缀显示该行的行号</td></tr><tr><td style="text-align:left;">:set nonu</td><td>与 set nu 相反，为取消行号</td></tr></tbody></table><p>注意，在 vi/vim 中，数字是很有意义的，通常代表重复做几次的意思，也有可能是代表到第几个什么什么的意思。</p><p>例如，要删除 50 行，则是用 <strong>50dd</strong> ，数字加在动作之前，要向下移动 20 行，就是<strong>20j</strong>或者是<strong>20↓</strong>即可。</p>',34);function y(h,p){const e=l("ExternalLinkIcon");return s(),o("div",null,[a,t("p",null,[r("vim 的"),t("a",f,[r("官方网站"),i(e)])]),x])}const m=n(g,[["render",y],["__file","linuxViVim.html.vue"]]);export{m as default};
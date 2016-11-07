一、common  公共文件

1、common/js/common.js 所有项目都能共用的js库

2、app.js 合并项目相关的js

3、public 合并所有项目通用的js

二、project 项目目录文件

1、project/stylesheets  项目样式文件

三、sass/base    基础样式

1、sass/components  组件样式库

2、sass/helpers   样式助手

3、layout 布局样式

4、pages 页面样式

四、.gitignore  忽略文件

============================================================
前端规范
============================================================
1、每个方法、模块需加注释

2、HTML 属性顺序依次排列，确保代码的易读性,属性需要双引号，不要用单引号。
    class、id 、 name 、data-*、src、for、 type、 href

3、以外部文件的方式引入样式，样式放在头部，脚本放在尾部，尽量不要在html文件中写js和css代码

4、class 与 id 单词字母小写，多个单词组成时，采用中划线-分隔；
    .tab-item

5、disabled、checked、selected 等属性不用设置值
<!-- <input type="checkbox" value="1" checked> -->

6、正确使用 Display 的属性
    display: inline后不应该再使用 width、height、margin、padding 以及 float；
    display: inline-block 后不应该再使用 float；
    display: block 后不应该再使用 vertical-align；
    display: table-* 后不应该再使用 margin 或者 float；

7、不滥用 Float，Float在渲染时计算量比较大，尽量减少使用

8、能简写的代码，用简写，能链式的代码，尽量用链式，为0不带单位（widht:0）

9、多选择器规则之间换行
    a.btn,
    input.btn,
    input[type="button"] {

    }

10、禁止使用行内（inline）样式

11、驼峰命名方式
function funName() {}
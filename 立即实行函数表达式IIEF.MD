# 欢迎使用 Cmd Markdown 编辑阅读器

------

原文：[Immediately-Invoked Function Expression (IIFE)][1]
翻译：[立即执行函数表达式][2]

------

## 笔记
    问题主要在于编译器识别function(){}时会当作声明；
    那么让编译器将他识别为表达式才能够执行；

``
// 这两种写法都可以立即执行一个函数表达式，同时创建了一个私有作用域
(function(){ /* code */ }()); // Crockford 推荐这种写法
(function(){ /* code */ })(); // 但是这种也一样有效
// 由于括号或者强迫操作符用于让解释器可正确区分函数表达式与函数声明，所以在解释器可以正确区分的地方，括号就可以省略
// 不过请查看下面的重要说明
var i = function(){ return 10; }();
true && function(){ /* code */ }();
0, function(){ /* code */ }();
// 如果不在意函数的返回值或者不在意代码的可读性，使用一元操作符亦是有效的
!function(){ /* code */ }();
~function(){ /* code */ }();
-function(){ /* code */ }();
+function(){ /* code */ }();
// 以下是另外一种形式（@kuvos提供）。
new function(){ /* code */ }
new function(){ /* code */ }() // 括号仅在传参时需要
``


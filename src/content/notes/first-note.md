---
title: "md使用笔记"
description: "这是我的第一篇学习笔记。"
date: 2026-07-10
category: "markdown笔记"
tags: [ "Markdown", "个人网站"]
type: "md"
draft: false
---

## 我的第一篇笔记

## 更新流程
1. cd D:\hzy_blog
2. npm run dev
3. 新增或修改 src/content/notes 里的文章
4. npm run build
5. git add . / git commit -m "更新笔记" / git push
6. 去 GitHub Actions 看绿色对勾

## 代码示例

```javascript
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
```

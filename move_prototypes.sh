#!/bin/bash

# 创建临时目录
mkdir -p ../prototypes-temp

# 复制所有HTML、RP和RPLIB文件到临时目录
echo "正在移动文件..."
find projects -type f \( -name "*.html" -o -name "*.rp" -o -name "*.rplib" \) -exec cp {} ../prototypes-temp/ \;

# 显示移动的文件数量
echo "已移动文件："
find ../prototypes-temp -type f | wc -l

echo "原型文件已移动到 ../prototypes-temp 目录"
echo "请将这些文件复制到新的私有仓库中" 
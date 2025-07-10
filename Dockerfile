# 疑似アプリ用Dockerfile

# ベースイメージはnginxを利用
FROM public.ecr.aws/nginx/nginx:stable-perl

# テスト用HTML配置
COPY App/index.html /usr/share/nginx/html/index.html

# ポート80で待ち受け
EXPOSE 3000

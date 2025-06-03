# ベースイメージはnginxを利用
FROM nginx:alpine

# テスト用HTML配置
COPY ./index.html /usr/share/nginx/html/index.html

# ポート80で待ち受け
EXPOSE 80

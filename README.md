https://robert-j-wang.github.io/react_weather/


#### VITE自定义环境变量（密码，API-key等）
##### 1. 根目录下创建 .env文件
##### 2. 创建变量，注意：只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码
      WEATHER_API_KEY="cdf05d929ed5cfa526764c43d2b832d2"  无法读取
      必须以VITE_ 为前缀
      VITE_WEATHER_API_KEY="cdf05d929ed5cfa526764c43d2b832d2"

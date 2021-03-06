# CorsConfig

### 支持跨域

配置CoreFilter

```java
@Configuration
public class CorsConfig {


    @Bean
    public CorsFilter corsFilter() {
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        final CorsConfiguration config = new CorsConfiguration();

        config.setAllowCredentials(true);
        config.setAllowedOrigins(Arrays.asList("*")); //http:www.a.com
        config.setAllowedHeaders(Arrays.asList("*"));
        config.setAllowedMethods(Arrays.asList("*"));
        config.setMaxAge(300l);

        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
```

该配置类里注册了`CorsFilter`:

- `setAllowCredentials(true)`表示允许cookie跨域；
- `addAllowedHeader(Arrays.asList("*"))`表示请求头部允许携带任何内容；
- `addAllowedOrigin(Arrays.asList("*"))`表示允许任何来源；
- `addAllowedMethod(Arrays.asList("*"))`表示允许任何HTTP方法。

## 2. 拦截器版本

我们也可以卸载拦截器上

```

public class MyInterceptor implements HandlerInterceptor {



    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object o) throws Exception {
    
        return true;
    }


    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response,Object handler, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception e) throws Exception {
        String originHeader=request.getHeader("Origin");
        response.setHeader("Access-Control-Allow-Origin", originHeader);

    }
}

```


# 反向代理

**正向代理：** 平时需要访问国外的浏览器是不是很慢，比如看推特，看GitHub等等。直接用国内的服务器无法访问国外的服务器，或者是访问很慢。所以需要在本地搭建一个服务器来帮助访问。这种就是正向代理。（**浏览器中配置代理服务器**）

**反向代理：** 比如：访问淘宝的时候，淘宝内部肯定不是只有一台服务器，它的内部有很多台服务器，那进行访问的时候，因为服务器中间session不共享，那我们是不是在服务器之间访问需要频繁登录，那这个时候淘宝搭建一个过渡服务器，对我们是没有任何影响的，我们是登录一次，但是访问所有，这种情况就是 **反向代理**。对我们来说，客户端对代理是无感知的，客户端不需要任何配置就可以访问，只需要把请求发送给反向代理服务器，由反向代理服务器去选择目标服务器获取数据后，再返回给客户端，此时反向代理服务器和目标服务器对外就是一个服务器，暴露的是代理服务器地址，隐藏了真实服务器的地址。（**在服务器中配置代理服务器**）

## 免备案域名访问

得去买一个与国内政策不一样的服务器主机，做一个代理，代理到国内原本的服务器ip。
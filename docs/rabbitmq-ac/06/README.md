# RabbitMQ 配置

一般情况下，可以使用默认的配置。大多数情况下都可以不用修改配置。为了有效的利用 RabbitMQ，调节系统参数范围内的参数来达到定制化的需求

RabbitMQ 提供了三种方式来定制化服务：

1. 环境变量：Enviroment Variables

   RabbitMQ 服务端参数可以通过环境变量进行配置。

   例如：节点名称、RabbitMQ 配置文件地址、节点内部通信端口等

2. 配置文件：Configuration File

   可定义 RabbitMQ 服务和插件设置。

   例如：TCP 监听端口，以及其他网络相关的设置、内存限制、磁盘限制等

3. 运行时参数和策略：Runtime Parameters and Policies

   可以在运行时定义集群层面的服务设置

对于不同的操作系统和不同的 RabbitMQ 安装包，相应的配置会有所变化，包括配置文件地址等。需要注意下。




- [环境变量](./01.md)
- [配置文件](./02.md)
- [Web 参数及策略](./03.md)

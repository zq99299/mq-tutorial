# 客户端开放向导
RabbitMQ 客户端使用 `com.rabbitmq.client` 作为顶级包名，关键的 Class 和 Interface 有：

- Channel：AMQP 协议层面的操作通过 Channel 接口实现
- Connection：用来开启 Channel，可以出则事件处理器，也可以在应用结束时关闭连接
- ConnectionFactory
- Consumer 

等类。

与 RabbitMQ 相关的开发工作，基本上也是围绕 Connection 和 Channel 展开的。

本章按照一个完整的运转流程进行讲解，详细内容有：

- 连接
- 交换器/队列的创建与绑定
- 发送消息
- 消费消息
- 消费消息的确认和关闭连接

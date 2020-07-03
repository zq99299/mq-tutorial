(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{423:function(s,a,t){"use strict";t.r(a);var n=t(20),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"消费消息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#消费消息"}},[s._v("#")]),s._v(" 消费消息")]),s._v(" "),t("p",[s._v("RabbitMQ 消费模式分两种：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Push：推模式")]),s._v(" "),t("p",[s._v("采用 Basic.Consume 进行消费")])]),s._v(" "),t("li",[t("p",[s._v("Pull：拉模式")]),s._v(" "),t("p",[s._v("则使用 Basic.Get 进行消费")])])]),s._v(" "),t("h2",{attrs:{id:"推模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#推模式"}},[s._v("#")]),s._v(" 推模式")]),s._v(" "),t("p",[s._v("在推模式中，可以通过持续订阅的方式来消费消息，相关消费类如下：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("com.rabbitmq.client.DefaultConsumer")])]),s._v(" "),t("li",[t("code",[s._v("com.rabbitmq.client.Consumer")])])]),s._v(" "),t("p",[s._v("接收消息，一般实现 Consumer 接口，或则继承 DefaultConsumer 来实现。")]),s._v(" "),t("p",[s._v("推模式的关键代码如下")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" autoAck "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置客户端最多接收未被 ack 的消息个数")]),s._v("\nchannel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("basicQos")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nchannel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("basicConsume")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("QUEUE_NAME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" autoAck"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DefaultConsumer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("channel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("handleDelivery")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" consumerTag"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                               "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Envelope")]),s._v(" envelope"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                               AMQP"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BasicProperties")]),s._v(" properties"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                               "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("byte")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" body"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IOException")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" routingKey "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" envelope"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getRoutingKey")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" contentType "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" properties"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getContentType")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" deliveryTag "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" envelope"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getDeliveryTag")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 处理消息")]),s._v("\n        channel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("basicAck")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("deliveryTag"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("ul",[t("li",[s._v("consumerTag：不同的订阅有不同的标签")]),s._v(" "),t("li",[s._v("autoAck：在订阅队列时，设置了 false，在接收处理消息后，显示的 ack 操作。可以防止消息不必要的丢失")])]),s._v(" "),t("p",[s._v("basicConsume 的全参数说明如下")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("basicConsume")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" queue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" autoAck"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" consumerTag"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" noLocal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" exclusive"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Map")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" arguments"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Consumer")]),s._v(" callback"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IOException")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("queue：订阅的队列名称")]),s._v(" "),t("li",[s._v("autoAck：是否自动确认，建议设置成 false")]),s._v(" "),t("li",[s._v("consumerTag：消费者标签，用来区分多个消费者")]),s._v(" "),t("li",[s._v("noLocal：设置为 true，则表示不能将同一个 Connection 中生产者发送的消息传送给这个 Connection 中的消费者")]),s._v(" "),t("li",[s._v("exclusive：是否排他")]),s._v(" "),t("li",[s._v("arguments：消费者的其他参数")]),s._v(" "),t("li",[s._v("callback：回调函数。用来处理 RabbitMQ 推送过来的消息。")])]),s._v(" "),t("p",[s._v("实现回调函数时，重新 handleDelivery 方法，对客户端消费者来说很方便。更复杂的消费者客户端会重新更多的方法。")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("void handleConsumeOk(String consumerTag);")])]),s._v(" "),t("p",[s._v("会在其他方法之前调用，返回消费者标签")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("void handleCancelOk(String consumerTag);")])]),s._v(" "),t("p",[s._v("显示的取消一个消费者订阅时被调用，比如调用 "),t("code",[s._v("channel.basicCancel(consumerTag)")]),s._v("，该 basicCancel 方法，触发顺序是： handleConsumeOk、handleDelivery 、handleCancelOk")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("void handleCancel(String consumerTag) throws IOException;")])]),s._v(" "),t("p",[s._v("隐式的取消消费者订阅时调用。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("void handleShutdownSignal(String consumerTag, ShutdownSignalException sig);")])]),s._v(" "),t("p",[s._v("当 Channel 或则 Connection 关闭时调用")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("void handleRecoverOk(String consumerTag);")])])])]),s._v(" "),t("p",[s._v("和生产者一样，建议每个线程拥有自己的 Channel ，不要线程共享。业务是线程不安全的。")]),s._v(" "),t("h2",{attrs:{id:"拉模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拉模式"}},[s._v("#")]),s._v(" 拉模式")]),s._v(" "),t("p",[s._v("拉模式是通过以下方式主动获取消息，消费消息")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 同样还是 channel 类")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GetResponse")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("basicGet")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" queue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" autoAck"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IOException")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("queue：队列名称")]),s._v(" "),t("li",[s._v("autoAck：如果设置为 false，则需要调用  channel.basicAck 来确认消息被消费")])]),s._v(" "),t("p",[s._v("如下面的消费示例：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GetResponse")]),s._v(" response "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" channel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("basicGet")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("QUEUE_NAME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getBody")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nchannel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("basicAck")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getEnvelope")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getDeliveryTag")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("注意是：basicGet 是一次获取一条消息，而推模式可以通过  "),t("code",[s._v("channel.basicQos(3);")]),s._v(" 设置一次让服务器发送多少条消息。所以不要在循环中使用拉模式，这严重影响性能。")])])}),[],!1,null,null,null);a.default=e.exports}}]);
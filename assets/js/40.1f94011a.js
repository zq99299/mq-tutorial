(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{424:function(t,s,n){"use strict";n.r(s);var a=n(20),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"集群搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集群搭建"}},[t._v("#")]),t._v(" 集群搭建")]),t._v(" "),n("p",[t._v("单机问题就是不能高可用，吞吐量有瓶颈、存储有瓶颈。搭建集群才能解决这些")]),t._v(" "),n("p",[t._v("但是 RabbitMQ 集群不能保证消息的万无一失，当集群中一个 RabbitMQ 节点崩溃时，该节点上的所有队列中的消息也会丢失。RabbitMQ 集群中的所有节点都会备份所有的元数据信息，包括以下内容：")]),t._v(" "),n("ul",[n("li",[t._v("队列元数据：队列名称和属性")]),t._v(" "),n("li",[t._v("交换器元数据：交换器名称和属性")]),t._v(" "),n("li",[t._v("绑定关系元数据：交换器与队列或交换器与交换器之间的绑定关系")]),t._v(" "),n("li",[t._v("vhost 元数据：为 vhost 内的队列、交换器和绑定提供命名空间及安全属性")])]),t._v(" "),n("p",[t._v("但是不会备份消息（可以通过特殊的镜像队列解决这个问题）。")]),t._v(" "),n("p",[t._v("基于存储空间和性能的考虑， 在 RabbitMQ 集群中 "),n("strong",[t._v("创建队列")]),t._v("，集群只会在 "),n("strong",[t._v("单个节点")]),t._v(" 上创建队列的进程并包含完整的队列信息（元数据、状态、内容），这样只有 **队列的宿主节点 **知道队列的所有信息，"),n("strong",[t._v("其他节点只知道队列的元数据")]),t._v(" 和 "),n("strong",[t._v("指向该队列存在的那个节点的指针")]),t._v("。因此当集群节点崩溃时，该节点的队列进程和关联的绑定都会消失。订阅这个队列的上的消费者也会丢失所订阅的信息，并且任何匹配该队列绑定信息的新消息也会消失。")]),t._v(" "),n("p",[n("strong",[t._v("交换器")]),t._v(" 其实只是一个名称和绑定列表，当消息发布到交换器时，实际上是由 "),n("strong",[t._v("所连接的信道")]),t._v("  将 "),n("strong",[t._v("消息上的路由键同交换器的绑定列表进行比较")]),t._v("，然后再路由消息。当创建一个新的交换器时，RabbitMQ 要做的是 "),n("strong",[t._v("将绑定列表添加到集群中的所有节点上")]),t._v("，这样，每个节点的每条信道都可以访问到新的交换器了")]),t._v(" "),n("h2",{attrs:{id:"多机多节点配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#多机多节点配置"}},[t._v("#")]),t._v(" 多机多节点配置")]),t._v(" "),n("p",[t._v("每台机器上部署一个 RabbitMQ，组成的 RabbitMQ 集群。")]),t._v(" "),n("p",[t._v("由于 RabbitMQ 集群对延迟非常敏感，需要在局域网中组成集群，广域网集群可以使用 Federation 或则 Shovel 来代替。")]),t._v(" "),n("h3",{attrs:{id:"部署节规划："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署节规划："}},[t._v("#")]),t._v(" 部署节规划：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("名称")]),t._v(" "),n("th",[t._v("ip")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("node1")]),t._v(" "),n("td",[t._v("192.168.0.2")])]),t._v(" "),n("tr",[n("td",[t._v("node2")]),t._v(" "),n("td",[t._v("192.168.0.3")])]),t._v(" "),n("tr",[n("td",[t._v("node3")]),t._v(" "),n("td",[t._v("192.168.0.4")])])])]),t._v(" "),n("p",[t._v("在三台机器上安装好 RabbitMQ。然后修改各个节点的 "),n("code",[t._v("/etc/hosts")]),t._v(" 文件")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 让机器之间通过 hostname 访问")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/hosts\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".110.10 node1\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".110.12 node2\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".110.13 node3\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置每台机器的 hostname，用 hostname 命令")]),t._v("\nhostnamectl  set-hostname node1\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置每个节点上的 nodename，内容配置为上面设置的 hostname")]),t._v("\n/opt/rabbitmq/etc/rabbitmq/rabbitmq-env.conf\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 内容为对应的 hostname")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NODENAME")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("rabbit@node1\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改完成之后，重启机器让 hostname 生效")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br")])]),n("p",[t._v("编辑 RabbitMQ 的 cookie 文件，"),n("strong",[t._v("确保各个节点的 cookie 文件使用的是同一个值")]),t._v("。")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cookie 文件默认路径在：/var/lib/rabbitmq/.erlang.cookie")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或则在： $HOME/.erlang.cookie")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vim /root/.erlang.cookie")]),t._v("\nTGPVCOQIXBHWWDHUCJGP\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以用其中的一台上面的 cookie 复制到其他节点上")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[t._v("cookie 相当于密匙令牌，所以要一致。")]),t._v(" "),n("h3",{attrs:{id:"配置集群"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置集群"}},[t._v("#")]),t._v(" 配置集群")]),t._v(" "),n("p",[t._v("可以通过：")]),t._v(" "),n("ul",[n("li",[t._v("rabbitmqctl ：常用，本节讲解这种")]),t._v(" "),n("li",[t._v("rabbitmq.config 配置文件")])]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 先启动三个节点的 RabbitMQ 服务")]),t._v("\nrabbitmq-server -detached\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 目前这三个节点都是独立的单节点集群")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以查看他们的集群状态信息")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@study rabbitmq"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rabbitmqctl cluster_status")]),t._v("\nCluster status of node node1@node1\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("nodes,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("disc,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("node1@node1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("running_nodes,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("node1@node1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("cluster_name,"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node1@node1"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("partitions,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("alarms,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("node1@node1,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 然后以 node1 为基准，将其他两个节点加入到 node1 节点的集群中")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 加入要执行以下命令，在其他两个节点上执行")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 0. 要先打开每台机器上的 4369 端口，加入集群需要访问这个端口")]),t._v("\nfirewall-cmd --zone"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("public --add-port"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4369")]),t._v("/tcp --permanent\nfirewall-cmd --zone"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("public --add-port"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("25672")]),t._v("/tcp --permanent\nfirewall-cmd --reload\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. 停止 rabbitmq 应用")]),t._v("\nrabbitmqctl stop_app\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. 重置")]),t._v("\nrabbitmqctl reset\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3. 加入集群")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@node2 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rabbitmqctl join_cluster rabbit@node1")]),t._v("\nClustering node rabbit@node2 with rabbit@node1\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3. 启动 rabbitmq 应用")]),t._v("\nrabbitmqctl start_app\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 再次查看集群状态")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@node1 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rabbitmqctl cluster_status")]),t._v("\nCluster status of node rabbit@node1\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("nodes,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("disc,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rabbit@node1,rabbit@node2,rabbit@node3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("running_nodes,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rabbit@node2,rabbit@node3,rabbit@node1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("cluster_name,"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rabbit@node1"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("partitions,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("alarms,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rabbit@node2,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(","),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rabbit@node3,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(","),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rabbit@node1,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 发现已经加入进来了")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br")])]),n("h3",{attrs:{id:"关闭集群"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关闭集群"}},[t._v("#")]),t._v(" 关闭集群")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关闭 node2 节点的应用")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@node2 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rabbitmqctl stop_app")]),t._v("\nStopping rabbit application on node rabbit@node2\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 然后查看集群状态")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 会看到 running_nodes 中的确少了一个")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@node1 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rabbitmqctl cluster_status")]),t._v("\nCluster status of node rabbit@node1\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("nodes,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("disc,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rabbit@node1,rabbit@node2,rabbit@node3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("running_nodes,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rabbit@node3,rabbit@node1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("cluster_name,"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rabbit@node1"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("partitions,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("alarms,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rabbit@node3,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(","),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rabbit@node1,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])]),n("p",[t._v("如果关闭了集群中的所有节点，则需要确保 "),n("strong",[t._v("最后关闭的那个节点是第一个启动")]),t._v(" 的，如果不是最后关闭的节点被第一个启动，该节点会默认等待 30 秒（新版有重试机制，时间另算），等待最后一个节点的启动，等待不到，则自己启动失败。")]),t._v(" "),n("p",[t._v("如果因为最后一个节点启动不了，可以参考前一章节的集群管理命令，将这个节点踢出去，选择其他的节点启动。（也可以本章下一小节的内容）")]),t._v(" "),n("h2",{attrs:{id:"集群节点类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集群节点类型"}},[t._v("#")]),t._v(" 集群节点类型")]),t._v(" "),n("p",[t._v("查看集群状态信息时，会看到 "),n("code",[t._v("{nodes,[{disc,[rabbit@node1,rabbit@node2,rabbit@node3]}")]),t._v(" 的信息。其中  "),n("strong",[t._v("disc")]),t._v(" 就是 RabbitMQ 节点的类型。有两种类型：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("disc：磁盘节点")]),t._v(" "),n("p",[t._v("元数据保存在磁盘上")])]),t._v(" "),n("li",[n("p",[t._v("ram：内存节点")]),t._v(" "),n("p",[t._v("将所有的 队列、交换器、绑定关系、用户、权限和 vhost 的 "),n("strong",[t._v("元数据")]),t._v(" 都存储在内存中。")])])]),t._v(" "),n("p",[t._v("单节点的集群中，只能有磁盘类型的节点，否则重启 RabbitMQ 后，所有系统配置信息都会丢失。在集群节点中，可以选择配置部分节点为内存节点，可以获得更好的信息。")]),t._v(" "),n("p",[t._v("比如将 node2 加入节点时指定为内存节点")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 加入节点时指定 --ram 参数")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@node2 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rabbitmqctl join_cluster rabbit@node1 --ram")]),t._v("\nClustering node rabbit@node2 with rabbit@node1\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果已经加入了集群，则可以更改节点类型")]),t._v("\nrabbitmqctl change_cluster_node_type "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("disc,ram"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@node1 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rabbitmqctl cluster_status")]),t._v("\nCluster status of node rabbit@node1\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("nodes,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("disc,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rabbit@node1,rabbit@node3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(","),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ram,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rabbit@node2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("running_nodes,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rabbit@node3,rabbit@node1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("cluster_name,"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rabbit@node1"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("partitions,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("alarms,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rabbit@node3,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(","),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rabbit@node1,"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br")])]),n("p",[t._v("在集群中创建队列、交换器或则绑定关系时，这些操作直到 "),n("strong",[t._v("所有集群节点都成功提交元数据变更后才会返回")]),t._v("，这就意味着磁盘节点会耗费更多的时间，而内存节点将耗费更少的时间。")]),t._v(" "),n("ul",[n("li",[t._v("内存节点：提供出色的性能")]),t._v(" "),n("li",[t._v("磁盘节点：能保证集群配置信息的高可靠性")])]),t._v(" "),n("p",[t._v("RabbitMQ· 只要求在 "),n("strong",[t._v("集群中至少有一个磁盘节点")]),t._v("，当节点加入或则离开集群时，他们必须将变更通知到至少一个磁盘节点。如果 "),n("strong",[t._v("只有一个磁盘节点")]),t._v("，该节点 "),n("strong",[t._v("崩溃")]),t._v(" 的话，那么 "),n("strong",[t._v("将不能执行创建队列、交换器、绑定关系、用户、更改权限、添加或删除集群节点的操作了")]),t._v("，但是可以继续收发信息。")]),t._v(" "),n("p",[t._v("内存节点重启后，会连接到预先配置的磁盘节点，下载当前集群元数据的副本。当在集群中添加内存节点时，确保告知其所有的磁盘节点（"),n("strong",[t._v("内存节点唯一存储到磁盘的元数据信息是集群中磁盘节点的地址")]),t._v("），只要内存节点可以找到至少一个磁盘节点，那么它在重启后，就能重新加入集群")]),t._v(" "),n("h3",{attrs:{id:"如何选择磁盘节点类型？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何选择磁盘节点类型？"}},[t._v("#")]),t._v(" 如何选择磁盘节点类型？")]),t._v(" "),n("p",[t._v("如上所述，再看场景：只有在使用 RPC 功能时，创建队列、交换器绑定关系等的操作会很频繁，其他的场景都不频繁，所以建议都使用磁盘节点类型")]),t._v(" "),n("h2",{attrs:{id:"剔除单个节点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#剔除单个节点"}},[t._v("#")]),t._v(" 剔除单个节点")]),t._v(" "),n("p",[t._v("剔除单个节点有两种方式")]),t._v(" "),n("h3",{attrs:{id:"适合不再运行-rabbitmq-应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#适合不再运行-rabbitmq-应用"}},[t._v("#")]),t._v(" 适合不再运行 RabbitMQ 应用")]),t._v(" "),n("p",[t._v("当一个节点不再运行 RabbitMQ 应用时，可以使用如下命令。比如将 node2 剔除")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关闭 node2  ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@node2 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rabbitmqctl stop_app")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在其他节点上将 node2 踢出去")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@node1 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rabbitmqctl forget_cluster_node rabbit@node2")]),t._v("\nRemoving node rabbit@node2 from cluster\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("p",[t._v("这种操作方式之后， node2 节点就无法运行起来了。")]),t._v(" "),n("p",[t._v("这本书讲的太乱了。完全才堆砌功能，也不说场景？感觉特别乱")]),t._v(" "),n("p",[t._v("下面的由于无法前面强制剔除了 node2， node2 无法启动了，下面的实验也无法做下去了，只记录")]),t._v(" "),n("p",[t._v("前面提到过，当关闭集群最后一个节点，该节点无法启动时，可以通过 forget_cluster_node 命令将此节点剔除当前集群。比如，集群按照  node3、node2、node1 的顺序关闭，如果要启动集群，就要先启动 node1 节点。")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 按顺序关闭节点")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@node3 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rabbitmqctl stop")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@node2 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rabbitmqctl stop")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@node3 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rabbitmqctl stop")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果由于 node1 节点启动不起来了。")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以在 node2 上剔除 node1 节点")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里使用  -offline 是离线模式，由于 node2 启动不起来")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@node2 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rabbitmqctl forget_cluster_node rabbit@node1 -offline")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 然后启动")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@node2 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rabbitmq-server -detached")]),t._v("\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])]),n("h2",{attrs:{id:"第二种方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第二种方式"}},[t._v("#")]),t._v(" 第二种方式")]),t._v(" "),n("p",[t._v("就是在能启动的情况下，哪个节点要退出，就使用 reset 命令")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@node2 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rabbitmqctl stop_app")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@node2 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rabbitmqctl reset")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@node2 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rabbitmqctl start_app")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);
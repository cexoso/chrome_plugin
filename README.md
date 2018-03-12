在此文中本工具简称为：`mid`，与本工具通信的浏览器端称为`frontend`， 真实服务器称为`backend`。
# message event.data
在message事件中，data为接收到的发送消息。data结构中应包含[`type`(事件类型)](#事件类型type),[from,to](#双方),`data`(最终获取到的数据)
# 事件类型type: 

事件签名： `namespace/group/event` 其中namespace必须为`mingyuan`。

`group`为事件组,分别有: 
- [`controller`](#controller) 控制协议
- [`data`](#data) 数据协议

下文事件，如无特殊说明，均为简写。如：`alive`为`mingyuan/controller/alive`的简写。`alive:yes`为`mingyuan/controller/alive:yes`

# controller
控制协议分为:
- `alive`: 当mid收到这条消息是会返回`alive:yes`
- `online`: 当mid启动完成后会发布此条信息以示上线

# data
数据协议分为:
- `req:${id}`: 当mid收到了此消息，会使用`fetch(...paramers)`调用传递过来的`paramers`,并且将返回的结果通过`res:${id}`返回。
- `res:${id}`: `req:${id}`的返回值

*ps:id为请求的唯一标志符*

# 双方
from，to各至的值为枚举值 `mid`, `frontend`

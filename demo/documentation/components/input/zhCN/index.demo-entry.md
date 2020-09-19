# 文本输入 Input
很多年前，人们还在用打孔纸卡输入。

<n-alert title="注意" type="warning">`n-input` 是严格受控的组件，如果你不对 `input` 事件做任何响应，那么它的值永远不会改变。（v-model 并不会出问题，因为 v-model 只是受控用法的简写）</n-alert>
## 演示
```demo
basic
size
round
icon
password
disabled
clearable
autosize
pair
passively-activated
```
<!-- input-group -->

## V-model
|Prop|Event|
|-|-|
|modelValue|update:modelValue|

## Props
### Input Props
|名称|类型|默认值|说明|
|-|-|-|-|
|theme|`'light' \| 'dark' \| null \| string`|`null`||
|type|`'text' \| 'password' \| 'textarea'`|`'text'`||
|pair|`boolean`|`false`|是否输入成对的值|
|modelValue|`string \| [string, string]`|`null`|文本输入的值。如果是 `pair` 是 `true`，`modelValue` 是一个数组|
|disabled|`boolean`|`false`||
|size|`'small' \| 'medium' \| 'large'`|`'medium'`||
|rows|`number`|`3`||
|round|`boolean`|`false`||
|minlength|`number`|`null`||
|maxlength|`number`|`null`||
|clearable|`boolean`|`false`||
|autosize|`boolean \| { minRows?: number, maxRows?: number }`|`false`||
|readonly|`boolean`|`false`||
|separator|`string`|`null`|成对的值中间的分隔符|
|placeholder|`string \| [string, string]`|`null`|文本输入的占位符。如果是 `pair` 是 `true`，`placeholder`是一个数组|
|passively-activated|`boolean`|`false`||
|autofocus|`boolean`|`false`||


## Slots
### Input Slots
|属性|类型|说明|
|-|-|-|
|prefix|`()`||
|suffix|`()`||

### Input Group Slots
|属性|类型|说明|
|-|-|-|
|default|`()`||

### Input Group Label Slots
|属性|类型|说明|
|-|-|-|
|default|`()`||


## Events
### Input Events
|属性|类型|说明|
|-|-|-|
|update:modelValue|`(value: string \| [string, string])`||
|change|`(value: string \| [string, string])`||
|blur|`()`||
|focus|`()`||
|clear|`()`||
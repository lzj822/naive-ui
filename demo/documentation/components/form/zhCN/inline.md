# 行内表单
一个行内表单的例子。
```html
<n-form
  inline
  :label-width="80"
  :model="formValue"
  :rules="rules"
  ref="form"
>
  <n-form-item label="姓名" path="user.name">
    <n-input v-model="formValue.user.name" placeholder="输入姓名" />
  </n-form-item>
  <n-form-item label="年龄" path="user.age">
    <n-input placeholder="输入年龄" v-model="formValue.user.age"/>
  </n-form-item>
  <n-form-item label="电话号码" path="phone">
    <n-input placeholder="电话号码" v-model="formValue.phone"/>
  </n-form-item>
  <n-form-item v-model="formValue.phone">
    <n-button @click="handleValidateClick">验证</n-button>
  </n-form-item>
</n-form>

<pre>
{{  JSON.stringify(formValue, 0, 2) }}
</pre>
```
```js
export default {
  data () {
    return {
      formValue: {
        user: {
          name: '',
          age: ''
        },
        phone: ''
      },
      rules: {
        user: {
          name: {
            required: true,
            message: '请输入姓名',
            trigger: 'blur'
          },
          age: {
            required: true,
            message: '请输入年龄',
            trigger: ['input', 'blur']
          }
        },
        phone: {
          required: true,
          message: '请输入电话号码',
          trigger: ['input']
        }
      }
    }
  },
  methods: {
    handleValidateClick (e) {
      e.preventDefault()
      this.$refs.form.validate(errors => {
        if (!errors) {
          this.$NMessage.success('Valid')
        } else {
          console.log(errors)
          this.$NMessage.error('Invalid')
        }
      })
    }
  }
}
```